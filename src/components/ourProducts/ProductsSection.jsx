import PageHero from "../ui/PageHero";

const PORTFOLIO_HERO_IMAGE = "/images/product.webp";

const ProductsSection = () => {
  return (
    <PageHero
      image={PORTFOLIO_HERO_IMAGE}
      imageAlt="Our Products"
      imageClassName="brightness-125"
      overlay={20}
      priority
      containerClassName="max-w-4xl"
    >
      <h2 className="mb-4 text-2xl font-extrabold text-cWhite sm:text-4xl lg:text-5xl">
        Innovative Products by{" "}
        <span className="whitespace-nowrap text-cWhite">Kafu People</span>
      </h2>
      <p className="text-sm leading-relaxed text-cWhite/90 sm:text-base lg:text-lg">
        Discover a world of innovation with Kafu People&apos;s range of
        cutting-edge products, meticulously crafted to meet the diverse
        needs and challenges of the modern IT landscape.
      </p>
    </PageHero>
  );
};

export default ProductsSection;
