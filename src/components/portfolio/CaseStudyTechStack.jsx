export default function CaseStudyTechStack({ techStack }) {
  if (!techStack?.length) return null;

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-cDarkBlue sm:text-3xl">
        Technology Stack
      </h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full border border-primary/20 bg-surface px-4 py-2 text-sm font-medium text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}
