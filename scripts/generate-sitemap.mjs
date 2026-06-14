// Generates public/sitemap.xml from the app's routes.
// Slugs are extracted from the data modules as text so this script never has to
// import image assets (which Node can't load).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Keep in sync with constants/site.js.
const siteFile = readFileSync(resolve(root, "src/constants/site.js"), "utf8");
const SITE_URL = (siteFile.match(/SITE_URL\s*=\s*["']([^"']+)["']/) || [])[1] ||
  "https://kafupeople.com";

// Static, indexable routes (admin/auth routes are intentionally excluded).
const staticPaths = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/team",
  "/blogs",
  "/articles",
  "/news",
  "/contact",
  "/terms-of-service",
  "/privacy-policy",
];

const slugsFrom = (relPath) => {
  const text = readFileSync(resolve(root, relPath), "utf8");
  const matches = [...text.matchAll(/slug:\s*["']([^"']+)["']/g)];
  return matches.map((m) => m[1]);
};

const dynamicPaths = [
  ...slugsFrom("src/data/blogs.js").map((s) => `/blogs/${s}`),
  ...slugsFrom("src/data/news.js").map((s) => `/news/${s}`),
  ...slugsFrom("src/data/articles.js").map((s) => `/articles/${s}`),
  ...slugsFrom("src/data/portfolioCases.js").map((s) => `/portfolio/${s}`),
];

const allPaths = [...staticPaths, ...dynamicPaths];
const today = new Date().toISOString().slice(0, 10);

const urls = allPaths
  .map(
    (path) =>
      `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(resolve(root, "public/sitemap.xml"), xml, "utf8");
console.log(`Generated public/sitemap.xml with ${allPaths.length} URLs.`);
