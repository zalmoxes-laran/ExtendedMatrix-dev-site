// =============================================================
// Content collections — devprojects + emVersions
// =============================================================
// `devprojects` is a 1:1 frontmatter mapping of the legacy `projects[]` JS
// array that lived in the previous single-file dev site
// (ExtendedMatrix/docs/dev-projects/index.html). The long-form description
// (`full`) becomes the markdown body.
//
// `emVersions` mirrors the legacy `emVersions[]` array and adds explicit
// `isCurrent` / `isInDevelopment` flags so the version banner can be derived
// from data.
// =============================================================

import { defineCollection, z } from 'astro:content';

const devprojects = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    id: z.string().regex(/^DP-\d{2,3}$/),
    title: z.string(),

    // Taxonomy
    cat: z.enum(['core', 'tool', 'extension', 'infra', 'research', 'collab']),
    impacts: z
      .array(z.enum(['emtools', 's3d', 'yed', 'config', 'heriverse', 'emstudio']))
      .default([]),

    // Status — ordered from most-shipped to most-nascent. `idea` is the
    // earliest stage: a design sketch not yet articulated as a formal
    // concept (which is the next step up). Added 2026-08-02 for DP-79
    // (EM Narrative) — kept below `concept` in the enum to preserve
    // the maturity gradient when consumers sort or filter by status.
    status: z.enum([
      'done',
      'near',
      'in-dev',
      'partial',
      'planned',
      'concept',
      'research',
      'idea',
    ]),
    // Legacy `statusLabel` field — preserved verbatim from the source array,
    // even though it is derivable from `status`. Keeping it avoids any data
    // loss in the migration; the rendering code prefers `status` and only
    // falls back to this when the mapping is missing.
    statusLabel: z.string().optional(),

    // Versioning
    targetVersion: z.string().optional(),
    incorporated: z.string().nullable().optional().default(null),

    // Lifecycle relations (informational; populated where known)
    supersededBy: z.string().optional(),
    splits: z.array(z.string()).default([]),
    absorbs: z.array(z.string()).default([]),

    // Visibility
    embargo: z.boolean().default(false),
    embargoNotes: z.string().optional(),

    // Short description shown on cards
    desc: z.string(),

    // Components / details
    components: z.array(z.string()).default([]),

    // Flags
    thesis: z.boolean().default(false),
    stratigraph: z.boolean().default(false),

    // References
    keyStudy: z.string().default('Needed'),
    notes: z.string().optional(),
    repos: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    relatedDPs: z.array(z.string()).default([]),

    // Display
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const emVersions = defineCollection({
  type: 'content',
  schema: z.object({
    version: z.string(),
    date: z.string(),
    status: z.enum(['released', 'in-development', 'planned']),
    summary: z.string(),
    repos: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    isCurrent: z.boolean().default(false),
    isInDevelopment: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  devprojects,
  emVersions,
};
