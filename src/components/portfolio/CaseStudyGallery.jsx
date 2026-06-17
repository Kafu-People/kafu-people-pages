import { useState, useCallback } from "react";

export default function CaseStudyGallery({ images, title }) {
  const [current, setCurrent] = useState(0);

  if (!images?.length) return null;

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  if (images.length <= 2) {
    return (
      <>
        <h2 className="mb-6 text-2xl font-bold text-cDarkBlue sm:text-3xl">
          Gallery
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              loading="lazy"
              className="w-full rounded-xl object-cover shadow-md"
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-cDarkBlue sm:text-3xl">
        Gallery
      </h2>
      <div className="relative overflow-hidden rounded-xl shadow-md">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full shrink-0">
              <img
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
          aria-label="Previous image"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
          aria-label="Next image"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
