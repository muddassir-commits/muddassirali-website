// Single source of truth for every fact shown on muddassirali.com.
// Rule: only true, confirmed facts live here. If a fact is not here, it does not go on the site.
// Sources: the owner's confirmed facts (Oct 2026) and the Google Skillshop certificate records.

export const site = {
  name: 'Muddassir Ali',
  // The site answers on www (the bare domain 308-redirects to it), so every canonical uses www.
  url: 'https://www.muddassirali.com',
  email: 'theofficialmuddassir@gmail.com',
  // WhatsApp only. This number takes messages, not calls.
  whatsappDisplay: '+91 91940 20727',
  whatsappNumber: '919194020727',
  city: 'Kanpur, Uttar Pradesh, India',
  company: {
    name: 'Veloxis Global',
    url: 'https://www.veloxisglobal.com',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/muddassir-alii/',
    x: 'https://x.com/muddassir_alii',
    github: 'https://github.com/muddassir-commits',
    instagram: 'https://www.instagram.com/muddassir__ali/',
  },
  portrait: '/images/muddassir-ali.jpg',
  ogImage: '/og-image.png',
};

export function whatsappLink(text) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

// Personal Google Skillshop certificates. Say "Google certified"; never claim partner status.
export const certificates = [
  {
    name: 'Google Ads Search',
    issued: '11 Oct 2026',
    expires: '11 Oct 2027',
    id: '196881580',
    verify: 'https://skillshop.credential.net/42585ea7-c483-40a0-9e88-06d96f34d6f5',
    image: '/images/certificates/google-ads-search.png',
  },
  {
    name: 'Google Ads Apps',
    issued: '4 Aug 2026',
    expires: '4 Aug 2027',
    id: '190589620',
    verify: 'https://skillshop.credential.net/117efd0b-b091-4f89-917f-aebcb574ea81',
    image: '/images/certificates/google-ads-apps.png',
  },
  {
    name: 'Google Analytics',
    issued: '11 Oct 2026',
    expires: '11 Oct 2027',
    id: '196883148',
    verify: 'https://skillshop.credential.net/f023a11e-babe-4b67-89da-ce27fb4e1f3d',
    image: '/images/certificates/google-analytics.png',
  },
];

// The homepage check behind Veloxis Global's research, published at the source link below.
export const study = {
  sample: 749,
  cities: 26,
  dates: '1–2 October 2026',
  source: 'https://www.veloxisglobal.com/real-estate-lead-system',
  findings: [
    { count: 417, pct: 56, text: 'had no ad or analytics tracking on the homepage. No Meta pixel, no Google Ads tag, no Tag Manager or Analytics.' },
    { count: 449, pct: 60, text: 'had no WhatsApp click-to-chat link.' },
    { count: 354, pct: 47, text: 'had no form of any kind on the homepage.' },
    { count: 262, pct: 35, text: 'had neither a WhatsApp link nor a form. A ready buyer had no quick way to ask a question.' },
  ],
  method:
    'Real estate agents, consultants, developers and builders found on Google Maps in 26 cities across Uttar Pradesh, Delhi NCR and nearby states. An automated check read each homepage on 1–2 October 2026. Only the homepage was checked, so some of these sites may have tracking or forms on other pages.',
};

// Dated, checkable entries. Newest first.
export const logbook = [
  { date: 'Oct 2026', text: 'Rebuilt this website and took out every claim I could not prove.' },
  { date: '11 Oct 2026', text: 'Passed the Google Ads Search and Google Analytics certifications.' },
  { date: '1–2 Oct 2026', text: 'Checked the homepages of 749 real estate businesses in 26 cities. More than half had no tracking at all.' },
  { date: '4 Aug 2026', text: 'Passed the Google Ads Apps certification.' },
  { date: '2026', text: 'Started Veloxis Global in Kanpur, a marketing agency for real estate.' },
];

export const tools = [
  'Meta Ads Manager',
  'Meta Ad Library',
  'Google Ads',
  'Google Analytics',
  'Google Search Console',
  'Semrush',
  'Ahrefs',
  'Canva',
  'Claude',
  'n8n',
  'Python',
  'Next.js',
];

export const nav = [
  { href: '/projects', label: 'Work' },
  { href: '/blog', label: 'Writing' },
  { href: '/training', label: 'Learn' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  email: `mailto:${site.email}`,
  jobTitle: 'Founder, Veloxis Global',
  worksFor: {
    '@type': 'Organization',
    name: site.company.name,
    url: site.company.url,
  },
  homeLocation: {
    '@type': 'Place',
    name: 'Kanpur, Uttar Pradesh, India',
  },
  knowsLanguage: ['Hindi', 'English', 'Urdu'],
  knowsAbout: [
    'Real estate marketing',
    'Meta ads',
    'Google Ads',
    'Google Analytics',
    'WhatsApp lead follow-up',
    'Marketing automation',
    'Landing pages',
  ],
  hasCredential: certificates.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: `${c.name} Certification`,
    credentialCategory: 'certificate',
    url: c.verify,
    recognizedBy: { '@type': 'Organization', name: 'Google' },
  })),
  sameAs: [site.social.linkedin, site.social.x, site.social.github, site.social.instagram],
};
