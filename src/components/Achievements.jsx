import { HiOutlineCheck } from "react-icons/hi2";

const reasons = [
  {
    id: 1,
    title: "Structured delivery",
    description:
      "We scope work clearly, communicate progress often, and adapt when requirements shift — so you always know where your project stands.",
  },
  {
    id: 2,
    title: "Full-stack & cloud",
    description:
      "From React frontends to AWS backends, APIs, and databases — we build systems designed to run in production, not just demos.",
  },
  {
    id: 3,
    title: "AI that ships",
    description:
      "Agent workflows, integrations, and ML features grounded in your product goals — practical automation your team can maintain.",
  },
  {
    id: 4,
    title: "Clear communication",
    description:
      "Regular updates, honest timelines, and questions asked early — the kind of partnership our clients highlight in their reviews.",
  },
  {
    id: 5,
    title: "Quality you can review",
    description:
      "Clean, documented code and attention to detail on every engagement — from DEX tooling to enterprise migrations.",
  },
  {
    id: 6,
    title: "Client-first focus",
    description:
      "We align with your business outcomes: speed to market, maintainability, and solutions that fit how your team actually works.",
  },
];

const Achievements = () => {
  return (
    <section className="w-full bg-slate-950 py-16 font-inter text-cWhite px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">
        <div className="flex flex-col justify-center">
          <h2 className="mb-8 text-2xl font-bold leading-tight text-cWhite sm:text-3xl lg:mb-10 lg:text-4xl">
            Why choose us
          </h2>
          <img
              src="/images/choose.webp"
              alt="Team collaborating in a modern workspace"
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            decoding="async"
          />
        </div>

        <ul className="flex max-w-xl flex-col gap-7 sm:gap-8">
          {reasons.map(({ id, title, description }) => (
            <li key={id} className="flex gap-3 sm:gap-4">
              <HiOutlineCheck
                className="mt-1 shrink-0 text-xl text-primary-light sm:text-2xl"
                strokeWidth={2.5}
                aria-hidden
              />
              <div className="min-w-0">
                <h3 className="mb-1.5 text-base font-bold text-cWhite sm:text-lg">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
