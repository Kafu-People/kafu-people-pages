// Build-time content check. The sitemap itself is served per request by the
// Worker (see worker/index.js), so scheduled posts appear on their publish
// date. It must not be written to public/: Cloudflare serves any matching
// static asset before the Worker runs, which would freeze the sitemap at
// build time.
//
// This script reports the sitemap size and warns when a published post links
// to one that is not published yet. It never fails the build.
const { default: blogs } = await import("../src/data/blogs.js");
const { default: news } = await import("../src/data/news.js");
const { default: portfolio } = await import("../src/data/portfolioCases.js");
const { getSitemapEntries, findLinksToUnpublished } = await import(
  "../src/lib/sitemap.js"
);

const now = new Date();
console.log(
  `Sitemap (served by the Worker) currently has ${getSitemapEntries({ blogs, news, portfolio, now }).length} URLs.`
);

for (const { from, to } of findLinksToUnpublished({ blogs, news, now })) {
  console.warn(`WARNING: published post ${from} links to unpublished post ${to}`);
}
