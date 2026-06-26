import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PageSEO from "../components/PageSEO";
import Loader from "../components/Loader";
import { PAGE_SEO, SITE_URL } from "../config/seo";
import { getStaticBlogBySlug, getStaticBlogById } from "../data/blogs";
import { BlogPostingLD, BreadcrumbListLD, SpeakableLD } from "../components/Schema";
import { useSSRData } from "../lib/SSRDataContext";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const BlogPost = () => {
  const { slug } = useParams();
  const ssrBlog = useSSRData("blog");
  const [blog, setBlog] = useState(ssrBlog || null);
  const [loading, setLoading] = useState(!ssrBlog);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ssrBlog && ssrBlog.slug === slug) return;
    let found = getStaticBlogBySlug(slug) || getStaticBlogById(slug);
    if (found) {
      setBlog(found);
      setLoading(false);
      return;
    }
    axios
      .get(`${BACKEND_URL}/api/blogs/${slug}`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Blog post not found.");
        setLoading(false);
      });
  }, [slug, ssrBlog]);

  if (loading) return <Loader />;

  if (error || !blog) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-cDarkBlue">
          Blog Post Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-600">{error}</p>
        <Link
          to="/blogs"
          className="rounded-xl bg-CPurple px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          &larr; Back to Blogs
        </Link>
      </div>
    );
  }

  const { title, canonicalPath } = PAGE_SEO.blogPost;
  const rawExcerpt = blog.description
    ? blog.description.split("\n\n")[0]
    : PAGE_SEO.blogPost.description;
  const blogDescription = rawExcerpt.length > 155
    ? rawExcerpt.slice(0, 152).replace(/\s+\S*$/, "") + "..."
    : rawExcerpt;

  const blogOgImage = blog.image
    ? blog.image.startsWith("http")
      ? blog.image
      : `${SITE_URL}${blog.image}`
    : undefined;

  return (
    <>
      <PageSEO
        title={title(blog.title)}
        description={blogDescription}
        canonicalPath={canonicalPath(blog.slug || slug)}
        ogImage={blogOgImage}
      >
        {blog.datePublished && (
          <meta property="article:published_time" content={blog.datePublished} />
        )}
        {(blog.dateModified || blog.datePublished) && (
          <meta
            property="article:modified_time"
            content={blog.dateModified || blog.datePublished}
          />
        )}
        <script type="application/ld+json">
          {JSON.stringify(BlogPostingLD(blog))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(BreadcrumbListLD([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blogs" },
            { name: blog.title, path: `/blogs/${blog.slug}` },
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(SpeakableLD(["[data-speakable=headline]", "[data-speakable=summary]"]))}
        </script>
      </PageSEO>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/blogs"
          className="mb-6 inline-flex items-center text-sm font-medium text-CPurple hover:underline"
        >
          &larr; Back to Blogs
        </Link>

        <header className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-sm font-semibold text-CPurple">
              Blog
            </span>
            {blog.category && (
              <span className="text-sm text-gray-500">{blog.category}</span>
            )}
          </div>
          <h1 data-speakable="headline" className="text-3xl font-bold text-cDarkBlue sm:text-4xl">
            {blog.title}
          </h1>
        </header>

        {blog.image && (
          <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
            <img loading="lazy"               src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="max-w-none text-gray-700">
          {blog.description.split("\n\n").map((paragraph, i) => (
            <p key={i} {...(i === 0 ? { "data-speakable": "summary" } : {})} className="mb-4 text-base leading-relaxed sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </>
  );
};

export default BlogPost;
