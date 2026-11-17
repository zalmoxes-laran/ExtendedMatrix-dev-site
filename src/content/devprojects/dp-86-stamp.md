---
id: "DP-86"
title: "Stamp — the immutable record of a step"
cat: "core"
impacts:
  - "s3d"
  - "emstudio"
  - "emtools"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "A stamp is the unchangeable minute of one step: who did it, with which process and parameters, from which inputs, toward which artefact."
components:
  - "Stamp package in s3Dgraphy"
  - "Stamps written by EM Tools at birth and at each version"
  - "Stamp bridge and master mark in 3D Survey Collection"
  - "Stamp ingest in EMStudio"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Built. Small publication planned with the DTC (stamp + DTC on Templu Mare)."
relatedDPs:
  - "DP-85"
---

*Declared on 17 November 2026: built before it had a development project.*

Where the DTC (DP-85) draws the chain, the stamp is the signed page of each link. It travels with the file it describes, so a model carries its own birth certificate even outside the graph.

Evidence: s3Dgraphy `stamp/` (15 Sep 2026, reports TIMBRO1 and TIMBRO2); EMStudio `stamp-*.ts`; EM Tools `birth_stamp.py`, `version_stamp.py`; 3D Survey Collection `stamp_bridge.py`, `master_mark.py`. A stamped photogrammetric chain was recorded on 6 Nov 2026.
