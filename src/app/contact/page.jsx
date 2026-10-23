import { site, whatsappLink } from '../../lib/site';
import { pageMeta } from '../../lib/meta';
import ContactForm from '../../components/ContactForm';
import TrackedLink from '../../components/TrackedLink';

export const metadata = pageMeta({
  title: 'Contact',
  description:
    'Reach Muddassir Ali on WhatsApp (+91 91940 20727, messages only) or by email at theofficialmuddassir@gmail.com.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="label">Contact</p>
          <h1 className="page-title">Send me a message.</h1>
          <p className="page-lede">
            WhatsApp is quickest. The number takes messages only, so please text rather than call. Email works too.
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap split">
          <div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Direct
            </h2>
            <ul className="channels">
              <li>
                <p className="label">WhatsApp · messages only, no calls</p>
                <TrackedLink
                  className="channel-value"
                  href={whatsappLink('Hi Muddassir, I found you on muddassirali.com.')}
                  method="whatsapp"
                  location="contact_direct"
                >
                  {site.whatsappDisplay}
                </TrackedLink>
              </li>
              <li>
                <p className="label">Email</p>
                <TrackedLink className="channel-value" href={`mailto:${site.email}`} method="email" location="contact_direct">
                  {site.email}
                </TrackedLink>
              </li>
              <li>
                <p className="label">Elsewhere</p>
                <p className="ui" style={{ marginTop: 6 }}>
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  {' · '}
                  <a href={site.social.x} target="_blank" rel="noopener noreferrer">
                    X
                  </a>
                  {' · '}
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  {' · '}
                  <a href={site.social.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </p>
              </li>
              <li>
                <p className="label">For property marketing</p>
                <p style={{ marginTop: 6 }}>
                  Builders and brokers can also go straight to{' '}
                  <a href={site.company.url} target="_blank" rel="noopener noreferrer">
                    Veloxis Global
                  </a>
                  .
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Or write it here
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
