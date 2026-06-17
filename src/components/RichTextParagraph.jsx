/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ANCHOR_RE = /<a href="([^"]+)">([^<]*)<\/a>/g;

const linkClass = "font-medium text-CPurple hover:underline";

function parseAnchors(text) {
  const parts = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(ANCHOR_RE)) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, href, label] = match;
    if (href.startsWith("/") && !href.startsWith("//")) {
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

export default function RichTextParagraph({ children, className, ...rest }) {
  return <p className={className} {...rest}>{parseAnchors(children)}</p>;
}
