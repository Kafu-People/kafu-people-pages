import { Link } from "react-router-dom";
import { executives, teamMembers } from "../../data/team";

// Show a small set of faces as a teaser that links to the full team page.
const preview = [...executives, ...teamMembers].slice(0, 6);

const HomeTeamCTA = () => {
  return (
    <section className="bg-gray-50 py-16 font-inter">
      <div className="container mx-auto flex flex-col items-center gap-10 px-6 lg:flex-row lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <h4 className="mb-2 text-xl text-textGray">MEET OUR TEAM</h4>
          <h2 className="text-3xl font-bold text-CPurple">
            The people behind the work
          </h2>
          <p className="mt-3 text-textGray">
            We're a distributed, remote-first team of engineers, designers, and
            strategists. Get to know the people who'll be building alongside you.
          </p>
          <Link
            to="/team"
            className="mt-6 inline-block rounded-xl bg-CPurple px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Meet the Team
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {preview.map((member) => (
            <div key={member.name} className="w-28 text-center">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="mx-auto h-20 w-20 rounded-full object-cover shadow-md"
              />
              <p className="mt-2 text-sm font-semibold text-cDarkBlue">
                {member.name}
              </p>
              <p className="text-xs text-CPurple">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTeamCTA;
