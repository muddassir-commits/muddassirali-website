import { site } from '../../lib/site';
import { pageMeta } from '../../lib/meta';

export const metadata = pageMeta({
  title: 'Privacy policy',
  description: 'What muddassirali.com collects, why, and how to ask for your data to be removed.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap wrap--narrow" style={{ marginInline: 'auto' }}>
          <p className="label">Last updated 23 October 2026</p>
          <h1 className="page-title">Privacy policy</h1>
          <p className="page-lede">Plain version: this site stores nothing you type. Google tools count visits and may show ads.</p>
        </div>
      </header>
      <section className="section section--tight">
        <div className="wrap wrap--narrow legal prose" style={{ marginInline: 'auto' }}>
          <h2>Who runs this site</h2>
          <p>
            muddassirali.com is the personal website of Muddassir Ali, Kanpur, Uttar Pradesh, India. For anything
            about your data, email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>The contact form</h2>
          <p>
            The contact form does not send or save anything on this website. When you press a button, it opens
            WhatsApp or your own email app with your message filled in. Your message only reaches me if you press
            send there. After that, it is handled under WhatsApp&apos;s or your email provider&apos;s terms, and I
            keep it in my WhatsApp or email inbox so I can reply.
          </p>

          <h2>Analytics</h2>
          <p>
            I use Google Analytics 4 to count visits and see which pages are read. It uses cookies and collects
            things like your approximate location, device, browser and the pages you view. I do not use it to
            identify you. When you open WhatsApp or email from a button on this site, a &ldquo;lead&rdquo; event is
            counted, without your message or contact details.
          </p>

          <h2>Advertising</h2>
          <p>
            This site may show ads from Google AdSense. Google and its partners use cookies to show ads based on
            your visits to this and other websites. You can turn off personalised ads in{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              Google&apos;s ad settings
            </a>{' '}
            or learn more at{' '}
            <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
              aboutads.info
            </a>
            . Google explains how it uses data from sites that use its services on{' '}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
              this page
            </a>
            .
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>You can block or delete cookies in your browser settings.</li>
            <li>
              You can ask me what I hold about you, or ask me to delete our messages, by emailing{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>. I reply within 30 days.
            </li>
          </ul>

          <h2>Changes</h2>
          <p>If this policy changes, the date at the top of this page changes with it.</p>
        </div>
      </section>
    </>
  );
}
