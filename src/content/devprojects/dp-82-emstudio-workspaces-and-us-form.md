---
id: "DP-82"
title: "EMStudio Workspaces (Blender-like areas) + US form sheet"
cat: "infra"
impacts:
  - "emstudio"
status: "in-dev"
statusLabel: "In development — six workspaces shipped; US form sheet post-freeze"
targetVersion: "2.0"
incorporated: null
embargo: false
draft: true
desc: "Make EMStudio's interface configurable the way Blender's is: the screen is made of AREAS, each holding an EDITOR of a chosen type (Matrix, generic graph, Narrative, Table/M-Data, DTC, 3D, and a Unit form sheet), and a saved arrangement of areas is a WORKSPACE. This already happens implicitly — entering Narrative mode swaps the central area — and the proposal is to make it explicit and general: any area can become another editor, Matrix vs generic-graph are MODES of one area (extensible to DTC and future modes), and layouts can be saved and restored. Two nearer-term seeds fall out of it and are worth doing first: (1) a central-area MODE enum that formalises the graph↔narrative swap that exists today; (2) narrative-from-graph — entering Narrative mode auto-scaffolds a site-story TEMPLATE from the current graph's epochs (plus graph/site position and other available data), which the author then prunes (remove epochs not to be described) or re-adds — the simplest single entry point for attaching narrative to the graph, reusing the existing site_story scaffolder (DP-79, the N-series from PortaMarina). The larger milestone — transformable/splittable areas and saveable workspaces, plus a Unit FORM sheet (front/back templates, the data-entry counterpart to the Table viewer, extending DP-13's Virtual SU Sheet) — is post-freeze."
components:
  - "**Area + editor-type model.** The screen is areas; each area renders an editor of a type (matrix / generic-graph / narrative / table / dtc / 3d / unit-form). Formalises the implicit central-area swap that Narrative mode already performs."
  - "**Central-area MODE enum (near-term seed).** Matrix and generic-graph become explicit MODES of the central area, extensible to DTC and others — one area, several modes, rather than hard-wired views. Low-risk, done first."
  - "**Narrative-from-graph template on enter (near-term seed).** Entering Narrative mode auto-generates a site-story template from the current graph: all available data (epochs, graph position, site position) populate the template; inside, the author deletes epochs they do not want to describe or re-adds them. One entry point, reusing the DP-79 site_story scaffolder. Solves 'no simple way to attach narrative to the graph'."
  - "**Transformable areas + workspaces (milestone).** Split an area, change its editor type, save and restore named layouts — the Blender-workspace model. Different windows for Matrix and generic graph, or one window with modes; the same freedom for Table, Narrative, DTC."
  - "**Unit FORM sheet (milestone).** A form-style data-entry editor for stratigraphic-unit records — a front/back sheet with templates — the entry counterpart to the DP-81 Table/M-Data viewer, extending DP-13 (Virtual SU Sheet). Table for bulk, form for a single record's depth."
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "E.D. 2026-08-05: the interface should be able to hold several CONFIGURATIONS — same windows, different positions — as in Blender; it already does so implicitly when entering Narrative mode. Two DPs by decision: DP-81 (Table/M-Data, freeze-safe, near-term) and this one (workspaces + form, larger/post-freeze). Sequencing: DP-81 Phase A first; then the two near-term seeds here (mode enum + narrative-from-graph); the transformable-areas/workspaces and the US form sheet are the post-freeze milestone. Keep it simple: do not build the full tiling system during the freeze — formalise the mode swap and ship the table dock, which are the first two bricks toward the workspace architecture."
relatedDPs:
  - "DP-81"
  - "DP-79"
  - "DP-13"
  - "DP-75"
---

**Build status — 2026-08-22.** The workspace model is built and measured live.
EMStudio now ships **six task-shaped arrangements** — Documentation, Graph, DTC,
Comparisons, Narrative, Annotator — from a single arrangement builder (the
standalone IDE area was removed; the Table is a window inside Graph). Matrix and
generic graph are modes of one surface, windows keep their content and scroll
position when they lose focus, and English is the default interface language. The
narrative-from-graph seed is in place: entering the Narrative arrangement
auto-scaffolds a site-story from the current graph's epochs. The remaining
milestone is the **US form sheet** (front/back data-entry templates), still
post-freeze. See the EMStudio user manual for the current state.

## Why two seeds before the big refactor

The full Blender-style workspace system is a foundational refactor (areas as a tree, split/join, editor-type
per area, saved layouts) — not a freeze-phase change. But two pieces of its value can be had cheaply now: a
MODE enum for the central area (which only makes explicit what Narrative mode already does), and the
narrative-from-graph template (which reuses the DP-79 scaffolder). Shipping those, plus the DP-81 table dock,
lays the first bricks — an area that changes editor, and a second dockable panel — without committing to the
tiling engine. The transformable areas, saved workspaces, and the US form sheet follow post-freeze.
