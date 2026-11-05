import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import partners from "../../data/partners";

const Partners = () => {
  return (
    <section className="bg-slate-50 px-4 py-16 lg:py-24 font-inter sm:px-8 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            OUR PARTNERS
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold leading-snug text-slate-900 sm:text-3xl lg:text-4xl">
            Trusted partners who extend what we deliver.
          </h2>
          <span
            className="mx-auto mt-5 block h-0.5 w-12 rounded-full bg-primary"
            aria-hidden
          />
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:p-8"
            >
              <img
                src={partner.logo}
                alt={`${partner.legalName} logo`}
                width="120"
                height="120"
                loading="lazy"
                decoding="async"
                className="h-24 w-24 shrink-0 rounded-xl sm:h-28 sm:w-28"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {partner.name}
                </h3>
                <p className="mb-3 text-sm text-slate-500">{partner.location}</p>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {partner.description}
                </p>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Visit {partner.name}
                  <HiArrowTopRightOnSquare aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
