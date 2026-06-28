/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
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

/** Extra directional scrim on top of the base overlay for text-side contrast. */
const SCRIM_CLASSES = {
  none: "",
  soft: {
    center: "bg-gradient-to-b from-black/20 via-transparent to-black/25",
    left: "bg-gradient-to-r from-black/40 via-black/20 to-transparent",
  },
  strong: {
    center: "bg-gradient-to-b from-black/45 via-black/25 to-black/40",
    left: "bg-gradient-to-r from-black/70 via-black/50 to-black/15",
  },
};

const HERO_TEXT_SHADOW =
  "[text-shadow:0_1px_2px_rgb(0_0_0/0.85),0_2px_18px_rgb(0_0_0/0.65)]";

export default function PageHero({
  image,
  imageAlt = "",
  imageClassName = "",
  overlay = 50,
  scrim = "soft",
  height = "full",
  align = "center",
  priority = false,
  imageWidth = 1920,
  imageHeight = 1080,
  className = "",
  containerClassName = "",
  children,
}) {
  const heightClass =
    height === "full"
      ? "min-h-[100dvh]"
      : height;

  const overlayClass =
    OVERLAY_CLASSES[overlay] ?? OVERLAY_CLASSES[50];

  return (
    <section
      className={`relative box-border flex w-full flex-col justify-center overflow-hidden font-inter ${heightClass} ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT} ${className}`}
    >
      {priority && image ? (
        <Helmet>
          <link rel="preload" as="image" href={image} fetchpriority="high" />
        </Helmet>
      ) : null}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
        aria-hidden
      />
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          fetchpriority={priority ? "high" : undefined}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
        />
      ) : null}

      {overlay !== false && (
        <>
          <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
          {scrim !== "none" && (
            <div
              className={`absolute inset-0 ${SCRIM_CLASSES[scrim]?.[align] ?? SCRIM_CLASSES.soft[align] ?? ""}`}
              aria-hidden
            />
          )}
        </>
      )}

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16">
        <div
          className={`w-full text-cWhite ${HERO_TEXT_SHADOW} ${ALIGN_CLASSES[align]} ${containerClassName}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
