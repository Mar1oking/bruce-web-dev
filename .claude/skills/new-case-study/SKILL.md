---
name: new-case-study
description: Adds a new case study to the portfolio's Work section. Use when the user says things like "add a case study for X", "new portfolio project", or "add [client] to my work". Creates one markdown file in the Astro content collection following the schema, with SEO fields filled in.
---

# New Case Study

When asked to add a case study, gather (ask only for what's missing):
- Project / client name
- One-line result (the outcome it produced)
- What the project was / problem solved
- What I did (solution)
- Tags (tech used — e.g. Astro, Tailwind, Shopify)
- Image files (cover + screenshots)

Then:
1. Create ONE file: `src/content/work/<slug>.md` (slug = kebab-case name).
2. Fill frontmatter exactly to the schema in `src/content.config.ts`.
   Do not add fields that aren't in the schema.
3. Write `summary` as a tight 1–2 sentence hook. Keep copy HONEST —
   don't invent client praise or results that weren't stated.
4. Put images in `src/assets/work/<slug>/` and reference them in frontmatter.
5. Set `date` to today; `featured: false` unless told otherwise.
6. Do NOT edit the work list page or detail template — the content
   collection handles those.
7. Show the new file path + frontmatter for review. Don't build unless asked.

Keep it to a single file edit. This is a cheap, repeatable action.
