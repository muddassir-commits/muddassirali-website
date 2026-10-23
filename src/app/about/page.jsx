import Link from 'next/link';
import { site, certificates, tools, whatsappLink } from '../../lib/site';
import { pageMeta } from '../../lib/meta';
import TrackedLink from '../../components/TrackedLink';

export const metadata = pageMeta({
  title: 'About me',
  description:
    'Muddassir Ali: marketer from Kanpur with 5+ years in digital marketing and web work, founder of Veloxis Global, Google certified in Ads Search, Ads Apps and Analytics.',
  path: '/about',
  type: 'profile',
});

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap split">
          <div>
            <p className="label">About</p>
            <h1 className="page-title">I&apos;m Muddassir. I like work that shows up in the numbers.</h1>
            <p className="page-lede">
              Marketer from Kanpur. Five-plus years in digital marketing and web work. Founder of Veloxis Global.
              I speak Hindi, English and Urdu.
            </p>
          </div>
          <figure className="hero__portrait" style={{ margin: 0 }}>
            <div className="portrait-frame">
              <img
                src={site.portrait}
                alt="Muddassir Ali in a grey suit and blue tie, smiling, against a plain light wall"
                width="896"
                height="1200"
              />
              <figcaption>
                <span className="label">Muddassir Ali</span>
                <span className="label">Kanpur, UP</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </header>

      <section className="section" aria-labelledby="story-title">
        <div className="wrap split">
          <div className="section-head">
            <p className="label">The short version</p>
            <h2 id="story-title" className="section-title">
              How I got here
            </h2>
          </div>
          <div className="prose">
            <p>
              I started with freelance work, then worked across a few different industries. Along the way I
              learned paid ads, analytics and how to build websites that do a job instead of just sitting there.
            </p>
            <p>
              Then I learned real estate marketing. While in Noida I made the call that my company would focus on
              property. That company is <a href={site.company.url}>Veloxis Global</a>, and I run it from Kanpur,
              my hometown.
            </p>
            <p>
              The name comes from velocity. A lot of marketing work stalls because tasks sit and wait. I want the
              opposite: do the work, and send a weekly report so the client can see where every rupee went.
            </p>
            <h3>Why property</h3>
            <p>
              I have rented homes and PGs, and I have never bought one. As a renter I saw the problems from the
              buyer&apos;s side: photos that did not match the place, payment trouble, and no help once the deal
              was done. Good marketing should be honest about the property and quick to answer questions.
            </p>
            <p>
              In October 2026 I checked the homepages of 749 real estate businesses. Most sites were generic.
              Many people build the basics and stop. A website should bring enquiries and build a name, and that
              takes more than a homepage.
            </p>
            <h3>One number I can share</h3>
            <p>
              An admissions campaign I ran came in at about ₹43 per lead. I did not save the dashboards from my
              older work, so I keep the numbers I share to the ones I can stand behind. From now on I save proof.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--band" aria-labelledby="certs-title">
        <div className="wrap">
          <div className="section-head">
            <p className="label">Certificates</p>
            <h2 id="certs-title" className="section-title">
              Google certified, three times over
            </h2>
            <p className="section-intro">
              Personal certificates from Google Skillshop. Each link opens Google&apos;s own record so you can check
              it. These are my certificates, not a Google Partner badge for a company.
            </p>
          </div>
          <ul className="certs">
            {certificates.map((c) => (
              <li key={c.id} className="cert">
                <a className="cert__image" href={c.verify} target="_blank" rel="noopener noreferrer">
                  <img
                    src={c.image}
                    alt={`${c.name} certificate issued by Google to Muddassir Ali, certificate ID ${c.id}`}
                    width="765"
                    height="595"
                    loading="lazy"
                  />
                </a>
                <h3>{c.name}</h3>
                <dl className="label">
                  <dt>Issued</dt>
                  <dd>{c.issued}</dd>
                  <dt>Valid until</dt>
                  <dd>{c.expires}</dd>
                  <dt>ID</dt>
                  <dd>{c.id}</dd>
                </dl>
                <p>
                  <a className="arrow-link" href={c.verify} target="_blank" rel="noopener noreferrer">
                    Verify on Skillshop
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="tools-title">
        <div className="wrap split">
          <div className="section-head">
            <p className="label">Tools</p>
            <h2 id="tools-title" className="section-title">
              What I use day to day
            </h2>
          </div>
          <div>
            <ul className="tag-list" aria-label="Tools">
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="source-note">
              I use Claude for writing drafts and code, and I check everything before it goes out. n8n is on hold for
              now because the hosted plan costs money; I build the same kind of automation with small scripts.
            </p>
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="about-closing">
        <div className="wrap">
          <h2 id="about-closing" className="closing__title">
            Want to talk?
          </h2>
          <p>Send a WhatsApp message (messages only, no calls) or an email. I read everything myself.</p>
          <div className="hero__actions">
            <TrackedLink
              className="btn"
              href={whatsappLink('Hi Muddassir, I read your About page.')}
              method="whatsapp"
              location="about"
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
