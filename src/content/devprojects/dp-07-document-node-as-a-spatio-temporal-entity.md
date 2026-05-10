---
id: "DP-07"
title: "Document Node as a Spatio-Temporal Entity"
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
desc: "Three-axis document classification (role / content_nature / geometry), instancing, and temporal delta for source uncertainty."
components:
  - "yEd palette DocumentNode reference (n37/n38/n39) with geometry border colours (done)"
  - "em_visual_rules.json three-axis schema: document_roles / document_content_natures / document_variant_styles (done)"
  - "DocumentNode constructor with role / content_nature / geometry kwargs (done)"
  - "utils.get_document_vocabularies() derivation from JSON (done)"
  - "StratiMiner prompt v5.4 with decision sketch (done)"
  - "UnifiedXLSXImporter ROLE / CONTENT_NATURE / GEOMETRY columns (done)"
  - "Document Manager Edit Classification operator + detail row (done)"
  - "Colour-coded UIList icons by geometry (done)"
  - "RM viewport colour sync toggle via object.color (done, v1.5)"
  - "Delta system (planned, v1.6 tail)"
  - "Full RM border shading via materials/outline (planned, v1.6 tail)"
  - "Activity list with proxy selection/hiding (planned, v1.6 tail)"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Three-axis classification landed in 1.5. Delta system, full RM border shading, and activity list still pending (v1.6 tail). The wrap-graphs research extension is tracked separately as DP-52."
---

Formalizes the DocumentNode as a three-axis classified, temporally-anchored, spatially-typed entity. Axis 1 (role): analytical (primary source for THIS context) vs comparative (external reference / analogy). Axis 2 (content_nature): 2d_object vs 3d_object. Axis 3 (geometry): reality_based (red) vs observable (orange) vs asserted (yellow) — or empty when the document has no Representation Model (PDF article, bibliography). The three axes are orthogonal; the geometry axis alone drives the border colour (in both yEd GraphML output and the Document Manager UIList icons, plus the optional RM viewport colour sync toggle). Palette template em_palette_template.graphml ships reference nodes n37/n38/n39 as single source of truth for sizes and colours; em_visual_rules.json declares the vocabulary (document_roles, document_content_natures, document_variant_styles) and the Python constants DOCUMENT_ROLES / DOCUMENT_CONTENT_NATURES / DOCUMENT_GEOMETRIES are derived from it via utils.get_document_vocabularies(). StratiMiner prompt v5.4 teaches the AI to fill ROLE / CONTENT_NATURE / GEOMETRY columns in the Documents sheet with a decision sketch. Document Manager: 3-axis classification shown in the detail panel with an Edit Classification operator; UIList icons colour by geometry. Create Host operator (AUX_OT_create_host_for_orphan) asks for all three axes at orphan→host promotion time. RMDoc Manager carries an opt-in toggle that mirrors the geometry colour on the scene quad via object.color. The instancing and delta system (temporal uncertainty ranges, e.g. 1450–1456) and full RM viewport border shading (materials/outline rather than object.color) are deferred to the v1.6 tail.
