// Runs on the server before rendering. Unpublished (scheduled) and unknown
// post URLs get a real HTTP 404 instead of a 200 page.
import { render } from "vike/abort";
import { getStaticBlogBySlug } from "../../src/data/blogs";
import { getNewsBySlug } from "../../src/data/news";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function guard(pageContext) {
  const path = pageContext.urlPathname;

  const blogSlug = path.match(/^\/blogs\/([^/]+)\/?$/)?.[1];
  // Without a backend, static posts are the only blog source.
  if (blogSlug && !BACKEND_URL && !getStaticBlogBySlug(decodeURIComponent(blogSlug))) {
    throw render(404);
  }

  const newsSlug = path.match(/^\/news\/([^/]+)\/?$/)?.[1];
  if (newsSlug && !getNewsBySlug(decodeURIComponent(newsSlug))) {
    throw render(404);
  }
}
