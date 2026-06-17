/* eslint-disable react/prop-types */
import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";

const ALIGN_CLASSES = {
  center: "mx-auto max-w-3xl p-6 text-center sm:p-8",
  left: "max-w-lg px-6 text-left",
};

const OVERLAY_CLASSES = {
  0: "bg-black/0",
  5: "bg-black/5",
  10: "bg-black/10",
  15: "bg-black/15",
  20: "bg-black/20",
  25: "bg-black/25",
  30: "bg-black/30",
  35: "bg-black/35",
  40: "bg-black/40",
  45: "bg-black/45",
  50: "bg-black/50",
  55: "bg-black/55",
  60: "bg-black/60",
  65: "bg-black/65",
  70: "bg-black/70",
  75: "bg-black/75",
  80: "bg-black/80",
  85: "bg-black/85",
  90: "bg-black/90",
  95: "bg-black/95",
  100: "bg-black/100",
};

export default function PageHero({
  image,
  imageAlt = "",
  imageClassName = "",
  overlay = 50,
  height = "full",
  align = "center",
  priority = false,
  className = "",
  containerClassName = "",
  children,
}) {
  const heightClass =
    height === "full"
      ? "min-h-[100dvh]"
      : height;

  return (
    <section
      className={`relative box-border flex w-full flex-col justify-center overflow-hidden font-inter ${heightClass} ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT} ${className}`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
        aria-hidden
      />
      {image ? (
        <img           src={image}
          alt={imageAlt}
          fetchpriority={priority ? "high" : undefined}
          className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
        />
      ) : null}

      {overlay !== false && (
        <div className={`absolute inset-0 ${OVERLAY_CLASSES[overlay]}`} aria-hidden />
      )}

      <div className="relative z-10 w-full px-4 drop-shadow-lg sm:px-8 lg:px-16">
        <div className={`w-full ${ALIGN_CLASSES[align]} ${containerClassName}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
