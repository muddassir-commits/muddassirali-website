import { getAllPosts } from '../lib/blog';
import { site } from '../lib/site';

export const dynamic = 'force-static';

const SITE_UPDATED = '2026-10-23';

export default function sitemap() {
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/training', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' },
  ].map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: SITE_UPDATED,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.updated || post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
