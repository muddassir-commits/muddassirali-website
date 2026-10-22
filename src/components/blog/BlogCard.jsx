import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function BlogCard({ post, featured = false }) {
  if (!post) return null;

  return (
    <article
      className={`group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden relative ${
        featured ? 'lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-8 items-center p-6 md:p-8' : 'p-6'
      }`}
    >
      {/* Article Cover Image */}
      <div
        className={`relative rounded-2xl overflow-hidden bg-slate-100 shrink-0 ${
          featured
            ? 'lg:col-span-6 aspect-[16/10] w-full mb-6 lg:mb-0'
            : 'aspect-[16/10] w-full mb-5'
        }`}
      >
        <Image
          src={post.image || '/images/tech/ai_command_center.jpg'}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={featured ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Badge Floating on Image */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-[10.5px] font-mono font-bold text-slate-800 shadow-sm uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        {featured && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              FEATURED GUIDE
            </span>
          </div>
        )}
      </div>

      {/* Article Content */}
      <div className={`flex flex-col flex-grow justify-between ${featured ? 'lg:col-span-6 space-y-4' : 'space-y-3'}`}>
        <div>
          {/* Metadata Row: Date & Reading Time */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.date}</span>
            </span>
            <span>&middot;</span>
            <span className="flex items-center gap-1 text-blue-600 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug ${
              featured ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-lg md:text-xl'
            }`}
          >
            <Link href={`/blog/${post.slug}`} className="focus:outline-none">
              {post.title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p
            className={`text-slate-600 leading-relaxed mt-2 ${
              featured ? 'text-sm md:text-base line-clamp-3' : 'text-xs md:text-sm line-clamp-2'
            }`}
          >
            {post.excerpt}
          </p>
        </div>

        {/* Card Footer: Author + Read Arrow */}
        <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200">
              <Image
                src="/images/Muddassir_Ali.webp"
                alt="Muddassir Ali"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-mono text-slate-700 font-medium">Muddassir Ali</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="font-mono text-blue-600 font-bold inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
