---
id: "DP-60"
title: "Paradata NodeGroup"
cat: "core"
impacts:
  - "yed"
  - "s3d"
  - "emtools"
  - "config"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Group node for aggregating per-US paradata into a single visual container. Strong visual decluttering of the EM graph; backward-compatible with 1.4 scattered-style paradata."
components:
  - "ParadataNodeGroup s3Dgraphy class (done)"
  - "node_type_map registration (done)"
  - "Datamodel JSON entry (done)"
  - "yEd palette node (done, shared with DP-43)"
  - "GraphML round-trip preservation (done)"
  - "Per-US <US>_PD wrapper used by Proxy Box Creator (done, DP-46)"
  - "is_in_activity inheritance from US to PD group (done)"
  - "is_in_paradata_nodegroup child membership edge (done)"
  - "Heriverse exporter ParaData per-source bundling (done)"
  - "Paradata Manager integration (done)"
  - "Backward-compatible parser for 1.4 scattered paradata (done)"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Strong visual decluttering of the EM graph in real-world projects — paradata that previously sprawled around each US now collapses into a single per-US group, drastically reducing visual complexity without loss of expressivity. Originally introduced in s3Dgraphy alongside the 1.5 cut. Sibling of DP-43 (Group Nodes — the broader palette-formalization effort) and consumed by DP-19 (Swimlane Paradata Node Group), DP-46 (Proxy Box Creator) and the Heriverse exporter (DP-11)."
---

Formalization of the per-US ParadataNodeGroup as a first-class group node in the EM language. The pattern aggregates the paradata that previously hung as scattered nodes around each Stratigraphic Unit (PropertyNode + ExtractorNode + CombinerNode + Document chain) into a single visual container linked to its US through the canonical paradata edges. The group inherits the US's is_in_activity edge so it lands inside the right Activity yEd group at save time, and its children are linked via XML parent OR is_in_paradata_nodegroup. Sits on the orthogonal axis of paradata aggregation alongside ActivityNodeGroup (intention) and LocationNodeGroup (space), and parallels the swimlane-scope Swimlane Paradata Node Group (DP-19). The pattern is what powers the per-US <US>_PD wrapper produced by the Proxy Box Creator (DP-46), the Heriverse exporter's per-source ParaData bundling, and the Paradata Manager. Backward-compatible: scattered-style paradata graphs from 1.4 continue to round-trip through 1.5 tooling and render correctly; new graphs benefit from the cleaner aggregation by default. Originally introduced in s3Dgraphy alongside the 1.5 cut (visible in the node_type_map and the datamodel JSON, and cited in the s3Dgraphy 0.1.41 CHANGELOG entry). Carved out of DP-43 (Group Nodes) as its own DP because the visual-decluttering impact on real-world projects warranted a dedicated entry in the tracker.
