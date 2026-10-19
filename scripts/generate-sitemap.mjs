// Generates public/sitemap.xml from the app's routes, and warns when a
// published post links to one that is not published yet.
// The Worker serves the same sitemap per request (see worker/index.js), so
// this file is a build-time snapshot.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const { default: blogs } = await import("../src/data/blogs.js");
const { default: news } = await import("../src/data/news.js");
const { default: portfolio } = await import("../src/data/portfolioCases.js");
const { buildSitemapXml, getSitemapEntries, findLinksToUnpublished } = await import(
  "../src/lib/sitemap.js"
);

const siteFile = readFileSync(resolve(root, "src/constants/site.js"), "utf8");
const SITE_URL = (siteFile.match(/SITE_URL\s*=\s*["']([^"']+)["']/) || [])[1] ||
  "https://kafupeople.com";

const now = new Date();
const xml = buildSitemapXml({ siteUrl: SITE_URL, blogs, news, portfolio, now });
writeFileSync(resolve(root, "public/sitemap.xml"), xml, "utf8");
console.log(
  `Generated public/sitemap.xml with ${getSitemapEntries({ blogs, news, portfolio, now }).length} URLs.`
);

for (const { from, to } of findLinksToUnpublished({ blogs, news, now })) {
  console.warn(`WARNING: published post ${from} links to unpublished post ${to}`);
}
