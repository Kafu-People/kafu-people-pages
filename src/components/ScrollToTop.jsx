import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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

export default function ScrollToTop() {
  const { pathname, state } = useLocation();
  const prevPathRef = useRef(pathname);

  useLayoutEffect(() => {
    const prev = prevPathRef.current;

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

    window.scrollTo(0, 0);
    prevPathRef.current = pathname;
  }, [pathname, state]);

  return null;
}
