---
id: "DP-54"
title: "Surface Area"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
  - "config"
status: "partial"
statusLabel: "Partially implemented"
targetVersion: "1.6"
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
notes: "Split out from DP-50 when its projective + shrinkwrap strategies shipped in 1.5. Boolean + LOD lives behind scene.em_tools.experimental_features until a field-test pass validates edge cases on heavy source geometry."
---

Follow-up to DP-50 (Surface Areale System). DP-50 shipped the projective and shrinkwrap generation strategies in 1.5 with the full paradata chain, complexity classifier, and Working Unit (UL) node type. This DP covers the third generation strategy — Boolean + LOD — which is more invasive on the source Representation Model geometry (boolean operations, multi-resolution output) and needs a longer API stabilization window. Already implemented at code level; shipping behind scene.em_tools.experimental_features in 1.6 with explicit field-test sign-off before promotion.
