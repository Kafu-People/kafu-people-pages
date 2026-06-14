import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import staticBlogs from "../../data/blogs";
import { getLatestNews } from "../../data/news";
import { getLatestArticles } from "../../data/articles";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

// Pull the most recent item from each content type for a mixed preview.
const buildItems = () => {
  const items = [];

  const latestNews = getLatestNews(1)[0];
  if (latestNews) {
    items.push({
      key: latestNews._id,
      kind: "News",
      to: `/news/${latestNews.slug}`,
      image: latestNews.image,
      title: latestNews.title,
      excerpt: latestNews.excerpt,
      meta: formatDate(latestNews.date),
    });
  }

  const latestBlog = staticBlogs[0];
  if (latestBlog) {
    items.push({
      key: latestBlog._id,
      kind: "Blog",
      to: `/blogs/${latestBlog.slug}`,
      image: latestBlog.image,
      title: latestBlog.title,
      excerpt: latestBlog.description,
      meta: latestBlog.category,
    });
  }

  const latestArticle = getLatestArticles(1)[0];
  if (latestArticle) {
    items.push({
      key: latestArticle._id,
      kind: "Learn",
      to: `/articles/${latestArticle.slug}`,
      image: latestArticle.image,
      title: latestArticle.title,
      excerpt: latestArticle.excerpt,
      meta: latestArticle.readingTime,
    });
  }

  return items;
};

const LatestContent = () => {
  const items = buildItems();
  if (items.length === 0) return null;

  return (
    <section className="w-full px-4 py-16 font-inter lg:px-16">
      <div className="mb-10 text-center">
        <h4 className="mb-2 text-xl text-textGray">FRESH FROM KAFU PEOPLE</h4>
        <h2 className="text-3xl font-bold text-CPurple">Latest Content</h2>
        <p className="mt-3 text-textGray">
          News, articles, and ideas from across our team.
        </p>
      </div>

      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {items.map((item) => (
          <Link key={item.key} to={item.to} className="block">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-CPurple/30">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-xs font-semibold text-CPurple">
                    {item.kind}
                  </span>
                  <span className="text-xs text-gray-500">{item.meta}</span>
                </div>
                <h3 className="text-lg font-bold text-cDarkBlue">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                  {item.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </motion.div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/news"
          className="rounded-xl bg-CPurple px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          View All News
        </Link>
        <Link
          to="/articles"
          className="rounded-xl border border-CPurple px-6 py-3 font-semibold text-CPurple transition hover:bg-CPurple hover:text-white"
        >
          Explore Articles
        </Link>
      </div>
    </section>
  );
};

export default LatestContent;
