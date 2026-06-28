/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import TeamAvatar from "./TeamAvatar";

const hasLinkedIn = (url) => url && url !== "/";

/** Fixed overlay grid — every card shares the same text band height and slot positions. */
const NAME_HEIGHT = "h-[2.75rem]";
const ROLE_HEIGHT = "h-[3.75rem]";
const OVERLAY_HEIGHT = "h-[7.375rem]";
const BIO_PREVIEW_HEIGHT = "h-[3.75rem]";

const TeamLeadershipCard = ({ member, index = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.2) }}
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition-shadow hover:shadow-lg hover:shadow-CPurple/10"
    >
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-slate-200">
        <TeamAvatar
          name={member.name}
          image={member.image}
          portrait
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        {hasLinkedIn(member.linkedin) && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-lg text-cDarkBlue shadow-md transition hover:bg-CPurple hover:text-white"
          >
            <FaLinkedin />
          </a>
        )}

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 ${OVERLAY_HEIGHT} bg-gradient-to-t from-black/90 via-black/45 to-transparent`}
          aria-hidden
        />

        <div
          className={`absolute inset-x-0 bottom-0 z-10 flex ${OVERLAY_HEIGHT} flex-col justify-end px-3 pb-3 text-left`}
        >
          <h3
            className={`${NAME_HEIGHT} mb-1 flex shrink-0 flex-col justify-end overflow-hidden`}
          >
            <span className="line-clamp-2 text-base font-bold leading-5 text-white">
              {member.name}
            </span>
          </h3>
          <p
            className={`${ROLE_HEIGHT} flex shrink-0 flex-col justify-start overflow-hidden`}
          >
            <span className="line-clamp-3 text-xs font-medium leading-5 text-white/85 sm:text-sm">
              {member.role}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 py-4">
        <p
          className={`text-sm leading-5 text-gray-600 ${
            expanded ? "" : `${BIO_PREVIEW_HEIGHT} line-clamp-3 overflow-hidden`
          }`}
        >
          {member.description}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="mt-auto pt-3 text-sm font-semibold text-CPurple transition hover:text-cDarkBlue focus:outline-none focus-visible:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </motion.article>
  );
};

export default TeamLeadershipCard;
