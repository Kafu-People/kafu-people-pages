import {
  SERVICE_CATEGORIES,
  getOfferingsByCategory,
} from "../../constants/serviceCategories";

export function CyberServicePlaceholder() {
  return (
    <div className="bg-surface py-16 font-inter lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-24">
        <div className="mb-14 text-center">
          <div className="mx-auto mb-2 h-4 w-24 animate-pulse rounded bg-slate-200" />
          <div className="mx-auto mb-4 h-10 w-72 max-w-full animate-pulse rounded bg-slate-200" />
          <div className="mx-auto h-16 w-full max-w-3xl animate-pulse rounded bg-slate-100" />
        </div>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="h-40 animate-pulse rounded-xl border border-slate-200 bg-white"
            />
          ))}
        </div>

        <div className="space-y-10">
          {SERVICE_CATEGORIES.map((category) => {
            const offerings = getOfferingsByCategory(category.id);
            if (offerings.length === 0) return null;

            return (
              <section
                key={category.id}
                className="overflow-hidden shadow-lg"
              >
                <div className="h-36 animate-pulse bg-slate-300" />
                <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3 sm:p-8">
                  {offerings.slice(0, 3).map((service) => (
                    <div
                      key={service.title}
                      className="h-44 animate-pulse rounded-xl bg-white/80"
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
