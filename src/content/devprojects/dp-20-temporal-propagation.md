---
id: "DP-20"
title: "Temporal Propagation"
cat: "core"
impacts:
  - "s3d"
  - "emtools"
status: "partial"
statusLabel: "Partially implemented"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Algorithm for chronological propagation through the graph. BFS-based engine in s3Dgraphy."
components:
  - "s3Dgraphy chronology engine (completed)"
  - "BFS-based TPQ/TAQ propagation"
  - "Temporal property detection"
  - "EMtools UI (planned)"
  - "Graph algorithms"
thesis: true
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "s3Dgraphy engine completed in v0.1.32. EMtools integration pending."
---

Temporal propagation from known data points through stratigraphic relationships. s3Dgraphy v0.1.32 implements a chronology calculation engine with BFS-based TPQ/TAQ propagation and temporal property detection (absolute_start_date/absolute_end_date PropertyNodes). EMtools integration and full UI pending. Related: Pletka platform.
