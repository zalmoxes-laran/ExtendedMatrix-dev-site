---
id: "DP-50"
title: "Surface Areale System"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
  - "config"
status: "partial"
statusLabel: "Partial — simple mode built, full chain behind the experimental switch"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Surface proxy creation on Representation Models using projective and shrinkwrap strategies, with full paradata chain integration."
components:
  - "Surface Areale operator (modal GP, done)"
  - "Contour builder (done)"
  - "Projective strategy (done)"
  - "Shrinkwrap adaptive strategy (done)"
  - "Complexity classifier A/B/C (done)"
  - "Hardware benchmark + time estimation (done)"
  - "Working Unit (UL) node type (done)"
  - "Full paradata chain: US→Property→Extractor→Document→RM (done)"
  - "has_representation_model extension (done)"
  - "Document Manager rename + create operator (done)"
  - "RMDoc sub-panel (done)"
  - "Boolean + LOD strategy (split out to DP-54, v1.6)"
thesis: true
stratigraph: false
keyStudy: "Basilica"
notes: "In 1.6 (E.D., 17 Nov 2026): aligned to the geometry property and field-tested; until the field test is done it stays behind «Experimental features». The Boolean + LOD strategy is DP-54."
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** test on a real case — working units on the Basilica Iulia models; the result decides whether the switch goes.

**Overlap:** DP-03, DP-50 and DP-54 all annotate surfaces of a model; read them together.

*Original project description:*

System for creating bidimensional surface proxies (areali) that conform to high-resolution 3D Representation Models. Enables documentation of surface archaeological phenomena: stone working traces (Working Unit / UL), degradation (TSU), lacunae, preparatory layers. Pipeline: Grease Pencil contour drawing on RM surface, automatic complexity classification (planar/angular/3D), adaptive subdivision, normal offset anti z-fighting. The projective and shrinkwrap generation strategies are shipped in 1.5; the more experimental Boolean + LOD strategy was split out to DP-54 and will land in v1.6 after API stabilization. Integrates with the stratigraphic graph via ExtractorNode paradata. Introduces the Working Unit (UL) node type in s3Dgraphy for toolmark documentation. Extends has_representation_model connector to support DocumentNode as source. Document Manager rename + create operator and the RMDoc sub-panel ship alongside.
