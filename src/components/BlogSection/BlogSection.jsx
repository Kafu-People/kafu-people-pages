import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import PageSEO from "../PageSEO";
import { PAGE_SEO } from "../../config/seo";
import { BreadcrumbListLD } from "../Schema";
import PageHero from "../ui/PageHero";
import staticBlogs from "../../data/blogs";
import { BlogGridPlaceholder } from "./BlogGridPlaceholder";

const BlogGrid = lazy(() => import("./BlogGrid"));

const BLOG_HERO_IMAGE = "/images/blog-section.webp";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const FILTER_OPTIONS = [
  "All Blogs",
  "Artificial Intelligence",
  "Web Development",
  "Cyber Security",
  "Digital Marketing",
];

const categoryMap = {
  "All Blogs": "All",
  "Artificial Intelligence": "AI",
  "Web Development": "Web Development",
  "Cyber Security": "Cyber Security",
  "Digital Marketing": "Digital Marketing",
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState(staticBlogs);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All Blogs");

  useEffect(() => {
    if (!BACKEND_URL) return undefined;

    const controller = new AbortController();

    const fetchBlogs = async () => {
      try {
        const { default: axios } = await import("axios");
        const response = await axios.get(`${BACKEND_URL}/api/blogs`, {
          timeout: 3000,
          signal: controller.signal,
        });
        if (Array.isArray(response.data) && response.data.length > 0) {
          setBlogs(response.data);
        }
      } catch (fetchError) {
        if (!Array.isArray(staticBlogs) || staticBlogs.length === 0) {
          setError(fetchError);
        }
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(fetchBlogs, { timeout: 3000 });
      return () => {
        controller.abort();
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = setTimeout(fetchBlogs, 1200);
    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  const filteredBlogs = useMemo(() => {
    if (filter === "All Blogs") return blogs;
    return Array.isArray(blogs)
      ? blogs.filter((blog) => blog.category === categoryMap[filter])
      : [];
  }, [blogs, filter]);

  const seo = PAGE_SEO.blog;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      >
        <script type="application/ld+json">
          {JSON.stringify(
            BreadcrumbListLD([
              { name: "Home", path: "/" },
              { name: "Blogs", path: "/blogs" },
            ]),
          )}
        </script>
      </PageSEO>
      <PageHero
        image={BLOG_HERO_IMAGE}
        imageAlt="Kafu People blog"
        height="h-[60vh] lg:h-[80vh]"
        priority
        align="left"
        containerClassName="pt-8"
      >
        <h1 className="ml-8 text-left text-4xl font-bold text-cWhite sm:text-5xl md:text-6xl lg:ml-24">
          Kafu People Blogs
        </h1>
        <div className="w-auto lg:w-[700px]">
          <p className="mx-4 mt-2 text-lg text-cWhite sm:text-justify sm:text-xl lg:ml-24 lg:text-left">
            Team insights, startup lessons, and engineering perspectives — including the
            posts we share on LinkedIn. Short reads from our experience building products
            with clients.
          </p>
        </div>
      </PageHero>

      <div className="container mx-auto px-6 py-6 text-center">
        <div className="flex justify-center">
          <div className="scrollbar-hide flex w-full gap-4 overflow-x-auto whitespace-nowrap px-2 sm:flex-wrap sm:justify-center">
            {FILTER_OPTIONS.map((category) => (
              <button
                key={category}
                type="button"
                className={`min-h-[44px] flex-shrink-0 rounded-md border px-4 py-2 text-sm sm:text-base ${
                  filter === category
                    ? "border-CPurple bg-transparent text-CPurple"
                    : "bg-cBrightBlue text-cgray hover:bg-cWhite hover:text-cBlack"
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Suspense fallback={<BlogGridPlaceholder />}>
          <BlogGrid blogs={filteredBlogs} error={error} />
        </Suspense>
      </div>
    </>
  );
};

export default BlogSection;
