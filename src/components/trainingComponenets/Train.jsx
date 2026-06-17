import React from "react";
import train from "../../assets/images/traning/train.webp";
import PageHero from "../ui/PageHero";

function Train() {
  return (
    <PageHero
      image={train}
      imageAlt="Training"
      height="h-[400px]"
      priority
      align="left"
      containerClassName="max-w-lg ml-10"
    >
      <p className="text-lg leading-relaxed">Innovate Smarter with AI</p>
      <h1 className="text-4xl font-bold mb-4">
        Empowering Innovation with Smart Solutions
      </h1>
      <p className="text-lg leading-relaxed">
        Leading the way in Artificial <br /> Intelligence
      </p>
    </PageHero>
  );
}

export default Train;
