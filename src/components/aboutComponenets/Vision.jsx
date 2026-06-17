import { FaEye } from "react-icons/fa";

const VISION_IMAGE = "/images/vision.webp";

const Vision = () => {
  return (
    <section className="font-inter px-4 py-16 lg:py-24 sm:px-8 lg:px-16 xl:px-20">
      <div className="relative mx-auto min-h-[360px] max-w-6xl overflow-hidden rounded-2xl md:min-h-[420px]">
        <img
          src={VISION_IMAGE}
          alt=""
          width={1200}
          height={500}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/25 via-slate-900/75 to-slate-950 md:from-transparent md:via-slate-900/70 md:to-slate-950"
          aria-hidden
        />

        <div className="relative flex min-h-[360px] flex-col justify-center md:min-h-[420px] md:flex-row">
          <div className="hidden flex-1 md:block" aria-hidden />

          <div className="flex flex-1 flex-col justify-center px-6 py-10 sm:px-8 md:max-w-md md:px-10 lg:max-w-lg lg:px-14">
            <FaEye
              className="mb-4 text-2xl text-primary-light"
              aria-hidden
            />
            <h2 className="mb-3 text-2xl font-bold text-cWhite sm:text-3xl">
              Our vision
            </h2>
            <span
              className="mb-5 block h-0.5 w-12 rounded-full bg-primary-light"
              aria-hidden
            />
            <p className="text-base leading-relaxed text-cWhite/90 md:text-lg">
              We aim to be a trusted technology partner for startups and growing
              businesses in Europe and beyond — known for shipping reliable
              software, communicating clearly, and helping teams turn complex ideas
              into products that work in the real world. We measure success by your
              outcomes: faster delivery, maintainable code, and systems you can
              scale with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
