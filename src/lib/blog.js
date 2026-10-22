import { ALL_POSTS } from '../content/blog/posts';

export function getAllPosts() {
  return ALL_POSTS.filter((post) => !post.draft).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug) {
  return ALL_POSTS.find((post) => post.slug === slug);
}

export function getPostsByCategory(category) {
  if (!category || category === 'All') return getAllPosts();
  return getAllPosts().filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getAllCategories() {
  const categories = new Set(ALL_POSTS.map((post) => post.category));
  return ['All', ...Array.from(categories)];
}

export function getRelatedPosts(currentSlug, category, limit = 3) {
  return ALL_POSTS.filter(
    (post) => post.slug !== currentSlug && post.category === category
  ).slice(0, limit);
}

export function calculateReadingTime(text) {
  const wordsPerMinute = 220;
  const words = text ? text.trim().split(/\s+/).length : 0;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
