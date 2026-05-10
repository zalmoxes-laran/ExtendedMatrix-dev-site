---
id: "DP-51"
title: "Author Node Formalization"
cat: "core"
impacts:
  - "yed"
  - "s3d"
  - "config"
  - "emtools"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Formalize AuthorNode in yEd palette, define linking rules to swimlanes and nodes, wire into the DP-32 propagative resolver."
components:
  - "yEd AuthorNode / AuthorAINode / LicenseNode / EmbargoNode palette entries (done)"
  - "has_author / has_license / has_embargo edge types, multi-scope (done)"
  - "GraphML importer detection via description marker + label prefix (done)"
  - "Dashed connector reclassification by target class (done)"
  - "DP-32 AUTHOR_RULE / LICENSE_RULE / EMBARGO_RULE registration (done)"
  - "Multi-author resolution with ' ; ' join (done)"
  - "Exporter patcher path for the 4 paradata image classes (done)"
  - "Round-trip smoke test (done, test_paradata_image_roundtrip.py)"
  - "co_author edge type (deferred, v1.6)"
  - "Visual Manager integration (deferred, v1.6)"
  - "Heriverse exporter per-node author metadata (deferred, v1.6, shared with DP-32 migration)"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Core import / resolver / exporter loop shipped in 1.5 for the four paradata image nodes. Dashed connector reclassification removes the need for dedicated has_author / has_license / has_embargo yEd styles. co_author edge, Visual Manager integration, and Heriverse per-node author consumption deferred to v1.6."
---

AuthorNode, AuthorAINode, LicenseNode, EmbargoNode are now palette-backed paradata image nodes with label prefixes A. / AI. / LI. / EB. The importer detects them via (1) explicit _s3d_node_type:<NodeType> description marker or (2) y:ImageNode + label prefix (longest-first, so AI. is not shadowed by A.). Hash-based detection was dropped because palette PNGs can change between yEd saves. The dashed yEd connector (which originally mapped to has_data_provenance) is now reclassified at import based on the target class: AuthorNode/AuthorAINode → has_author, LicenseNode → has_license, EmbargoNode → has_embargo. This avoids requiring dedicated palette connectors. The DP-32 resolver exposes AUTHOR_RULE / LICENSE_RULE / EMBARGO_RULE that look up values at node → swimlane → graph level. Multi-author resolution is supported (all has_author targets joined with ' ; ', duplicates deduped). Author display prefers the description field (human-readable data in the 1.5 dev9 palette convention where name holds a short code like A.01) and falls back to name+surname, then to the code. The full exporter writes the 4 node types through paradata_image_generator + palette_resources (palette template is the single source of truth for icons). The GraphMLPatcher round-trips them via a smoke test. Remaining gaps (deferred to v1.6): co_author edge type, Visual Manager integration, Heriverse exporter per-node author metadata (shared with DP-32 Heriverse migration).
