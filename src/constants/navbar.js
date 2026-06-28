/** Routes where the first screen under the nav is a dark hero (light nav text at top). */
const DARK_HERO_PATHS = new Set([
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/newsAndEvents",
  "/news",
  "/blogs",
  "/team",
  "/ProductsCategories",
]);

const DARK_HERO_PREFIXES = ["/event/", "/training/", "/portfolio/"];

export function isArticleDetailPath(pathname) {
  return (
    (pathname.startsWith("/blogs/") && pathname.length > "/blogs/".length) ||
    (pathname.startsWith("/news/") && pathname.length > "/news/".length)
  );
}

export function isDarkHeroRoute(pathname) {
  if (isArticleDetailPath(pathname)) return false;
  if (DARK_HERO_PATHS.has(pathname)) return true;
  return DARK_HERO_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}
