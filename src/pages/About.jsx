import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import { OrganizationLD, PersonLD } from "../components/Schema";
import { executives } from "../data/team";
import AboutHero from "../components/aboutComponenets/AboutHero";
import Vision from "../components/aboutComponenets/Vision";
import AnimatedStats from "../components/AnimatedStats";
import OurValue from "../components/aboutComponenets/OurValue";
import AboutLeadership from "../components/aboutComponenets/AboutLeadership";
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
        {executives.map((member) => (
          <script key={member.name} type="application/ld+json">
            {JSON.stringify(PersonLD(member))}
          </script>
        ))}
      </PageSEO>
      <AboutHero />
      <AnimatedStats />
      <Vision />
      <OurValue />
      <AboutLeadership />
      <Achievements />
      <CTABanner />
    </>
  );
};

export default About;
