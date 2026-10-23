'use client';

import { useState } from 'react';
import Link from 'next/link';

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default function BlogList({ posts, categories }) {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter guides by topic">
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      <p className="visually-hidden" role="status" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? 'guide' : 'guides'}
      </p>
      <ul className="post-list">
        {shown.map((post) => (
          <li key={post.slug}>
            <p className="label">
              {post.category} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
            </p>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
