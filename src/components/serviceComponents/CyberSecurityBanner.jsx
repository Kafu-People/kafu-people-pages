import React from "react";
import service from "../../assets/images/service/service.webp";
import PageHero from "../ui/PageHero";

function CyberSecurityBanner() {
  return (
    <PageHero
      image={service}
      imageAlt="Cyber Security"
      height="h-[400px]"
      priority
      align="left"
      containerClassName="max-w-lg ml-16"
    >
      <h1 className="text-5xl font-bold mb-4">Cyber Security</h1>
      <p className="text-lg leading-relaxed">
        Protect your digital assets with our robust <br /> cybersecurity
        measures.
      </p>
    </PageHero>
  );
}

export default CyberSecurityBanner;
