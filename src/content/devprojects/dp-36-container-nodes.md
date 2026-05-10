---
id: "DP-36"
title: "Container Nodes"
cat: "core"
impacts:
  - "yed"
  - "emtools"
  - "s3d"
  - "config"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Container nodes for VSF, US, and USD grouping. Shipped end-to-end across core language, s3Dgraphy and EMtools."
components:
  - "VSF container node (done)"
  - "US container node (done)"
  - "USD container node (done)"
  - "yEd palette entries (done)"
  - "s3Dgraphy container classes (done, v0.1.31+)"
  - "EMtools containment filtering (done)"
  - "Anastylosis Manager container-based grouping (done)"
  - "Instance-chain edges (done)"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "End-to-end support: language, s3Dgraphy and EMtools all implement containers. Anastylosis Manager module restructured as a package."
---

Container nodes that include and group stratigraphic-family node types: Virtual Special Find (VSF), Stratigraphic Unit (US), Documentary Stratigraphic Unit (USD). Enables nesting of nodes within logical containers so that a reconstruction fragment composed of many small pieces can be handled as a single unit. Shipped in 1.5 across the three layers: (1) Core language: yEd palette additions with container-typed swimlanes and the formalization of 'is_contained_in' semantics. (2) s3Dgraphy v0.1.31+: container group node classes for US / USD / VSF, instance-chain edges and containment-aware queries. (3) EMtools: the Anastylosis Manager uses VSF containers to bundle virtual Special Finds into anastylosis groups, and Stratigraphy Manager filters support containment as a first-class axis (show only nodes inside a container / expand a container inline). The anastylosis refactor (sub-package with properties / lod_utils / graph_utils / operators_list / operators_link / operators_lod / ui) landed with this milestone and exposes detect_lod_variants and related helpers for scripted use.
