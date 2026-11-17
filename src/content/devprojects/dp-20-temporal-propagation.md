---
id: "DP-20"
title: "Temporal Propagation"
cat: "core"
impacts:
  - "s3d"
  - "emtools"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
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
notes: "Built, engine and clients (s3Dgraphy, EMStudio, EM Tools). Since 17 Nov 2026 the bounds are computed from the life of the units (DP-98); the rule is to be frozen for the beta, checked on Templu Mare v10 and GT16. A user page is missing."
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** test on a real case — the computed chronology of Sarmizegetusa against the excavators' datings.

*Original project description:*

Temporal propagation from known data points through stratigraphic relationships. s3Dgraphy v0.1.32 implements a chronology calculation engine with BFS-based TPQ/TAQ propagation and temporal property detection (absolute_start_date/absolute_end_date PropertyNodes). EMtools integration and full UI pending. Related: Pletka platform.
