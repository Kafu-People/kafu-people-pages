import { useParams, Link } from "react-router-dom";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO, SITE_URL } from "../config/seo";
import { ArticlePostingLD, BreadcrumbListLD, SpeakableLD } from "../components/Schema";
import { getArticleBySlug } from "../data/articles";
import { useSSRData } from "../lib/SSRDataContext";
import RichTextParagraph from "../components/RichTextParagraph";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const ArticlePost = () => {
  const { slug } = useParams();
  const ssrArticle = useSSRData("article");
  const article = ssrArticle && ssrArticle.slug === slug
    ? ssrArticle
    : getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-cDarkBlue">
          Article Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          The article you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          to="/articles"
          className="rounded-xl bg-CPurple px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          &larr; Back to Articles
        </Link>
      </div>
    );
  }

  const { title, description, canonicalPath } = PAGE_SEO.articlePost;

  const articleOgImage = article.image
    ? article.image.startsWith("http")
      ? article.image
      : `${SITE_URL}${article.image}`
    : undefined;

  return (
    <>
      <PageSEO
        title={title(article.title)}
        description={article.excerpt || description}
        canonicalPath={canonicalPath(article.slug)}
        ogImage={articleOgImage}
      >
        <script type="application/ld+json">
          {JSON.stringify(ArticlePostingLD(article))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(BreadcrumbListLD([
            { name: "Home", path: "/" },
            { name: "Articles", path: "/articles" },
            { name: article.title, path: `/articles/${article.slug}` },
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(SpeakableLD(["[data-speakable=headline]", "[data-speakable=summary]"]))}
        </script>
      </PageSEO>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/articles"
          className="mb-6 inline-flex items-center text-sm font-medium text-CPurple hover:underline"
        >
          &larr; Back to Articles
        </Link>

        <header className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-CPurple/10 px-3 py-1 text-sm font-semibold text-CPurple">
              {article.category}
            </span>
            <time dateTime={article.datePublished} className="text-sm text-gray-500">
              {formatDate(article.datePublished)}
            </time>
            {article.readingTime && (
              <span className="text-sm text-gray-500">
                {article.readingTime} min read
              </span>
            )}
          </div>
          <h1 data-speakable="headline" className="text-3xl font-bold text-cDarkBlue sm:text-4xl">
            {article.title}
          </h1>
          {article.author && (
            <p className="mt-3 text-sm text-gray-500">By {article.author}</p>
          )}
        </header>

        {article.image && (
          <div className="mb-8 overflow-hidden rounded-2xl bg-cDarkBlue shadow-lg">
            <img
              loading="lazy"
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="max-w-none text-gray-700">
          {article.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mb-3 mt-8 text-2xl font-bold text-cDarkBlue"
                >
                  {block.slice(3)}
                </h2>
              );
            }
            return (
              <RichTextParagraph
                key={i}
                {...(i === 0 ? { "data-speakable": "summary" } : {})}
                className="mb-4 text-base leading-relaxed sm:text-lg"
              >
                {block}
              </RichTextParagraph>
            );
          })}
        </div>

        {Array.isArray(article.tags) && article.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-slate-200 pt-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </>
  );
};

export default ArticlePost;
