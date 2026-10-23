import Link from 'next/link';
import { site, study, whatsappLink } from '../../lib/site';
import { pageMeta } from '../../lib/meta';
import TrackedLink from '../../components/TrackedLink';

export const metadata = pageMeta({
  title: 'Work',
  description:
    'What Muddassir Ali has built: the Veloxis Global website and audit tool, a check of 749 real estate websites, an outreach tracker and more.',
  path: '/projects',
});

const work = [
  {
    key: 'veloxis-site',
    kind: 'Website · live',
    title: 'veloxisglobal.com',
    summary:
      'The website for my company. Service pages, a blog with practical real estate marketing guides, a free audit tool and an enquiry form.',
    why: 'Builders and brokers judge an agency by its own site first, so ours had to be fast, clear and honest.',
    built: 'Next.js, hosted on Vercel, Google Analytics and Search Console.',
    link: { href: site.company.url, label: 'Visit veloxisglobal.com' },
    shot: {
      src: '/images/work/veloxisglobal-home.jpg',
      alt: 'Screenshot of the veloxisglobal.com homepage with the headline about filling site visits',
      caption: 'veloxisglobal.com homepage, October 2026',
    },
  },
  {
    key: 'audit-tool',
    kind: 'Free tool · live',
    title: 'Website audit tool',
    summary:
      'Type in any web page and get a plain-English report on SEO basics, lead capture, tracking, speed and trust, with the five fixes to do first.',
    why: 'Most business owners cannot tell what is wrong with their site. This gives them a starting list in under a minute, free.',
    built: 'Part of veloxisglobal.com. Checks one page at a time and stores nothing.',
    link: { href: `${site.company.url}/tools/website-audit`, label: 'Try the audit tool' },
    shot: {
      src: '/images/work/veloxisglobal-website-audit.jpg',
      alt: 'Screenshot of the free website audit tool page with a web address box and an Audit my site button',
      caption: 'The audit tool page, October 2026',
    },
  },
  {
    key: 'study',
    kind: 'Research · published',
    title: `The ${study.sample}-website check`,
    summary: `On ${study.dates} a script I wrote read the homepages of ${study.sample} real estate businesses found on Google Maps in ${study.cities} cities. ${study.findings[0].count} of them (${study.findings[0].pct}%) had no ad or analytics tracking. ${study.findings[1].count} (${study.findings[1].pct}%) had no WhatsApp link. ${study.findings[2].count} (${study.findings[2].pct}%) had no form.`,
    why: 'I wanted real numbers on how local property businesses handle enquiries before telling anyone what to fix.',
    built: 'Python. Only the homepage was checked, so some sites may have tracking or forms on other pages.',
    link: { href: study.source, label: 'Read the write-up' },
  },
  {
    key: 'tracker',
    kind: 'Internal tool',
    title: 'Outreach tracker',
    summary:
      'Keeps every email, follow-up, reply and bounce for each business in one small database. It shows what is due today and will not log a fourth email to the same business.',
    why: 'Cold email goes wrong when you lose track. Three emails at most, and a reply or a "no" stops the sequence at once.',
    built: 'Python and SQLite. Private, because it holds other people’s contact details.',
  },
  {
    key: 'social',
    kind: 'Internal tool',
    title: 'Scheduled social posting',
    summary:
      'Posts approved Instagram and Facebook content at set times each day, and lists new comments so I can answer them myself.',
    why: 'Posting on time every day is easy to miss by hand. I approve a week of posts once and they go out on schedule.',
    built: 'Python, Meta’s official API and GitHub Actions.',
  },
  {
    key: 'this-site',
    kind: 'Website · live',
    title: 'This website',
    summary:
      'My personal site. Rebuilt in October 2026 with every unprovable claim taken out. The contact form opens WhatsApp or your email app, so no message gets lost.',
    why: 'A personal site should sound like the person and only say true things.',
    built: 'Next.js static export on Vercel.',
  },
];

export default function WorkPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="label">Work</p>
          <h1 className="page-title">Things I&apos;ve built, and why.</h1>
          <p className="page-lede">
            Real projects only. Where something is live, there is a link so you can see it yourself. Where it is
            private, I say so.
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap">
          <ol className="work-list">
            {work.map((w) => (
              <li key={w.key} className="work" id={w.key}>
                <div>
                  <p className="label">{w.kind}</p>
                  <h2 className="work__title">{w.title}</h2>
                  <p style={{ marginTop: 12 }}>{w.summary}</p>
                  <dl>
                    <dt>Why</dt>
                    <dd>{w.why}</dd>
                    <dt>Built with</dt>
                    <dd>{w.built}</dd>
                  </dl>
                  {w.link && (
                    <p style={{ marginTop: 8 }}>
                      <a className="arrow-link" href={w.link.href} target="_blank" rel="noopener noreferrer">
                        {w.link.label}
                      </a>
                    </p>
                  )}
                </div>
                {w.shot ? (
                  <figure className="work__shot">
                    <img src={w.shot.src} alt={w.shot.alt} width="1280" height="800" loading="lazy" />
                    <figcaption className="label">{w.shot.caption}</figcaption>
                  </figure>
                ) : (
                  <div aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="closing" aria-labelledby="work-closing">
        <div className="wrap">
          <h2 id="work-closing" className="closing__title">
            Need something like this?
          </h2>
          <p>
            For property marketing, Veloxis Global is the place. For anything else, send me a message and I&apos;ll
            tell you honestly if I can help.
          </p>
          <div className="hero__actions">
            <TrackedLink
              className="btn"
              href={whatsappLink('Hi Muddassir, I saw your work page.')}
              method="whatsapp"
              location="work"
            >
              Message me on WhatsApp
            </TrackedLink>
            <Link className="arrow-link" href="/contact">
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
