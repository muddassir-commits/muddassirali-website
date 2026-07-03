# 04 — Section Layout & Wireframes

Single page, top to bottom. ASCII wireframes = intent, not pixel-exact. All sections share `max-w-[1200px]` container; alternate `--bg` / `--bg-alt` for rhythm.

---

## 1. NAV (sticky, top)
```
┌───────────────────────────────────────────────────────────────┐
│ MA — Muddassir Ali        Work  Case Studies  Stack  Experience │
│                           ● Available   [ Résumé ↓ ]           │
└───────────────────────────────────────────────────────────────┘
```
- Left: monogram `MA` (mono, boxed 1px) + name.
- Center/right: anchor links (accent sliding underline for active).
- Far right: green status dot + "Available for work" (mono, small) + Résumé button (secondary).

---

## 2. HERO   (bg: white, dot-grid)
```
  MetaAds · Performance · Automation · AI            (mono eyebrow)

  Performance marketing,
  engineered end-to-end.                     ← Display H1, tight

  I run full-funnel Meta & Google Ads — and I build the
  n8n / CRM / AI automation systems that make them convert.
  6+ years. 300+ marketers trained.          ← body-lg, --ink-2

  [ View selected work → ]   [ Résumé ↓ ]    [ Email ]

  ────────────────────────────  SCROLL ↓
```
- Left-aligned, not centered. H1 max ~14ch per line.
- One word in H1 or eyebrow rotates (see motion spec).

---

## 3. MARQUEE / TRUST BAR   (bg: --bg-alt, thin)
```
── Meta Ads · Google Ads · GA4 · n8n · Next.js · Supabase · OpenAI · Apollo.io · Airtable · Vercel · Razorpay ──▶ (loops)
```
Full-bleed, 1px top+bottom hairline. Mono, muted.

---

## 4. ABOUT   (bg: white)
```
 01 / ABOUT                                    [ small portrait ]
                                               (optional, 6px, 1px border)
 A practitioner, not a theorist.

 <2 short paragraphs of narrative copy>        ┌────────────────┐
                                               │ 6+   yrs exp   │
 How I work                                    │ 300+ trained   │
  ▸ Results-first — no vanity metrics          │ 50+  SEO pages │
  ▸ Full transparency, no black boxes          │ 6    industries│
  ▸ No lock-in — the work earns the retainer   └────────────────┘
```
Two-column on desktop (text left, facts/portrait right); stacks on mobile.

---

## 5. SELECTED WORK   (bg: --bg-alt)
```
 02 / SELECTED WORK
 Products & systems I've designed and shipped.

 ┌─────────────────────────┐ ┌─────────────────────────┐
 │ Veloxis Global          │ │ Veloxis Academy         │
 │ Founder-led agency +    │ │ Interactive LMS +       │
 │ 53-page SEO architecture│ │ Meta Ads Simulator      │
 │ Next.js · SEO · Systems │ │ Next.js·Supabase·Razorpay│
 │                       → │ │                       → │
 └─────────────────────────┘ └─────────────────────────┘
 ┌─────────────────────────┐ ┌─────────────────────────┐
 │ AI Marketing Launchpad  │ │ n8n Outreach Engine     │
 │ 30-day live cohort      │ │ Apollo→AI→CRM→WhatsApp  │
 │ Product · Curriculum    │ │ Automation · OpenAI API │
 │                       → │ │                       → │
 └─────────────────────────┘ └─────────────────────────┘
```
2-col grid desktop, 1-col mobile. Content from `content/12-projects.md`.

---

## 6. CASE STUDIES   (bg: white)
```
 03 / CASE STUDIES                        (client-confidential)
 SEO & performance work, by industry.

 01  D2C Fashion & Gifting Brand      SEO · 628 pages       [ + ]
     ───────────────────────────────────────────────────────────
 02  IT & Digital-Marketing Institute SEO · Technical       [ + ]
     ───────────────────────────────────────────────────────────
 03  Multi-Destination Travel Operator SEO · Local+Category [ + ]
     ───────────────────────────────────────────────────────────
 04  Managed Farmland / Agri-Realty   SEO · Local intent    [ + ]
     ───────────────────────────────────────────────────────────
 05  Free Online Tools Platform (SaaS) SEO · Enterprise/Links[ + ]
     ───────────────────────────────────────────────────────────
 06  Veloxis Global (own agency)      SEO architecture 53pg [ + ]
```
Each row expands to reveal scope + deliverables (from `content/13-case-studies-seo.md`). Big mono index, hairline dividers.

---

## 7. CAPABILITIES / STACK   (bg: --bg-alt)
```
 04 / CAPABILITIES
 ┌ Performance Marketing ┐ ┌ SEO ┐ ┌ AI & Automation ┐
 [Meta Ads][Google Ads]   [Technical][On-page]  [n8n][OpenAI API]
 [Full-funnel][CRO][PMax]  [Off-page][KW research][WhatsApp][CRM]
 ┌ Web & Product ┐        ┌ Analytics & Data ┐
 [Next.js][Supabase]      [GA4][Attribution]
 [Vercel][Razorpay]       [Airtable][Dashboards]
```
Grouped chip clusters. Mono chips, 1px border.

---

## 8. EXPERIENCE   (bg: white)
```
 05 / EXPERIENCE
 │
 ■ 2025–2026  Founder & CEO — Veloxis Global
 │            Agency build, retainers, systems
 │
 ■ 2025–2026  Senior Trainer / Digital Marketing — ASDC
 │            300+ marketers, curriculum, Meta+SEO
 │
 ■ 2024–2025  Digital Marketing — NDMIT
 │            SEO retainers, training
 │
 ■ 2021–2024  Digital Marketing — Global Trade Plaza (B2B)
 │            B2B growth, lead systems
 │
 (earlier roles condensed)
```
Vertical timeline, square nodes, hairline draws on scroll.

---

## 9. IMPACT STRIP   (bg: --bg-alt-2 or --ink? keep light here)
```
   6+            300+           50+            [REAL]
   years         marketers      SEO pages      ad spend
   experience    trained        architected    managed
```
Animated count-up. Tabular nums. Keep only defensible numbers.

---

## 10. CONTACT / CTA   (bg: --ink — the one dark block)
```
 Let's build something that performs.

 muddassir@... ↗           in/muddassir-ali ↗
 +91-8887620727            youtube.com/@MuddassirAli ↗
 [ Download résumé ↓ ]     ● Open to full-time & freelance
```
White text on ink. High contrast finale.

---

## 11. FOOTER   (bg: white)
```
 © 2026 Muddassir Ali · Kanpur, IN         14:32:07 IST (live)
 Built with Next.js · Designed & coded by hand      [ Back to top ↑ ]
```
