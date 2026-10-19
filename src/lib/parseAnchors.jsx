/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getStaticBlogBySlug } from "../data/blogs";
import { getNewsBySlug } from "../data/news";

// Turns <a href="...">label</a> in plain article text into links: internal
// paths use the router, external URLs open in a new tab. Links to a post that
// is not published yet render as plain text until its publish date.
const ANCHOR_RE = /<a href="([^"]+)">([^<]*)<\/a>/g;

const linkClass = "font-medium text-CPurple hover:underline";

function isUnpublishedPostLink(href) {
  const [, section, slug] = href.match(/^\/(blogs|news)\/([^/?#]+)/) || [];
  if (!slug) return false;
  return section === "blogs" ? !getStaticBlogBySlug(slug) : !getNewsBySlug(slug);
}

export function parseAnchors(text) {
  const parts = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(ANCHOR_RE)) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, href, label] = match;
    if (isUnpublishedPostLink(href)) {
      parts.push(label);
    } else if (href.startsWith("/") && !href.startsWith("//")) {
      parts.push(
        <Link key={key++} to={href} className={linkClass}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {label}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : text;
}
