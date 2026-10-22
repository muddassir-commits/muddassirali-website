import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  Sparkles,
  HelpCircle,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { ALL_POSTS } from '../../../content/blog/posts';
import { getPostBySlug, getRelatedPosts } from '../../../lib/blog';
import TableOfContents from '../../../components/blog/TableOfContents';
import AuthorBio from '../../../components/blog/AuthorBio';
import AdSenseSlot from '../../../components/blog/AdSenseSlot';
import CourseCTA from '../../../components/blog/CourseCTA';
import BlogCard from '../../../components/blog/BlogCard';

// Next.js Static Export Params
export async function generateStaticParams() {
  return ALL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO & Entity Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found — Muddassir Ali',
    };
  }

  const url = `https://muddassirali.com/blog/${post.slug}`;
  const ogImage = post.image
    ? `https://muddassirali.com${post.image}`
    : 'https://muddassirali.com/images/og-image.png';

  return {
    title: `${post.seoTitle || post.title} — Muddassir Ali`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'Muddassir Ali',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: ['https://muddassirali.com'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
      creator: '@veloxisglobal',
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  // Schema.org Structured Data (Article + FAQ + Breadcrumbs)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://muddassirali.com${post.image}` : 'https://muddassirali.com/images/og-image.png',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Muddassir Ali',
      jobTitle: 'Founder & Managing Director',
      worksFor: {
        '@type': 'Organization',
        name: 'Veloxis Global',
        url: 'https://www.veloxisglobal.com',
      },
      url: 'https://muddassirali.com',
      sameAs: [
        'https://www.linkedin.com/in/muddassir-alii/',
        'https://github.com/muddassir-commits',
        'https://x.com/veloxisglobal',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Muddassir Ali',
      logo: {
        '@type': 'ImageObject',
        url: 'https://muddassirali.com/favicon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://muddassirali.com/blog/${post.slug}`,
    },
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <main className="flex-grow pt-28 pb-24">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <li>
              <Link href="/" className="hover:text-slate-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-slate-300" />
            </li>
            <li>
              <Link href="/blog" className="hover:text-slate-700 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-slate-300" />
            </li>
            <li className="text-blue-600 font-semibold truncate max-w-[200px] sm:max-w-none">
              {post.category}
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
              {post.category}
            </span>
            <span className="text-slate-400">&middot;</span>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span className="text-slate-400">&middot;</span>
            <span className="text-xs font-mono text-blue-600 font-bold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sub text-slate-600 text-base md:text-lg leading-relaxed pt-1">
            {post.excerpt}
          </p>

          {/* Author Mini Bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                <Image
                  src="/images/Muddassir_Ali.webp"
                  alt="Muddassir Ali"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-sm text-slate-900 block">
                  Muddassir Ali
                </span>
                <span className="font-mono text-xs text-slate-500">
                  Founder @ Veloxis Global &middot; AI Systems Architect
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.image && (
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative aspect-[16/9] mb-12">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        )}

        {/* AEO Quick-Answer Callout Box (Position #0 Target) */}
        {post.aeoQuickAnswer && (
          <div className="mb-12 p-6 md:p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2 text-emerald-800">
              <Zap className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                QUICK SUMMARY &middot; KEY TAKEAWAYS
              </span>
            </div>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed font-medium">
              {post.aeoQuickAnswer}
            </p>
          </div>
        )}

        {/* Main Layout: Article + Sticky Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-8">
            {/* Top AdSense Slot */}
            <AdSenseSlot slotId="3891720311" label="Advertisement" />

            {/* Article Content Render */}
            <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-base prose-li:text-slate-700 prose-code:font-mono prose-code:text-xs prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-slate-200 prose-pre:rounded-2xl prose-pre:border prose-pre:border-slate-800 prose-table:border-collapse prose-table:border prose-table:border-slate-200 prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-b prose-td:border-slate-200">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.body
                    // Parse markdown headings with anchor IDs
                    .replace(/### (.*?)(?:\s*\{#(.*?)\})?\n/g, (match, title, id) => {
                      const cleanId = id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      return `<h3 id="${cleanId}" class="font-heading text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4 scroll-mt-28">${title.trim()}</h3>`;
                    })
                    .replace(/#### (.*?)(?:\s*\{#(.*?)\})?\n/g, (match, title, id) => {
                      const cleanId = id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      return `<h4 id="${cleanId}" class="font-heading text-base md:text-lg font-bold text-slate-800 mt-6 mb-2 scroll-mt-28">${title.trim()}</h4>`;
                    })
                    // Parse markdown bold
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-semibold">$1</strong>')
                    // Parse markdown code blocks
                    .replace(/```(.*?)\n([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-200 p-4 rounded-2xl overflow-x-auto my-4 text-xs font-mono"><code>$2</code></pre>')
                    // Parse inline code
                    .replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono font-medium">$1</code>')
                    // Parse blockquotes
                    .replace(/> (.*?)\n/g, '<blockquote class="border-l-4 border-blue-600 pl-4 py-2 italic text-slate-700 my-4 bg-blue-50/40 rounded-r-xl">$1</blockquote>')
                    // Parse horizontal rules
                    .replace(/---/g, '<hr class="my-8 border-slate-200" />')
                    // Parse paragraphs and line breaks
                    .split('\n\n')
                    .map((p) => {
                      const trimmed = p.trim();
                      if (!trimmed) return '';
                      if (
                        trimmed.startsWith('<h') ||
                        trimmed.startsWith('<pre') ||
                        trimmed.startsWith('<blockquote') ||
                        trimmed.startsWith('<table') ||
                        trimmed.startsWith('<hr')
                      ) {
                        return trimmed;
                      }
                      return `<p class="my-4 text-slate-700 leading-relaxed font-normal">${trimmed.replace(/\n/g, '<br />')}</p>`;
                    })
                    .join(''),
                }}
              />
            </div>

            {/* Mid-Article AdSense Slot */}
            <AdSenseSlot slotId="8472910392" label="Advertisement" />

            {/* FAQs Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="font-heading text-2xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                    >
                      <h4 className="font-heading font-bold text-slate-900 text-base">
                        {faq.question}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom AdSense Slot */}
            <AdSenseSlot slotId="9182740192" label="Advertisement" />

            {/* Course Upsell Banner */}
            <CourseCTA />

            {/* Author Bio Box */}
            <AuthorBio />
          </div>

          {/* Right Column: Sticky Table of Contents & Side Ad */}
          <aside className="lg:col-span-4 sticky top-28 space-y-6">
            {post.toc && post.toc.length > 0 && (
              <TableOfContents items={post.toc} />
            )}

            {/* Sidebar Ad Slot */}
            <AdSenseSlot slotId="1928374650" label="Sponsored" className="hidden lg:flex" />
          </aside>
        </div>

        {/* Related Articles Grid */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-blue-600 font-bold block mb-1">
                  Continue Reading
                </span>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Related Guides in {post.category}
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-mono text-blue-600 hover:text-blue-700 font-bold hidden sm:inline-flex items-center gap-1"
              >
                <span>View All Guides</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relPost) => (
                <BlogCard key={relPost.slug} post={relPost} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
