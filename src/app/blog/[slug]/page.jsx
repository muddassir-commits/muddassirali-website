import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_POSTS } from '../../../content/blog/posts';
import { getPostBySlug, getRelatedPosts } from '../../../lib/blog';
import { renderMarkdown } from '../../../lib/markdown';
import { pageMeta } from '../../../lib/meta';
import { site } from '../../../lib/site';

export const dynamicParams = false;

export async function generateStaticParams() {
  return ALL_POSTS.filter((p) => !p.draft).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Guide not found' };
  const meta = pageMeta({
    title: post.seoTitle || post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
  });
  // Post SEO titles are already specific, so they stand alone without the site name suffix.
  meta.title = { absolute: post.seoTitle || post.title };
  meta.openGraph.publishedTime = post.date;
  meta.openGraph.modifiedTime = post.updated || post.date;
  meta.openGraph.authors = [`${site.url}/about`];
  return meta;
}

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;
  const related = getRelatedPosts(post.slug, post.category, 3);
  const html = renderMarkdown(post.body);
  const toc = (post.toc || []).filter((t) => t.id !== 'faq');

  const graph = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.excerpt,
      image: `${site.url}${site.ogImage}`,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      inLanguage: 'en-IN',
      author: { '@id': `${site.url}/#person` },
      publisher: { '@id': `${site.url}/#person` },
      mainEntityOfPage: url,
      keywords: post.primaryKeyword,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Writing', item: `${site.url}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];
  if (post.faqs && post.faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
      />
      <header className="article-head">
        <div className="wrap">
          <nav className="breadcrumb label" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Writing</Link>
              </li>
              <li aria-current="page">{post.category}</li>
            </ol>
          </nav>
          <h1 className="article-title">{post.title}</h1>
          <p className="article-dek">{post.excerpt}</p>
          <div className="byline">
            <img src={site.portrait} alt="" width="44" height="44" />
            <div>
              <strong>
                <Link href="/about" style={{ color: 'inherit' }}>
                  Muddassir Ali
                </Link>
              </strong>
              <span className="label">
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="wrap article-layout">
        {toc.length > 0 && (
          <aside className="article-aside">
            <nav className="toc" aria-label="In this guide">
              <details open>
                <summary>In this guide</summary>
                <ol>
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.title.replace(/^\d+\.\s*/, '')}</a>
                    </li>
                  ))}
                  {post.faqs && post.faqs.length > 0 && (
                    <li>
                      <a href="#faq">Questions people ask</a>
                    </li>
                  )}
                </ol>
              </details>
            </nav>
          </aside>
        )}

        <div>
          {post.aeoQuickAnswer && (
            <div className="summary">
              <p className="label">The short answer</p>
              <p>{post.aeoQuickAnswer}</p>
            </div>
          )}

          <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

          {post.faqs && post.faqs.length > 0 && (
            <section className="faq" id="faq" aria-labelledby="faq-title">
              <h2 id="faq-title">Questions people ask</h2>
              {post.faqs.map((f) => (
                <details key={f.question}>
                  <summary>{f.question}</summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </section>
          )}

          <aside className="author-box" aria-labelledby="author-title">
            <img src={site.portrait} alt="" width="64" height="64" loading="lazy" />
            <div>
              <h2 id="author-title">Written by Muddassir Ali</h2>
              <p>
                Marketer from Kanpur and founder of Veloxis Global. Google certified in Ads Search, Ads Apps and
                Analytics. <Link href="/about">More about me</Link> or{' '}
                <Link href="/contact">send me a message</Link>.
              </p>
            </div>
          </aside>

          {related.length > 0 && (
            <section style={{ marginTop: 56 }} aria-labelledby="related-title">
              <h2 id="related-title" className="section-title" style={{ marginBottom: 16 }}>
                Read next
              </h2>
              <ul className="post-list">
                {related.map((p) => (
                  <li key={p.slug}>
                    <p className="label">
                      {p.category} · {p.readingTime}
                    </p>
                    <h3>
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h3>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
