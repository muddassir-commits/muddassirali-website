import './globals.css';
import Script from 'next/script';
import { Schibsted_Grotesk, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { site, personSchema } from '../lib/site';

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
  weight: ['400', '500'],
});

const description =
  'Muddassir Ali is a marketer from Kanpur and the founder of Veloxis Global. He sets up ads, landing pages and fast WhatsApp replies for property businesses, and writes plain guides on careers, AI tools and automation.';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Muddassir Ali · Marketer in Kanpur, founder of Veloxis Global',
    template: '%s · Muddassir Ali',
  },
  description,
  applicationName: 'Muddassir Ali',
  authors: [{ name: 'Muddassir Ali', url: site.url }],
  creator: 'Muddassir Ali',
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.url,
    siteName: 'Muddassir Ali',
    title: 'Muddassir Ali · Marketer in Kanpur, founder of Veloxis Global',
    description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Muddassir Ali' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@muddassir_alii',
    title: 'Muddassir Ali · Marketer in Kanpur',
    description,
    images: [site.ogImage],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon.png', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'XOtyYOYEfIvHdx078CsKX-_F1UCQjVxa6yz94M5W3Og',
  },
  other: {
    'google-adsense-account': 'ca-pub-4045389773179069',
  },
};

export const viewport = {
  themeColor: '#f2f3ef',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${schibsted.variable} ${newsreader.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                personSchema,
                {
                  '@type': 'WebSite',
                  '@id': `${site.url}/#website`,
                  url: site.url,
                  name: 'Muddassir Ali',
                  inLanguage: 'en-IN',
                  publisher: { '@id': `${site.url}/#person` },
                },
              ],
            }),
          }}
        />
        {/* Google AdSense (auto ads). Kept in the head so AdSense can verify the site. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4045389773179069"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />

        {/* Google Analytics 4. Page changes inside the site are counted by GA4's enhanced measurement. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W8JPSTDLC1" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-W8JPSTDLC1');`}
        </Script>
      </body>
    </html>
  );
}
