# Extended Matrix — Development Projects Site

Static Astro site that tracks active and planned **Development Projects** (DPs) for
the Extended Matrix formal language, framework, and tooling ecosystem.

- **URL (production):** https://dev.extendedmatrix.org
- **Sister site:** https://extendedmatrix.org (main project site)
- **Maintainer:** Emanuel Demetrescu — CNR-ISPC Virtual Heritage Lab, Roma

## What lives here

Each Development Project is a markdown file under `src/content/devprojects/`
with a Zod-validated frontmatter (see `src/content/config.ts`). EM versions
(1.0 … 1.6) live under `src/content/emVersions/` with the same pattern.

The site replicates the look-and-feel of the previous single-file dev site
(navy + gold palette, Source Sans 3 + Source Serif 4 typography), with the
content pulled out of an embedded JS array into proper content collections.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # Astro + TypeScript + Zod schema check
```

## Adding a Development Project

1. Create `src/content/devprojects/dp-NN-short-slug.md`.
2. Fill the frontmatter following the Zod schema in `src/content/config.ts`
   (the build will fail with a precise message if a field is wrong).
3. Write the long-form description in the markdown body.
4. `npm run build` to verify.

## Adding / promoting an EM version

Edit the matching file under `src/content/emVersions/` (e.g. `1-6.md`)
and flip `isCurrent` / `isInDevelopment` accordingly.

## Deploy

GitHub Pages, custom domain `dev.extendedmatrix.org` (CNAME committed in
`public/CNAME`). The repo is built-clean and ready for `git push` + Pages
configuration. Set the custom domain under **Settings → Pages** of this repo
and add a CNAME DNS record pointing `dev.extendedmatrix.org` to
`<github-username>.github.io`.

## License

Code: MIT (see `LICENSE`). Content: see the main project site for the
content licensing terms.
