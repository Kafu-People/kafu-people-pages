// AI Training Coaching pricing and Stripe Payment Links.
//
// To go live, paste the six real Stripe Payment Link URLs into PAYMENT_LINKS
// below. Nothing else needs to change. Set each link's "After payment"
// confirmation to redirect to https://kafupeople.com/enroll/success
//
// Until a link is replaced, its Enroll button renders disabled
// ("Enrollment opening soon"), so a deploy never sends buyers to a dead URL.
// Payment Links are public URLs, not secrets. Stripe keys never go here.

export const PAYMENT_LINKS = {
  starter: {
    us: "https://buy.stripe.com/REPLACE_ME_starter_us",
    latam: "https://buy.stripe.com/REPLACE_ME_starter_latam",
  },
  cohort: {
    us: "https://buy.stripe.com/REPLACE_ME_cohort_us",
    latam: "https://buy.stripe.com/REPLACE_ME_cohort_latam",
  },
  intensive: {
    us: "https://buy.stripe.com/REPLACE_ME_intensive_us",
    latam: "https://buy.stripe.com/REPLACE_ME_intensive_latam",
  },
};

export const isPaymentLinkReady = (url) =>
  typeof url === "string" &&
  url.startsWith("https://") &&
  !url.includes("REPLACE_ME");

export const PRICING_REGIONS = [
  { id: "us", label: "United States" },
  { id: "latam", label: "Latin America" },
];

export const PRICING_CURRENCY = "USD";

export const COACHING_PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Get your application right the first time.",
    prices: { us: 79, latam: 39 },
    features: [
      "Self-paced guide to AI training platforms",
      "Step-by-step application walkthrough",
      "One live assessment prep session",
    ],
  },
  {
    id: "cohort",
    name: "Cohort",
    tagline: "Learn with a group and get real feedback.",
    prices: { us: 349, latam: 169 },
    popular: true,
    features: [
      "4-week group program",
      "Weekly live sessions",
      "Assessment practice with feedback",
      "Student community",
    ],
  },
  {
    id: "intensive",
    name: "1:1 Intensive",
    tagline: "Private coaching built around your goals.",
    prices: { us: 599, latam: 299 },
    features: [
      "Four private 60-minute sessions",
      "Agenda built around your platforms and goals",
    ],
  },
];
