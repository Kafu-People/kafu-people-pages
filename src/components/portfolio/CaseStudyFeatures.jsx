export default function CaseStudyFeatures({ features }) {
  if (!features?.length) return null;

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-cDarkBlue sm:text-3xl">
        Key Features
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-gray-200 p-4 shadow-sm sm:p-6"
          >
            <h3 className="mb-2 text-base font-bold text-cDarkBlue sm:text-lg">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
