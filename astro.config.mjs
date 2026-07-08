// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: placeholder URL — update once the real Netlify site exists
// (needed for canonical URLs and absolute og:image URLs)
export default defineConfig({
  site: 'https://bruce-web.netlify.app',
  // PORT is set by the Claude Code preview launcher (autoPort) so parallel
  // sessions don't fight over 4321; defaults to 4321 for a plain `astro dev`.
  server: { port: Number(process.env.PORT) || 4321 },
  vite: {
    plugins: [tailwindcss()],
  },
});
