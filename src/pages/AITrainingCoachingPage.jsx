import { Link } from "react-router-dom";
import {
  FaGlobeAmericas,
  FaFlagUsa,
  FaClipboardCheck,
  FaBalanceScale,
  FaListUl,
  FaCode,
  FaChartLine,
  FaUserShield,
  FaBookOpen,
  FaVideo,
  FaComments,
} from "react-icons/fa";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO, SITE_URL } from "../config/seo";
import { FAQPageLD } from "../components/Schema";
import PageHero from "../components/ui/PageHero";
import { CALENDLY_URL } from "../constants/site";
import PricingSection from "../components/coaching/PricingSection";

const AUDIENCES = [
  {
    icon: <FaGlobeAmericas />,
    title: "Developers in Latin America",
    description:
      "You write solid code and your English is strong, but you are not sure how to stand out in platform applications or pass the assessments. We show you what reviewers look for and help you practice until it feels routine.",
  },
  {
    icon: <FaFlagUsa />,
    title: "Developers in the US",
    description:
      "You want flexible, remote work that uses your engineering skills. We help you prepare a strong application, get through the qualification steps faster, and build habits that keep your quality scores high.",
  },
];

// Platforms Kafu People has partnership agreements with. Logos come from each
// company's official site or brand kit; keep their original colors.
const PARTNERS = [
  // Per-logo sizing evens out the different aspect ratios.
  { name: "Surge AI", logo: "/images/partners/surge-ai.svg", url: "https://www.surgehq.ai/", logoClass: "h-9" },
  { name: "Scale AI", logo: "/images/partners/scale-ai.svg", url: "https://scale.com/", logoClass: "h-7" },
  { name: "Alignerr", logo: "/images/partners/alignerr.svg", url: "https://www.alignerr.com/", logoClass: "w-56 max-w-full" },
];

const CURRICULUM = [
  {
    icon: <FaClipboardCheck />,
    title: "Applications and assessments",
    description:
      "How AI training platforms screen applicants, how to present your background, and how to prepare for the skills tests that decide whether you get in.",
  },
  {
    icon: <FaBalanceScale />,
    title: "RLHF ranking and rationales",
    description:
      "Compare model responses with confidence and write clear, specific rationales that explain your ranking, the core skill behind most RLHF tasks.",
  },
  {
    icon: <FaListUl />,
    title: "Evaluation rubrics",
    description:
      "Read a rubric the way a reviewer does, apply it consistently, and flag correctness, safety, and instruction-following issues without overthinking.",
  },
  {
    icon: <FaCode />,
    title: "Coding tasks",
    description:
      "Write, review, and debug code to the standard platforms expect: tested, well explained, and scoped to exactly what the prompt asks for.",
  },
  {
    icon: <FaChartLine />,
    title: "Quality and consistency",
    description:
      "Build a repeatable workflow that keeps your quality scores high, so you stay eligible for more projects and better-paid task types.",
  },
  {
    icon: <FaUserShield />,
    title: "Staying in good standing",
    description:
      "Understand each platform's rules, from identity checks to confidentiality, and why you should always work only under your own account.",
  },
];

const FORMAT = [
  {
    icon: <FaBookOpen />,
    title: "Self-paced guide",
    description:
      "Start with a practical guide covering platforms, applications, and task types. Work through it on your own schedule.",
  },
  {
    icon: <FaVideo />,
    title: "Live sessions",
    description:
      "Join live group or private sessions with a coach to work through real assessment-style exercises and ask questions.",
  },
  {
    icon: <FaComments />,
    title: "Practice with feedback",
    description:
      "Submit practice tasks and get specific feedback on what to improve before you sit the real assessment.",
  },
];

const OUTCOMES = [
  "Submit a complete, well-presented application to the AI training platforms that fit your skills",
  "Approach RLHF, evaluation, and coding assessments with a clear method instead of guessing",
  "Write rationales and reviews that meet the quality bar platforms look for",
  "Keep a steady, high-quality workflow once you start receiving tasks",
  "Know each platform's rules so your own account stays in good standing",
];

const FAQS = [
  {
    question: "Do I apply and work under my own account?",
    answer:
      "Yes, always. You apply to each platform yourself, under your own name and your own account, and you do all the work yourself. We coach you; we never access, share, or manage platform accounts, and we never do tasks on your behalf.",
  },
  {
    question: "Do you guarantee I will be accepted onto a platform?",
    answer:
      "No. Acceptance, task availability, and pay are decided by each platform. We teach you how the process works and help you prepare as well as possible, but we cannot promise a result or any level of earnings.",
  },
  {
    question: "Do you partner with AI training platforms?",
    answer:
      "Yes. Kafu People partners with Surge AI, Scale AI, and Alignerr. Each platform still runs its own screening and makes its own acceptance decisions, and you always apply and work under your own account. We also prepare students for other platforms that we are not partnered with.",
  },
  {
    question: "Who is this program for?",
    answer:
      "Developers in Latin America and the United States who are comfortable writing code and working in English, and who want to do RLHF, evaluation, or coding work on AI training platforms.",
  },
  {
    question: "Why is the price different for Latin America?",
    answer:
      "We use regional pricing so the program is accessible to developers across Latin America. The content and coaching are the same in both regions. Choose the region where you live.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "You can get a full refund within 7 days of purchase as long as you have not attended a live session. The full refund and cancellation terms are in our Terms of Service.",
  },
  {
    question: "What happens after I pay?",
    answer:
      "You will receive a receipt from Stripe and a welcome email from us within one business day. You will also be asked to book a short onboarding call so we can plan your program.",
  },
];

function IconCard({ icon, title, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold text-cDarkBlue">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-bold text-cDarkBlue sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}

export default function AITrainingCoachingPage() {
  const seo = PAGE_SEO.aiTrainingCoaching;

  return (
    <div>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      >
        <script type="application/ld+json">
          {JSON.stringify(FAQPageLD(FAQS, `${SITE_URL}${seo.canonicalPath}#faq`))}
        </script>
      </PageSEO>

      <PageHero height="min-h-[60vh]" overlay={false} align="center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
          AI Training Coaching
        </p>
        <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Get accepted onto AI training platforms, and thrive there
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Coaching for developers in Latin America and the US who want to do
          RLHF, evaluation, and coding work for AI companies. Learn what
          reviewers look for, prepare for the assessments, and apply with
          confidence under your own account.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-dark"
          >
            See packages and pricing
          </a>
          <Link
            to="/contact"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-surface"
          >
            Ask us a question
          </Link>
        </div>
      </PageHero>

      {/* Who it's for */}
      <section className="bg-surface py-16 font-inter lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
          <SectionHeading eyebrow="Who it's for" title="Built for developers in the Americas">
            You already know how to code. We help you turn that into accepted
            applications and consistent, high-quality work on AI training
            platforms.
          </SectionHeading>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {AUDIENCES.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section
        aria-labelledby="partners-heading"
        className="border-t border-slate-100 bg-white py-12 font-inter lg:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Partners
          </p>
          <h2
            id="partners-heading"
            className="mb-8 text-2xl font-bold text-cDarkBlue sm:text-3xl"
          >
            Our AI training platform partners
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PARTNERS.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-24 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className={`${partner.logoClass} object-contain`}
                  />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Each platform runs its own screening and makes its own acceptance
            decisions. You always apply and work under your own account.
          </p>
        </div>
      </section>

      {/* What students learn */}
      <section className="bg-white py-16 font-inter lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
          <SectionHeading eyebrow="What you'll learn" title="The skills platforms screen for">
            A practical curriculum focused on the task types you will
            actually see: RLHF, evaluation, and coding.
          </SectionHeading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CURRICULUM.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Program format */}
      <section className="bg-surface py-16 font-inter lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
          <SectionHeading eyebrow="Program format" title="How the coaching works">
            Every package combines self-paced material with live coaching.
            The package you choose sets how much live time you get.
          </SectionHeading>
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FORMAT.map((item, index) => (
              <li key={item.title} className="relative">
                <span className="mb-3 block text-sm font-semibold text-primary">
                  Step {index + 1}
                </span>
                <IconCard {...item} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-slate-900 py-16 font-inter lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
              Outcomes
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What you will be able to do
            </h2>
          </div>
          <ul className="space-y-4">
            {OUTCOMES.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-800/60 p-4 text-base leading-relaxed text-white/90"
              >
                <FaClipboardCheck className="mt-1 shrink-0 text-accent-light" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm leading-relaxed text-white/70">
            Acceptance, task volume, and pay are decided by each platform. We
            prepare you as well as we can, but we do not guarantee placement or
            earnings.
          </p>
        </div>
      </section>

      <PricingSection />

      {/* FAQ */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-surface py-16 font-inter lg:py-24"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="text-3xl font-bold text-cDarkBlue sm:text-4xl"
            >
              Common questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white shadow-sm open:shadow-md"
              >
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-left text-base font-semibold text-cDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl leading-none text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Read the full{" "}
            <a
              href="/terms-of-service#coaching"
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              coaching terms
            </a>
            , including refunds and cancellations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 font-inter lg:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-8">
          <h2 className="mb-4 text-3xl font-bold text-cDarkBlue sm:text-4xl">
            Ready to start?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted">
            Pick the package that fits how you like to learn. Not sure which
            one? Book a short call and we will help you choose.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-dark"
            >
              View packages
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-surface"
            >
              Book a call
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link
              to="/services"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-primary transition hover:underline"
            >
              All services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
