# Muddassir Ali — Portfolio Build Kit

**Goal:** A single-page, white-theme, "real-developer" portfolio at **muddassirali.com** — built to send to HR / recruiters / talent teams.
**Build environment:** Antigravity IDE (folder already created & open).
**Recommended stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis (smooth scroll) + GSAP ScrollTrigger. Deploy on Vercel.

---

## How to use this kit

1. **Paste this entire `portfolio-build-kit/` folder** into your Antigravity project root (or a `/docs` folder inside it).
2. Read `14-ANTIGRAVITY-BUILD-PROMPT.md` — that's the single prompt you paste into Antigravity's chat to build the whole site. It references every other file here.
3. Antigravity will read the spec + content files and generate the site.
4. Iterate section by section (the build prompt tells it to build in phases so nothing breaks — same lesson from the veloxisglobal.com incident: **scoped, phased prompts, never one giant destructive change**).

---

## File index

| File | What it is |
|---|---|
| `00-START-HERE.md` | This file |
| `spec/01-PROJECT-BRIEF.md` | The PRD: goal, audience, page structure, tech stack, guardrails |
| `spec/02-DESIGN-SYSTEM.md` | Colors, type, spacing, radius, grid — the "real dev, not AI-fake" rules |
| `spec/03-MOTION-SPEC.md` | Every animation/effect, per section, with libraries + timings |
| `spec/04-SECTION-LAYOUT.md` | Single-page section order + wireframe for each |
| `spec/05-COMPONENT-SPEC.md` | Navbar, buttons, cards, cursor, marquee — component-level detail |
| `spec/06-SEO-META-PERF.md` | Meta tags, OG, performance budget, accessibility |
| `content/10-hero-about.md` | Hero + About copy |
| `content/11-capabilities-stack.md` | Skills / tech stack content |
| `content/12-projects.md` | Flagship builds & products (own work) |
| `content/13-case-studies-seo.md` | 6 SEO/performance case studies — **client-anonymized** |
| `content/14-experience.md` | Work history timeline |
| `content/15-contact-footer.md` | Contact, socials, footer |
| `14-ANTIGRAVITY-BUILD-PROMPT.md` | **The final prompt to paste into Antigravity** |

---

## ⚠️ Two things to confirm before you ship

1. **Phone number:** I used **+91-8887620727** (your verified number) everywhere. You typed `9194020727` in chat — if THAT is the number you want on the public portfolio, do a find-replace for `8887620727` across the content files before building.
2. **Client confidentiality:** Every SEO case study uses an **industry label only** — no client names, no domains, no team names. Verified against your 6 sheets. Do a final read of `content/13-case-studies-seo.md` before sending to anyone.

---

## Honesty guardrail (important for a recruiter-facing site)

The SEO sheets are *process* sheets — they contain scope, keyword research, and execution plans, **not** verified result numbers (rankings/traffic lift). So this kit does **not** invent metrics. Wherever a hard result belongs, you'll see `[REAL METRIC — ADD YOURS]`. Fill these only with numbers you can defend in an interview. An empty-but-honest case study beats a fabricated one the moment a recruiter asks "how did you measure that?"
