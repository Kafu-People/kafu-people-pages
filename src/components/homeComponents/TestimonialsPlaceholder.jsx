import { TESTIMONIALS } from "../../constants/site";
import TestimonialCard from "./TestimonialCard";

export function TestimonialsPlaceholder() {
  const preview = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-surface py-16 font-inter lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Client testimonials
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Trusted by teams worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Real feedback from founders and engineering leaders we have partnered
            with on products, migrations, and production systems.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preview.map(({ id, quote, name, location, project }) => (
            <TestimonialCard
              key={id}
              quote={quote}
              name={name}
              location={location}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
