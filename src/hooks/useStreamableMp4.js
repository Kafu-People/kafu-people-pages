import { useEffect, useState } from "react";
import { getStreamableVideoId } from "../constants/media";

/**
 * Resolves a Streamable page URL to a signed CDN MP4 URL via their API.
 * @see https://api.streamable.com/videos/{id}
 */
export function useStreamableMp4(streamablePageUrl) {
  const [src, setSrc] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!streamablePageUrl) {
      setSrc(null);
      setFailed(false);
      return undefined;
    }

    const id = getStreamableVideoId(streamablePageUrl);
    if (!id) {
      setFailed(true);
      setSrc(null);
      return undefined;
    }

    let cancelled = false;

    const runFetch = () => {
      if (cancelled) return;

      fetch(`https://api.streamable.com/videos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Streamable API ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        // Prefer 720p mp4 for full-screen hero; mp4-mobile (360p) looked fine in iframe
        // but is too soft when stretched with object-cover.
        const url =
          data?.files?.mp4?.url ?? data?.files?.["mp4-mobile"]?.url ?? null;
        if (url) setSrc(url);
        else setFailed(true);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    };

    setFailed(false);
    setSrc(null);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(runFetch, { timeout: 3000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = setTimeout(runFetch, 1200);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [streamablePageUrl]);

  return { src, failed };
}
