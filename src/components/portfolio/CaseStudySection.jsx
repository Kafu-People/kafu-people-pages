export default function CaseStudySection({ heading, children, className = "" }) {
  return (
    <section className={className}>
      {heading && (
        <h2 className="mb-6 text-2xl font-bold text-cDarkBlue sm:text-3xl">
          {heading}
        </h2>
      )}
      {children}
    </section>
  );
}
