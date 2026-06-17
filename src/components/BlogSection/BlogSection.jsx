import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import blogsection from "../../assets/images/blogs/blogSection.webp";
import Loader from "../Loader";
import PageSEO from "../PageSEO";
import { PAGE_SEO } from "../../config/seo";
import { BreadcrumbListLD } from "../Schema";
import PageHero from "../ui/PageHero";
import staticBlogs from "../../data/blogs";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BlogSection = () => {
  const [blogs, setBlogs] = useState([]); // Store fetched blogs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [filter, setFilter] = useState("All Blogs");

  // Map button labels to blog categories
  const categoryMap = {
    "All Blogs": "All",
    "Artificial Intelligence": "AI",
    "Web Development": "Web Development",
    "Cyber Security": "Cyber Security",
    "Digital Marketing": "Digital Marketing",
  };

  // Fetch blogs from API using Axios
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/blogs`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setBlogs(response.data);
        } else {
          setBlogs(staticBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs(staticBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on selected category
  const filteredBlogs =
    filter === "All Blogs"
      ? blogs
      : Array.isArray(blogs) &&
        blogs.filter((blog) => blog.category === categoryMap[filter]);

  const seo = PAGE_SEO.blog;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      >
        <script type="application/ld+json">
          {JSON.stringify(BreadcrumbListLD([
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blogs" },
          ]))}
        </script>
      </PageSEO>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageHero
            image={blogsection}
            imageAlt=""
            height="h-[60vh] lg:h-[80vh]"
            priority
            align="left"
            containerClassName="pt-8"
          >
            <h1 className="ml-8 text-left text-4xl font-bold text-cWhite sm:text-5xl md:text-6xl lg:ml-24">
              Kafu People Blogs
            </h1>
            <div className="lg:w-[700px] w-auto">
              <p className="text-lg sm:text-xl lg:text-left lg:ml-24 mx-4 sm:text-justify text-cWhite mt-2">
                Team insights, startup lessons, and engineering perspectives —
                including the posts we share on LinkedIn. Short reads from our
                experience building products with clients.
              </p>
            </div>
          </PageHero>

          <div className="container mx-auto px-6 py-6 text-center">
            <div className="flex justify-center">
              <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide sm:flex-wrap sm:justify-center w-full px-2">
                {[
                  "All Blogs",
                  "Artificial Intelligence",
                  "Web Development",
                  "Cyber Security",
                  "Digital Marketing",
                ].map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 min-h-[44px] rounded-md text-sm sm:text-base border flex-shrink-0 ${
                      filter === category
                        ? "border-CPurple text-CPurple bg-transparent"
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
          {/* Blog Grid */}
          <div className="container mx-auto px-6 py-8">
            {error ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-cDarkBlue mb-4">
                  Something went wrong
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't load the blog articles right now. Please try again
                  later or{" "}
                  <Link to="/contact" className="text-CPurple underline hover:no-underline">
                    contact us
                  </Link>{" "}
                  if the issue persists.
                </p>
              </div>
            ) : !Array.isArray(blogs) || blogs.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-cDarkBlue mb-4">
                  No blog posts yet
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We&apos;re working on publishing our first posts. Check back
                  soon for insights from Kafu People.
                </p>
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {Array.isArray(filteredBlogs) && filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <Link
                      key={blog._id}
                      to={`/blogs/${blog.slug || blog._id}`}
                      className="block"
                    >
                      <motion.div
                        className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg cursor-pointer hover:border-CPurple/40 hover:shadow-CPurple"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img loading="lazy"                           src={blog.image}
                          alt={blog.title}
                          className="h-48 w-full object-cover opacity-100 sm:opacity-80 md:opacity-100"
                        />
                        <div className="p-6">
                          <div className="mb-2 flex items-center justify-between gap-2">
                            <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-xs font-semibold text-CPurple">
                              Blog
                            </span>
                            {blog.category && (
                              <span className="text-xs text-gray-500">
                                {blog.category}
                              </span>
                            )}
                          </div>
                          <h2 className="text-xl font-bold text-cDarkBlue">
                            {blog.title}
                          </h2>
                          <p className="mt-2 line-clamp-3 text-gray-600">
                            {blog.description.split("\n\n")[0]}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500">
                      No blog posts found for this category.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default BlogSection;
