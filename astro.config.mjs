// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Live Netlify URL. If a custom domain is added later, update this and the
// Sitemap line in public/robots.txt; everything else derives from `site`:
// canonical URLs, og:url, og:image, the sitemap.
export default defineConfig({
  site: 'https://brucewebsite.netlify.app',
  integrations: [sitemap()],
  // PORT is set by the Claude Code preview launcher (autoPort) so parallel
  // sessions don't fight over 4321; defaults to 4321 for a plain `astro dev`.
  server: { port: Number(process.env.PORT) || 4321 },
  vite: {
    plugins: [tailwindcss()],
  },
});
