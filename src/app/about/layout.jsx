export const metadata = {
  title: 'About Muddassir Ali — Founder @ Veloxis Global & Growth Systems Architect',
  description:
    'Executive background, verified Google certifications, and systems architecture philosophy of Muddassir Ali (Founder & Managing Director of Veloxis Global).',
  alternates: {
    canonical: 'https://muddassirali.com/about',
  },
  openGraph: {
    title: 'About Muddassir Ali — Founder @ Veloxis Global & Growth Systems Architect',
    description:
      'Executive background, verified Google certifications, and systems architecture philosophy of Muddassir Ali.',
    url: 'https://muddassirali.com/about',
    siteName: 'Muddassir Ali',
    images: [
      {
        url: 'https://muddassirali.com/images/Muddassir_Ali.webp',
        width: 1200,
        height: 630,
        alt: 'Muddassir Ali — About',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Muddassir Ali — Founder @ Veloxis Global',
    description:
      'Executive background, verified Google certifications, and systems architecture philosophy of Muddassir Ali.',
    images: ['https://muddassirali.com/images/Muddassir_Ali.webp'],
    creator: '@veloxisglobal',
  },
};

export default function AboutLayout({ children }) {
  return children;
}
