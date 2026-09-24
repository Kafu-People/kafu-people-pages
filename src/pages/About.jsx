import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import { OrganizationLD } from "../components/Schema";
import AboutHero from "../components/aboutComponenets/AboutHero";
import Vision from "../components/aboutComponenets/Vision";
import AnimatedStats from "../components/AnimatedStats";
import OurValue from "../components/aboutComponenets/OurValue";
import Achievements from "../components/Achievements";
import CTABanner from "../components/homeComponents/CTABanner";

const About = () => {
  const seo = PAGE_SEO.about;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      >
        <script type="application/ld+json">
          {JSON.stringify(OrganizationLD())}
        </script>
      </PageSEO>
      <AboutHero />
      <AnimatedStats />
      <Vision />
      <OurValue />
      <Achievements />
      <CTABanner />
    </>
  );
};

export default About;
