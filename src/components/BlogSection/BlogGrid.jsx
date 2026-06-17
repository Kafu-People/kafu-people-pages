import { Link } from "react-router-dom";

const BlogGrid = ({ blogs, error }) => {
  if (error) {
    return (
      <div className="py-16 text-center">
        <h3 className="mb-4 text-2xl font-bold text-cDarkBlue">Something went wrong</h3>
        <p className="mx-auto mb-6 max-w-md text-gray-600">
          We couldn&apos;t load the blog articles right now. Please try again later or{" "}
          <Link to="/contact" className="text-CPurple underline hover:no-underline">
            contact us
          </Link>{" "}
          if the issue persists.
        </p>
      </div>
    );
  }

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="py-16 text-center">
        <h3 className="mb-4 text-2xl font-bold text-cDarkBlue">No blog posts yet</h3>
        <p className="mx-auto max-w-md text-gray-600">
          We&apos;re working on publishing our first posts. Check back soon for insights from
          Kafu People.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {blogs.map((blog) => (
        <Link
          key={blog._id}
          to={`/blogs/${blog.slug || blog._id}`}
          className="block"
        >
          <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-CPurple/40 hover:shadow-CPurple">
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              decoding="async"
              width={1200}
              height={630}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-xs font-semibold text-CPurple">
                  Blog
                </span>
                {blog.category && (
                  <span className="text-xs text-gray-500">{blog.category}</span>
                )}
              </div>
              <h2 className="text-xl font-bold text-cDarkBlue">{blog.title}</h2>
              <p className="mt-2 line-clamp-3 text-gray-600">
                {blog.description.split("\n\n")[0]}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default BlogGrid;
