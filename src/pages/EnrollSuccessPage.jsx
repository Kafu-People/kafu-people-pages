import { Link } from "react-router-dom";
import { FaEnvelopeOpenText, FaCalendarCheck, FaUserCheck } from "react-icons/fa";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import PageHero from "../components/ui/PageHero";
import BookMeetingButton from "../components/ui/BookMeetingButton";
import { CALENDLY_URL, CONTACT_EMAIL } from "../constants/site";

export default function EnrollSuccessPage() {
  const seo = PAGE_SEO.enrollSuccess;

  return (
    <div>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSEO>

      <PageHero height="min-h-[45vh]" overlay={false} align="center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
          AI Training Coaching
        </p>
        <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">
          You&apos;re enrolled. Welcome aboard!
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Thank you for your payment. Here is what happens next.
        </p>
      </PageHero>

      <section className="bg-surface py-16 font-inter lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-8">
          <h2 className="sr-only">Next steps</h2>
          <ol className="space-y-6">
            <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary"
                aria-hidden="true"
              >
                <FaEnvelopeOpenText />
              </span>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-cDarkBlue">
                  1. Check your email
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  Stripe has sent your receipt. Within one business day you
                  will also get a welcome email from us with your program
                  materials and next steps. If you do not see it, check your
                  spam or promotions folder.
                </p>
              </div>
            </li>

            <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary"
                aria-hidden="true"
              >
                <FaCalendarCheck />
              </span>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-cDarkBlue">
                  2. Book your onboarding call
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted sm:text-base">
                  A short call to get to know you, review your background, and
                  plan your program. Please use the same email address you
                  paid with.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BookMeetingButton buttonText="Book onboarding call" variant="primary" />
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary underline-offset-2 hover:underline"
                  >
                    Open the booking page in a new tab
                  </a>
                </div>
              </div>
            </li>

            <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary"
                aria-hidden="true"
              >
                <FaUserCheck />
              </span>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-cDarkBlue">
                  3. Get ready
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  Have your CV or LinkedIn profile at hand, and note which AI
                  training platforms you are interested in. You will apply and
                  work under your own accounts, so create them yourself if you
                  have not already.
                </p>
              </div>
            </li>
          </ol>

          <div className="mt-10 text-center text-sm text-muted">
            <p>
              Questions about your enrollment? Email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <p className="mt-4">
              <Link
                to="/services/ai-training-coaching"
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                Back to AI Training Coaching
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
