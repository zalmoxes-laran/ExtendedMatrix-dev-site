---
id: "DP-03"
title: "TSU Completion"
cat: "tool"
impacts:
  - "yed"
  - "emtools"
  - "s3d"
  - "config"
status: "partial"
statusLabel: "Partial — experimental in 1.6"
targetVersion: "1.6-exp"
incorporated: null
embargo: false
desc: "Grease Pencil annotation for Technical Stratigraphic Units."
components:
  - "Blender add-on"
  - "Annotation pipeline"
  - "Grease Pencil integration"
thesis: true
stratigraph: true
keyStudy: "Basilica"
notes: "Behind «Experimental features» in 1.6. The TSU node exists across the stack; drawing on surfaces is the generic Grease Pencil tool of Surface Areale (DP-50). Missing: a TSU proxy created from Surface Areale, the em.json round-trip of the TSU, a Basilica Iulia case."
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** use of the workflow — Surface Areale → TSU on the restoration surfaces of the Basilica Iulia.

**Overlap:** DP-03, DP-50 and DP-54 all annotate surfaces of a model; read them together.

*Original project description:*

Annotation system based on Grease Pencil in Blender to annotate TSUs for restoration, surface characterization, and working-unit analysis. Creates pencil-based annotations directly on 3D surfaces. Impacts core language (yEd palette already created), EMtools add-on, and s3Dgraphy (JSON config rules are part of the formal language).
