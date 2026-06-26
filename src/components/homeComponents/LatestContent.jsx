import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import staticBlogs from "../../data/blogs";
import { getLatestNews } from "../../data/news";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

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
      kind: "Blog post",
      to: `/blogs/${latestBlog.slug}`,
      image: latestBlog.image,
      title: latestBlog.title,
      excerpt: latestBlog.description.split("\n\n")[0],
      meta: latestBlog.category,
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
        <h2 className="mb-2 text-xl text-textGray">FRESH FROM KAFU PEOPLE</h2>
        <h3 className="text-3xl font-bold text-CPurple">Latest Content</h3>
        <p className="mt-3 text-textGray">
          Company news and team insights from across Kafu People.
        </p>
      </div>

      <motion.div
        className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2"
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
          to="/blogs"
          className="rounded-xl border border-CPurple px-6 py-3 font-semibold text-CPurple transition hover:bg-CPurple hover:text-white"
        >
          Read Blogs
        </Link>
      </div>
    </section>
  );
};

export default LatestContent;
