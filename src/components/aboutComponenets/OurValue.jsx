import {
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";

const values = [
  {
    title: "Reliability",
    description:
      "We build maintainable, secure, and scalable systems businesses can trust long-term.",
    Icon: HiOutlineShieldCheck,
  },
  {
    title: "Collaboration",
    description:
      "We work closely with clients and partners to turn ideas into real products through open communication and shared ownership.",
    Icon: HiOutlineUserGroup,
  },
  {
    title: "Innovation",
    description:
      "We combine modern engineering with practical AI-driven solutions to solve real problems and create meaningful impact.",
    Icon: HiOutlineLightBulb,
  },
  {
    title: "Excellence",
    description:
      "We focus on craftsmanship, clarity, and continuous improvement in everything we build.",
    Icon: HiOutlineStar,
  },
  {
    title: "Ownership",
    description:
      "We take responsibility from architecture to deployment and delivery—treating every project as our own.",
    Icon: TbTargetArrow,
  },
];

const OurValue = () => {
  return (
    <section className="bg-white px-4 py-16 lg:py-24 font-inter sm:px-8 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            OUR CORE VALUES
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold leading-snug text-slate-900 sm:text-3xl lg:text-4xl">
            Principles that guide how we work and deliver impact.
          </h2>
          <span
            className="mx-auto mt-5 block h-0.5 w-12 rounded-full bg-primary"
            aria-hidden
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <div className="flex min-h-[220px] flex-col justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 sm:min-h-[240px] sm:p-8">
            <h3 className="text-2xl font-bold leading-[1.15] text-cWhite sm:text-3xl lg:text-4xl">
              Our
              <br />
              core
              <br />
              values
            </h3>
          </div>

          {values.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="flex min-h-[220px] flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:min-h-[240px] sm:p-8"
            >
              <Icon
                className="mb-4 text-3xl text-primary"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValue;
