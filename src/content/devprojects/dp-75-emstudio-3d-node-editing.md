---
id: "DP-75"
title: "EMStudio 3D-node editing via ATON/Heriverse integration"
cat: "infra"
impacts:
  - "emstudio"
  - "s3d"
status: "superseded"
statusLabel: "Superseded by the EMStudio 3D Space (DP-89)"
targetVersion: "1.6"
incorporated: null
supersededBy: "DP-89"
embargo: false
desc: "Make the 3D-node part (RM / RMDoc / RMSF, their transforms and validity) editable and accessible from EMStudio by embedding a 3D viewer/editor (ATON / Heriverse) — iframe or another integration — with multiple windows and the option to send one fullscreen. EMStudio's graph stays 2D; the embedded viewer provides the 3D editing surface."
components:
  - "Embed an ATON/Heriverse 3D viewer inside EMStudio (iframe or other integration)"
  - "Multi-window layout with the ability to send one window fullscreen"
  - "Edit 3D-node data from EMStudio: transforms (roto-scale-translate), RM validity (DP-74), placement qualia (Q-C)"
  - "Two-way sync with the s3Dgraphy property graph (single source of truth); no triple-editing"
  - "Boundary: does NOT duplicate the CNRS 3D scientific viewer (cf. DP-70); EMStudio's own graph view stays 2D"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Closed: a native three.js viewer (the Space, DP-89) was chosen instead of an embedded ATON. Editing a model's transform from the gizmo, with the Blender chain, is in 1.6 inside DP-89 (E.D., 17 Nov 2026)."
relatedDPs:
  - "DP-11"
  - "DP-33"
  - "DP-70"
  - "DP-74"
---

<!-- MICRO-O 2026-11-17 -->
**Closed (17 November 2026):** superseded by the EMStudio 3D Space, DP-89.

*Original project description:*

EMStudio authors the stratigraphic graph in 2D, but a growing part of the model is genuinely three-dimensional: the representation models (RM, RMDoc, RMSF), their transforms, their placement qualia and — with DP-74 — their temporal validity. Today that 3D layer is editable only in Blender. DP-75 proposes to make it editable and accessible from EMStudio too, by embedding a 3D viewer/editor — ATON or Heriverse — as an iframe or a deeper integration, with a multi-window layout and the option to send one window fullscreen.

The graph view of EMStudio stays 2D; the embedded viewer is the 3D surface. Editing there writes back to the s3Dgraphy property graph, the single source of truth, with the same discipline as the rest of EMStudio (author on the property graph, project to RDF/TTL; no triple-editing). The concept is clear in intent — the 3D nodes should be first-class and editable where the reasoning lives — while the exact embedding mechanism is left open. It must not duplicate the CNRS 3D scientific viewer (the boundary recorded in DP-70): EMStudio and any HDTO-profile GUI stay 2D for the graph, and the 3D work happens in the embedded, purpose-built viewer.
