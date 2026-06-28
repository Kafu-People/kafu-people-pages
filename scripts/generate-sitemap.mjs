// Generates public/sitemap.xml from the app's routes.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const { default: blogs } = await import("../src/data/blogs.js");
const { default: news } = await import("../src/data/news.js");
const { default: portfolio } = await import("../src/data/portfolioCases.js");

const siteFile = readFileSync(resolve(root, "src/constants/site.js"), "utf8");
const SITE_URL = (siteFile.match(/SITE_URL\s*=\s*["']([^"']+)["']/) || [])[1] ||
  "https://kafupeople.com";

const today = new Date().toISOString().slice(0, 10);

const staticPaths = [
  { path: "/",                   lastmod: today, priority: 1.0 },
  { path: "/about",              lastmod: today, priority: 0.8 },
  { path: "/services",           lastmod: today, priority: 0.8 },
  { path: "/contact",            lastmod: today, priority: 0.8 },
  { path: "/portfolio",          lastmod: today, priority: 0.8 },
  { path: "/team",               lastmod: today, priority: 0.8 },
  { path: "/blogs",              lastmod: today, priority: 0.8 },
  { path: "/news",               lastmod: today, priority: 0.8 },
  { path: "/newsAndEvents",      lastmod: today, priority: 0.7 },
  { path: "/training/ai",        lastmod: today, priority: 0.7 },
  { path: "/ProductsCategories", lastmod: today, priority: 0.7 },
  { path: "/terms-of-service",   lastmod: today, priority: 0.3 },
  { path: "/privacy-policy",     lastmod: today, priority: 0.3 },
];

const blogPaths = blogs.map((b) => ({
  path: `/blogs/${b.slug}`,
  lastmod: b.dateModified || b.datePublished || today,
  priority: 0.7,
}));

const newsPaths = news.map((n) => ({
  path: `/news/${n.slug}`,
  lastmod: n.date || today,
  priority: 0.7,
}));

const portfolioPaths = portfolio.map((p) => ({
  path: `/portfolio/${p.slug}`,
  lastmod: today,
  priority: 0.9,
}));

const allPaths = [
  ...staticPaths,
  ...blogPaths,
  ...newsPaths,
  ...portfolioPaths,
];

const urls = allPaths
  .map(
    (entry) =>
      `  <url>\n    <loc>${SITE_URL}${entry.path}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <priority>${entry.priority.toFixed(2)}</priority>\n  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(resolve(root, "public/sitemap.xml"), xml, "utf8");
console.log(`Generated public/sitemap.xml with ${allPaths.length} URLs.`);
