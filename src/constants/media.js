/** Default hero video on Streamable (override with VITE_HERO_VIDEO_URL). */
export const HERO_VIDEO_URL =
  import.meta.env.VITE_HERO_VIDEO_URL?.trim() ||
  "https://streamable.com/tep6t3";

export const HERO_POSTER_SRC = "/images/hero.webp";

const STREAMABLE_ID_RE = /streamable\.com\/(?:e\/|o\/)?([a-zA-Z0-9]+)/i;

export function isStreamableUrl(url) {
  return STREAMABLE_ID_RE.test(url);
}

export function getStreamableVideoId(url = HERO_VIDEO_URL) {
  const match = url.match(STREAMABLE_ID_RE);
  return match ? match[1] : null;
}

/** Direct MP4/WebM URL for <video> (R2, CDN, or local public file). */
export function getDirectVideoSrc(url = HERO_VIDEO_URL) {
  if (!url || isStreamableUrl(url)) return null;
  return url;
}
