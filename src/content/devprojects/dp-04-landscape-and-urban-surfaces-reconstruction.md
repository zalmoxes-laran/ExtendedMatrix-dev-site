---
id: "DP-04"
title: "Landscape & Urban Surfaces Reconstruction"
cat: "extension"
impacts:
  - "yed"
  - "emtools"
  - "s3d"
  - "config"
status: "partial"
statusLabel: "Partial — ontology and computation built, interface to build"
targetVersion: "1.6"
incorporated: null
embargoNotes: "Under embargo until the F6 preprint (December 2026): no details and no demo before then."
embargo: true
desc: "Territorial graph with topographic units, sites, Canvas concept, and urban stratigraphies (elevation points, core samples)."
components:
  - "Topographic Unit node"
  - "Site node"
  - "Canvas node"
  - "Paradata extensions"
  - "Elevation point node"
  - "Core sample node"
  - "Propagation algorithm"
thesis: true
stratigraph: false
keyStudy: "Amba Aradam"
notes: "In 1.6 (E.D., 17 Nov 2026): ontology, computation and interface of the Landscape Graph — topographic units, negative topographic units, districts, Landscape Matrix — and EM Tools saving is_in_district correctly. Urban surfaces (elevation points, cores) go to 2.0. Key study: Sarmizegetusa."
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** test on a real case — Sarmizegetusa modelled as a Landscape Graph with the existing functions.

**Overlap:** not to be confused with the 1.5 «Landscape Mode» of DP-10 (several sites in EM Tools).

*Original project description:*

Territorial-scale graph with topographic units, sites, and the Canvas concept. Canvas = surface on which archaeological presence is recorded. Orchestrates multiple EM graphs underneath. Includes the Artù project: digitization of large urban stratigraphies with elevation points and core samples as interpretation elements. Requires propagation algorithm. Based on 15 years of Artù methodology.
