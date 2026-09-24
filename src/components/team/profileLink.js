import { FaGlobe, FaLinkedin } from "react-icons/fa";

/**
 * The `linkedin` field on a team member is a general profile link: usually a
 * LinkedIn URL, sometimes a personal or company site. Placeholder entries use
 * "/" to mean "no link".
 */
export const hasProfileLink = (url) => Boolean(url) && url !== "/";

const isLinkedInUrl = (url) => {
  try {
    return /(^|\.)linkedin\.com$/i.test(new URL(url).hostname);
  } catch {
    return false;
  }
};

/**
 * Picks the icon and accessible label that match where the link actually goes,
 * so a non-LinkedIn URL never renders behind a LinkedIn badge.
 */
export const getProfileLink = (name, url) =>
  isLinkedInUrl(url)
    ? { Icon: FaLinkedin, label: `${name} on LinkedIn` }
    : { Icon: FaGlobe, label: `${name}'s website` };
