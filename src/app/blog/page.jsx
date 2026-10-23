import { getAllPosts, getAllCategories } from '../../lib/blog';
import { pageMeta } from '../../lib/meta';
import BlogList from '../../components/BlogList';

export const metadata = pageMeta({
  title: 'Writing: guides on careers, AI tools and automation',
  description:
    'Plain, step-by-step guides by Muddassir Ali on n8n automation, using Claude at work, speaking up in meetings, salary negotiation and saying no politely.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts().map(({ slug, title, excerpt, category, readingTime, date }) => ({
    slug,
    title,
    excerpt,
    category,
    readingTime,
    date,
  }));
  const categories = getAllCategories();

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="label">Writing</p>
          <h1 className="page-title">Guides you can use the same day.</h1>
          <p className="page-lede">
            Careers, AI tools and automation, written for students, freshers and people early in their working
            life. Short steps, real examples, nothing to buy.
          </p>
        </div>
      </header>
      <section className="section section--tight">
        <div className="wrap wrap--narrow" style={{ marginInline: 'auto' }}>
          <BlogList posts={posts} categories={categories} />
        </div>
      </section>
    </>
  );
}
