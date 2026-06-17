import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

const CTABanner = () => {
  return (
    <section className="bg-white px-4 py-12 font-inter sm:px-8 sm:py-16 lg:py-24 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10 lg:gap-12">
        <article className="px-4 py-2 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            To the World
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-slate-700 sm:text-lg lg:max-w-5xl">
            Kafu People is proudly headquartered in Amsterdam, a city known for
            innovation, creativity, and global connection. While our roots are in
            Europe, our reach extends far beyond it. Our distributed team spans
            multiple time zones, cultures, and technical disciplines — enabling
            us to collaborate around the clock and bring diverse perspectives to
            every project we build.
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-base font-semibold text-slate-900 sm:text-lg lg:max-w-5xl">
            Global team, local touch.
          </p>
          <p className="mx-auto mt-2 max-w-4xl text-base leading-relaxed text-slate-700 sm:text-lg lg:max-w-5xl">
            That&apos;s how we create scalable products and deliver world-class
            results.
          </p>
        </article>

        <div className="flex w-full flex-col gap-0">
          <div className="flex justify-center px-2 leading-none sm:px-4">
            <img
              src="/images/world.webp"
              alt="Kafu People global team across the world"
              className="block h-auto w-full max-w-3xl object-contain sm:max-w-4xl lg:max-w-[52rem]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="-mt-3 rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-slate-900 px-6 py-10 shadow-xl sm:-mt-5 sm:px-10 sm:py-12 lg:-mt-6 lg:px-14">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
              <div>
                <h2 className="text-2xl font-bold text-cWhite sm:text-3xl lg:text-[2rem] lg:leading-tight">
                  Ready to move from idea to production?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                  If you're serious about building, we're ready to move.
                  No fluff. No waiting. Just smart, focused execution built around your goals.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-4 rounded-full bg-white py-2 pl-8 pr-2 text-base font-bold text-slate-900 shadow-md transition hover:bg-slate-100 sm:text-lg"
              >
                <span>Let&apos;s Get To Work</span>
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white sm:h-11 sm:w-11"
                  aria-hidden
                >
                  <HiArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
