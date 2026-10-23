import Link from 'next/link';
import { site, study, logbook, whatsappLink } from '../lib/site';
import { getAllPosts } from '../lib/blog';
import { pageMeta } from '../lib/meta';
import TrackedLink from '../components/TrackedLink';

export const metadata = {
  ...pageMeta({
    title: 'Muddassir Ali · Marketer in Kanpur, founder of Veloxis Global',
    description:
      'Muddassir Ali sets up ads, landing pages and fast WhatsApp replies for property businesses, and writes plain guides on careers, AI and automation.',
    path: '/',
  }),
  title: { absolute: 'Muddassir Ali · Marketer in Kanpur, founder of Veloxis Global' },
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <p className="label">Muddassir Ali · Kanpur, India · Founder of Veloxis Global</p>
            <h1 className="hero__title">
              Most property ads get the click. I work on <span className="mark mark--draw">the reply.</span>
            </h1>
            <p className="hero__text">
              I&apos;m Muddassir, a marketer from Kanpur. My company, Veloxis Global, sets up Meta ads, a landing
              page for each project and a WhatsApp reply that goes out in seconds, for builders and brokers in
              Kanpur, Lucknow, Noida and Delhi NCR. I also write plain guides on careers, AI tools and automation.
            </p>
            <div className="hero__actions">
              <TrackedLink
                className="btn"
                href={whatsappLink('Hi Muddassir, I found you on muddassirali.com.')}
                method="whatsapp"
                location="home_hero"
              >
                Message me on WhatsApp
              </TrackedLink>
              <Link className="arrow-link" href="/projects">
                See what I&apos;ve built
              </Link>
            </div>
          </div>

          <figure className="hero__portrait">
            <div className="portrait-frame">
              <img
                src={site.portrait}
                alt="Muddassir Ali in a grey suit and blue tie, smiling, against a plain light wall"
                width="896"
                height="1200"
                fetchPriority="high"
              />
              <figcaption>
                <span className="label">Muddassir Ali</span>
                <span className="label">Kanpur, UP</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="study-title">
        <div className="wrap split">
          <div className="section-head">
            <p className="label">What I found · {study.dates}</p>
            <h2 id="study-title" className="section-title">
              I checked {study.sample} real estate websites. More than half could not tell where a lead came from.
            </h2>
            <p className="section-intro">
              Out of {study.sample} homepages of agents, consultants and developers in {study.cities} cities:
            </p>
          </div>
          <div>
            <ul className="figures">
              {study.findings.map((f) => (
                <li key={f.count}>
                  <span className="figures__num">
                    {f.count}
                    <small>{f.pct}% of {study.sample}</small>
                  </span>
                  <span className="figures__text">{f.text}</span>
                </li>
              ))}
            </ul>
            <p className="source-note">
              {study.method}{' '}
              <a href={study.source} target="_blank" rel="noopener noreferrer">
                Full write-up on veloxisglobal.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section section--band" aria-labelledby="do-title">
        <div className="wrap split">
          <div className="section-head">
            <p className="label">What I do</p>
            <h2 id="do-title" className="section-title">
              Three things, done properly.
            </h2>
          </div>
          <ul className="rows">
            <li>
              <span className="rows__key">For builders and brokers</span>
              <div>
                <h3 className="rows__title">Ads, a page and a fast reply</h3>
                <p className="rows__body">
                  Through Veloxis Global: Meta ads for one project, a landing page made for that project, and a
                  WhatsApp reply plus follow-ups so no enquiry waits. We focus on real estate.
                </p>
                <p className="rows__meta">
                  <a className="arrow-link" href={`${site.company.url}/real-estate-lead-system`} target="_blank" rel="noopener noreferrer">
                    How it works on veloxisglobal.com
                  </a>
                </p>
              </div>
            </li>
            <li>
              <span className="rows__key">For anyone learning</span>
              <div>
                <h3 className="rows__title">Plain guides</h3>
                <p className="rows__body">
                  Step-by-step writing on n8n, using Claude at work, salary talks and saying no without burning
                  bridges. No courses to sell.
                </p>
                <p className="rows__meta">
                  <Link className="arrow-link" href="/blog">
                    Read the guides
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <span className="rows__key">For my own work</span>
              <div>
                <h3 className="rows__title">Small tools that save hours</h3>
                <p className="rows__body">
                  Scripts that check websites, keep track of every email and follow-up, and post to Instagram on
                  a schedule. I build them so the boring parts run on their own.
                </p>
                <p className="rows__meta">
                  <Link className="arrow-link" href="/projects">
                    See the work
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="log-title">
        <div className="wrap split">
          <div className="section-head">
            <p className="label">Logbook</p>
            <h2 id="log-title" className="section-title">
              What I&apos;ve done lately, with dates.
            </h2>
            <p className="section-intro">Everything here can be checked. The certificates link to Google.</p>
          </div>
          <ul className="rows">
            {logbook.map((entry) => (
              <li key={entry.text}>
                <span className="rows__key">{entry.date}</span>
                <p>{entry.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--band" aria-labelledby="writing-title">
        <div className="wrap split">
          <div className="section-head">
            <p className="label">Writing</p>
            <h2 id="writing-title" className="section-title">
              Latest guides
            </h2>
            <p>
              <Link className="arrow-link" href="/blog">
                All guides
              </Link>
            </p>
          </div>
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <p className="label">
                  {post.category} · {post.readingTime}
                </p>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div className="wrap">
          <h2 id="closing-title" className="closing__title">
            Got a project, a question or a workshop idea?
          </h2>
          <p>
            WhatsApp is quickest. It takes messages only, so please text rather than call. Email works too.
          </p>
          <div className="hero__actions">
            <TrackedLink
              className="btn"
              href={whatsappLink('Hi Muddassir, I found you on muddassirali.com.')}
              method="whatsapp"
              location="home_closing"
            >
              Message me on WhatsApp
            </TrackedLink>
            <Link className="arrow-link" href="/contact">
              Other ways to reach me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
