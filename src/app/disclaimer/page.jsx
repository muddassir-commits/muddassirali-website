import { site } from '../../lib/site';
import { pageMeta } from '../../lib/meta';

export const metadata = pageMeta({
  title: 'Disclaimer',
  description: 'What the guides on muddassirali.com are and are not, ads on the site, and what the Google certificates mean.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap wrap--narrow" style={{ marginInline: 'auto' }}>
          <p className="label">Last updated 23 October 2026</p>
          <h1 className="page-title">Disclaimer</h1>
        </div>
      </header>
      <section className="section section--tight">
        <div className="wrap wrap--narrow legal prose" style={{ marginInline: 'auto' }}>
          <h2>The guides</h2>
          <p>
            The guides on this site are general information for learning. Example numbers in them, such as salary
            ranges or fees, are examples to show the method, not promises or survey results. What you earn or
            achieve depends on you, your market and many things nobody controls.
          </p>

          <h2>Ads</h2>
          <p>
            This site may show Google AdSense ads. Showing an ad does not mean I recommend the product. I do not use
            affiliate links.
          </p>

          <h2>Certificates</h2>
          <p>
            I hold three personal certificates from Google Skillshop: Google Ads Search, Google Ads Apps and Google
            Analytics. You can check each one from the <a href="/about">About page</a>. They show I passed
            Google&apos;s exams. They do not mean Google endorses me, and neither I nor Veloxis Global is a Google
            Partner.
          </p>

          <h2>Questions</h2>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
