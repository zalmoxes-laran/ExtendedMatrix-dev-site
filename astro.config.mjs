import { defineConfig } from 'astro/config';

// =============================================================
// ExtendedMatrix-dev-site — Astro configuration
// =============================================================
// Deployed to https://dev.extendedmatrix.org via GitHub Pages.
// Custom subdomain root → no `base` path needed.
// =============================================================

export default defineConfig({
  site: 'https://dev.extendedmatrix.org',
  base: '/',
  output: 'static',
  build: {
    assets: '_astro',
  },
});
