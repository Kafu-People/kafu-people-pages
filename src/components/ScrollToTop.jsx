import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { useLocation } from "react-router-dom";
import { isArticleDetailPath } from "../constants/navbar";
import {
  blogIdFromPath,
  clearBlogListScroll,
  markBlogListScrollRestore,
  setReturnBlogId,
} from "../lib/blogListScroll";
import {
  clearNewsListScroll,
  markNewsListScrollRestore,
  newsIdFromPath,
  setReturnNewsId,
} from "../lib/newsListScroll";

const LIST_RETURN_ROUTES = [
  {
    listPath: "/blogs",
    detailPrefix: "/blogs/",
    setReturnId: setReturnBlogId,
    markRestore: markBlogListScrollRestore,
    clear: clearBlogListScroll,
    idFromPath: blogIdFromPath,
    stateKey: "returnBlogId",
  },
  {
    listPath: "/news",
    detailPrefix: "/news/",
    setReturnId: setReturnNewsId,
    markRestore: markNewsListScrollRestore,
    clear: clearNewsListScroll,
    idFromPath: newsIdFromPath,
    stateKey: "returnNewsId",
  },
];

function scrollWindowToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTop() {
  const { pathname, state } = useLocation();
  const prevPathRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const prev = prevPathRef.current;

    if (prev === null) {
      prevPathRef.current = pathname;
      if (isArticleDetailPath(pathname)) {
        clearBlogListScroll();
        clearNewsListScroll();
        scrollWindowToTop();
      }
      return;
    }

    if (pathname === prev) return;

    const route = LIST_RETURN_ROUTES.find((item) => pathname === item.listPath);
    if (route && prev.startsWith(route.detailPrefix)) {
      route.setReturnId(state?.[route.stateKey] || route.idFromPath(prev));
      route.markRestore();
      prevPathRef.current = pathname;
      return;
    }

    if (route && !prev.startsWith(route.detailPrefix)) {
      route.clear();
    }

    scrollWindowToTop();
    prevPathRef.current = pathname;
  }, [pathname, state]);

  return null;
}
