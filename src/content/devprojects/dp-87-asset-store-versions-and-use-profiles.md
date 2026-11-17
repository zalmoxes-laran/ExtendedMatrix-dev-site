---
id: "DP-87"
title: "Asset store, versions & use profiles"
cat: "infra"
impacts:
  - "s3d"
  - "emstudio"
  - "emtools"
  - "server"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "3D models and media are kept once, by their fingerprint, in versions for each kind of hardware; «Consolidate for…» prepares a study for the web, the desktop or the archive."
components:
  - "Object store addressed by sha256"
  - "Versions per hardware, master version"
  - "Use profiles: web, desktop, archive; webXR for ATON / Heriverse"
  - "The .blend file in the room, with a lease"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built. Small publication possible on the hardware profile with canonical 3tz (DP-88)."
relatedDPs:
  - "DP-88"
---

*Declared on 17 November 2026: built before it had a development project.*

A heavy survey and its light web copy are the same object in two versions, not two unrelated files. The study says which version suits which use, and the tools pick the right one. Measured on Templu Mare: 87 models, 24.9 MB for the web against 224.2 MB at full detail.

Evidence: s3Dgraphy `resources/` (`versions.py`, `object_store.py`, consolidate, `blend_room`); EMStudio `asset-versions.ts`, `lod-*.ts`; EM Tools ae23573, fb5f8d2, 7a9135a; stratigraph-server d052445 (holds).
