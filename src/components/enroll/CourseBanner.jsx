import React from "react";
import PageHero from "../ui/PageHero";

function CourseBanner() {
  return (
    <PageHero
      image="/images/enroll/enroll.svg"
      imageAlt="Our Courses"
      height="h-[500px]"
      priority
      containerClassName="max-w-4xl"
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase">
        Our Courses
      </h1>
      <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
        Explore courses like AI, Digital Marketing, Web Development, and Cyber Security to enhance your skills and stay ahead in the digital era.
      </p>
    </PageHero>
  );
}

export default CourseBanner;
