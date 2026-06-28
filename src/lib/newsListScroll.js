import { createListReturnScroll } from "./listReturnScroll";

const newsList = createListReturnScroll({
  section: "news",
  listPath: "/news",
  detailPathPrefix: "/news/",
  cardIdPrefix: "news-card",
});

export const setReturnNewsId = newsList.setReturnId;
export const markNewsListScrollRestore = newsList.markRestore;
export const prepareNewsListReturn = newsList.prepareReturn;
export const clearNewsListScroll = newsList.clear;
export const newsIdFromPath = newsList.idFromPath;
export const scrollToReturnNewsCardWithRetry = newsList.scrollToReturnCardWithRetry;
