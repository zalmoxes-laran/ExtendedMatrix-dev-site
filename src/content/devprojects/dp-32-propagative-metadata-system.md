---
id: "DP-32"
title: "Propagative Metadata System"
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
desc: "Two-layer mechanism: hierarchical scope resolver (node > swimlane > graph) + bidirectional temporal constraint closure (TPQ forward, TAQ reverse) with coherence checking on conflicting seeds."
components:
  - "Canvas header graph-level tags (done, DP-40)"
  - "Generic PropagationRule resolver with 5 built-in rules (done)"
  - "Unified naming absolute_time_start / absolute_time_end (done)"
  - "Hard-policy paradox detection with user-facing warnings (done)"
  - "Paradox warnings carry claim attribution (author vs extractor) (done, A.2)"
  - "Stratigraphic cycle detection with per-node attribution (done, A.2)"
  - "Header/SL_PD chronology mismatch warning (done)"
  - "Swimlane getters prefer PropertyNode on Epoch over header start/end (done)"
  - "EpochNode resolves as its own swimlane (done, P4)"
  - "Layer B TPQ forward + TAQ reverse + overlapping seeds (done)"
  - "Horizon Manager consumption in Landscape Mode (done)"
  - "Reverse-propagation compaction (hoist + prune) for GraphML export (done, A.1)"
  - "Synthetic regression tests (done: 13 scenarios chronology + 8 compaction + 9 diagnostics)"
  - "Collapsible Propagative Metadata subsection in Stratigraphy/Epoch/Document panels (done)"
  - "Swimlane-level Paradata Node Group integration (done, DP-19)"
  - "Author property resolution via AuthorNode / has_author (done, DP-51)"
  - "Heriverse exporter migration to resolver (deferred, v1.6 tail)"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Layer A+B shipped with 13 synthetic scenarios locked. Dashed connector reclassified to has_author/has_license/has_embargo by target class (DP-51). SL_PD auto-edge supports both XML-nested and top-level (has_first_epoch) layouts. Heriverse exporter migration deferred to v1.6: the plan is for Heriverse to consume s3Dgraphy as a Python library, run the DP-32 resolver at export time, and produce JSON payloads with resolved per-node values (lighter and less redundant than the current header-attribute approach)."
---

Propagative metadata is a two-layer mechanism. Layer A — Hierarchical Scope Resolver: for any declared property, the resolver looks first on the node (node.attributes or a connected PropertyNode), then on the swimlane the node belongs to (EpochNode + the Swimlane Paradata Node Group defined in DP-19), then on the graph (canvas header tags from DP-40). The first non-null value wins. Layer A is now generic (DP-32 PropagationRule registry) with five built-in rules: absolute_time_start, absolute_time_end, author, license, embargo. Layer B — Temporal Constraint Closure: symmetrical TPQ/TAQ propagation along is_after and survive_in_epoch edges, using Layer A values as seeds. Hard-policy paradox detection: when declared seeds disagree with the stratigraphic order (e.g. X older with abs_start=150 and Y more recent with abs_start=130, Y is_after X), the resolver preserves the user-declared seed AND emits a [chronology paradox] warning; TPQ/TAQ propagation is stopped at the paradoxical node. Header/PN disagreement (header epoch.start_time vs PropertyNode absolute_time_start inside SL_PD) emits a [chronology mismatch] warning and the PropertyNode wins. EpochNode resolves as its own swimlane, so chronology / author / license / embargo queries on an epoch work without a dedicated code path. The Heriverse exporter migration to the resolver was scoped out to a v1.6 follow-up: the design direction is to have Heriverse consume s3Dgraphy as a Python library and run propagation at export time, emitting lighter and less-redundant JSON payloads that already carry resolved per-node values instead of raw header attributes.
