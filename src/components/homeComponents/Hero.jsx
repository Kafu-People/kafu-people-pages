import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookMeetingButton from "../ui/BookMeetingButton";
import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";
import {
  HERO_POSTER_SRC,
  HERO_VIDEO_URL,
  getDirectVideoSrc,
  isStreamableUrl,
} from "../../constants/media";
import { useStreamableMp4 } from "../../hooks/useStreamableMp4";

export default function Hero() {
  const [directVideoFailed, setDirectVideoFailed] = useState(false);
  const [playbackFailed, setPlaybackFailed] = useState(false);
  const isStreamable = isStreamableUrl(HERO_VIDEO_URL);
  const { src: streamableSrc, failed: streamableFailed } = useStreamableMp4(
    isStreamable ? HERO_VIDEO_URL : null
  );
  const directVideoSrc = getDirectVideoSrc(HERO_VIDEO_URL);

  const videoSrc = isStreamable ? streamableSrc : directVideoSrc;
  const videoUnavailable =
    (isStreamable && streamableFailed) ||
    (directVideoSrc && directVideoFailed) ||
    (!isStreamable && !directVideoSrc);
  const showVideo = videoSrc && !videoUnavailable && !playbackFailed;

  useEffect(() => {
    setPlaybackFailed(false);
    setDirectVideoFailed(false);
  }, [videoSrc]);

  return (
    <section
      className={`relative box-border flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden font-inter ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT}`}
    >
      <img
        src={HERO_POSTER_SRC}
        alt=""
        width={1920}
        height={1080}
        fetchpriority="high"
        loading="eager"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      />

      {showVideo ? (
        <video
          key={videoSrc}
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER_SRC}
          aria-hidden
          onError={() => {
            setPlaybackFailed(true);
            setDirectVideoFailed(true);
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 z-[2] bg-black/50" aria-hidden />
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-r from-black/35 via-black/15 to-transparent lg:bg-gradient-to-r"
        aria-hidden
      />

      <div className="relative z-10 w-full px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24 xl:px-32">
        <div className="container mx-auto flex flex-1 flex-col justify-center py-8 lg:py-12">
          <div className="mx-auto w-full max-w-2xl text-center [text-shadow:0_1px_2px_rgb(0_0_0/0.85),0_2px_18px_rgb(0_0_0/0.65)] lg:mx-0 lg:text-left">
            <h1 className="mb-6 text-3xl font-bold leading-snug text-cWhite sm:text-4xl lg:text-5xl">
              Build and scale with{" "}
              <span className="text-primary-light">AI, Cloud, and Full-stack</span>{" "}
              expertise
            </h1>
            <p className="mb-8 text-base leading-relaxed text-slate-200 sm:text-lg lg:mb-10">
              We help startups and growing businesses move from idea to
              production-ready products — with practical AI workflows, end-to-end
              development, and scalable AWS architecture.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <BookMeetingButton buttonText="Book a Meeting" variant="secondary" />
              <Link
                to="/portfolio"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/90 px-6 py-3 text-sm font-semibold text-cWhite transition hover:bg-white/10"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
