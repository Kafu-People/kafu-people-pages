import { Link } from "react-router-dom";
import { flattenBlogPreview } from "../../lib/blogText";
import { setReturnBlogId } from "../../lib/blogListScroll";

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
    <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 md:grid-cols-3">
      {blogs.map((blog) => {
        const blogId = blog.slug || blog._id;

        return (
          <Link
            key={blog._id}
            to={`/blogs/${blogId}`}
            className="block h-full"
            onClick={() => setReturnBlogId(blogId)}
          >
            <article
              id={`blog-card-${blogId}`}
              className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-CPurple/40 hover:shadow-CPurple"
            >
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                decoding="async"
                width={1200}
                height={630}
                className="h-48 w-full shrink-0 object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-xs font-semibold text-CPurple">
                    Blog
                  </span>
                  {blog.category && (
                    <span className="text-xs text-gray-500">{blog.category}</span>
                  )}
                </div>
                <h2 className="flex h-[3.5rem] items-center">
                  <span className="line-clamp-2 text-xl font-bold leading-snug text-cDarkBlue">
                    {blog.title}
                  </span>
                </h2>
                <p className="mt-2 h-[4.5rem] line-clamp-3 text-sm leading-6 text-gray-600">
                  {flattenBlogPreview(blog.description)}
                </p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogGrid;
