/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa";

/**
 * Responsive team member card. `variant="lead"` renders a larger leadership
 * card; the default renders the compact grid card.
 */
const TeamCard = ({ member, variant = "default" }) => {
  const isLead = variant === "lead";

  return (
    <div className="group flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-CPurple/20">
      <div
        className={`relative mb-4 overflow-hidden rounded-full ${
          isLead ? "h-32 w-32" : "h-24 w-24"
        }`}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-cDarkBlue">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-CPurple">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {member.description}
      </p>
      {member.linkedin && member.linkedin !== "/" && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="mt-4 inline-flex items-center text-xl text-cDarkBlue transition-colors hover:text-CPurple"
        >
          <FaLinkedin />
        </a>
      )}
    </div>
  );
};

export default TeamCard;
