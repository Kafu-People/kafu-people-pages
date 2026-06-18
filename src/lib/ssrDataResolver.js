import { getStaticBlogBySlug } from "../data/blogs"
import { getNewsBySlug } from "../data/news"
import { getArticleBySlug } from "../data/articles"
import { getCaseBySlug } from "../data/portfolioCases"

export function resolveSSRData(url) {
  const parsed = new URL(url, "http://localhost")
  const path = parsed.pathname

  if (path.startsWith("/blogs/")) {
    const slug = path.replace("/blogs/", "")
    const blog = getStaticBlogBySlug(slug)
    if (blog) return { pageType: "blog", data: blog }
  }

  if (path.startsWith("/news/")) {
    const slug = path.replace("/news/", "")
    const article = getNewsBySlug(slug)
    if (article) return { pageType: "news", data: article }
  }

  if (path.startsWith("/articles/")) {
    const slug = path.replace("/articles/", "")
    const article = getArticleBySlug(slug)
    if (article) return { pageType: "article", data: article }
  }

  if (path.startsWith("/portfolio/")) {
    const slug = path.replace("/portfolio/", "")
    const caseStudy = getCaseBySlug(slug)
    if (caseStudy) return { pageType: "portfolio", data: caseStudy }
  }

  return { pageType: "static", data: null }
}
