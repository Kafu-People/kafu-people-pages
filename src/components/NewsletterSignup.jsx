import { useState } from "react";
import Swal from "sweetalert2";

const COPY = {
  title: "Stay in the loop",
  description:
    "Subscribe for product updates, insights on AI and cloud, and news from Kafu People.",
};

const STORAGE_KEY = "kafu-newsletter-demo-subscribers";

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const saveDemoSubscription = (email) => {
  const normalized = email.trim().toLowerCase();
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(existing)) return { isNew: true };
    if (existing.includes(normalized)) return { isNew: false };
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...existing, normalized]),
    );
    return { isNew: true };
  } catch {
    return { isNew: true };
  }
};

export function NewsletterSubscribeForm({ variant = "footer" }) {
  const [email, setEmail] = useState("");
  const isFooter = variant === "footer";

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (!isValidEmail(trimmed)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    const { isNew } = saveDemoSubscription(trimmed);

    Swal.fire({
      icon: "success",
      title: isNew ? "You're subscribed!" : "Already subscribed",
      text: isNew
        ? "Thanks for joining. Newsletter delivery is coming soon — this is a demo signup for now."
        : "This email is already on our list in this browser.",
      timer: 4500,
      showConfirmButton: false,
    });

    if (isNew) setEmail("");
  };

  const inputClassName = isFooter
    ? "min-w-0 w-full flex-1 px-3 py-2.5 text-sm border border-slate-200 bg-white text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
    : "flex-1 px-4 py-3 border border-slate-200 bg-white text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary";

  const buttonClassName = isFooter
    ? "w-full shrink-0 bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition whitespace-nowrap xl:w-auto"
    : "bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition whitespace-nowrap";

  const form = (
    <form
      onSubmit={handleSubmit}
      className={
        isFooter
          ? "flex w-full min-w-0 flex-col gap-2 xl:flex-row xl:items-stretch xl:gap-2"
          : "flex w-full flex-col items-stretch gap-3 sm:flex-row"
      }
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        required
        className={inputClassName}
        aria-label="Email for newsletter"
      />
      <button type="submit" className={buttonClassName}>
        Subscribe
      </button>
    </form>
  );

  if (isFooter) return form;

  return (
    <div className="w-full max-w-lg">
      <h3 className="mb-3 text-2xl font-bold text-slate-900">{COPY.title}</h3>
      <p className="mb-4 text-sm text-muted sm:text-base">{COPY.description}</p>
      {form}
    </div>
  );
}

/** Standalone section — prefer footer subscribe when Footer is shown. */
const NewsletterSignup = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-surface px-4 py-12 font-inter text-slate-900 sm:px-8 md:flex-row md:gap-12">
      <NewsletterSubscribeForm variant="section" />
    </section>
  );
};

export default NewsletterSignup;
