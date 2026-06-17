import { lazy, Suspense } from "react";
import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import NewsEventsSection from "../components/EventComponent/NewsEventsSection";
import EventComponent from "../components/EventComponent/EventComponent";
import BlogSection from "../components/EventComponent/BlogSection";
import { ContactSectionPlaceholder } from "../components/contactComponent/ContactSectionPlaceholder";

const ContactSection = lazy(() => import("../components/ContactSection"));

const NewsAndEvents = () => {
  const seo = PAGE_SEO.news;

  return (
  <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <NewsEventsSection />
      <EventComponent />
      <BlogSection />
      <Suspense fallback={<ContactSectionPlaceholder />}>
        <ContactSection />
      </Suspense>
    </>
  );
};

export default NewsAndEvents;
