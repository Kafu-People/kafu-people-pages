import { useParams, Link } from "react-router-dom";
import PageSEO from "../components/PageSEO";
import { getCaseBySlug } from "../data/portfolioCases";
import { PAGE_SEO, SITE_URL } from "../config/seo";
import { SoftwareAppLD } from "../components/Schema";
import { useSSRData } from "../lib/SSRDataContext";
import CaseStudyHero from "../components/portfolio/CaseStudyHero";
import CaseStudyAtAGlance from "../components/portfolio/CaseStudyAtAGlance";
import CaseStudySection from "../components/portfolio/CaseStudySection";
import CaseStudyFeatures from "../components/portfolio/CaseStudyFeatures";
import CaseStudyTechStack from "../components/portfolio/CaseStudyTechStack";
import CaseStudyGallery from "../components/portfolio/CaseStudyGallery";
import CaseStudyCTA from "../components/portfolio/CaseStudyCTA";
import RelatedCaseStudies from "../components/portfolio/RelatedCaseStudies";

const PortfolioCaseStudy = () => {
  const { slug } = useParams();
  const ssrCaseStudy = useSSRData("portfolio");
  const caseStudy = ssrCaseStudy || getCaseBySlug(slug);

  if (!caseStudy) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-cDarkBlue">
          Case Study Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          The case study you&apos;re looking for doesn&apos;t exist or is still
          being written.
        </p>
        <Link
          to="/portfolio"
          className="rounded-xl bg-CPurple px-6 py-3 text-white font-semibold hover:opacity-90 transition"
        >
          &larr; Back to Portfolio
        </Link>
      </div>
    );
  }

  const { title, description, canonicalPath } = PAGE_SEO.portfolioCaseStudy;
  const challenge = caseStudy.sections.find((s) => s.type === "challenge");
  const solution = caseStudy.sections.find((s) => s.type === "solution");
  const results = caseStudy.sections.find((s) => s.type === "results");

  const csOgImage = caseStudy.image
    ? caseStudy.image.startsWith("http")
      ? caseStudy.image
      : `${SITE_URL}${caseStudy.image}`
    : undefined;

  return (
    <>
      <PageSEO
        title={title(caseStudy.title)}
        description={description}
        canonicalPath={canonicalPath(caseStudy.slug)}
        ogImage={csOgImage}
      >
        <script type="application/ld+json">
          {JSON.stringify(SoftwareAppLD(caseStudy))}
        </script>
      </PageSEO>

      <CaseStudyHero
        title={caseStudy.title}
        tagline={caseStudy.tagline}
        category={caseStudy.category}
        outcome={caseStudy.outcome}
        image={caseStudy.image}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="my-12">
          <CaseStudyAtAGlance
            role={caseStudy.role}
            timeline={caseStudy.timeline}
            techStack={caseStudy.techStack}
            liveUrl={caseStudy.liveUrl}
          />
        </div>

        <Link
          to="/portfolio"
          className="mb-10 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          &larr; Back to Portfolio
        </Link>

        {challenge && (
          <div className="mb-12">
            <CaseStudySection heading={challenge.heading}>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                {challenge.content}
              </p>
            </CaseStudySection>
          </div>
        )}

        {solution && (
          <div className="mb-12">
            <CaseStudySection heading={solution.heading}>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                {solution.content}
              </p>
            </CaseStudySection>
          </div>
        )}

        {caseStudy.features?.length > 0 && (
          <div className="mb-12">
            <CaseStudyFeatures features={caseStudy.features} />
          </div>
        )}

        {results && (
          <div className="mb-12">
            <CaseStudySection heading={results.heading}>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                {results.content}
              </p>
            </CaseStudySection>
          </div>
        )}

        {caseStudy.techStack?.length > 0 && (
          <div className="mb-12">
            <CaseStudyTechStack techStack={caseStudy.techStack} />
          </div>
        )}

        {caseStudy.gallery?.length > 0 && (
          <div className="mb-12">
            <CaseStudyGallery images={caseStudy.gallery} title={caseStudy.title} />
          </div>
        )}

        <div className="mb-12">
          <CaseStudyCTA liveUrl={caseStudy.liveUrl} />
        </div>

        <RelatedCaseStudies currentSlug={caseStudy.slug} />
      </div>
    </>
  );
};

export default PortfolioCaseStudy;
