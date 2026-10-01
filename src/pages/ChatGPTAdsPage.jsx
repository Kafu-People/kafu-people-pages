import { Link } from "react-router-dom";
import {
  FaBullhorn,
  FaChartLine,
  FaChartBar,
  FaMagic,
} from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import PageHero from "../components/ui/PageHero";
import BookMeetingButton from "../components/ui/BookMeetingButton";

const WHAT_WE_DO = [
  {
    icon: <FaBullhorn />,
    title: "Campaign Strategy",
    description:
      "We define your campaign goals, target audience, and budget allocation, built around your product and your EU market opportunity.",
  },
  {
    icon: <FaMagic />,
    title: "Ad Creative & Copywriting",
    description:
      "We write and produce ad copy that meets OpenAI's policies and converts within the unique context of a conversational AI interface.",
  },
  {
    icon: <FaChartLine />,
    title: "Account Setup & Launch",
    description:
      "Full technical setup on OpenAI's advertiser platform: targeting configuration, bid strategy, and landing page alignment for policy compliance.",
  },
  {
    icon: <MdOutlineAnalytics />,
    title: "Ongoing Management",
    description:
      "Continuous monitoring, A/B testing, and bid adjustments to reduce cost-per-click and improve return on ad spend over time.",
  },
  {
    icon: <FaChartBar />,
    title: "Performance Reporting",
    description:
      "Clear, actionable reports on impressions, clicks, conversions, and ROAS, so you always know exactly what your budget is delivering.",
  },
];

export default function ChatGPTAdsPage() {
  const seo = PAGE_SEO.chatgptAds;

  return (
    <div>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />

      <PageHero
        height="min-h-[60vh]"
        overlay={false}
        align="center"
        className="bg-gradient-to-br from-slate-950 via-violet-800 to-slate-900"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          New service: ChatGPT Ads
        </p>
        <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Run Ads on ChatGPT
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          One of the first EU agencies running ChatGPT ad campaigns for brands.
          We handle strategy, creative, and full campaign management on
          OpenAI&apos;s ad platform, so you can reach your audience where they
          search, ask, and decide.
        </p>
        <BookMeetingButton buttonText="Book a Meeting" variant="secondary" />
      </PageHero>

      {/* What's involved */}
      <section className="bg-surface py-16 font-inter lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              What&apos;s included
            </p>
            <h2 className="mb-4 text-3xl font-bold text-cDarkBlue sm:text-4xl">
              End-to-end ChatGPT ad management
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              ChatGPT Ads is a brand-new channel. We take care of every step,
              from first setup to ongoing optimisation, so you can move fast
              without the learning curve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-xl text-violet-600">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-cDarkBlue">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now / positioning */}
      <section className="bg-slate-900 py-16 font-inter lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Why ChatGPT Ads
          </p>
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            A new channel, before it&apos;s crowded
          </h2>
          <p className="mb-6 text-base leading-relaxed text-white/80 sm:text-lg">
            OpenAI recently opened ChatGPT to paid advertising, giving brands
            the opportunity to reach users directly inside one of the
            world&apos;s fastest-growing AI platforms. As one of the first
            agencies in the EU to offer this service, Kafu People has the
            hands-on experience to get your campaigns live, compliant, and
            performing, while the channel is still new and competition for
            attention is low.
          </p>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            We are a remote-first product engineering team based in Purmerend,
            Netherlands, working with clients across Europe and beyond. ChatGPT
            Ads sit naturally alongside our existing AI and digital services,
            giving you a single partner for both building and promoting your
            product.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16 font-inter lg:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-8">
          <h2 className="mb-4 text-3xl font-bold text-cDarkBlue sm:text-4xl">
            Ready to advertise on ChatGPT?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted">
            Book a short call and we&apos;ll walk you through what ChatGPT Ads
            can do for your business, what a campaign typically costs, and how
            quickly we can get you live.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookMeetingButton buttonText="Book a Meeting" variant="primary" />
            <Link
              to="/services"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
