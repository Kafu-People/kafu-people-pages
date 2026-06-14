import { useCookieConsent } from "../../context/useCookieConsent";
import CookieFeatureFallback from "../cookies/CookieFeatureFallback";
import {
  OFFICE_MAPS_EMBED_URL,
  OFFICE_MAPS_URL,
} from "../../constants/site";

const MapSection = () => {
  const { hydrated, allowFunctional } = useCookieConsent();

  if (!hydrated) {
    return (
      <div
        className="relative h-[50vh] md:h-[70vh] w-full animate-pulse bg-gray-200 font-inter"
        aria-hidden
      />
    );
  }

  if (!allowFunctional) {
    return (
      <section
        className="relative flex h-[50vh] md:h-[70vh] w-full items-center justify-center bg-gray-100 px-4 font-inter"
        aria-label="Office location map"
      >
        <div className="w-full max-w-lg">
          <CookieFeatureFallback
            title="Map is disabled"
            description="The embedded map loads third-party content. Enable functional cookies to view it here, or open the location in Google Maps."
            className="shadow-sm"
          />
          <a
            href={OFFICE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm font-semibold text-cBrightBlue underline hover:text-CPurple"
          >
            Open location in Google Maps (new tab)
          </a>
        </div>
      </section>
    );
  }

  return (
    <div
      className="relative h-[50vh] md:h-[70vh] w-full font-inter"
      style={{
        width: "100%",
        height: "70vh",
      }}
    >
      <iframe
        title="Kafu People office location — Brantjesoever 4, Purmerend"
        src={OFFICE_MAPS_EMBED_URL}
        className="absolute inset-0 h-full w-full"
        style={{
          border: 0,
          width: "100%",
          height: "100%",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapSection;
