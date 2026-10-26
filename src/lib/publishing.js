// Shared scheduling rule for blog posts and news items.
//
// A post is published once its date (UTC midnight) has passed. Pages render
// per request, so a scheduled post goes live on its date without a redeploy.

/** The publish date string of a blog post (datePublished) or news item (date). */
export function getPostDate(post) {
  return post?.datePublished || post?.date || null;
}

/** True when the post's publish date is on or before `now`. Undated posts count as published. */
export function isPublished(post, now = new Date()) {
  const date = getPostDate(post);
  if (!date) return true;
  const publishAt = new Date(date);
  if (Number.isNaN(publishAt.getTime())) return true;
  return publishAt.getTime() <= now.getTime();
}

/** Published posts only, newest first. */
export function getPublished(posts, now = new Date()) {
  return posts
    .filter((post) => isPublished(post, now))
    .sort((a, b) => new Date(getPostDate(b)) - new Date(getPostDate(a)));
}
