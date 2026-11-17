---
id: "DP-09"
title: "Vocabulary Project"
cat: "core"
impacts:
  - "yed"
  - "config"
  - "s3d"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "yEd qualia presets: measurements, properties, color-coded. Property icon and Qualia Importer exist."
components:
  - "yEd template"
  - "GraphML schema"
  - "Qualia node types"
  - "Property icon (done)"
  - "s3Dgraphy Qualia Importer (done)"
thesis: true
stratigraph: true
keyStudy: "Basilica"
notes: "Built well beyond the original promise: a SKOS vocabulary system in its own repository (29 schemes, EM Profiles), with picker and sheet resolution in EMStudio. The yEd palette part is dropped: GraphML is an import and exchange format only. Missing: the concepts of the iccd-us-* schemes, a versioned release of the vocabularies."
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** use — align a real vocabulary (ICCD or iDAI.field) on a case and measure the gaps.

*Original project description:*

yEd template additions for qualia presets: length, width, height, measurable properties. Distinct background colors to separate qualia from SU nodes. Property node icon (property.png) already created in EM 1.5 icons. s3Dgraphy v0.1.28 implements a Qualia Importer for importing from Qualia templates. Palette integration pending.
