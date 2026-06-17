import { Link } from "react-router-dom";
import BookMeetingButton from "../ui/BookMeetingButton";

export default function CaseStudyCTA({ liveUrl }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center sm:p-12">
      <h2 className="mb-3 text-2xl font-bold text-cWhite sm:text-3xl">
        Want to build something like this?
      </h2>
      <p className="mb-8 text-base italic leading-relaxed text-slate-200 sm:text-lg">
        Let&apos;s talk about your project — from concept to production, we
        partner with you every step of the way.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <BookMeetingButton buttonText="Book a Meeting" variant="secondary" />
        <Link
          to="/services"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-cWhite transition hover:bg-white/10"
        >
          Explore Our Services
        </Link>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-primary-light transition hover:underline"
          >
            Visit Live Site &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
