import { Link } from "react-router-dom";
import { LuBrainCircuit, LuShieldCheck, LuCpu, LuArrowRight } from "react-icons/lu";

const programs = [
  {
    title: "AI Training Coaching",
    topic: "Artificial Intelligence",
    description:
      "Get accepted onto AI training platforms and do great work on RLHF, evaluation, and coding tasks.",
    href: "/services/ai-training-coaching",
    Icon: LuBrainCircuit,
  },
  { title: "Cyber Security", topic: "Cyber Security", Icon: LuShieldCheck },
  { title: "Internet of Things", topic: "Internet of Things", Icon: LuCpu },
];

const TrainingPrograms = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 font-inter border-t border-slate-100">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Training programs
          </h2>
          <p className="text-muted text-base md:text-lg">
            Hands-on programs for developers. AI Training Coaching is open now;
            security and IoT programs are coming soon.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map(({ title, topic, description, href, Icon }) =>
            href ? (
              <li
                key={title}
                className="flex flex-col rounded-2xl border-2 border-primary bg-white p-6 text-left shadow-md"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    Open now
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {topic}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {description}
                </p>
                <Link
                  to={href}
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  See the program
                  <LuArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ) : (
              <li
                key={title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-surface p-6 text-left"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-slate-700"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                    Coming soon
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  A hands-on program for developers. Details coming soon.
                </p>
              </li>
            )
          )}
        </ul>

        <p className="mt-8 text-center text-sm text-muted">
          Want to hear when security and IoT open?{" "}
          <Link
            to="/contact"
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            Get notified
          </Link>
        </p>
      </div>
    </section>
  );
};

export default TrainingPrograms;
