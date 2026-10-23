import { site } from './site';

// Builds per-page metadata with a www canonical and matching Open Graph tags.
export function pageMeta({ title, description, path = '/', type = 'website', image }) {
  const url = `${site.url}${path === '/' ? '' : path}`;
  const img = image || site.ogImage;
  return {
    title,
    description,
    alternates: { canonical: url || site.url },
    openGraph: {
      type,
      url: url || site.url,
      siteName: site.name,
      locale: 'en_IN',
      title,
      description,
      images: [{ url: img, width: 1200, height: 630, alt: 'Muddassir Ali' }],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@muddassir_alii',
      title,
      description,
      images: [img],
    },
  };
}
