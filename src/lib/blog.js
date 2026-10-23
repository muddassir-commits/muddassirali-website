import { ALL_POSTS } from '../content/blog/posts';

export function getAllPosts() {
  return ALL_POSTS.filter((post) => !post.draft).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug) {
  return ALL_POSTS.find((post) => post.slug === slug && !post.draft);
}

export function getAllCategories() {
  return ['All', ...new Set(getAllPosts().map((post) => post.category))];
}

// Same-topic posts first, then the newest others, so every post links onward.
export function getRelatedPosts(currentSlug, category, limit = 3) {
  const others = getAllPosts().filter((post) => post.slug !== currentSlug);
  const same = others.filter((post) => post.category === category);
  const rest = others.filter((post) => post.category !== category);
  return [...same, ...rest].slice(0, limit);
}
