---
id: "DP-46"
title: "Proxy Box Creator"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
  - "config"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Assisted creation and metadata of proxy boxes for planar shapes using a 7-point measurement system, with each point formalized as an ExtractorNode in the graph."
components:
  - "Proxy geometry engine (done)"
  - "7-point measurement system (done)"
  - "Document anchor picker — pick from selected / search / create-new (done)"
  - "Propagate anchor to all 7 points on Record (done)"
  - "ExtractorNode per point with extracted_from Document (done, canonical direction, dashed)"
  - "CombinerNode aggregating the seven extractors with combines edges (done, canonical direction, dashed)"
  - "PropertyNode 'Proxy Geometry' with canonical qualia (done, em_qualia_types_additions.json)"
  - "Per-US ParadataNodeGroup wrapping the chain (done, <US>_PD)"
  - "is_in_activity mirrored on PD nodegroup (done)"
  - "Per-run Document instance cloning (done)"
  - "GraphML write-lock guard (done)"
  - "Save-after-create toggle — 'virtuous save' (done, default ON)"
  - "Extractor/Combiner NodeLabel Corner-NorthWest in the GraphMLPatcher (done)"
  - "Chain summary narrative in the panel (done)"
  - "Unified Add-US dialog launch (done, see DP-55)"
  - "Drop experimental_features gate after validation pass (planned, field-test)"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Related to DP-33 (Stratigraphy Manager+), DP-50 (Surface Areale — sibling RM→proxy pipeline), DP-55 (US Creation Workflow Unification — powers the + Add US button in this panel), DP-07 (Document Node three-axis — the anchor carries role/content_nature/geometry). Remaining 1.5 work: field-test pass, then drop the experimental_features gate."
---

Tool for creating proxy geometry for square and planar shapes (walls in photogrammetry, pseudo-stratigraphy forms in geophysics from point clouds or rasters). Uses a 7-point measurement system to generate box meshes with configurable pivot. Each point is formalized as an ExtractorNode — every measurement is a traceable paradata claim about the proxy's geometry. A CombinerNode aggregates the seven extractors into the proxy's final geometry assertion, wired to the active Stratigraphic Unit through a canonical paradata chain (US --has_property--> PropertyNode('Proxy Geometry') --has_data_provenance--> Combiner --combines--> Extractor --extracted_from--> Document). The whole chain is wrapped in a per-US ParadataNodeGroup (<US>_PD) that inherits the US's is_in_activity edge so both sit inside the right Activity yEd group at save time. For every run the Step-1 anchor Document is cloned into a fresh instance (same display name, new UUID, copied three-axis classification) so extractors never attach to a Document already wrapped in another PD group. Two-step UI: Step 1 pick/establish the anchor Document (from selected mesh or via search/create), Step 2 record the 7 points (Propagate toggle auto-fills document + extractor id on Record, gap-aware). A chain summary box narrates the paradata chain before Create. The panel reuses the shared Add-US dialog for all US creation (see DP-55). Constraint: because the tool writes to the GraphML file on disk, the .graphml must NOT be held open by yEd — the tool runs a write-lock pre-flight before any mutation. Save-after-create is on by default, so the chain lands on disk as soon as Create finishes.
