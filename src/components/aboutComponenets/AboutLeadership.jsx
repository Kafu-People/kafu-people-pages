import { Link } from "react-router-dom";
import TeamCard from "../team/TeamCard";
import { executives } from "../../data/team";

const AboutLeadership = () => {
  return (
    <section className="w-full px-4 py-16 font-inter lg:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <h4 className="mb-2 text-xl text-textGray">OUR LEADERSHIP</h4>
        <h2 className="text-3xl font-bold text-CPurple">
          Led by experienced engineers
        </h2>
        <p className="mt-4 text-textGray">
          Kafu People is a distributed, remote-first team. We bring together
          specialists across AI, cloud, security, and full-stack development —
          working as one team regardless of timezone, and as a seamless
          extension of yours.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {executives.map((member) => (
          <TeamCard key={member.name} member={member} variant="lead" />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/team"
          className="inline-block rounded-xl bg-CPurple px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Meet the Full Team
        </Link>
      </div>
    </section>
  );
};

export default AboutLeadership;
