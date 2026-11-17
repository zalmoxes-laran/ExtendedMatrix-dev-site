---
id: "DP-45"
title: "XLSX Auxiliary Data & US Image Resources"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
status: "done"
statusLabel: "Done — closed"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "XLSX files as auxiliary data sources and images linked to Stratigraphic Units as resources."
components:
  - "XLSX import (EMtools, done since v1.4)"
  - "XLSX merge wizard with conflict resolution (EMtools v1.5, done)"
  - "s3Dgraphy Graph Merger with conflict resolution (done, v0.1.33)"
  - "s3Dgraphy Excel import/export (done)"
  - "Validation pass on pyArchInit + EMdb real data (pending, blocking 1.5 cut)"
  - "US image resource linker"
  - "Image Viewing System (EMtools v1.6, planned)"
thesis: true
stratigraph: true
keyStudy: "Basilica"
notes: "Closed. The GraphML wizard was replaced in 1.6 by «Import from tables», which writes em.json (Excel, mappings, pyArchInit) with conflict resolution; US images became resources and media sets, which absorb the Image Viewing System."
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** test on a real case — «Import from tables» on a real pyArchInit excavation database.

*Original project description:*

Support for reading XLSX spreadsheets as auxiliary data files within the EM workflow, and linking images to Stratigraphic Units (US) as documentary resources. EMtools v1.4+ implements XLSX import for stratigraphic data. EMtools v1.5 adds XLSX merge wizard with conflict resolution, epoch compatibility validation, and merge UI. s3Dgraphy supports Excel import/export and Graph Merger with conflict resolution (v0.1.33). Enables richer documentation pipelines where tabular data and photographic evidence complement the stratigraphic graph. Validation pass pending before 1.5 cut: exercise the flow with real pyArchInit and EMdb datasets to flush out schema drift and orphan-matching edge cases. EMtools v1.6 roadmap includes Image Viewing System (JSON-LD, XLSX-based, folder-based).
