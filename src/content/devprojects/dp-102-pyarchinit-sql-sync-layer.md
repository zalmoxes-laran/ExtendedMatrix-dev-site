---
id: "DP-102"
title: "pyArchInit SQL synchronisation layer"
cat: "tool"
impacts:
  - "s3d"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "A bridge between pyArchInit databases (SQLite, PostgreSQL) and the graph, beyond the stratigraphic relations."
components:
  - "graph_ingestor"
  - "graph_projector"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built; widens DP-62."
relatedDPs:
  - "DP-62"
---

*Declared on 17 November 2026: built before it had a development project.*

Excavations recorded in pyArchInit can be read into the graph and written back, so the partner's database and the matrix stay in step.

Evidence: s3Dgraphy `sync/` (`graph_ingestor.py`, `graph_projector.py`).
