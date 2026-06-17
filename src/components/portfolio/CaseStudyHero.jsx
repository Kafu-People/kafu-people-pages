import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";

export default function CaseStudyHero({
  title,
  tagline,
  category,
  outcome,
  image,
}) {
  return (
    <section
      className={`relative box-border flex min-h-[60vh] w-full flex-col justify-center overflow-hidden font-inter ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT}`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
        aria-hidden
      />
      {image && (
        <img           src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary-light">
            {category}
          </span>
          <h1 className="mb-4 text-3xl font-bold leading-snug text-cWhite sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            {tagline}
          </p>
          {outcome && (
            <p className="text-base font-semibold text-primary-light sm:text-lg">
              {outcome}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
