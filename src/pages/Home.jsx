import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import Hero from "../components/homeComponents/Hero";
import ServicesSection from "../components/homeComponents/ServicesSection";
import TrainingPrograms from "../components/homeComponents/TrainingPrograms";
import Testimonials from "../components/homeComponents/Testimonials";
import HomeTeamCTA from "../components/homeComponents/HomeTeamCTA";
import LatestContent from "../components/homeComponents/LatestContent";

const Home = () => {
  const seo = PAGE_SEO.home;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <Hero />
      <ServicesSection />
      <HomeTeamCTA />
      <Testimonials />
      <LatestContent />
      <TrainingPrograms />
    </>
  );
};

export default Home;
