---
id: "DP-76"
title: "Proxy → LinkNode + Heriverse exporter em.json unification"
cat: "infra"
impacts:
  - "s3d"
  - "emtools"
  - "heriverse"
  - "config"
status: "planned"
statusLabel: "Planned"
targetVersion: "2.0"
incorporated: null
embargo: false
desc: "Give the proxy (SemanticShapeNode) its geometry through a LinkNode (has_linked_resource / P67) like the RM/RMDoc/RMSF facets, retiring the inline url and unifying the geometry-linking pattern so the resource layer + DTC lifecycle apply to proxies too. Coordinated change across s3Dgraphy, EMTools, the em.json exporter and the Heriverse exporter — unifying the Heriverse-exporter em.json to the new JSON. Reframes EMTools 'Heriverse export' as a 3D-asset optimizer."
components:
  - "s3Dgraphy: proxy geometry via LinkNode + P67 (retire the inline url/convexshapes on SemanticShapeNode as the geometry carrier); keep bounding shapes as needed"
  - "em.json exporter alignment + Heriverse exporter em.json unified to the new JSON (single JSON, no divergence)"
  - "Heriverse PR (consumer side) + EMTools consumers of the proxy updated"
  - "Coordinated breaking change: notify consumers (EMTools, Heriverse, pyArchInit) as with any LinkNode-shape change"
  - "New role for EMTools 'Heriverse export': a 3D-asset OPTIMIZER — provides lo-res LinkNode alternatives in MinIO that Heriverse consumes with greater satisfaction, while the HIRES models stay local for editing and offline Blender work (Blender handles heavy models better)"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Rationale (E.D. 2026-07-30): verification showed an asymmetry — the proxy (SemanticShapeNode, node_type semantic_shape, connected to its US via has_semantic_shape, id name-derived e.g. USM99_proxy, internal / not in GraphML) carries its geometry INLINE (url + convexshapes/spheres), whereas the RM/RMDoc/RMSF facets reference a LinkNode via P67. Giving the proxy a LinkNode is the correct harmonization and brings the resource-layer + DTC to proxies, but it is a coordinated breaking change requiring a dedicated development session that unifies the Heriverse-exporter em.json with the new JSON. Sequencing: pair it with that exporter-unification session. The optimizer reframing is the strategic payoff — one authoring truth (hi-res local), Heriverse fed optimized MinIO alternatives."
relatedDPs:
  - "DP-11"
  - "DP-31"
  - "DP-17"
---

Verification of the datamodel (2026-07-30) surfaced a structural asymmetry in how 3D geometry is attached. The **proxy** is a `SemanticShapeNode` (node_type `semantic_shape`, type `proxy`), connected to its stratigraphic unit by a `has_semantic_shape` edge, with an id derived from the US name (`USM99_proxy`) and marked *internal* (present in em.json, excluded from GraphML). Crucially, the proxy carries its geometry **inline** — a `url` to the `.glb` plus optional convex shapes and spheres. The RM, RMDoc and RMSF facets, by contrast, reference a **LinkNode** through `has_linked_resource` (P67), the R0 hinge, so the resource layer and the DTC lifecycle apply to them.

DP-73 harmonises the two: the proxy gains a LinkNode like the other representation models, so that a proxy's geometry is a first-class, DTC-tracked resource rather than an inline string. Because the proxy is consumed by EMTools, by the em.json exporter and by Heriverse, this is a coordinated change — it needs a dedicated session that also **unifies the Heriverse-exporter em.json with the new JSON**, removing the current divergence between the two serialisations.

The strategic payoff is a cleaner division of labour. Once the proxy (and every 3D node) resolves its geometry through a LinkNode, EMTools' "Heriverse export" stops being a second serialiser and becomes a **3D-asset optimizer**: it produces lo-res LinkNode alternatives in MinIO that Heriverse consumes with greater satisfaction, while the hi-res models stay local for editing and offline work in Blender, which handles heavy geometry far better than a browser. One authoring truth, optimised delivery.
