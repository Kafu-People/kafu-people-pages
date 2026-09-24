import { Link } from "react-router-dom";
const topics = [
  {
    label: "Artificial Intelligence",
    status: "live",
    href: "/services/ai-training-coaching",
  },
  { label: "Cyber Security", status: "soon" },
  { label: "Internet of Things", status: "soon" },
];

const TrainingPrograms = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 font-inter border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center px-4">
        <span className="inline-block rounded-full bg-accent/10 text-accent px-4 py-1 text-sm font-semibold mb-4">
          Now enrolling: AI
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Training programs
        </h2>
        <p className="text-muted text-base md:text-lg mb-6">
          Our AI Training Coaching program is open: we help developers in Latin
          America and the US get accepted onto AI training platforms and do
          great work there. Programs in security and IoT are coming soon.
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-8">
          {topics.map(({ label, status, href }) =>
            status === "live" ? (
              <li key={label}>
                <Link
                  to={href}
                  className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-accent/20"
                >
                  {label}
                  <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
                    Live
                  </span>
                </Link>
              </li>
            ) : (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-surface px-4 py-2 text-sm text-slate-700"
              >
                {label}
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-700">
                  Coming soon
                </span>
              </li>
            )
          )}
        </ul>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/services/ai-training-coaching"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition"
          >
            Explore AI Training Coaching
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-primary hover:underline"
          >
            Get notified about Security and IoT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
