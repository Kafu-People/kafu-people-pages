import { lazy, Suspense } from "react";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import { HERO_POSTER_SRC } from "../constants/media";
import { OrganizationLD } from "../components/Schema";
import Hero from "../components/homeComponents/Hero";
import ServicesSection from "../components/homeComponents/ServicesSection";
import TrainingPrograms from "../components/homeComponents/TrainingPrograms";
import { TestimonialsPlaceholder } from "../components/homeComponents/TestimonialsPlaceholder";
import HomeTeamCTA from "../components/homeComponents/HomeTeamCTA";
import LatestContent from "../components/homeComponents/LatestContent";

const Testimonials = lazy(() => import("../components/homeComponents/Testimonials"));

const Home = () => {
  const seo = PAGE_SEO.home;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      >
        <link
          rel="preload"
          as="image"
          href={HERO_POSTER_SRC}
          fetchpriority="high"
        />
        <script type="application/ld+json">
          {JSON.stringify(OrganizationLD())}
        </script>
      </PageSEO>
      <Hero />
      <ServicesSection />
      <HomeTeamCTA />
      <Suspense fallback={<TestimonialsPlaceholder />}>
        <Testimonials />
      </Suspense>
      <LatestContent />
      <TrainingPrograms />
    </>
  );
};

export default Home;
