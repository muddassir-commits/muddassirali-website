'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, whatsappLink } from '../lib/site';
import { trackLead } from '../lib/track';

function isCurrent(pathname, href) {
  if (!pathname) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the menu with Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const waHref = whatsappLink('Hi Muddassir, I found you on muddassirali.com.');

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="wordmark" aria-label="Muddassir Ali, home">
          Muddassir Ali
          <span className="wordmark__place" aria-hidden="true">
            Kanpur
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <a
            className="btn btn--small"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead('whatsapp', 'header')}
          >
            Message me
          </a>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-button__bars" aria-hidden="true" />
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="wrap" aria-label="Main, mobile">
          <ul>
            <li>
              <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            className="btn"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead('whatsapp', 'mobile_menu')}
          >
            Message me on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
