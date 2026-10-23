'use client';

import { trackLead } from '../lib/track';

// An external contact link (WhatsApp or email) that also records a GA4 lead event.
export default function TrackedLink({ href, method, location, children, className, newTab = true }) {
  const external = newTab && !href.startsWith('mailto:');
  return (
    <a
      className={className}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={() => trackLead(method, location)}
    >
      {children}
    </a>
  );
}
