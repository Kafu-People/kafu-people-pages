import { useEffect, useLayoutEffect } from "react";

/** useLayoutEffect on the client; useEffect during SSR (avoids React SSR warnings). */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
