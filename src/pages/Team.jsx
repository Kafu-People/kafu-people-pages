import { Link } from "react-router-dom";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import { PersonLD } from "../components/Schema";
import PageHero from "../components/ui/PageHero";
import TeamHumanCard from "../components/team/TeamHumanCard";
import TeamLeadershipCard from "../components/team/TeamLeadershipCard";
import teamHero from "../assets/images/aboutUs/Development.webp";
import { executives, teamMembers, collaborators } from "../data/team";
import { WHATSAPP_URL } from "../constants/site";

const Team = () => {
  const seo = PAGE_SEO.team;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      >
        {executives.map((member) => (
          <script key={member.name} type="application/ld+json">
            {JSON.stringify(PersonLD(member))}
          </script>
        ))}
      </PageSEO>

      <PageHero
        image={teamHero}
        imageAlt=""
        height="h-[55vh] lg:h-[70vh]"
        priority
        align="left"
        overlay={40}
        containerClassName="pt-8"
      >
        <h1 className="ml-2 text-left text-4xl font-bold text-cWhite sm:text-5xl md:text-6xl lg:ml-12">
          MEET THE TEAM
        </h1>
        <div className="lg:w-[700px] w-auto">
          <p className="mt-2 mx-2 text-lg text-cWhite sm:text-xl lg:ml-12 lg:text-left">
            We're a distributed, remote-first team of engineers, designers, and
            strategists who partner with founders and growing businesses to ship
            AI, cloud, and full-stack products — from idea to production.
          </p>
        </div>
      </PageHero>

      <section className="container mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-cDarkBlue">Leadership</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            The people setting direction and standards at Kafu People.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executives.map((member, index) => (
            <TeamLeadershipCard
              key={member.name}
              member={member}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-cDarkBlue">Our Experts</h2>
            <p className="mx-auto mt-2 max-w-2xl text-gray-600">
              The engineers and specialists who build and ship the work.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {teamMembers.map((member, index) => (
              <TeamHumanCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-cDarkBlue">
            Collaborators &amp; Partners
          </h2>
          <p className="mt-2 text-gray-600">
            Great work is rarely done alone. We're grateful to the partners and
            specialists we build alongside.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.map((c) => {
            const isExternal = c.url?.startsWith("http");
            const cardContent = (
              <>
                <h3 className="text-lg font-bold text-cDarkBlue">{c.name}</h3>
                <p className="mt-1 text-sm font-semibold text-CPurple">{c.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{c.note}</p>
                {c.url ? (
                  <p className="mt-4 text-sm font-semibold text-CPurple">
                    {isExternal ? "Visit live site →" : "Get in touch →"}
                  </p>
                ) : null}
              </>
            );
            const cardClass =
              "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-CPurple/30 hover:shadow-md";

            if (!c.url) {
              return (
                <div key={c.name} className={cardClass}>
                  {cardContent}
                </div>
              );
            }

            if (isExternal) {
              return (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClass} block`}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link key={c.name} to={c.url} className={`${cardClass} block`}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-center text-cWhite">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-200">
            Whether you're hiring a delivery partner or exploring a new product
            idea, we'd love to hear from you.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-CPurple px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Contact Us
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
