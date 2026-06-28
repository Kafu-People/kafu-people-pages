/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { isArticleDetailPath, isDarkHeroRoute } from "../constants/navbar";

const NavScrollContext = createContext(null);

export function NavScrollProvider({ children }) {
  const { pathname } = useLocation();
  const forceSolid = isArticleDetailPath(pathname);
  const [sentinelEl, setSentinelEl] = useState(null);
  const [pastTop, setPastTop] = useState(forceSolid);

  useEffect(() => {
    if (forceSolid) {
      setPastTop(true);
      return;
    }

    setPastTop(false);

    if (!sentinelEl) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastTop(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(sentinelEl);
    return () => observer.disconnect();
  }, [forceSolid, pathname, sentinelEl]);

  const value = useMemo(() => {
    const isScrolledPastTop = forceSolid || pastTop;
    const useLightNavText =
      !forceSolid && !pastTop && isDarkHeroRoute(pathname);

    return {
      isScrolledPastTop,
      useLightNavText,
      registerSentinel: setSentinelEl,
    };
  }, [forceSolid, pastTop, pathname]);

  return (
    <NavScrollContext.Provider value={value}>
      {children}
    </NavScrollContext.Provider>
  );
}

export function useNavScroll() {
  const ctx = useContext(NavScrollContext);
  if (!ctx) {
    throw new Error("useNavScroll must be used within NavScrollProvider");
  }
  return ctx;
}
