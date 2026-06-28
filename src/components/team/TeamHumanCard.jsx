/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import TeamAvatar from "./TeamAvatar";

const hasLinkedIn = (url) => url && url !== "/";

const TeamHumanCard = ({ member, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.24) }}
    className="group flex flex-col items-center text-center"
  >
    <div className="relative mb-4 transition-transform duration-300 group-hover:scale-105">
      <div className="rounded-full p-1 ring-2 ring-transparent transition-all duration-300 group-hover:ring-CPurple/40 group-hover:shadow-lg group-hover:shadow-CPurple/20">
        <TeamAvatar
          name={member.name}
          image={member.image}
          size="2xl"
          className="h-36 w-36 sm:h-40 sm:w-40"
        />
      </div>
      {hasLinkedIn(member.linkedin) && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-CPurple text-lg text-white shadow-md transition hover:scale-110 hover:bg-cDarkBlue"
        >
          <FaLinkedin />
        </a>
      )}
    </div>
    <h3 className="text-base font-bold leading-snug text-cDarkBlue sm:text-lg">
      {member.name}
    </h3>
    <p className="mt-1 text-sm font-medium text-CPurple">{member.role}</p>
  </motion.div>
);

export default TeamHumanCard;
