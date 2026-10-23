import Link from 'next/link';
import { nav, site, whatsappLink } from '../lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-name">Muddassir Ali</p>
            <p style={{ marginTop: 10, maxWidth: '38ch' }}>
              Marketer from Kanpur. Founder of{' '}
              <a href={site.company.url} target="_blank" rel="noopener noreferrer">
                Veloxis Global
              </a>
              . I write about careers, AI tools and automation.
            </p>
          </div>

          <div>
            <h2>Pages</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Reach me</h2>
            <ul>
              <li>
                <a href={whatsappLink('Hi Muddassir, I found you on muddassirali.com.')} target="_blank" rel="noopener noreferrer">
                  WhatsApp {site.whatsappDisplay}
                </a>
                <br />
                <span style={{ color: '#a9aea5', fontSize: '0.875rem' }}>Messages only, no calls</span>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Muddassir Ali. Kanpur, India.</p>
          <ul>
            <li>
              <Link href="/privacy-policy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms</Link>
            </li>
            <li>
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
