# 05 — Component Spec

Component-level detail so the build is consistent. Names are suggestions.

## `<Nav />`
- Sticky, `z-50`. Transparent over hero → blurred white after scroll threshold (~80px).
- Contains: `<Monogram/>`, `<NavLinks/>` (with Framer `layoutId` accent underline), `<StatusPill/>`, `<ResumeButton variant="secondary"/>`.
- Mobile: hamburger → full-screen overlay menu, clip-path circle reveal, staggered links, body scroll lock.
- Active link tracked via IntersectionObserver on each section id.

## `<Hero />`
- `<Eyebrow/>` (mono, with rotating word) + `<SplitHeadline/>` + `<Lede/>` + `<CtaRow/>` + `<ScrollCue/>`.
- Dot-grid is a background layer (CSS radial-gradient, masked, parallax on scroll).

## `<Marquee items direction speed />`
- Duplicated track for seamless loop, `aria-hidden` on the duplicate.
- Pause on hover. Respects reduced-motion.

## `<SectionHeader index label title />`
- `index`: mono, e.g. `01 /`. `label`: mono uppercase. `title`: H2.
- Reusable across About, Work, Case Studies, Capabilities, Experience.

## `<ProjectCard title kicker desc tags href />`
- White, 1px hairline, 8px radius. Top-edge accent line draws on hover; lifts 2px; arrow nudges.
- `tags`: mono chips. `href`: external ↗ or in-page.
- Whole card is the click target (`<a>` wrapping), keyboard focusable.

## `<CaseStudyRow index industry scopeTags children isOpen onToggle />`
- Collapsed: big translucent mono index + industry title + scope chips + `[+]`.
- Expanded (`AnimatePresence`): scope, deliverables list, honest outcome line, `[REAL METRIC]` placeholders.
- Hairline divider under each row.

## `<Chip>` / `<Tag>`
- Mono, 0.75rem, 1px `--line` border, 4px radius, `--ink-3` text, subtle bg `--bg`. No animation by default.

## `<Button variant="primary|secondary|ghost" href icon>`
- See Design System. Focus-visible ring in accent. Icon (lucide) with hover nudge.
- `<ResumeButton/>` = Button that triggers download of `/Muddassir-Ali-Resume-2026.pdf` (put file in `/public`).

## `<StatCounter value suffix label />`
- Counts up once on view (IntersectionObserver). `tabular-nums`. Accepts non-numeric (`[REAL]`) gracefully — if value isn't a number, just render it static.

## `<Timeline />` + `<TimelineItem period role org points />`
- Square nodes (`--r-sm` or 0), 1px vertical rail that scaleY-draws on scroll (GSAP scrub).
- Active item's node turns accent when centered in viewport.

## `<Cursor />` (desktop only)
- Dot + spring-trailed ring. Hidden on touch / reduced-motion. Scales + optional label on `[data-cursor="view"]` elements.

## `<Grain />`
- Fixed overlay, ~3% opacity, `pointer-events:none`, above bg / below content.

## `<Clock />` (footer)
- IST live time, mono, `tabular-nums`, updates every second, hydration-safe (render after mount to avoid mismatch).

## Accessibility notes for every component
- Semantic tags (`nav`, `main`, `section` with `aria-labelledby`, `footer`).
- All interactive elements keyboard-reachable, visible focus.
- Marquee + decorative layers `aria-hidden`.
- Colour contrast ≥ 4.5:1 for body text (ink-2 on white passes; don't put ink-3 on --bg-alt for long text).
- Respect `prefers-reduced-motion` in a single shared hook `useReducedMotion()`.
