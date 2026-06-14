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
  "/articles",
  "/team",
  "/ProductsCategories",
]);

const DARK_HERO_PREFIXES = ["/event/", "/training/", "/portfolio/"];

export function isDarkHeroRoute(pathname) {
  if (DARK_HERO_PATHS.has(pathname)) return true;
  return DARK_HERO_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}
