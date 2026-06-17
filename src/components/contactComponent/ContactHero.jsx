import PageHero from "../ui/PageHero";

const CONTACT_HERO_IMAGE = "/images/contact-form.webp";

const ContactHero = () => {
  return (
    <PageHero
      image={CONTACT_HERO_IMAGE}
      imageAlt="Contact Kafu People"
      imageClassName="brightness-125"
      overlay={40}
      priority
    >
      <h1 className="mb-4 text-4xl font-bold text-cWhite sm:text-5xl lg:text-6xl">
        Contact Us
      </h1>
      <p className="text-base leading-relaxed text-cWhite/90 sm:text-lg">
        Book a meeting or send a message — we help startups and growing teams
        ship AI, cloud, and full-stack solutions. We typically respond within
        one business day.
      </p>
    </PageHero>
  );
};

export default ContactHero;
