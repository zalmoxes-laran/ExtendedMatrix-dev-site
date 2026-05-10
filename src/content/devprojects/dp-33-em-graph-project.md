---
id: "DP-33"
title: "EM Graph Project"
cat: "tool"
impacts:
  - "emtools"
status: "planned"
statusLabel: "Planned"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Node Editor-based graph visualization, Mini Graph for single-SU neighborhoods, and authoring helpers built on top of it."
components:
  - "Node Editor space (experimental today)"
  - "Dynamic node classes + socket generator"
  - "Node Editor keymap + custom layout"
  - "Mini Graph for single-SU neighborhoods"
  - "SU soloing action"
  - "Activity list with proxy toggle"
  - "Bi-directional selection with Stratigraphy Manager"
  - "Edge-type filters aligned with yEd palette"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Renamed from 'Stratigraphy Manager+'. EMGraph Node Editor already ships as experimental; Mini Graph and authoring helpers targeted for 1.6."
---

Umbrella project for the in-Blender graph visualization and authoring stack. Covers: (1) Node Editor — a dedicated Blender Node Editor space that renders the s3Dgraphy graph natively, with dynamic node generation, edge-type filters and a colour scheme aligned with the yEd palette. Currently shipping as the 'EMGraph (Experimental)' panel and Node Editor space. (2) Mini Graph — a lightweight view that extracts and shows the neighborhood of a single Stratigraphic Unit (SU soloing + immediate predecessors/successors), so authors can inspect a node's context without loading the full graph. (3) Authoring helpers that consume the shared graph view: SU soloing (isolate with neighbors), activity list with proxy toggles, 'Extract more info' action that spawns a Mini Graph from the current selection, and a two-way link between the Stratigraphy Manager selection and the Node Editor. Successor to the former 'Stratigraphy Manager+' concept: the graph-centric tooling is unified under a single project name.
