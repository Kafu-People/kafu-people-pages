import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import { BreadcrumbListLD } from "../components/Schema";
import PageHero from "../components/ui/PageHero";
import staticArticles, {
  ARTICLE_CATEGORIES,
  getLatestArticles,
} from "../data/articles";

const ARTICLES_HERO_IMAGE = "/images/blog-section.webp";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const Articles = () => {
  const [filter, setFilter] = useState("All");
  const seo = PAGE_SEO.articlesList;

  const articles = getLatestArticles();
  const filteredArticles =
    filter === "All"
      ? articles
      : articles.filter((item) => item.category === filter);

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
              { name: "Articles", path: "/articles" },
            ]),
          )}
        </script>
      </PageSEO>

      <PageHero
        image={ARTICLES_HERO_IMAGE}
        imageAlt="Kafu People articles"
        height="h-[60vh] lg:h-[80vh]"
        priority
        align="left"
        containerClassName="pt-8"
      >
        <h1 className="ml-8 text-left text-4xl font-bold text-cWhite sm:text-5xl md:text-6xl lg:ml-24">
          Articles
        </h1>
        <div className="w-auto lg:w-[700px]">
          <p className="mx-4 mt-2 text-lg text-cWhite sm:text-justify sm:text-xl lg:ml-24 lg:text-left">
            In-depth, educational guides and deep dives from the Kafu People team
            — practical resources on AI, cloud, web development, automation, and
            security to help you build better products.
          </p>
        </div>
      </PageHero>

      {/* Category filter */}
      <div className="container mx-auto px-6 py-6 text-center">
        <div className="flex justify-center">
          <div className="scrollbar-hide flex w-full gap-4 overflow-x-auto whitespace-nowrap px-2 sm:flex-wrap sm:justify-center">
            {ARTICLE_CATEGORIES.map((category) => (
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
                {category === "All" ? "All Articles" : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className="container mx-auto px-6 py-8">
        {staticArticles.length === 0 ? (
          <div className="py-16 text-center">
            <h3 className="mb-4 text-2xl font-bold text-cDarkBlue">
              No articles yet
            </h3>
            <p className="mx-auto max-w-md text-gray-600">
              We&apos;re working on publishing our first guides. Check back soon
              for resources from Kafu People.
            </p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filteredArticles.length > 0 ? (
              filteredArticles.map((item) => (
                <Link key={item._id} to={`/articles/${item.slug}`} className="block">
                  <motion.article
                    className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-CPurple/40 hover:shadow-CPurple"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={630}
                      className="h-48 w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-xs font-semibold text-CPurple">
                          {item.category}
                        </span>
                        {item.readingTime && (
                          <span className="text-xs text-gray-500">
                            {item.readingTime} min read
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-bold text-cDarkBlue">
                        {item.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-gray-600">
                        {item.excerpt}
                      </p>
                      <time
                        dateTime={item.datePublished}
                        className="mt-4 text-xs text-gray-400"
                      >
                        {formatDate(item.datePublished)}
                      </time>
                    </div>
                  </motion.article>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-500">
                  No articles found for this category.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Articles;
