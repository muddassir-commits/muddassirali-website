'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Sparkles, BookOpen, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getAllPosts, getAllCategories } from '../../lib/blog';
import BlogCard from '../../components/blog/BlogCard';
import CourseCTA from '../../components/blog/CourseCTA';

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allPosts = useMemo(() => getAllPosts(), []);
  const categories = useMemo(() => getAllCategories(), []);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-blue-700 font-semibold">
              Practical Career, AI &amp; Communication Blueprints
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Learn Skills That Pay, Communicate with Power
          </h1>

          <p className="text-sub text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Battle-tested guides for students, freshers, and corporate professionals. No generic fluff, no fake guru theories—just real prompts, scripts, and automation workflows.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search n8n, salary scripts, corporate english, Claude prompts..."
              className="w-full bg-white border border-slate-300 pl-11 pr-4 py-3.5 rounded-2xl text-slate-900 text-sm placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
        </section>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Area */}
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-slate-50 border border-slate-200">
            <p className="font-mono text-sm text-slate-500">
              No matching guides found for &ldquo;{searchQuery}&rdquo;. Try another search term.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Hero Post */}
            {featuredPost && (
              <div className="mb-12">
                <BlogCard post={featuredPost} featured={true} />
              </div>
            )}

            {/* Remaining Grid */}
            {regularPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Course Upsell Banner */}
        <div className="mt-20">
          <CourseCTA />
        </div>
      </div>
    </main>
  );
}
