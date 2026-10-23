import Link from 'next/link';
import { whatsappLink } from '../../lib/site';
import { pageMeta } from '../../lib/meta';
import TrackedLink from '../../components/TrackedLink';

export const metadata = pageMeta({
  title: 'Learn digital marketing, in order',
  description:
    'A practical order for learning digital marketing: landing pages, Meta and Google ads, tracking, automation and clients, with free guides.',
  path: '/training',
});

const steps = [
  {
    title: 'How marketing makes money',
    text: 'Cost per lead, cost per sale and profit. If you can do this arithmetic, every later step makes sense.',
  },
  {
    title: 'Who you are selling to',
    text: 'Pick one kind of customer. Write down what they worry about and what would make them say yes.',
  },
  {
    title: 'The page people land on',
    text: 'One page, one offer, one clear button. It must load fast on a cheap phone and work on mobile data.',
  },
  {
    title: 'Meta ads',
    text: 'Facebook and Instagram ads: audiences, creatives and how to read the results without fooling yourself.',
  },
  {
    title: 'Google Search ads',
    text: 'Reaching people who are already searching. Keywords, match types and negative keywords.',
  },
  {
    title: 'Tracking',
    text: 'Google Analytics 4, Tag Manager and the Meta pixel. Without tracking you cannot tell which ad brought the sale.',
  },
  {
    title: 'Search Console and SEO basics',
    text: 'Getting pages indexed, fixing errors and writing pages that answer real searches.',
  },
  {
    title: 'Replying fast',
    text: 'A lead that waits goes cold. Set up instant alerts and a WhatsApp reply.',
    link: { href: '/blog/beginners-guide-to-n8n-automation-2026', label: 'Guide: n8n for beginners' },
  },
  {
    title: 'Using AI tools well',
    text: 'Use Claude or similar tools for drafts and analysis, and always check the output.',
    link: { href: '/blog/claude-prompting-guide-work-productivity', label: 'Guide: prompts that save time' },
  },
  {
    title: 'Talking to clients and managers',
    text: 'Clear updates, polite pushback and saying no to work that will not fit.',
    link: { href: '/blog/corporate-english-communication-playbook', label: 'Guide: speaking up at work' },
  },
  {
    title: 'Getting paid fairly',
    text: 'Pricing your work, negotiating an offer and moving clients to a monthly arrangement.',
    link: { href: '/blog/salary-negotiation-playbook-freshers-india', label: 'Guide: salary negotiation' },
  },
];

export default function LearnPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="label">Learn</p>
          <h1 className="page-title">Learn digital marketing in the right order.</h1>
          <p className="page-lede">
            I don&apos;t sell a course. This is the order I would learn things in if I started again, with free
            guides where I have written them. Take it at your own pace.
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap split">
          <div className="section-head">
            <p className="label">{steps.length} steps</p>
            <h2 className="section-title">The path</h2>
            <p className="section-intro">Each step builds on the one before it, so the order matters.</p>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.link && (
                    <p style={{ marginTop: 8 }}>
                      <Link className="arrow-link" href={s.link.href}>
                        {s.link.label}
                      </Link>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="closing" aria-labelledby="learn-closing">
        <div className="wrap">
          <h2 id="learn-closing" className="closing__title">
            Want a session for your college or team?
          </h2>
          <p>
            Tell me who the session is for, what they already know and what you want them to leave with. I&apos;ll
            reply on WhatsApp or email.
          </p>
          <div className="hero__actions">
            <TrackedLink
              className="btn"
              href={whatsappLink('Hi Muddassir, I would like to ask about a training session.')}
              method="whatsapp"
              location="learn"
            >
              Ask about a session
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
