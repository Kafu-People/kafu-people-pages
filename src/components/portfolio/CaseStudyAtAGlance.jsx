export default function CaseStudyAtAGlance({ role, timeline, techStack, liveUrl }) {
  const items = [
    { label: "Role", value: role },
    { label: "Timeline", value: timeline },
    {
      label: "Tech Stack",
      value: techStack?.slice(0, 3).join(", ") + (techStack?.length > 3 ? " +more" : ""),
    },
    ...(liveUrl ? [{ label: "Live Site", value: liveUrl, isLink: true }] : []),
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
            {item.label}
          </p>
          {item.isLink ? (
            <a
              href={item.value}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-primary hover:underline sm:text-base"
            >
              Live Site &rarr;
            </a>
          ) : (
            <p className="text-sm font-semibold text-cDarkBlue sm:text-base">
              {item.value}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
