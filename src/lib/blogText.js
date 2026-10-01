/** First paragraph for card previews — keeps natural breaks, no flattening. */
export function blogCardExcerpt(text, maxLength = 160) {
  const first = (text || "").split("\n\n")[0]?.trim() || "";
  if (first.length <= maxLength) return first;
  return `${first.slice(0, maxLength - 3).replace(/\s+\S*$/, "")}...`;
}

/** Flatten blog body text for legacy previews — single line, no paragraph breaks. */
export function flattenBlogPreview(text) {
  return (text || "").replace(/\s+/g, " ").trim();
}

const BULLET_RE = /^[•-]\s/;
const NUMBERED_RE = /^\d+\.\s/;
const EM_DASH_SPLIT_RE = /^(\d+\.\s.+?)(?:\s*[—–-]\s*(.+))?$/;

export function isBulletLine(line) {
  return BULLET_RE.test(line.trim());
}

export function isNumberedLine(line) {
  return NUMBERED_RE.test(line.trim());
}

export function parseNumberedLine(line) {
  const trimmed = line.trim();
  const match = trimmed.match(EM_DASH_SPLIT_RE);
  if (!match) return { label: trimmed, detail: null };
  return { label: match[1], detail: match[2] || null };
}

/**
 * Short multi-sentence impact lines only — e.g.
 * "Smaller teams. Bigger output. Faster execution."
 */
export function isImpactBlock(text) {
  const trimmed = text.trim();
  if (!trimmed.endsWith(".")) return false;

  const parts = trimmed.split(/\.\s+/).filter(Boolean);
  if (parts.length < 2 || parts.length > 4) return false;

  return parts.every((part) => {
    const fragment = part.replace(/\.$/, "").trim();
    return (
      fragment.length >= 6 &&
      fragment.length <= 32 &&
      !fragment.includes(",") &&
      !fragment.includes(":")
    );
  });
}

/** A block that is a single "## Heading" line. */
export function isHeadingBlock(lines) {
  return lines.length === 1 && /^##\s+\S/.test(lines[0]);
}

/** A block where every line is a "| a | b |" row, with a "|---|" divider second. */
export function isTableBlock(lines) {
  return (
    lines.length >= 3 &&
    lines.every((line) => line.startsWith("|") && line.endsWith("|")) &&
    /^\|[\s:|-]+\|$/.test(lines[1])
  );
}

export function parseTableBlock(lines) {
  const cells = (line) =>
    line
      .slice(1, -1)
      .split("|")
      .map((cell) => cell.trim());
  return { header: cells(lines[0]), rows: lines.slice(2).map(cells) };
}

/** Split article body into paragraph blocks. */
export function splitArticleBlocks(text) {
  return (text || "").split("\n\n").filter((block) => block.trim());
}
