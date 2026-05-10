---
id: "DP-10"
title: "Multigraph Project"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Multiple interconnected graphs in a single EM project. Landscape system, multi-graph management and CronoFilter shipped."
components:
  - "Landscape Mode toggling (done)"
  - "CronoFilter horizons + auto-from-epochs (done)"
  - "CronoFilter .cf.json save/load (done)"
  - "s3Dgraphy multi-graph API (done)"
  - "Per-graph publishable flag (done)"
  - "Graph-code object prefixing (done)"
  - "Heriverse multi-graph JSON export (done)"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Landscape Mode, CronoFilter and multi-graph Heriverse export all operational in EM 1.5."
---

Multi-graph support: multiple interconnected graphs within a single EM project. Shipped in EM 1.5: (1) s3Dgraphy holds several named graphs concurrently with top-level helpers (get_graph, get_all_graph_ids, remove_graph) and multigraph loader (load_graph_from_file). (2) EMtools exposes the graph set through scene.em_tools.graphml_files with a per-graph 'publishable' flag that drives the Heriverse exporter. (3) A Landscape Mode toggles from a single-site workflow to a multi-site territorial view, prefixing objects and proxies with graph codes to prevent name collisions between sites. (4) CronoFilter provides custom chronological horizons (CF_ChronologicalHorizon) with auto-generation from all loaded graphs' epochs, save/load to .cf.json, and integration with the Heriverse JSON exporter. (5) Per-graph operations (import, remove, reload) isolate side effects so editing one site does not invalidate the others. Core language unchanged; this is a pure EMtools + s3Dgraphy feature.
