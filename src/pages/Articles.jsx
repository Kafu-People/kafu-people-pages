import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import PageHero from "../components/ui/PageHero";
import articlesHero from "../assets/images/blogs/cloudComputing3.jpg";
import articles, { ARTICLE_CATEGORIES } from "../data/articles";

const Articles = () => {
  const [filter, setFilter] = useState("All");
  const seo = PAGE_SEO.articles;

  const filtered =
    filter === "All"
      ? articles
      : articles.filter((a) => a.category === filter);

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />

      <PageHero
        image={articlesHero}
        imageAlt=""
        height="h-[55vh] lg:h-[70vh]"
        priority
        align="left"
        containerClassName="pt-8"
      >
        <h1 className="ml-2 text-left text-4xl font-bold text-cWhite sm:text-5xl md:text-6xl lg:ml-12">
          LEARN
        </h1>
        <div className="lg:w-[700px] w-auto">
          <p className="mt-2 mx-2 text-lg text-cWhite sm:text-xl lg:ml-12 lg:text-left">
            Plain-English guides to AI, cloud, product, and modern software —
            written to help founders and teams make better decisions, no jargon
            required.
          </p>
        </div>
      </PageHero>

      {/* Category filter */}
      <div className="container mx-auto px-6 py-6 text-center">
        <div className="flex justify-center">
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide sm:flex-wrap sm:justify-center w-full px-2">
            {ARTICLE_CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 min-h-[44px] rounded-md text-sm sm:text-base border flex-shrink-0 ${
                  filter === category
                    ? "border-CPurple text-CPurple bg-transparent"
                    : "bg-cBrightBlue text-cgray hover:bg-cWhite hover:text-cBlack"
                }`}
                onClick={() => setFilter(category)}
              >
                {category === "All" ? "All Topics" : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Article grid */}
      <div className="container mx-auto px-6 py-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {filtered.length > 0 ? (
            filtered.map((article) => (
              <Link
                key={article._id}
                to={`/articles/${article.slug}`}
                className="block"
              >
                <motion.article
                  className="h-full bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-CPurple"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-xs font-medium text-CPurple">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.readingTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-cDarkBlue">
                      {article.title}
                    </h2>
                    <p className="text-CPurple mt-2 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.article>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No articles found for this topic.</p>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Articles;
