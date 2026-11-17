---
id: "DP-62"
title: "PyArchInit ↔ s3dgraphy lossless round-trip (canonical edges + reverse export)"
cat: "core"
impacts:
  - "emtools"
  - "s3d"
  - "yed"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Three layered serializations of stratigraphic physical relationships — pyArchInit `us_table.rapporti` column, GraphML `physical_relationships` per-node packed string (EM 1.6 yEd palette), canonical edges in the s3dgraphy property graph — are now byte-identical when the in-memory graph between them is unmutated. Combined with PR #28 (Postgres backend) and PR #29 (reverse export), EM 1.6 closes the lossless read+write loop between PyArchInit databases and Extended Matrix authoring."
components:
  - "`s3dgraphy.sync.rapporti` — single public module owning the pyArchInit ↔ canonical-edge vocabulary, dispatcher and parse/serialize APIs. Holds RAPPORTI_TO_EDGE_TYPE, EDGE_TYPE_TO_RAPPORTI_IT, RAPPORTI_SHORTHAND, EDGE_TYPE_DIRECTION_FORWARD, CANONICAL_UNIT_TYPES; exposes parse_rapporti(), serialize_rapporti_from_edges(), select_rapporti_label(), resolve_unita_tipo_for_dispatch(), strip_us_prefix()."
  - "Canonical edges in the property graph: overlies / is_overlain_by, cuts / is_cut_by, fills / is_filled_by, abuts / is_abutted_by, is_bonded_to (symmetric), is_physically_equal_to (symmetric). One edge type per direction; reciprocity is structural, not an inference step."
  - "GraphML d13 `physical_relationships` per-node packed string — the EM 1.6 yEd palette format for physical relationships. Format is byte-identical with pyArchInit `us_table.rapporti` (list-of-lists of `[label, target_us, area, sito]` Python literals). Authoritative-on-import only when the richer `_s3d_physical_relations` graph-level JSON side channel is absent — i.e. for files hand-authored in yEd or transited through a non-s3dgraphy pipeline."
  - "Architectural anchor: edges = temporal (Harris-Matrix layer), packed field = physical. Physical relations on GraphML edges would shatter the yEd Matrix layout. Verbatim copy of the packed string on the s3dgraphy node is the explicit anti-pattern — the property graph carries canonical edges, the packed string is wire format only."
  - "yEd palette d14 `physical_relationships` declaration mirrored on both the s3dgraphy export template (`src/s3dgraphy/templates/em_palette_template.graphml`, commit `1c195f1`) and the standalone `zalmoxes-laran/ExtendedMatrix` user-facing palette."
  - "GraphML exporter: pre-computes the per-node packed strings BEFORE the transitive reduction collapses canonical edges into the Harris-minimal `is_after` set, stashes them on the NodeGenerator, emits `<data key=\"d13\">` on every stratigraphic node that has physical relations."
  - "GraphML importer: fallback `_restore_physical_relations_from_node_attribute(tree)` reads the d13 packed strings into canonical edges when the graph-level JSON channel is absent. JSON channel wins when present (carries per-edge AUTHOR/DOCUMENT attributes the packed string cannot)."
  - "GraphProjector (pyArchInit DB → s3dgraphy): consumes `parse_rapporti()` end-to-end. The pyArchInit `rapporti` column becomes canonical edges via the same vocabulary every other layer uses."
  - "GraphIngestor (s3dgraphy → pyArchInit DB): the reverse-export operator from PR #29 now populates the `rapporti` column via `serialize_rapporti_from_edges()`. Previously left empty."
  - "Mapping JSON field type `physical_relations_pyarchinit` — declarative tag that tells importers to parse the column into canonical edges instead of attaching it as a node attribute. Same flag drives the inverse direction on reverse export."
  - "Test surface: +57 tests across `tests/sync/test_rapporti_vocabulary.py` (13), `test_rapporti_parse_serialize.py` (38), `test_graphml_physical_relationships_d13.py` (6). Baseline 385 passed / 8 pre-existing failures / 37 skipped / zero regressions across the series."
  - "Manual: EM-blender-tools-doc 1.6 ships a dedicated section `pyarchinit_physical_relationships` in `docs/panels/em_setup.rst` (commit `5d2dcba`) explaining the format, the three cohabiting serializations, and the architectural separation (edges = temporal, packed = physical) so future contributors don't re-propose physical-relationship edges."
thesis: true
stratigraph: true
keyStudy: "Not needed — design is set; the lossless round-trip is observable end-to-end"
notes: "Built (with Enzo Cocca's PR #31). Missing: a regression on the partner's real case. The wider SQL synchronisation layer is DP-102."
relatedDPs:
  - "DP-61"
repos:
  - label: "s3dgraphy_v1.6dev (canonical-edges series)"
    url: "https://github.com/zalmoxes-laran/s3Dgraphy/tree/s3dgraphy_v1.6dev"
  - label: "EM-blender-tools EM-tools_v1.6.0_dev (PR #28 backend, PR #29 reverse-export)"
    url: "https://github.com/zalmoxes-laran/EM-blender-tools/tree/EM-tools_v1.6.0_dev"
  - label: "EM-blender-tools-doc 1.6 (physical_relationships manual section)"
    url: "https://github.com/zalmoxes-laran/EM-blender-tools-doc/tree/1.6"
order: 62
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** test on a real case — the round-trip on a real excavation kept in pyArchInit.

*Original project description:*

The PyArchInit ↔ Extended Matrix loop has had a hole in it from day one. Reading from a PyArchInit database into an EM scene worked (GraphProjector); writing back was either impossible or partial. When Enzo Cocca's PR #28 added the PostgreSQL/PostGIS backend to `PyArchInitImporter` and his follow-up PR #29 wired a Sub-3 reverse-export operator into EM Tools, the read+write loop was finally there in shape — but the `rapporti` column on each US row, the physical stratigraphic relationships (`copre`, `taglia`, `si appoggia a`, …), stayed empty on every reverse export. The EM graph didn't have a place to keep them.

DP-62 closes that hole. The decision taken in conversation 2026-06-04 was to refuse two tempting wrong answers and pick a third. The first wrong answer — *represent physical relationships as yEd GraphML edges* — would have polluted the temporal Matrix layer, which is what yEd edges are reserved for in EM, and visually destroyed the auto-layout (yEd cannot have invisible edges). The second wrong answer — *keep a verbatim copy of the pyArchInit `rapporti` packed string as a node attribute* — would have given the property graph two sources of truth that drift the moment the user touches anything. The third answer, the one that landed: physical relationships are **first-class canonical edges in the s3dgraphy property graph**, with one edge type per relation per direction (overlies / is_overlain_by, cuts / is_cut_by, fills / is_filled_by, abuts / is_abutted_by, is_bonded_to symmetric, is_physically_equal_to symmetric). The packed string format is **serialisation only**, deployed at the GraphML and pyArchInit boundaries so the on-disk byte sequence stays byte-identical with the originating column when the graph in between is unmutated.

The three serialisations cohabit by design. **In s3dgraphy memory**, the canonical edges are the single source of truth — everything else is derived. **In yEd GraphML (EM 1.6 palette)**, the per-node `physical_relationships` attribute (key `d13`) carries the same list-of-lists Python literal that pyArchInit's `us_table.rapporti` column uses. **In pyArchInit's column**, the byte-identical string. The s3dgraphy GraphML exporter also writes a graph-level JSON side channel `_s3d_physical_relations` for richer round-trip (per-edge AUTHOR / DOCUMENT attributes the packed string cannot carry); on import that channel wins when present, the per-node packed string is the fallback for hand-authored yEd files and pyArchInit-side bridges that only fill the per-node attribute.

The series shipped in four commits on `s3dgraphy_v1.6dev` — `a934c7b` extracting the pyArchInit↔canonical-edge vocabulary into the new public `s3dgraphy.sync.rapporti` module, `c0303e5` moving the dispatcher and parse/serialise APIs into the same module, `ce308d3` migrating GraphProjector (read side) to consume `parse_rapporti()` instead of inline `ast.literal_eval` + private-constant lookups, `2823095` adding GraphML import + export of the d13 packed string with a fallback that activates when the JSON side channel is absent. The yEd palette files on both `src/s3dgraphy/templates/em_palette_template.graphml` (`1c195f1`) and the standalone `zalmoxes-laran/ExtendedMatrix` repo declare `physical_relationships` on US-type nodes so authors editing in yEd see it as a normal node attribute, defaulting empty. The EM-tools side picks up everything when the bundled s3dgraphy version is bumped past `2823095`; older bundles preserve whatever the PyArchInit DB carries without overwriting it.

The deferred follow-ups deserve a paragraph here because closing the trackers without naming them would lose institutional memory. **Explicit reciprocity inference** (`ensure_reciprocals(graph)`) is currently structural: each canonical edge type declares its direction (overlies vs is_overlain_by), so writing the right pair of edges suffices. A runtime inference pass would help for graphs imported with one-sided declarations from non-pyArchInit sources, but the observed user-facing need is zero today. **Paradox / cycle / temporal-mismatch detection** would be the natural next layer: the temporal subsystem has cycle-detection plumbing but doesn't fire on the physical sub-graph. **The mapping-side passthrough flag** from the closed s3dgraphy #14 would let arbitrary DB columns survive the round-trip as node attributes instead of forcing every column into a typed wrapper; the current `GraphProjector._propagate_node_uuid_and_us` host-side hack covers the immediate need. **Shipping the `node_uuid` backfill migration in the s3dgraphy wheel** (closed s3dgraphy #15) would let any consumer — not just EM-tools — handle the missing-column error against legacy databases. **The edge-style diversification + transitive reduction regression** (closed s3dgraphy #17) collapses the five canonical yEd edge styles to a single dashed for now; visually noisy but doesn't block real workflows. **GraphIngestor inserts new rows instead of UPDATEing by `node_uuid`** (closed s3dgraphy #18) falls back to `(sito, us)` tuple matching, good-enough until the round-trip identity-matching surfaces a real collision. **`_synth_BR_*` synthesized US nodes after GraphML round-trip** (closed s3dgraphy #19) is a byproduct of `materialize_continuity` whose discipline depends on the user-authored BR story that the EM 1.6 manual is still converging on. None of these are blockers for the v1.6 release; they get fixed when they bite.

Cross-references that future readers will want. **DP-61** (EM Mappings Registry & Builder) is the natural place to expose the `physical_relations_pyarchinit` mapping field-type to the community — the long tail of regional pyArchInit forks and lab-specific schemas will need a public catalogue once the registry ships. **EM-blender-tools PR #29** (Sub-3 reverse export, Enzo Cocca) is where the EM Tools UI hangs; DP-62 is what makes the row-level write actually carry the physical relations alongside the basic columns. **EM-blender-tools #30** (palette physical_relationships) is the user-facing yEd surface; closed against this DP. **s3dgraphy #16** (canonical edges + reciprocity + paradox detection) is the upstream tracker whose Sub-feature A is now complete and Sub-features B+C live in this DP's notes as deferred. Conversation 2026-06-04 with the maintainer set the architectural decision and is the rationale these comments preserve in writing.
