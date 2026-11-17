---
id: "DP-54"
title: "Surface Area"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
  - "config"
status: "partial"
statusLabel: "Partial — code only"
targetVersion: "1.7"
incorporated: null
embargo: false
desc: "Boolean + LOD surface generation strategy for Surface Areale. Split out from DP-50 because it is more invasive on source geometry and needs longer API stabilization."
components:
  - "Boolean + LOD generator (done, code-level)"
  - "LOD pyramid output (done)"
  - "Field-test pass on real RMs with heavy geometry (planned)"
  - "Promotion from experimental_features gate (planned)"
thesis: true
stratigraph: false
keyStudy: "Basilica"
notes: "1.7 nursery. The Boolean strategy exists as code in EM Tools, untested; its promotion depends on DP-50."
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** test on a real case — the three surface strategies compared on the heavy Basilica Iulia models.

**Overlap:** DP-03, DP-50 and DP-54 all annotate surfaces of a model; read them together.

*Original project description:*

Follow-up to DP-50 (Surface Areale System). DP-50 shipped the projective and shrinkwrap generation strategies in 1.5 with the full paradata chain, complexity classifier, and Working Unit (UL) node type. This DP covers the third generation strategy — Boolean + LOD — which is more invasive on the source Representation Model geometry (boolean operations, multi-resolution output) and needs a longer API stabilization window. Already implemented at code level; shipping behind scene.em_tools.experimental_features in 1.6 with explicit field-test sign-off before promotion.
