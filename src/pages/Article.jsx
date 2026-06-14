import { useParams, Link } from "react-router-dom";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import { getArticleBySlug } from "../data/articles";

const Article = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-cDarkBlue">
          Article Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          The article you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>
        <Link
          to="/articles"
          className="rounded-xl bg-CPurple px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          &larr; Back to Learn
        </Link>
      </div>
    );
  }

  const { title, description, canonicalPath } = PAGE_SEO.article;

  return (
    <>
      <PageSEO
        title={title(article.title)}
        description={article.excerpt || description}
        canonicalPath={canonicalPath(article.slug)}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/articles"
          className="mb-6 inline-flex items-center text-sm font-medium text-CPurple hover:underline"
        >
          &larr; Back to Learn
        </Link>

        <header className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-sm font-medium text-CPurple">
              {article.category}
            </span>
            <span className="text-sm text-gray-500">{article.readingTime}</span>
          </div>
          <h1 className="text-3xl font-bold text-cDarkBlue sm:text-4xl">
            {article.title}
          </h1>
        </header>

        {article.image && (
          <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="max-w-none text-gray-700">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-4 text-base leading-relaxed sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </>
  );
};

export default Article;
