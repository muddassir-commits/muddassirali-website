// GA4 lead event. Fires only when a visitor actually opens WhatsApp or their email app to contact me.
export function trackLead(method, location) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'generate_lead', {
    method,
    lead_location: location,
  });
}
