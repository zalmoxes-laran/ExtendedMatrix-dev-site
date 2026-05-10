---
id: "DP-19"
title: "Canvas Project"
cat: "core"
impacts:
  - "yed"
  - "emtools"
  - "s3d"
  - "config"
status: "partial"
statusLabel: "Partially implemented"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Geo-referenced canvas with Geo-node and swimlane-level qualia declared via a dedicated Swimlane Paradata Node Group."
components:
  - "Canvas node (yEd + s3Dgraphy)"
  - "Geo-node (spatial shift)"
  - "Swimlane Paradata Node Group (yEd palette entry)"
  - "Edge type has_swimlane_paradata_group"
  - "Parser support in GraphML importer"
  - "Exposed fields feed DP-32 resolver at swimlane level"
  - "Author slot in swimlane paradata group (co-ordinated with DP-51)"
thesis: true
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Swimlane Paradata Node Group shipped: free SL_* ParadataNodeGroup detected (DP-43 sibling), auto-edged to its Epoch via XML nesting OR via has_first_epoch (top-level layout), children linked via XML parent OR is_in_paradata_nodegroup. PropertyNode inside SL_PD overrides header start/end at swimlane scope (DP-32). Canvas/Geo-node pillars still planned for 1.6."
---

Canvas as formal concept: a geo-referenced surface on which EM content is placed. Three pillars. (1) Canvas node — formalizes the canvas as a first-class node carrying geo-referencing metadata and the embargo/license header tags already shipped with DP-40. (2) Geo-node — spatial shift container that keeps the canvas's geodetic frame separate from the working coordinate system of the 3D scene. (3) Swimlane Paradata Node Group — a dedicated ParadataNodeGroup attached to a single swimlane as a standalone 'big node', keeping the swimlane header row lean while carrying the full paradata chain that justifies every declared swimlane-level property (dating, author, license, quality, …). The group aggregates the usual PropertyNode → ExtractorNode → DocumentNode chains for that swimlane, and its exposed fields are what the DP-32 Hierarchical Scope Resolver reads at the 'swimlane' level. This formalizes the distinction between DP-43 Paradata Group Node (connected to a single stratigraphic node) and the swimlane-scoped group introduced here: the yEd palette will host two visually distinct group types, both GraphML-round-tripable, with edge types has_paradata_group (node→group) and has_swimlane_paradata_group (swimlane→group).
