import { Link } from "react-router-dom";
import { getRelatedCases } from "../../data/portfolioCases";

export default function RelatedCaseStudies({ currentSlug }) {
  const related = getRelatedCases(currentSlug, 2);

  if (!related.length) return null;

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-cDarkBlue sm:text-3xl">
        More Case Studies
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {related.map((cs) => (
          <Link
            key={cs.slug}
            to={`/portfolio/${cs.slug}`}
            className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {cs.image && (
              <img loading="lazy"                 src={cs.image}
                alt={cs.title}
                className="mb-4 h-40 w-full rounded-lg object-cover"
              />
            )}
            <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
              {cs.category}
            </span>
            <h3 className="text-lg font-bold text-cDarkBlue group-hover:text-primary transition">
              {cs.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">{cs.tagline}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
