---
id: "DP-12"
title: "Temporal Branches"
cat: "core"
impacts:
  - "yed"
  - "s3d"
  - "config"
status: "planned"
statusLabel: "Planned"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Alternative chronological interpretations as graph branches, including the dashed connector for mutually exclusive time branches (absorbs former DP-42)."
components:
  - "Graph structure"
  - "Temporal logic"
  - "Dashed edge type (ex-DP-42)"
  - "yEd palette entry (ex-DP-42)"
  - "GraphML schema update (ex-DP-42)"
thesis: true
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Absorbs former DP-42 (Dashed Connector). Targeted to EM 1.6."
---

Temporal branching for alternative chronological interpretations or parallel temporal sequences. Scope merged with the former DP-42 'Dashed Connector (Alternative Branches)': a dedicated dashed edge type will represent mutually exclusive alternative time branches, distinct from the dotted transformation connector (DP-39). The combined design covers both the graph-level branching structure and its visual encoding in the yEd palette, the s3Dgraphy schema and the GraphML round-trip.
