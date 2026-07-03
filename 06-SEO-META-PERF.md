# 06 — SEO, Meta, Performance & Accessibility

## Meta / head (Next.js `metadata`)
```
title:        Muddassir Ali — Meta Ads & Performance Marketing Strategist
description:  Performance marketer and automation engineer. Full-funnel Meta
              & Google Ads, SEO, and n8n/AI systems. 6+ years, 300+ trained.
canonical:    https://muddassirali.com
og:title / og:description: same as above
og:image:     /og.png  (1200×630, white bg, name + role in Geist, one accent line)
og:type:      website
twitter:card: summary_large_image
robots:       index,follow
```
- Add `theme-color: #FFFFFF`.
- Favicon: monogram `MA` on white, 1px ink border look. Provide 32/180/512 sizes + `apple-touch-icon`.

## Structured data (JSON-LD)
Add a `Person` schema in the head:
```json
{
  "@context":"https://schema.org",
  "@type":"Person",
  "name":"Muddassir Ali",
  "jobTitle":"Performance Marketing & AI Automation Strategist",
  "url":"https://muddassirali.com",
  "sameAs":[
    "https://www.linkedin.com/in/<your-handle>",
    "https://www.youtube.com/@MuddassirAli"
  ],
  "knowsAbout":["Meta Ads","Google Ads","SEO","Marketing Automation","n8n","GA4"],
  "address":{"@type":"PostalAddress","addressLocality":"Kanpur","addressRegion":"UP","addressCountry":"IN"}
}
```

## Performance budget
- Target: **LCP < 2.0s, CLS < 0.02, TBT < 150ms** on mid-tier mobile.
- Self-host fonts via `next/font` (no external font requests, no CLS).
- Lazy-init GSAP/Lenis on client; don't block first paint.
- Ship one page — code-split heavy client-only bits (cursor, marquee) behind `dynamic(() => ..., { ssr:false })` where sensible.
- Compress the OG + any portrait image (AVIF/WebP via `next/image`).
- No large JS libs beyond motion stack. Tree-shake lucide (import icons individually).

## Accessibility
- Lighthouse A11y ≥ 95.
- Landmarks: `header/nav`, `main`, `footer`. Each section `aria-labelledby` its header id.
- Focus-visible rings everywhere; logical tab order.
- Reduced-motion path implemented (see motion spec).
- Alt text on the one portrait; decorative layers `aria-hidden`.
- Colour contrast checked (body copy uses `--ink-2`, headings `--ink`).

## Analytics (optional)
- Add Vercel Analytics or Plausible (lightweight). No cookie banner needed with Plausible.

## Files to drop in `/public`
- `Muddassir-Ali-Resume-2026.pdf` (rename your `.docx` export to PDF)
- `og.png`
- favicon set
- optional `portrait.avif`
