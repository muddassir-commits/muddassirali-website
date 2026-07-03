# 02 — Design System

The whole point: it must look **hand-built by a real developer**, not generated. That means restraint, precision, hairlines, mono labels, and a tight grid — *not* gradient blobs, huge rounded cards, glassmorphism, or three accent colors.

## The "anti-AI-fake" rules (read these first)
1. **One accent colour only.** Everything else is ink, grey, and hairline. Colour is punctuation, not paint.
2. **Small radii.** 2–8px max. **No pills, no fully-rounded cards.** Buttons ~6px. Some elements 0px (sharp) on purpose.
3. **Borders > shadows.** Structure comes from 1px hairlines, not soft drop-shadows. Shadow only appears subtly on hover.
4. **No gradients as decoration.** No purple-blue blob backgrounds. Flat white/off-white sections only. (A faint 1px dot-grid or subtle grain is allowed — see below.)
5. **Mono for meta.** Section numbers, labels, tags, timestamps, and captions use the monospace font. This single move sells the "developer" feel.
6. **Left-aligned, grid-locked.** Avoid everything-centered. Real dev sites use a strong left edge and a visible column grid.
7. **Generous whitespace.** Let sections breathe. Density in *content*, not in decoration.
8. **Real numbers, honest labels.** Counters and stats must be defensible.

## Colour tokens
```
--bg            #FFFFFF   /* base */
--bg-alt        #FAFAFA   /* alternating sections */
--bg-alt-2      #F4F4F5   /* zinc-100, deepest light panel */
--ink           #0A0A0A   /* primary text / headings */
--ink-2         #3F3F46   /* zinc-700, body */
--ink-3         #71717A   /* zinc-500, secondary/meta */
--ink-4         #A1A1AA   /* zinc-400, muted */
--line          #E4E4E7   /* zinc-200, hairlines/borders */
--line-strong   #D4D4D8   /* zinc-300 */
--accent        #4F46E5   /* Electric Indigo — the ONLY accent */
--accent-ink    #4338CA   /* accent hover/darker */
--accent-wash   #EEF2FF   /* indigo-50, rare fill behind accent chips */
--success       #16A34A   /* only for the "available" status dot */
```
Use accent for: active nav underline, link hover, key inline highlights, the status dot ring, one word in the hero, small tags. **Never** large accent fills.

## Typography
- **Sans:** `Geist` (headings + UI). Fallback: Inter.
- **Mono:** `Geist Mono` (labels, numbers, tags, code-ish meta). Fallback: JetBrains Mono.
- Load via `next/font` (self-host). No FOUT.

### Type scale (clamp for fluid)
```
Display (hero H1)  clamp(2.75rem, 6vw, 5.25rem)  weight 600  tracking -0.03em  leading 0.98
H2 (section title) clamp(1.9rem, 3.5vw, 3rem)    weight 600  tracking -0.02em
H3 (card title)    1.25rem  weight 550/600       tracking -0.01em
Body-lg            1.125rem weight 400            leading 1.6   color --ink-2
Body               1rem     weight 400            leading 1.65  color --ink-2
Mono-label         0.75rem  weight 500  UPPERCASE tracking 0.12em color --ink-3
Mono-num           tabular-nums for all stats/counters
```
Headlines are **tight** (negative tracking, ~1.0 leading). Body is **airy** (1.6+ leading). That contrast reads as intentional.

## Spacing & layout
- 8px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Max content width:** 1200px (`max-w-[1200px] mx-auto`). Inner text blocks cap at ~68ch.
- **Section vertical padding:** 96px desktop / 64px mobile (`py-24 md:py-32`).
- **Gutters:** 24px mobile, 32–40px desktop.
- **Visible grid:** 12-col. Let some sections expose the grid with faint vertical hairlines at the container edges.

## Radius
```
--r-sm  4px   /* tags, inputs */
--r-md  6px   /* buttons, small cards */
--r-lg  8px   /* large cards — do not exceed */
```

## Borders & elevation
- Default border: `1px solid var(--line)`.
- Cards: white bg + 1px hairline. On hover: border → `--line-strong`, add `translateY(-2px)` + a *very* soft shadow `0 8px 24px -12px rgba(10,10,10,.12)`.
- Section dividers: full-width 1px `--line`.

## Texture (optional, subtle, "real dev" touch)
- A fixed, ~3% opacity **grain/noise** overlay across the whole page (SVG feTurbulence or a tiny PNG, `mix-blend-mode: multiply`, `pointer-events:none`).
- OR a faint **dot-grid** background on the hero only (`radial-gradient` dots at `--line` colour, 24px spacing, ~40% opacity, masked to fade out).
Pick ONE. Both together = too much.

## Buttons
- **Primary:** ink bg (`--ink`), white text, 6px radius, mono-ish label optional. Hover: bg `--accent`, subtle scale 1.02, arrow nudges right.
- **Secondary:** transparent, 1px `--line-strong` border, ink text. Hover: border → ink.
- **Ghost/link:** ink text + animated underline (draws left→right on hover) in accent.
- All buttons: `transition 200ms ease`, focus-visible ring in accent.

## Iconography
- `lucide-react`, 1.5px stroke, 16–20px. Consistent set. No filled/duotone. No emoji in the UI.

## Imagery
- This is **typography-led**. Avoid stock photos. Allowed visuals: the tool wordmarks in the marquee, small SVG diagrams for systems (n8n flow, funnel), the resume icon, and an optional tasteful monochrome portrait (top-right of About, small, 1px border, no rounding beyond 6px).

## Dark mode
- Out of scope for v1. White theme only. (Don't let the AI add a theme toggle.)
