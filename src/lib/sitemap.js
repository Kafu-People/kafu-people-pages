// Builds sitemap.xml from the app's routes. Shared by the build script
// (scripts/generate-sitemap.mjs) and the Worker, which serves it per request
// so scheduled posts appear on their publish date without a rebuild.
import { isPublished } from "./publishing.js";

const STATIC_PATHS = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.8 },
  { path: "/services/chatgpt-ads", priority: 0.8 },
  { path: "/services/ai-training-coaching", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/blogs", priority: 0.8 },
  { path: "/news", priority: 0.8 },
  { path: "/newsAndEvents", priority: 0.7 },
  { path: "/training/ai", priority: 0.7 },
  { path: "/ProductsCategories", priority: 0.7 },
  { path: "/terms-of-service", priority: 0.3 },
  { path: "/privacy-policy", priority: 0.3 },
];

export function getSitemapEntries({ blogs, news, portfolio, now = new Date() }) {
  const today = now.toISOString().slice(0, 10);
  return [
    ...STATIC_PATHS.map((p) => ({ ...p, lastmod: today })),
    ...blogs
      .filter((b) => isPublished(b, now))
      .map((b) => ({
        path: `/blogs/${b.slug}`,
        lastmod: b.dateModified || b.datePublished || today,
        priority: 0.7,
      })),
    ...news
      .filter((n) => isPublished(n, now))
      .map((n) => ({ path: `/news/${n.slug}`, lastmod: n.date || today, priority: 0.7 })),
    ...portfolio.map((p) => ({ path: `/portfolio/${p.slug}`, lastmod: today, priority: 0.9 })),
  ];
}

export function buildSitemapXml({ siteUrl, ...data }) {
  const urls = getSitemapEntries(data)
    .map(
      (entry) =>
        `  <url>\n    <loc>${siteUrl}${entry.path}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <priority>${entry.priority.toFixed(2)}</priority>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/**
 * Published posts that link to a post that is not published yet (scheduled or
 * missing). Returns [{ from, to }] slug pairs, e.g. "/blogs/a" -> "/news/b".
 */
export function findLinksToUnpublished({ blogs, news, now = new Date() }) {
  const posts = [
    ...blogs.map((b) => ({ path: `/blogs/${b.slug}`, body: b.description || "", post: b })),
    ...news.map((n) => ({ path: `/news/${n.slug}`, body: n.content || "", post: n })),
  ];
  const published = new Set(posts.filter((p) => isPublished(p.post, now)).map((p) => p.path));
  const problems = [];
  for (const p of posts) {
    if (!published.has(p.path)) continue;
    for (const [, target] of p.body.matchAll(/href="(\/(?:blogs|news)\/[^"#?]+)"/g)) {
      if (!published.has(target)) problems.push({ from: p.path, to: target });
    }
  }
  return problems;
}
