export function BlogGridPlaceholder() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg"
        >
          <div className="h-48 animate-pulse bg-slate-200" />
          <div className="space-y-3 p-6">
            <div className="h-4 w-16 animate-pulse rounded bg-slate-200" />
            <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
