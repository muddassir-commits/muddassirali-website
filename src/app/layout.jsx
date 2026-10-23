import './globals.css';
import { Inter, Manrope, JetBrains_Mono } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  metadataBase: new URL('https://muddassirali.com'),
  title: {
    default: 'Muddassir Ali — Founder @ Veloxis Global | AI Growth Systems Architect',
    template: '%s | Muddassir Ali',
  },
  description:
    'Personal authority hub of Muddassir Ali (Founder & Managing Director of Veloxis Global). Architecting scalable AI growth systems, PropTech real estate engines, and high-velocity acquisition pipelines.',
  authors: [{ name: 'Muddassir Ali', url: 'https://muddassirali.com' }],
  creator: 'Muddassir Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muddassirali.com',
    siteName: 'Muddassir Ali',
    title: 'Muddassir Ali — Founder @ Veloxis Global | AI Growth Systems Architect',
    description:
      'Architecting scalable AI systems, PropTech real estate engines, and high-velocity acquisition pipelines.',
    images: [
      {
        url: '/images/Muddassir_Ali.webp',
        width: 1200,
        height: 630,
        alt: 'Muddassir Ali — Founder @ Veloxis Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@veloxisglobal',
    creator: '@veloxisglobal',
    title: 'Muddassir Ali — Founder @ Veloxis Global',
    description:
      'Architecting scalable AI systems, PropTech real estate engines, and high-velocity acquisition pipelines.',
    images: ['/images/Muddassir_Ali.webp'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muddassir Ali',
  jobTitle: 'Founder & Managing Director',
  worksFor: {
    '@type': 'Organization',
    name: 'Veloxis Global',
    url: 'https://www.veloxisglobal.com',
  },
  url: 'https://muddassirali.com',
  image: 'https://muddassirali.com/images/Muddassir_Ali.webp',
  description:
    'Founder & Managing Director of Veloxis Global, AI Marketing Systems Architect, and Google Certified Performance Marketer.',
  knowsAbout: [
    'Real Estate Lead Systems',
    'AI Marketing Systems',
    'Performance Marketing & Algorithmic Ad Buying',
    'PropTech Growth Automation',
    'Google Ads Search & Measurement',
    'Server-Side Tag Management',
    'Google Analytics 4 (GA4)',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Google Ads Search Certification',
      credentialCategory: 'Professional Certification',
      recognizedBy: { '@type': 'Organization', name: 'Google' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Google Ads Apps Certification',
      credentialCategory: 'Professional Certification',
      recognizedBy: { '@type': 'Organization', name: 'Google' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Google Ads Measurement Certification',
      credentialCategory: 'Professional Certification',
      recognizedBy: { '@type': 'Organization', name: 'Google' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Google Analytics (GA4) Certification',
      credentialCategory: 'Professional Certification',
      recognizedBy: { '@type': 'Organization', name: 'Google' },
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/muddassir-alii/',
    'https://x.com/veloxisglobal',
    'https://github.com/muddassir-commits',
    'https://www.crunchbase.com/person/muddassir-ali',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Semantic SEO JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics GA4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W8JPSTDLC1"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W8JPSTDLC1');
          `}
        </Script>
        {/* Google AdSense Script for Site Verification & Auto Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4045389773179069"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-[#FAFAFA] text-[#09090B] selection:bg-blue-600 selection:text-white">
        <Navbar />
        <CustomCursor />
        <div className="page-wrapper min-h-screen flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
