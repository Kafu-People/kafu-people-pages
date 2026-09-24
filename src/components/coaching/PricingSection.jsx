import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  COACHING_PACKAGES,
  PAYMENT_LINKS,
  PRICING_CURRENCY,
  PRICING_REGIONS,
  isPaymentLinkReady,
} from "../../config/pricing";

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: PRICING_CURRENCY,
    maximumFractionDigits: 0,
  }).format(amount);

export default function PricingSection() {
  const [region, setRegion] = useState(PRICING_REGIONS[0].id);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 bg-white py-16 font-inter lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="mb-4 text-3xl font-bold text-cDarkBlue sm:text-4xl"
          >
            Choose your package
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Regional pricing keeps the program accessible. Pick where you live
            to see your price. All prices are in {PRICING_CURRENCY} and paid
            once.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div
            role="group"
            aria-label="Pricing region"
            className="inline-flex rounded-xl border border-slate-200 bg-surface p-1"
          >
            {PRICING_REGIONS.map(({ id, label }) => {
              const active = region === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setRegion(id)}
                  className={`min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-6 ${
                    active
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-700 hover:text-primary"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {PRICING_REGIONS.find((r) => r.id === region)?.label} prices.
        </p>

        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {COACHING_PACKAGES.map((pkg) => {
            const url = PAYMENT_LINKS[pkg.id]?.[region];
            const ready = isPaymentLinkReady(url);
            return (
              <li
                key={pkg.id}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm sm:p-8 ${
                  pkg.popular
                    ? "border-primary ring-2 ring-primary lg:-translate-y-2 lg:shadow-lg"
                    : "border-slate-200"
                }`}
              >
                {pkg.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                ) : null}

                <h3 className="text-xl font-bold text-cDarkBlue">{pkg.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pkg.tagline}
                </p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-cDarkBlue">
                    {formatPrice(pkg.prices[region])}
                  </span>
                  <span className="text-sm text-muted">one-time</span>
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                      <FaCheck className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {ready ? (
                  <a
                    href={url}
                    rel="noopener"
                    className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      pkg.popular
                        ? "bg-primary text-white shadow-md hover:bg-primary-dark"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    Enroll in {pkg.name}
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="mt-8 inline-flex min-h-[44px] cursor-not-allowed items-center justify-center rounded-lg border-2 border-slate-200 px-6 py-3 text-sm font-semibold text-muted"
                  >
                    Enrollment opening soon
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-sm text-muted">
          Secure checkout by Stripe. Full refund within 7 days if you have not
          attended a live session. See our{" "}
          <a href="/terms-of-service#coaching" className="font-semibold text-primary underline-offset-2 hover:underline">
            coaching terms
          </a>
          .
        </p>
      </div>
    </section>
  );
}
