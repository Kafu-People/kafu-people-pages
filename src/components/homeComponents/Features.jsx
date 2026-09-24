import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

const cards = [
  {
    id: 1,
    icon: <AiFillProduct />,
    title: "Our Products",
    description:
      "Explore SaaS tools, dashboards, and integrations we have built for startups and teams, from MVPs to production systems.",
    cta: "View Portfolio",
    link: "/portfolio",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: "Our Services",
    description:
      "AI workflows, cloud architecture, and full-stack development tailored to your stage, with clear scope, communication, and delivery.",
    cta: "Explore Services",
    link: "/services",
  },
];

const Features = () => {
  return (
    <section className="bg-primary text-cWhite py-12 px-4 sm:py-16 sm:px-8 lg:px-32 font-inter">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={card.link}
            className="bg-cWhite text-slate-900 rounded-xl w-full shadow-lg py-6 px-8 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between min-h-[320px] no-underline border border-slate-100"
          >
            <div>
              <div className="text-4xl sm:text-5xl mb-4 text-primary flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{card.title}</h3>
              <p className="text-sm sm:text-base text-muted">{card.description}</p>
            </div>
            <div className="text-primary mt-6 text-sm font-bold flex items-center justify-center gap-2">
              {card.cta} <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
