# 14 — Antigravity Build Prompt

> Paste everything below the line into Antigravity's chat, **after** you've dropped the `portfolio-build-kit/` folder into the project. Build in phases — don't let it one-shot the whole thing.

---

You are building a single-page personal portfolio website for **Muddassir Ali** at muddassirali.com. Read every file in `./portfolio-build-kit/` before writing any code — the `spec/` folder defines HOW to build, the `content/` folder defines WHAT goes in each section. Treat those files as the source of truth and follow them exactly.

## Stack
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + GSAP (ScrollTrigger) + Lenis smooth scroll. Fonts: Geist + Geist Mono via `next/font`. Icons: `lucide-react`. Deploy target: Vercel.

## Hard rules (do not violate)
1. **Single page.** One route `/`, all sections scroll. Anchor nav only.
2. **White/light theme only.** No dark mode toggle. (One intentional dark `--ink` block for the Contact section — that's it.)
3. **"Real developer" aesthetic, not AI-templated.** Follow `spec/02-DESIGN-SYSTEM.md` precisely: ONE accent colour (Electric Indigo `#4F46E5`), small radii (2–8px, no pills), hairline borders instead of soft shadows, no decorative gradients or glassmorphism, mono font for all labels/numbers/tags, left-aligned grid-locked layout, generous whitespace.
4. **Copy is final.** Use the text in `content/*.md` verbatim. Do not rewrite or "improve" it.
5. **Confidentiality.** Never add any client name, client domain, or third-party name anywhere. Case studies are industry-labelled only (see `content/13-case-studies-seo.md`).
6. **No fabricated metrics.** Keep the `[REAL METRIC — ADD YOURS]` and `[REAL]` placeholders exactly as written — I will fill them. Do not invent numbers.
7. **Motion must never block reading.** Implement `prefers-reduced-motion` (fades only). Animate only transform/opacity.
8. **Performance.** Self-host fonts, lazy-load client-only bits, target Lighthouse Perf ≥90 mobile.

## Design tokens
Pull the exact colour, type, spacing, radius tokens from `spec/02-DESIGN-SYSTEM.md` into `tailwind.config.ts` (extend theme with CSS variables) and a `globals.css` `:root`. Set up Geist + Geist Mono. Add the optional grain overlay OR hero dot-grid (pick one, per the spec).

## Section order (single scroll) — see `spec/04-SECTION-LAYOUT.md`
1. Sticky Nav → 2. Hero → 3. Tool marquee → 4. About + principles → 5. Selected Work → 6. Case Studies (expandable) → 7. Capabilities/Stack → 8. Experience timeline → 9. Impact strip (counters) → 10. Contact (dark block) → 11. Footer.

## Motion — see `spec/03-MOTION-SPEC.md`
Set up Lenis globally and sync it with GSAP ScrollTrigger. Implement per-section: hero split-line reveal + rotating role word + dot-grid parallax; infinite pausable tool marquee; scroll-reveal (16–24px, ease-out-expo `cubic-bezier(0.16,1,0.3,1)`, once); magnetic primary buttons; project-card hover (top-edge accent line draw + 2px lift + arrow nudge, subtle/no tilt); case-study expand/collapse via AnimatePresence; count-up stat counters via IntersectionObserver; experience-rail scaleY draw on scroll; optional desktop custom cursor (dot + spring ring, off on touch/reduced-motion); live IST clock in footer.

## Components — see `spec/05-COMPONENT-SPEC.md`
Build reusable: `Nav`, `Hero`, `Marquee`, `SectionHeader`, `ProjectCard`, `CaseStudyRow`, `Chip`, `Button`/`ResumeButton`, `StatCounter`, `Timeline`/`TimelineItem`, `Cursor`, `Grain`, `Clock`. Semantic HTML, keyboard-accessible, focus-visible rings.

## Meta/SEO — see `spec/06-SEO-META-PERF.md`
Add Next.js `metadata`, Person JSON-LD, OG tags, favicon (monogram MA), theme-color white. Put `Muddassir-Ali-Resume-2026.pdf`, `og.png`, and favicons in `/public` (I'll add the actual files — scaffold the references).

## Build in PHASES (important — do NOT one-shot)
Do these one at a time. After each phase, stop, show me the result, and wait before continuing. Never rewrite the entire app in a single destructive edit.

- **Phase 0:** Scaffold Next.js + Tailwind + fonts + tokens + Lenis + global layout, grain/dot-grid. Blank sections with correct ids + `SectionHeader`s.
- **Phase 1:** Nav (sticky/blur/active-underline + mobile menu).
- **Phase 2:** Hero (split reveal, rotating word, CTAs, dot-grid parallax, scroll cue).
- **Phase 3:** Tool marquee.
- **Phase 4:** About + principles + quick-facts counters.
- **Phase 5:** Selected Work cards.
- **Phase 6:** Case Studies (expandable rows, index parallax).
- **Phase 7:** Capabilities/Stack chip groups.
- **Phase 8:** Experience timeline (rail draw).
- **Phase 9:** Impact strip counters.
- **Phase 10:** Contact dark block + Footer + live clock.
- **Phase 11:** Polish pass — reduced-motion, focus states, Lighthouse, responsive check at 375 / 768 / 1280.

Start with **Phase 0** now. Confirm the stack is installed and the tokens are wired, show me the empty scaffold, then wait for me to say "next".
