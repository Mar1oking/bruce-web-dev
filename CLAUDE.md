# Project: Bruce — Web Development Services

Personal portfolio + lead-gen site. Goal: show my work and let potential
clients contact me. Audience: small business owners (English-speaking).

## Stack
- Astro + Tailwind CSS. Static site, deployed to Netlify.
- TypeScript for Astro components. Keep dependencies minimal —
  ASK before adding any new package.
- Mobile-first, responsive. Target Lighthouse 95+ on every page.

## Content language
All site copy in English.

## Pages
- `/`            Home — value prop + CTA to contact
- `/work`        Case study list (from the content collection)
- `/work/[slug]` Case study detail
- `/services`    What I offer + pricing
- `/about`       Short bio (student developer, Winnipeg)
- `/contact`     Email + phone + simple form (Netlify Forms)

## Case studies = content collection (important)
Each case study is ONE markdown file in `src/content/work/`.
Schema in `src/content.config.ts` (Astro 6+ requires this path;
the old `src/content/config.ts` location is removed):
- title: string
- client: string
- summary: string        # 1–2 sentence hook
- problem: string
- solution: string
- result: string
- tags: string[]
- cover: image path
- images: image path[]
- date: date
- featured: boolean

Adding a case study MUST be one new markdown file — no edits to the list
or detail pages. Those read the collection automatically.

## SEO / accessibility (every page)
- Unique <title> + meta description
- Open Graph title / description / image
- All images have alt text
- Semantic HTML, WCAG AA contrast

## Copy tone
Professional but approachable. Honest — I'm a student developer.
Do NOT fake testimonials or invent happy clients / results.

## Pricing
Use "Starting at $__" or "Quote on request" placeholders until
amounts are decided.

## Token / workflow discipline
- For "where is X" / architecture questions: if Graphify is installed,
  run `/graphify query` instead of reading every file. Early on with
  few files, just read directly.
- Run `/graphify --update` at the start of a session if Graphify is set up.
- Work ONE phase per session; commit at the end of each.
- Ask before adding dependencies or changing the stack.
- Show me the plan before writing code.

## Deploy
Netlify (free tier). Netlify Forms for the contact form.
