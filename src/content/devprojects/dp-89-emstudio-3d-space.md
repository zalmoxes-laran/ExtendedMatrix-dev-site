---
id: "DP-89"
title: "EMStudio 3D Space"
cat: "tool"
impacts:
  - "emstudio"
status: "in-dev"
statusLabel: "Built — editing of model transforms to add for the beta"
targetVersion: "1.6"
incorporated: null
absorbs:
  - "DP-75"
embargo: false
desc: "The 3D viewer inside EMStudio: tilesets, globe, georeference, 3D cuts, warnings for empty scenes — the graph and its models side by side."
components:
  - "Native three.js viewer with tilesets and globe"
  - "Georeference and 3D cuts"
  - "Empty-scene warnings"
  - "Gizmo (move, rotate, scale) on sketches"
  - "Gizmo on the transform of a representation model, with the Blender chain (to build, 1.6)"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built; absorbs DP-75. In 1.6 (E.D., 17 Nov 2026) the gizmo must also write the transform of a representation model (data.transform), keeping the chain with Blender."
relatedDPs:
  - "DP-75"
  - "DP-88"
  - "DP-92"
---

*Declared on 17 November 2026: built before it had a development project.*

The Space is where a reader sees the units of the matrix as volumes in their place. It was chosen instead of an embedded ATON (DP-75) because it shares the page, the selection and the time slider with the graph.

Evidence: EMStudio `scene3d.ts`, `tiles3d.ts`, `geoglobe.ts` (about 109 commits, 30 Sep – 13 Nov 2026); reports `2026-10-16-emstudio-spazio-3d*`, `2026-11-13-REPORT-spazio-e-container`, `2026-11-17-REPORT-spazio-fantasma`.
