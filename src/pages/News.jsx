import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import PageHero from "../components/ui/PageHero";
import newsHero from "../assets/images/blogs/blogSection.jpg";
import staticNews, { NEWS_CATEGORIES, getLatestNews } from "../data/news";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const News = () => {
  const [filter, setFilter] = useState("All");
  const seo = PAGE_SEO.newsList;

  const newsItems = getLatestNews();
  const filteredNews =
    filter === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === filter);

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />

      <PageHero
        image={newsHero}
        imageAlt=""
        height="h-[60vh] lg:h-[80vh]"
        priority
        align="left"
        containerClassName="pt-8"
      >
        <h1 className="ml-8 text-left text-4xl font-bold text-cWhite sm:text-5xl md:text-6xl lg:ml-24">
          NEWS &amp; UPDATES
        </h1>
        <div className="lg:w-[700px] w-auto">
          <p className="text-lg sm:text-xl lg:text-left lg:ml-24 mx-4 sm:text-justify text-cWhite mt-2">
            Announcements, events, partnerships, and product updates from the
            Kafu People team. Stay connected for the latest on what we're
            building and where we'll be next.
          </p>
        </div>
      </PageHero>

      {/* Category filter */}
      <div className="container mx-auto px-6 py-6 text-center">
        <div className="flex justify-center">
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide sm:flex-wrap sm:justify-center w-full px-2">
            {NEWS_CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 min-h-[44px] rounded-md text-sm sm:text-base border flex-shrink-0 ${
                  filter === category
                    ? "border-CPurple text-CPurple bg-transparent"
                    : "bg-cBrightBlue text-cgray hover:bg-cWhite hover:text-cBlack"
                }`}
                onClick={() => setFilter(category)}
              >
                {category === "All" ? "All News" : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News grid */}
      <div className="container mx-auto px-6 py-8">
        {staticNews.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-cDarkBlue mb-4">
              No updates yet
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We're working on our first updates. Check back soon for news from
              Kafu People.
            </p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filteredNews.length > 0 ? (
              filteredNews.map((item) => (
                <Link
                  key={item._id}
                  to={`/news/${item.slug}`}
                  className="block"
                >
                  <motion.article
                    className="h-full bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-CPurple"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover bg-cDarkBlue"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-xs font-medium text-CPurple">
                          {item.category}
                        </span>
                        <time
                          dateTime={item.date}
                          className="text-xs text-gray-500"
                        >
                          {formatDate(item.date)}
                        </time>
                      </div>
                      <h2 className="text-xl font-bold text-cDarkBlue">
                        {item.title}
                      </h2>
                      <p className="text-CPurple mt-2 line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>
                  </motion.article>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">
                  No updates found for this category.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default News;
