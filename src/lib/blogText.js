/** Flatten blog body text for card previews — single line, no paragraph breaks. */
export function flattenBlogPreview(text) {
  return (text || "").replace(/\s+/g, " ").trim();
}
