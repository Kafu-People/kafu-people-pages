import mission from "../../assets/images/aboutUs/mission.webp";

const MissionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white font-inter px-4 py-12 lg:mx-20 sm:mx-8 md:px-8 gap-y-8">
      <div className="flex-1 mb-6 md:mb-0 md:pr-8 text-center md:text-left">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 text-left">
          Our mission
        </h2>
        <p className="text-base md:text-lg text-left text-muted leading-relaxed">
          At <span className="font-semibold text-slate-900">Kafu People</span>,
          we help startups and growing businesses leverage technology with
          clarity and craftsmanship. We deliver AI, cloud, and full-stack
          solutions that are scoped honestly, built to last, and aligned with
          your business goals — so you can ship faster and scale with confidence.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img loading="lazy"           src={mission}
          alt="Mission illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default MissionSection;
