---
id: "DP-88"
title: "3D Tiles & canonical 3tz"
cat: "infra"
impacts:
  - "s3d"
  - "emstudio"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Large models travel as 3D Tiles packed in a single 3tz file with a fixed profile; the tileset is read as a tree and the tiles adapt to the viewer."
components:
  - "3tz profile and packer"
  - "Tileset read as a tree, tile fitting"
  - "Cesium exporter in 3D Survey Collection"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built."
relatedDPs:
  - "DP-87"
  - "DP-89"
---

*Declared on 17 November 2026: built before it had a development project.*

A whole site cannot be loaded at once in a browser: 3D Tiles stream what the eye needs. A canonical 3tz makes the package predictable for every EM tool.

Evidence: s3Dgraphy `resources/tiles3tz.py`, `tileset_fit.py`; EMStudio `pack3tz.ts`, `tiles3tz.ts`; 3D Survey Collection `exporter_cesium/`; reports `2026-11-12-*3tz-0-3-0`, `2026-11-16-REPORT-bucket-e-tileset`.
