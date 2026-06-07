---
id: "DP-65"
title: "Graph-Scope Paradata Node Group"
cat: "core"
impacts:
  - "s3d"
  - "yed"
  - "emtools"
  - "config"
status: "concept"
statusLabel: "Concept"
targetVersion: "1.7"
incorporated: null
embargo: false
desc: "The graph-level home for ALL graph-scope paradata, held as first-class nodes attached to the graph root: georef shift (GeoPositionNode), author / license / embargo, and any graph-wide document / extractor / property. The third paradata-aggregation tier alongside per-US (DP-60) and swimlane (DP-19)."
components:
  - "Graph-scope Paradata Node Group attached to a graph root node (node connected to another node)"
  - "Single home for ALL graph-level paradata, not only the shift"
  - "Canonical host of the per-graph GeoPositionNode (shift_x/y/z + EPSG, id geo_{graph_id}) — the motivating first tenant"
  - "Graph-level Author / License / Embargo nodes (DP-51) live here too, beyond canvas-header string tags (DP-40)"
  - "Extensible to any graph-wide Document / Extractor / Combiner / PropertyNode"
  - "DP-32 resolver graph tier reads from this group (node > swimlane > graph)"
  - "GraphML serialization: standalone group anchor + internal geo_position node round-trip"
  - "Open decision: migrate graph metadata from DP-40 header string tags to nodes, or coexist with the resolver bridging"
  - "Multigraph: one paradata group per graph; homogeneous-shift assumption shared with DP-10 / DP-56"
thesis: false
stratigraph: true
keyStudy: "Needed"
relatedDPs:
  - "DP-56"
  - "DP-40"
  - "DP-32"
  - "DP-51"
  - "DP-60"
  - "DP-19"
  - "DP-10"
notes: "Confirmed as a standalone DP (not folded into DP-56 / DP-40): its purpose is to be the graph-scope container for ALL graph-level paradata, with the georef shift as the first concrete tenant. Completes the paradata-aggregation tier system: per-US (DP-60) -> swimlane (DP-19) -> graph (this DP). Reused, already existing: the shift node + EMTools pipeline (DP-56, GeoPositionNode geo_{graph_id}, passive mirror 1.6 / active 1.7+); the graph-level metadata mechanism (DP-40 canvas-header tags + DP-32 node>swimlane>graph resolver + DP-51 author/license/embargo nodes). Open question: whether graph metadata migrates from header string tags to attached nodes, or the two coexist."
draft: false
---

Paradata aggregation in the Extended Matrix already has two scope tiers: per-US (the ParadataNodeGroup of DP-60) and swimlane (the Swimlane Paradata Node Group of DP-19). The third tier — the graph itself — is missing. As a result, paradata that pertains to the whole graph is scattered across heterogeneous representations: identity, ORCID, license and embargo as canvas-header string tags (DP-40, resolved by the DP-32 node > swimlane > graph resolver); author / license / embargo also as paradata nodes (DP-51); and the georeferencing shift as a stand-alone per-graph GeoPositionNode (`geo_{graph_id}`, DP-56). There is no single graph-scope container these belong to — so, for the shift in particular, there is no way to author and assign it *the way ID and author already are*.

This DP introduces the **Graph-Scope Paradata Node Group**: the third paradata-aggregation tier, attached to the graph through a representative root node (a node connected to another node, exactly as DP-60 and DP-19 attach at their own scopes). It is the single home for **all** graph-level paradata. Its first and motivating tenant is the per-graph GeoPositionNode (shift_x/y/z + EPSG), which finally gets a graph-level home and assignment surface; it also hosts the graph-level Author / License / Embargo nodes (DP-51) and is extensible to any graph-wide Document, Extractor, Combiner or PropertyNode. The DP-32 resolver's graph tier reads from this group, so the shift and any other graph-level property propagate node > swimlane > graph just like `absolute_time_start/end`, author, license and embargo. In GraphML it serializes as a standalone group anchor whose internal `geo_position` node round-trips losslessly.

The open decision is representational: whether graph-level metadata migrates from the DP-40 canvas-header string tags into nodes inside this group, or the two coexist with the DP-32 resolver bridging them (header tags as the lightweight human-facing surface, the node group as the structured store). Recommended path: coexistence in 1.6 (the group hosts the shift only; header tags unchanged) and convergence in 1.7+, when the GeoPositionNode flips to active canonical (DP-56 Phase 2) and Extended Matrix geometries enter the graph. Multigraph keeps one paradata group per graph and inherits the homogeneous-shift assumption of DP-10 / DP-56. In one line: this is the graph-scope sibling of DP-60 (per-US) and DP-19 (swimlane); it gives DP-56's shift a graph-level home, generalizes DP-40 from string tags toward nodes, and plugs into the DP-32 resolver and the DP-51 author / license / embargo nodes.
