---
id: "DP-43"
title: "Group Nodes (Time Branch, Activity, Paradata)"
cat: "core"
impacts:
  - "yed"
  - "emtools"
  - "s3d"
  - "config"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Three group node types — Time Branch (green), Activity, Paradata — formalized in the palette and supported end-to-end."
components:
  - "Time Branch group node (done)"
  - "Activity group node (done)"
  - "Paradata group node (done)"
  - "yEd palette entries (done)"
  - "Activity Manager integration (done)"
  - "Paradata Manager integration (done)"
  - "Heriverse exporter ParaData bundling (done)"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Complements DP-36 (Container Nodes). All three group types operational across core, s3Dgraphy and EMtools."
---

Three group node types shipped in 1.5, complementing the generic Container Nodes effort (DP-36): (1) Time Branch Group Node with green background for alternative temporal sequences, letting authors bundle mutually exclusive reconstructive hypotheses under a single temporal branch. (2) Activity Group Node (ActivityNodeGroup) that clusters related activities and feeds the Activity Manager panel: the Stratigraphy Manager's 'By Activity' filter is driven by this group. (3) Paradata Group Node connected to the stratigraphic node whose properties are being validated, used by the Paradata Manager and by the Heriverse exporter to bundle ParaData (RMDoc) objects per source. All three node types are formalized in the yEd palette, parsed by the GraphML importer, and round-tripped correctly by the GraphML writer.
