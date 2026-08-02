// Centralized label / class maps for development project taxonomy.
// Mirrors the constants from the legacy index.html so the visual mapping
// stays identical.

export const catLabel: Record<string, string> = {
  core: 'Core Language',
  tool: 'Tools',
  extension: 'New Domains',
  infra: 'Infrastructure',
  research: 'Research',
  collab: 'Collaboration',
};

export const catTag: Record<string, string> = {
  core: 'tag-core',
  tool: 'tag-tool',
  extension: 'tag-extension',
  infra: 'tag-infra',
  research: 'tag-research',
  collab: 'tag-collab',
};

export const statusOrder = [
  'done',
  'near',
  'in-dev',
  'partial',
  'planned',
  'concept',
  'research',
  // 'idea' is the earliest stage — added 2026-08-02 for DP-79
  // (EM Narrative). Placed last in the order so the homepage
  // groups it below Research (most-nascent bucket).
  'idea',
] as const;

export const statusGroupLabel: Record<string, string> = {
  done: 'Incorporated',
  near: 'Near completion',
  'in-dev': 'In development',
  partial: 'Partially implemented',
  planned: 'Planned',
  concept: 'Concept',
  research: 'Research',
  idea: 'Idea',
};

export const statusDot: Record<string, string> = {
  done: 'rm-dot-done',
  near: 'rm-dot-done',
  'in-dev': 'rm-dot-dev',
  partial: 'rm-dot-partial',
  planned: 'rm-dot-planned',
  concept: 'rm-dot-concept',
  research: 'rm-dot-research',
  // Reusing rm-dot-concept for `idea` for now — visually adjacent.
  // TODO: introduce a distinct rm-dot-idea class in global.css if a
  // separate colour is desired (currently identical to concept).
  idea: 'rm-dot-concept',
};

export const impactLabels: Record<string, string> = {
  emtools: 'EMtools',
  s3d: 's3Dgraphy',
  yed: 'yEd palette',
  config: 's3D config (rules)',
  heriverse: 'Heriverse',
  emstudio: 'EMStudio',
};

export const impactTagClass: Record<string, string> = {
  emtools: 'tag-emtools',
  s3d: 's3d',
  yed: 'tag-yed',
  config: 'tag-config',
  heriverse: 'tag-heriverse',
  emstudio: 'tag-emstudio',
};

// Keep the impactTagClass values aligned with the CSS in global.css.
// (Note: the legacy file used `tag-s3d`, `tag-yed`, etc. — we keep the
// same names, only fixing the typo above where the value was 's3d'.)
impactTagClass.s3d = 'tag-s3d';

// Resolve a usable label for a given status, preferring the explicit
// `statusLabel` from the legacy data when present.
export function resolveStatusLabel(status: string, statusLabel?: string) {
  return statusLabel || statusGroupLabel[status] || status;
}
