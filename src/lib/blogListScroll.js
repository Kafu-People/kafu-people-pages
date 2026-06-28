import { createListReturnScroll } from "./listReturnScroll";

const blogList = createListReturnScroll({
  section: "blogs",
  listPath: "/blogs",
  detailPathPrefix: "/blogs/",
  cardIdPrefix: "blog-card",
});

export const setReturnBlogId = blogList.setReturnId;
export const markBlogListScrollRestore = blogList.markRestore;
export const prepareBlogListReturn = blogList.prepareReturn;
export const clearBlogListScroll = blogList.clear;
export const blogIdFromPath = blogList.idFromPath;
export const scrollToReturnBlogCardWithRetry = blogList.scrollToReturnCardWithRetry;
