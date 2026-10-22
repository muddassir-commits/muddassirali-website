'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMenu = () => {
    const next = !mobileMenuOpen;
    setMobileMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Training', href: '/training' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" id="scroll-progress" />

      {/* Fixed Modern Frosted Header */}
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'nav-scrolled' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo & Executive Title */}
          <Link href="/" className="flex items-center space-x-3.5 group" id="logo-ma">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-blue-500/20 border border-blue-400/30 group-hover:scale-105 transition-transform duration-300">
              MA
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Muddassir Ali
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-emerald-600 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Founder @ Veloxis Global
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (4 Core Navigation Links + Contact Action) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm transition-colors ${
                    active
                      ? 'text-blue-600 font-semibold active-nav-link'
                      : 'text-slate-600 font-medium hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn btn-primary !py-2 !px-4 !text-xs !shadow-none"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            id="menu-btn"
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-0.5 bg-slate-900 transition-transform duration-300 origin-center ${
                mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-slate-900 transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-slate-900 transition-transform duration-300 origin-center ${
                mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu-overlay md:hidden ${
          mobileMenuOpen ? 'active' : ''
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
                document.body.style.overflow = '';
              }}
              className={`mobile-nav-link font-heading text-3xl font-bold transition-colors ${
                isActive(link.href)
                  ? 'text-blue-600 active-nav-link'
                  : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => {
              setMobileMenuOpen(false);
              document.body.style.overflow = '';
            }}
            className="mobile-nav-link font-heading text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
