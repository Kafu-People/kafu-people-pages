import React from "react";
import PageHero from "../ui/PageHero";

const NewsEventsSection = () => {
  return (
    <PageHero
      image="/images/newsAndEvents/news.webp"
      imageAlt="News & Events"
      height="min-h-[60vh] lg:min-h-[90vh]"
      priority
      align="left"
      containerClassName="max-w-lg sm:max-w-xl md:max-w-3xl"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cWhite mb-4">
        NEWS & EVENTS
      </h1>
      <p className="text-cWhite text-base sm:text-lg md:text-xl">
        Stay updated with the latest happenings at KAFUPEOPLE Pvt. Ltd.
      </p>
    </PageHero>
  );
};

export default NewsEventsSection;
