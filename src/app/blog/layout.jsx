export const metadata = {
  title: 'Career, AI & Corporate Communication Blog — Muddassir Ali',
  description:
    'Battle-tested guides for students, freshers, and professionals on n8n automations, Claude prompt engineering, corporate communication, salary negotiation, and high-income skills.',
  alternates: {
    canonical: 'https://muddassirali.com/blog',
  },
  openGraph: {
    title: 'Career, AI & Corporate Communication Blog — Muddassir Ali',
    description:
      'Battle-tested guides for students, freshers, and professionals on n8n automations, Claude prompt engineering, corporate communication, and salary negotiation.',
    url: 'https://muddassirali.com/blog',
    siteName: 'Muddassir Ali',
    images: [
      {
        url: 'https://muddassirali.com/images/Muddassir_Ali.webp',
        width: 1200,
        height: 630,
        alt: 'Muddassir Ali Blog',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career, AI & Corporate Communication Blog — Muddassir Ali',
    description:
      'Battle-tested guides on n8n automations, Claude prompt engineering, corporate communication, and salary negotiation.',
    creator: '@veloxisglobal',
  },
};

export default function BlogLayout({ children }) {
  return children;
}
