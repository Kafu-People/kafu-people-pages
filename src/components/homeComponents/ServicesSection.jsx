import { Link } from "react-router-dom";
import {
  LuSparkles,
  LuRocket,
  LuCloud,
  LuCodeXml,
  LuMegaphone,
  LuGraduationCap,
  LuArrowRight,
} from "react-icons/lu";
import BookMeetingButton from "../ui/BookMeetingButton";
import { MdDoubleArrow } from "react-icons/md";
import { SERVICE_CATEGORIES } from "../../constants/serviceCategories";

// One outline icon family so every card reads at the same weight and size.
const HOME_ICONS = {
  ai: LuSparkles,
  rocket: LuRocket,
  cloud: LuCloud,
  web: LuCodeXml,
  ads: LuMegaphone,
  coaching: LuGraduationCap,
};

const ServicesSection = () => {
  return (
    <section className="bg-services-radial py-16 lg:py-24 font-inter text-cWhite">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cWhite">
          What we do
        </p>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Services</h2>
        <p className="mx-auto mb-12 max-w-2xl text-base text-cWhite/90">
          End-to-end support for teams that need to ship, from architecture and
          development to cloud and AI.
        </p>
        {/* Centered wrap: 3 + 2 on desktop, 2 per row on tablet, 1 on mobile. */}
        <ul className="flex flex-wrap justify-center gap-6">
          {SERVICE_CATEGORIES.map(({ title, summary, homeIcon, href }) => {
            const Icon = HOME_ICONS[homeIcon] ?? LuRocket;

            return (
              <li
                key={title}
                className="relative flex w-full flex-col rounded-2xl bg-cWhite/10 p-7 text-left ring-1 ring-cWhite/10 transition-all duration-300 focus-within:ring-2 focus-within:ring-cWhite hover:-translate-y-1 hover:bg-cWhite/[0.15] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <span
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cWhite/15"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6 text-cWhite" strokeWidth={1.75} />
                </span>
                <h3 className="mb-2 text-xl font-bold leading-snug text-cWhite">
                  {href ? (
                    // Stretched link: the whole card is clickable.
                    <Link
                      to={href}
                      className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none"
                    >
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </h3>
                <p className="text-sm leading-relaxed text-cWhite/85">
                  {summary}
                </p>
                {href ? (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cWhite">
                    See the program
                    <LuArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                ) : null}
              </li>
            );
          })}
        </ul>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BookMeetingButton buttonText="Book a Meeting" variant="secondary" />
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-lg border-2 border-cWhite px-6 py-3 text-sm font-semibold text-cWhite transition hover:bg-cWhite hover:text-primary"
          >
            All Services <MdDoubleArrow size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
