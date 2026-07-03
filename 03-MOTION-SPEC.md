# 03 — Motion & Animation Spec

Motion philosophy: **precise, quick, physical.** Real-dev motion = short durations, custom easing, things that respond to *you* (scroll, cursor). Avoid slow floaty fades and bouncy spring overkill.

## Global setup
- **Smooth scroll:** Lenis (`lenis` package). Hook it to GSAP ScrollTrigger's `scrollerProxy` / `ticker` so scroll-linked animations stay in sync.
- **Easing tokens:**
  - `ease-out-expo` → `cubic-bezier(0.16, 1, 0.3, 1)` (default reveal)
  - `ease-in-out-quart` → `cubic-bezier(0.76, 0, 0.24, 1)` (clip wipes, nav)
  - Framer spring for magnetic/cursor: `{ stiffness: 150, damping: 15, mass: 0.1 }`
- **Reveal defaults:** distance 16–24px, duration 0.6–0.8s, ease-out-expo, `once: true`.
- **Stagger:** children 0.06–0.09s apart.
- **`prefers-reduced-motion`:** disable transforms/scroll-linked motion; keep only opacity fades ≤0.2s. Custom cursor off. Marquee still scrolls (it's decorative but slow) OR pauses — your call.
- **Performance:** animate only `transform` + `opacity`. Add `will-change` sparingly. No layout-animating props.

## Section-by-section

### 1. Nav
- Mounts: fades down from y:-12 over 0.5s.
- On scroll past hero: background goes from transparent → `rgba(255,255,255,0.8)` + `backdrop-blur(10px)` + bottom hairline. Height shrinks slightly (72px → 60px). Animate with a scroll listener, not per-frame React state thrash (use a threshold).
- Active-section link gets an accent underline that **slides** between links (shared-layout / `layoutId` in Framer Motion).
- Mobile: full-screen menu, links stagger in, clip-path circle reveal from the toggle.

### 2. Hero
- **Headline:** split into lines (and optionally words). Each line rises from `y: 110%` inside an `overflow:hidden` mask, staggered 0.08s, ease-out-expo, 0.9s. (GSAP SplitText or manual line-wrap spans.)
- **Rotating role word:** one word in the sub-headline cycles through: `Meta Ads` → `Performance` → `Automation` → `AI Systems`. Crossfade + y-slide every 2.2s. Width animates to fit.
- **Sub + CTAs:** fade-up after headline, 0.15s delay stagger.
- **Background:** faint dot-grid with a slow parallax on scroll (translateY ~ scroll*0.15). Optional 1 accent line that draws across under the headline (scaleX 0→1, 0.8s, ease-in-out-quart).
- **Scroll cue** at bottom: small mono "SCROLL" + a 1px line that loops downward (subtle).

### 3. Tool / skill marquee
- Infinite horizontal marquee of tool wordmarks (Meta Ads, Google Ads, GA4, n8n, Next.js, Supabase, OpenAI, Apollo.io, Airtable, Vercel, Razorpay). Pure CSS `@keyframes` translateX or GSAP. Duplicate the track for seamless loop.
- **Pause on hover.** Speed ~ 40–60s per loop (slow, calm). Two rows, opposite directions optional.
- Wordmarks in mono, `--ink-3`, separated by a small accent dot `·`.

### 4. About
- Heading + paragraph: line-mask reveal on scroll.
- **Principles list** (results-first / no vanity metrics / no lock-in): each item slides in from x:-16 with a leading accent tick that draws.
- Optional portrait: clip-path reveal (top→bottom wipe).
- Quick-facts side panel: numbers count-up when in view.

### 5. Selected Work (project cards)
- Cards reveal staggered (y:24, 0.7s).
- **Hover:** border strengthens, card lifts 2px, the arrow icon translates x:+4, and a thin accent line draws along the card's top edge (scaleX 0→1). Keep tilt *very* subtle (max 2–3° with `rotateX/rotateY` from cursor position) or skip tilt entirely — restraint reads as senior.
- Tags: mono chips, no animation needed.
- If a card has a preview image/mock: it does a mask-reveal on scroll and a slow scale 1.0→1.03 on hover.

### 6. Case studies
- Each study is a row with a big mono index (01, 02…) that's slightly translucent and shifts on scroll (parallax).
- Expand/collapse: height auto-animate (Framer Motion `AnimatePresence`), chevron rotates 180°.
- Metric numbers count-up on reveal.

### 7. Capabilities / Stack
- Groups reveal staggered. Skill chips: fade+scale from 0.96, staggered fast (0.04s).
- Optional: on hover a chip shows a tiny mono proficiency tag.

### 8. Experience timeline
- Vertical hairline draws top→bottom as you scroll through it (GSAP ScrollTrigger `scrub`, scaleY 0→1).
- Each entry fades-up + the timeline node (small square, not circle — sharper) scales in and turns accent when its entry is active in viewport.

### 9. Impact metrics strip
- Big tabular-num counters count up from 0 when the strip enters view (once). Duration ~1.6s, ease-out. Use `IntersectionObserver`, not scroll scrub, so it fires once cleanly.
- Thin accent divider draws between stats.

### 10. Contact / CTA
- Big headline line-mask reveal.
- Email: on hover, letters do a subtle vertical "flip" stagger (optional flourish) OR just an underline draw — pick underline for restraint.
- Social links: arrow-nudge on hover.
- Background can go `--ink` (dark block) for one high-contrast finish — this is the one allowed dark panel and it makes the white theme feel intentional.

### 11. Footer
- Minimal fade-in. "Back to top" scrolls smoothly via Lenis. A live clock (IST) in mono is a nice real-dev touch (updates each second, `tabular-nums`).

## Custom cursor (desktop only, optional but on-brand)
- A small dot (6px, ink) + a trailing ring (28px, 1px border) that lags via spring.
- On interactive elements: ring scales to 44px and label text can appear inside (e.g., "VIEW", "OPEN"). Disable entirely on touch devices and under reduced-motion.

## Grain / noise
- Fixed full-page overlay, ~3% opacity, `pointer-events:none`, `z-index` above bg but below content. Static (no animation) to save perf. Skip if it costs Lighthouse points on mobile.

## Do NOT
- No parallax on text that must be read.
- No auto-playing sound/video.
- No scroll-jacking that fights the user. Lenis should feel like *smooth*, not *slow*.
- No entrance animation longer than ~1s.
