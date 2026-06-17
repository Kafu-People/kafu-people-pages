import { lazy, Suspense } from "react";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import ContactHero from "../components/contactComponent/ContactHero";
import { ContactSectionPlaceholder } from "../components/contactComponent/ContactSectionPlaceholder";
import { MapSectionPlaceholder } from "../components/contactComponent/MapSectionPlaceholder";

const ContactSection = lazy(() => import("../components/ContactSection"));
const MapSection = lazy(() => import("../components/contactComponent/MapSection"));

const ContactUs = () => {
  const seo = PAGE_SEO.contact;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <ContactHero />
      <Suspense fallback={<ContactSectionPlaceholder />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<MapSectionPlaceholder />}>
        <MapSection />
      </Suspense>
    </>
  );
};

export default ContactUs;
