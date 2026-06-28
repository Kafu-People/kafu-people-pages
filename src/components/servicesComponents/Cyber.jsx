import React from "react";
import PageHero from "../ui/PageHero";

const SERVICE_HERO_IMAGE = "/images/service.webp";

function Cyber() {
  return (
    <PageHero
      image={SERVICE_HERO_IMAGE}
      imageAlt="Our Services"
      priority
      align="left"
      overlay={false}
      containerClassName="max-w-xl sm:ml-6 lg:ml-24"
    >
      <h1 className="mb-4 text-white text-4xl font-bold sm:text-5xl lg:text-6xl">Our Services</h1>
      <p className="text-lg leading-relaxed text-cWhite/95">
        Turn your vision into reality with intelligent AI agents, fast&#x2011;launch SaaS MVPs, real&#x2011;time cloud dashboards, and high&#x2011;impact business websites.
      </p>
    </PageHero>
  );
}

export default Cyber;
