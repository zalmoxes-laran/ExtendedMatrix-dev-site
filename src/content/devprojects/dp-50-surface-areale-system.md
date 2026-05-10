---
id: "DP-50"
title: "Surface Areale System"
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
notes: "Projective + shrinkwrap strategies shipped in 1.5 with full paradata chain. Boolean + LOD strategy split out to DP-54 for v1.6 (more invasive on source geometry, needs longer API stabilization). Feature remains behind scene.em_tools.experimental_features toggle until field-test pass is complete."
---

System for creating bidimensional surface proxies (areali) that conform to high-resolution 3D Representation Models. Enables documentation of surface archaeological phenomena: stone working traces (Working Unit / UL), degradation (TSU), lacunae, preparatory layers. Pipeline: Grease Pencil contour drawing on RM surface, automatic complexity classification (planar/angular/3D), adaptive subdivision, normal offset anti z-fighting. The projective and shrinkwrap generation strategies are shipped in 1.5; the more experimental Boolean + LOD strategy was split out to DP-54 and will land in v1.6 after API stabilization. Integrates with the stratigraphic graph via ExtractorNode paradata. Introduces the Working Unit (UL) node type in s3Dgraphy for toolmark documentation. Extends has_representation_model connector to support DocumentNode as source. Document Manager rename + create operator and the RMDoc sub-panel ship alongside.
