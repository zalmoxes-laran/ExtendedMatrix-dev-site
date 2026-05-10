import { defineConfig } from 'astro/config';

// =============================================================
// ExtendedMatrix-dev-site — Astro configuration
// =============================================================
// Deployed to https://dev.extendedmatrix.org via GitHub Pages.
// Custom subdomain root → no `base` path needed.
// =============================================================

export default defineConfig({
  site: 'https://dev.extendedmatrix.org',
  // `base` is set for GitHub Pages preview at /ExtendedMatrix-dev-site/.
  // REMOVE this line when flipping to the custom domain `dev.extendedmatrix.org`
  // (subdomain root, no subpath needed). After removal, rebuild and redeploy.
  base: '/ExtendedMatrix-dev-site',
  output: 'static',
  build: {
    assets: '_astro',
  },
});
