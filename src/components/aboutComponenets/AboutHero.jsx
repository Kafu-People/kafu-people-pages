import PageHero from "../ui/PageHero";

const AboutHero = () => {
  return (
    <PageHero image="/images/about.webp" imageAlt="About Kafu People" priority>
      <h1 className="mb-4 text-4xl font-bold text-cWhite sm:text-5xl lg:text-6xl">
        Our mission
      </h1>
      <p className="text-base leading-relaxed text-cWhite/90 md:text-lg">
        At <span className="font-semibold text-cWhite">Kafu People</span>, we
        help startups and growing businesses leverage technology with clarity
        and craftsmanship. We deliver AI, cloud, and full-stack solutions that
        are scoped honestly, built to last, and aligned with your business
        goals — so you can ship faster and scale with confidence.
      </p>
    </PageHero>
  );
};

export default AboutHero;
