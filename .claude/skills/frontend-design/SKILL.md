---
name: frontend-design
description: Use whenever making visual or UI design decisions on this site — page layouts, component styling, typography, color palettes, spacing/rhythm, imagery treatment, or any new page/section. Apply this before writing markup or Tailwind classes so the result reads as deliberately designed rather than a generic template. Also use when reviewing existing pages for a "stock template" look and proposing fixes.
---

# Frontend Design

Goal: every page should look like a specific person made specific choices for
this business — not like a Tailwind starter kit with the logo swapped in.
This site is a portfolio; the design itself is a work sample. Generic design
undermines the pitch.

## Before writing any markup

Answer these first, in a sentence or two each:

1. **What's the one thing this page should feel like?** (e.g. "confident and
   calm," "fast and technical," "warm small-business trust") Not a mood
   board — one point of view you'll defend in every choice below.
2. **What is this page's single most important element?** Everything else
   should visually defer to it. If nothing defers, nothing is important.
3. **What would make this look like every other portfolio site?** Name it,
   then deliberately avoid it (see Anti-patterns below).

## Typography

- Pick ONE display/heading font with actual character and pair it with a
  clean workhorse for body text — not two similar-weight grotesks that
  might as well be one font.
- Set a real type scale (e.g. a 1.25–1.5 ratio) and use it consistently.
  Don't eyeball sizes per-component.
- Use font weight and size to create clear hierarchy — most pages need
  fewer sizes than they use, not more.
- Line length matters: body text should sit around 60–75 characters per
  line (`max-w-prose` or similar), not stretch full-width.
- Tighten letter-spacing on large/bold headings; don't leave default
  tracking on 60px+ text.

## Color

- Derive the palette from one deliberate decision (a brand color, a mood,
  an accent pulled from case-study imagery) — not the default Tailwind
  `blue-500`/`indigo-600` combo.
- One primary accent color used with intention (CTAs, links, key
  highlights) beats three competing accent colors.
- Define real neutrals — a warm or cool gray scale that matches the accent
  — instead of pure `#000`/`#fff`/`gray-500`.
- Check WCAG AA contrast on every text/background pairing (already
  required by CLAUDE.md) — distinctive should never mean illegible.
- Dark sections/dark mode (if used) need their own tuned palette, not an
  inverted filter over the light one.

## Spacing & layout

- Establish a spacing scale and stick to it (Tailwind's default scale is
  fine) — inconsistent gaps (`gap-4` next to `gap-5` next to `gap-6` with
  no logic) read as sloppy even if no single value is "wrong."
- Use generous whitespace deliberately around the most important element
  per section rather than spreading margin evenly everywhere.
- Break the centered-single-column-of-cards monotony: vary section
  layout (asymmetric splits, offset imagery, full-bleed moments) so the
  page has rhythm across a scroll, not just within one section.
- Align to a grid, but don't be afraid of one intentional element that
  breaks it to create a focal point.

## Imagery & detail

- Treat case-study screenshots/photos as content, not decoration — real
  crops, consistent aspect ratios, no default drop-shadow-on-everything.
- Small details signal intentionality: custom focus states, considered
  hover transitions, a distinctive cursor or link underline treatment,
  subtle motion on scroll — pick a few, execute them well, don't do all
  of them halfway.
- Icons should match one visual language (all outline, or all filled —
  not mixed) and one weight.

## Anti-patterns to actively avoid

- Purple-to-blue gradient hero with a centered heading + subheading +
  two buttons — the single most recognizable "AI startup template" look.
- Default Tailwind UI / shadcn component styling left unchanged.
- Generic sans-serif (Inter) for everything with no display font contrast.
- Rounded-xl cards with soft shadows on every single element uniformly.
- Stock-photo-style imagery or generic blob/gradient background shapes
  with no relation to the content.
- Emoji used as section icons.
- Three-feature-grid-with-icon-on-top pattern repeated for every content
  type on the page regardless of fit.

## Process

1. Answer the "before writing any markup" questions above for the
   page/component at hand.
2. Sketch the typography + color decisions as a short plan (fonts, scale,
   palette hex values) before touching Tailwind config or classes.
3. Build layout structure first at low fidelity, confirm hierarchy reads
   correctly, then add color/type/imagery polish.
4. Before calling it done, check the page against the anti-pattern list
   above and against CLAUDE.md's Lighthouse 95+ and WCAG AA requirements.
