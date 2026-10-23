# muddassirali.com: guide for anyone editing this site

Personal website of Muddassir Ali, a marketer from Kanpur and founder of Veloxis Global.
Next.js 16 static export (`output: 'export'`), hosted on Vercel from the `master` branch of the public repo
`muddassir-commits/muddassirali-website`. The site answers on `https://www.muddassirali.com`; the bare domain redirects there.

## Commands
- `npm run dev` (local, port 3000) · `npm run build` (writes `out/`) · `npm start` (serves `out/`)
- `npm run lint`: `scripts/check-claims.mjs`, fails on banned claims, employer material, the old phone number or legacy files.

## Where things live
- `src/lib/site.js`: the single source of every fact on the site (contact details, certificates, the 749-site study, logbook, tools, nav, Person schema). If a fact is not there, it does not go on the site.
- `src/lib/meta.js`: per-page title, description, www canonical and Open Graph tags.
- `src/app/*`: pages. `src/content/blog/posts.js`: the six guides. `src/app/sitemap.js`, `src/app/robots.js`.
- `src/components/ContactForm.jsx`: writes the message and opens WhatsApp or the email app (no server, nothing stored, never fakes success).
- `vercel.json`: security headers. The CSP must keep allowing Google Analytics and AdSense (incl. `*.adtrafficquality.google`).

## Rules
1. Only true, checkable claims. No invented numbers, results, clients, testimonials or ratings. Example numbers in guides must be labelled as examples.
2. Certificates: three personal Google Skillshop certificates (Ads Search, Ads Apps, Analytics). Say "Google certified", never "Google Partner".
3. Never mention the owner's day job or employer, and never add any employer document, screenshot or data. This repo is public.
4. WhatsApp +91 91940 20727 takes messages only, no calls. Never use +91 88876 20727. Email: theofficialmuddassir@gmail.com.
5. Keep GA4 (G-W8JPSTDLC1), AdSense (ca-pub-4045389773179069), the Google site verification tag and existing URLs working.
6. Design: grey-green paper, ink text, a deep green for links and one marigold highlight; Schibsted Grotesk headings, Newsreader body, IBM Plex Mono labels. No gradient blobs, glassmorphism, emoji bullets or fake dashboards.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
