import { Link } from "react-router-dom";
const topics = [
  "Artificial Intelligence",
  "Cyber Security",
  "Internet of Things",
];

const TrainingPrograms = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 font-inter border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center px-4">
        <span className="inline-block rounded-full bg-accent/10 text-accent px-4 py-1 text-sm font-semibold mb-4">
          Coming soon
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Training programs
        </h2>
        <p className="text-muted text-base md:text-lg mb-6">
          We are preparing hands-on programs in AI, security, and IoT. In the
          meantime, book a call to discuss custom workshops or team upskilling for
          your organization.
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-8">
          {topics.map((topic) => (
            <li
              key={topic}
              className="rounded-lg border border-slate-200 bg-surface px-4 py-2 text-sm text-slate-700"
            >
              {topic}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition"
        >
          Get notified — contact us
        </Link>
      </div>
    </section>
  );
};

export default TrainingPrograms;
