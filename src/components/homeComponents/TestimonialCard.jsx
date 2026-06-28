/* eslint-disable react/prop-types */

const TestimonialCard = ({ quote, name, location, project }) => (
  <blockquote className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
    <p className="flex-1 text-sm leading-relaxed text-slate-700">
      &ldquo;{quote}&rdquo;
    </p>
    <footer className="mt-6 border-t border-slate-100 pt-4">
      <cite className="not-italic">
        <span className="block font-semibold text-slate-900">{name}</span>
        <span className="mt-1 block text-sm text-muted">{location}</span>
        <span className="mt-1 block text-xs font-medium text-accent">
          {project}
        </span>
      </cite>
    </footer>
  </blockquote>
);

export default TestimonialCard;
