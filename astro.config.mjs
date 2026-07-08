// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: set `site` to the production URL once the Netlify site exists
// (needed for canonical URLs and absolute og:image URLs)
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
