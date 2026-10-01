/**
 * Stripe webhook for the kafupeople.com Worker: POST /api/stripe-webhook
 * Routed from worker/index.js (this site deploys as a Worker, not Pages).
 *
 * Handles Stripe Payment Link / Checkout payments for Kafu People
 * AI Training Coaching:
 *   1. Verifies the Stripe signature (async, Workers-compatible)
 *   2. Saves the enrollment to D1 (idempotent on the session id)
 *   3. Sends the onboarding email (Resend) and a Slack notification
 */
import Stripe from "stripe";

interface Env {
  DB: D1Database;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  RESEND_API_KEY: string;
  SLACK_WEBHOOK_URL: string;
  FROM_EMAIL: string; // e.g. "Kafu People <training@kafupeople.com>"
  ONBOARDING_URL: string; // scheduling or intake link sent to new students
}

const HANDLED = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
]);

interface WebhookContext {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
}

export const onRequestPost = async (context: WebhookContext): Promise<Response> => {
  const { request, env } = context;

  // 1. Verify signature. Must use the raw body and the async variant on Workers.
  const signature = request.headers.get("stripe-signature");
  if (!signature) return new Response("Missing signature", { status: 400 });

  // Without these secrets the Stripe client throws. Return 503 so Stripe
  // retries the event later instead of the Worker crashing.
  if (!env.STRIPE_SECRET_KEY || !env.STRIPE_WEBHOOK_SECRET) {
    console.error("Stripe webhook is not configured: missing Stripe secrets");
    return new Response("Webhook not configured", { status: 503 });
  }

  const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
    httpClient: Stripe.createFetchHttpClient(),
  });

  const body = await request.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET,
      undefined,
      Stripe.createSubtleCryptoProvider()
    );
  } catch (err) {
    console.error("Signature verification failed", err);
    return new Response("Invalid signature", { status: 400 });
  }

  if (!HANDLED.has(event.type)) {
    return new Response("Ignored", { status: 200 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Delayed payment methods fire "completed" before the money arrives.
  if (session.payment_status !== "paid") {
    return new Response("Awaiting payment", { status: 200 });
  }

  // 2. Work out which package was bought.
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    limit: 5,
  });
  const item = lineItems.data[0];
  const packageName = item?.description ?? "AI Training Coaching";
  const priceId = item?.price?.id ?? null;

  const email = session.customer_details?.email ?? null;
  const name = session.customer_details?.name ?? null;
  const country = session.customer_details?.address?.country ?? null;
  const amount = (session.amount_total ?? 0) / 100;
  const currency = (session.currency ?? "usd").toUpperCase();

  // 3. Save enrollment. INSERT OR IGNORE makes Stripe retries harmless.
  const result = await env.DB.prepare(
    `INSERT OR IGNORE INTO enrollments
       (stripe_session_id, email, name, country, package, price_id, amount, currency, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'paid')`
  )
    .bind(session.id, email, name, country, packageName, priceId, amount, currency)
    .run();

  const isNew = (result.meta?.changes ?? 0) > 0;

  // 4. Notifications only on the first delivery, after responding to Stripe.
  if (isNew) {
    context.waitUntil(
      Promise.allSettled([
        email ? sendOnboardingEmail(env, email, name, packageName) : Promise.resolve(),
        notifySlack(env, { name, email, country, packageName, amount, currency }),
      ]).then((results) =>
        results.forEach((r) => r.status === "rejected" && console.error(r.reason))
      )
    );
  }

  return new Response("OK", { status: 200 });
};

async function sendOnboardingEmail(
  env: Env,
  to: string,
  name: string | null,
  packageName: string
): Promise<void> {
  const firstName = name?.split(" ")[0] ?? "there";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to,
      subject: "Welcome to Kafu People AI Training Coaching",
      html: `
        <p>Hi ${escapeHtml(firstName)},</p>
        <p>Thanks for enrolling in <strong>${escapeHtml(packageName)}</strong>.</p>
        <p>Next step: book your onboarding call here:
           <a href="${env.ONBOARDING_URL}">${env.ONBOARDING_URL}</a></p>
        <p>See you soon,<br/>The Kafu People team</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend failed: ${res.status} ${await res.text()}`);
}

async function notifySlack(
  env: Env,
  e: {
    name: string | null;
    email: string | null;
    country: string | null;
    packageName: string;
    amount: number;
    currency: string;
  }
): Promise<void> {
  const res = await fetch(env.SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `New enrollment: ${e.name ?? "Unknown"} (${e.email ?? "no email"}, ${
        e.country ?? "?"
      }) bought ${e.packageName} for ${e.amount.toFixed(2)} ${e.currency}`,
    }),
  });
  if (!res.ok) throw new Error(`Slack failed: ${res.status}`);
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}
