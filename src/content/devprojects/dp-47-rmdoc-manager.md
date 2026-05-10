---
id: "DP-47"
title: "RMDoc Manager"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
  - "config"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "3D Document Manager for importing, spatializing, and temporalizing 2D sources in 3D space."
components:
  - "Image import pipeline (done)"
  - "Quad/Camera creation (done)"
  - "DOSCO path resolution (done)"
  - "RepresentationModelDocNode graph sync (done)"
  - "Master/Instance model (done)"
  - "Certainty classification system (done)"
  - "Edit Classification operator (done, three-axis per DP-07)"
  - "Colour-by-geometry quad viewport toggle (done)"
  - "Camera/Quad refinement (deferred, v1.6)"
  - "Visual Manager integration (deferred, v1.6)"
  - "Temporal Source Positioning (deferred, v1.6)"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Ships the tool-side counterpart of DP-07 (Document Node three-axis classification). Camera/Quad refinement, Visual Manager integration, and Temporal Source Positioning deferred to v1.6. Related to DP-38 (Tropy Document Import) for future import pipeline."
---

Tool for importing, managing, and spatializing 2D documentary sources (images, photographs, plans) in 3D space and linking them to temporalized documents. Creates textured quads and cameras from document metadata via DOSCO path resolution. Integrates with the graph through RepresentationModelDocNode creation and edges. Supports temporal linking with dates, epochs, and a master/instance model with certainty classification. The Document Manager panel ships with filtering, detail view, completeness indicators, Create Document operator, Edit Classification operator for the three-axis Master-Document classification (DP-07), and colour-coded UIList icons driven by the document's geometry axis. The RMDoc sub-panel handles object-centric management of spatialized quads with per-object camera, alpha, clip distances, pilot mode, and an opt-in Colour-by-geometry toggle that mirrors the document's geometry colour onto the quad's viewport object.color. Camera/Quad spatialization refinement, Visual Manager integration, and Temporal Source Positioning are deferred to a v1.6 follow-up.
