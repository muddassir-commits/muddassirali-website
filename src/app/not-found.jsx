import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="wrap">
        <p className="label">404</p>
        <h1 className="page-title">This page isn&apos;t here.</h1>
        <p className="page-lede">
          It may have moved when I rebuilt the site in October 2026. Try one of these instead.
        </p>
        <ul className="rows" style={{ marginTop: 32, maxWidth: 640 }}>
          <li>
            <span className="rows__key">Start</span>
            <Link className="arrow-link" href="/">
              Home
            </Link>
          </li>
          <li>
            <span className="rows__key">Read</span>
            <Link className="arrow-link" href="/blog">
              All guides
            </Link>
          </li>
          <li>
            <span className="rows__key">Talk</span>
            <Link className="arrow-link" href="/contact">
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
