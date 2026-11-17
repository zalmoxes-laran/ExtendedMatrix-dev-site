---
id: "DP-107"
title: "Shelf v2 & Tier-0 acquisition"
cat: "tool"
impacts:
  - "s3d"
  - "emstudio"
  - "emtools"
status: "in-dev"
statusLabel: "Built — behind «Experimental features» in 1.6"
targetVersion: "1.6-exp"
incorporated: null
embargo: false
desc: "A shelf for resources not yet attached to the graph, and an ingestion contract for what arrives from acquisition."
components:
  - "Shelf graph of resources"
  - "Tier-0 acquisition contract"
  - "Shelf UI in EMStudio and EM Tools"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "In 1.6 behind «Experimental features». Not to be confused with Open Shelf (DP-15), the 2.0 search engine across studies."
relatedDPs:
  - "DP-15"
  - "DP-38"
---

*Declared on 17 November 2026: built before it had a development project.*

Photos and files arrive before anyone knows which unit they document; the shelf holds them until they find their place.

Evidence: s3Dgraphy `shelf/`, `acquisition/` (30 Jul 2026), `tests/test_shelf.py`; EMStudio `shelf*.ts`; EM Tools `shelf_tool/`; reports `2026-07-30-shelf-v2-A/B`.
