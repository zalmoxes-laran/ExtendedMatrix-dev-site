---
id: "DP-39"
title: "Transformation Connector (Dotted)"
cat: "core"
impacts:
  - "yed"
  - "s3d"
  - "config"
  - "emtools"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Dotted connector linking instances of the same node that change over time. Core, s3Dgraphy and EMtools implementations shipped; documentation integrated (absorbs former DP-44)."
components:
  - "Dotted connector edge type (done)"
  - "yEd palette template (done)"
  - "s3Dgraphy changed_from edges + chain helpers (done)"
  - "GraphML round-trip preservation (done)"
  - "EMtools instance-chain filtering (done)"
  - "Formal documentation (done, absorbs DP-44)"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Introduced in EM 1.4, completed in EM 1.5. Absorbs former DP-44 (documentation of this connector)."
---

Dotted connector type that links multiple instances of the same stratigraphic unit or element that has transformed or moved over time, enabling tracking of temporal transformations of individual nodes across epochs. Introduced in EM 1.4 and completed in EM 1.5 across three layers: (1) Core language: dotted edge type formalized in the yEd palette with clear semantics distinct from standard causal connectors. (2) s3Dgraphy v0.1.31+: changed_from edge type with instance-chain traversal helpers that rebuild the temporal sequence of a node across its evolutions. (3) EMtools: Stratigraphy Manager and RM Manager expose instance-chain filtering so that selecting one instance highlights all its transformation steps in the scene. Dedicated import/export paths in the GraphML pipeline preserve the edge semantics on round-trip. The former DP-44 (documentation of this connector) has been merged into this DP: formal description, RST documentation and authoring-time usage guidance ship together with the feature.
