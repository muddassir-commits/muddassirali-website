'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRESENTATION_DECKS } from '../data/presentations';

export default function PresentationModal({ deckId, onClose }) {
  const [slideIndex, setSlideIndex] = useState(0);

  if (!deckId) return null;
  const deck = PRESENTATION_DECKS[deckId];
  if (!deck) return null;

  const currentSlide = deck.slides[slideIndex] || deck.slides[0];
  const totalSlides = deck.slides.length;

  const handlePrev = () => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  return (
    <div
      className="presentation-modal-backdrop active"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="presentation-modal-box relative p-6 md:p-8 max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 rounded-t-2xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-slate-900 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close presentation modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Deck Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-bold">
            {deck.badge}
          </span>
        </div>

        <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-1 pr-8">
          {deck.title}
        </h3>
        <p className="text-xs text-slate-500 mb-5">
          {deck.subtitle}
        </p>

        {/* Slide Viewport Container */}
        <div className="min-h-[260px] p-5 md:p-6 rounded-xl bg-slate-50/80 border border-slate-200 mb-6 flex flex-col justify-center">
          <h4 className="font-heading text-base font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
            {currentSlide.title}
          </h4>
          <div
            dangerouslySetInnerHTML={{ __html: currentSlide.content }}
          />
        </div>

        {/* Slide Deck Navigation & Progress Footer */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Slide Progress Bar & Counter */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full transition-all duration-300"
                style={{
                  width: `${((slideIndex + 1) / totalSlides) * 100}%`,
                }}
              />
            </div>
            <span className="font-mono text-xs text-slate-600 font-semibold">
              Slide {slideIndex + 1} of {totalSlides}
            </span>
          </div>

          {/* Controls (Prev / Next) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              disabled={slideIndex === 0}
              className="btn btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
            <button
              onClick={handleNext}
              disabled={slideIndex === totalSlides - 1}
              className="btn btn-primary !py-2 !px-4 !text-xs flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Next Slide</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
