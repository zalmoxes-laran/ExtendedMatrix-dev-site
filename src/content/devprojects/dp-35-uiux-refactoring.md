---
id: "DP-35"
title: "UI/UX Refactoring"
cat: "tool"
impacts:
  - "emtools"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Comprehensive UI/UX modernization of the EM Blender add-on. Modular package architecture, plugin-style Export Manager, uniform experimental gating."
components:
  - "Blender Extension format + CI/CD (done)"
  - "Modular package split for every top-level .py (done)"
  - "Export Manager plugin-style ExportProvider registry (done)"
  - "export_operators/heriverse/ split from 2232-line monolith (done)"
  - "EMviq dead-code removal (done)"
  - "Uniform experimental gating (done)"
  - "Modular manager architecture (done)"
  - "Graph Editor/Viewer (done)"
  - "Visual Manager + colour ramps (done)"
  - "Proxy Box Creator (done)"
  - "Performance framework (~30% integrated)"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "v1.5 modernization shipped. Package refactor + plugin-style export panel + uniform experimental gating are the headline items."
---

Major rewrite of EMtools shipped in 1.5. Delivery (April 2026): (1) Build and distribution: migrated to Blender Extension format (.zip packages) with multi-platform CI/CD on GitHub Actions and a single build pipeline for stable and experimental channels. (2) Module architecture: every former monolithic top-level .py file promoted to a proper package with separation of concerns — anastylosis_manager/ (properties, lod_utils, graph_utils, operators_list, operators_link, operators_lod, ui), activity_manager/ (properties, operators, ui), em_statistics/ (materials, metrics, properties, operators, ui), export_manager/ (registry, panel, providers/), proxy_inflate_manager/ (helpers, operators, ui), cronofilter/ (properties, operators, ui + integration/json_exporter_patch siblings). Existing packages (rm_manager, paradata_manager, document_manager, graph_editor, proxy_box_creator, import_operators, visual_manager, em_setup, epoch_manager, stratigraphy_manager, tapestry_integration) audited and kept structurally clean; tapestry_integration/ui_panel.py renamed to ui.py for cross-module consistency. (3) Export Manager redesigned as a plugin-style panel: a central ExportProvider registry lets new exporter UI sections self-register without touching the panel; current providers are tabular (CSV) and heriverse (UI wrapper around export.heriverse). Dead EMviq path (EM_runaton, EM_export, EM_openemviq, old JSON_OT_exportEMformat) and its Scene properties removed. (4) Heriverse exporter split from a 2232-line monolith into export_operators/heriverse/ (operator, json_export, gltf, collections_op, utils). JSON_OT_exportEMformat renamed to HERIVERSE_OT_export_json with bl_idname preserved for backward compatibility. (5) Experimental features gating unified: red header + '(Experimental)' suffix + EXPERIMENTAL icon on all experimental UIs (RM Coloring, Proxy Inflate Manager, Export Statistics, GraphML Wizard, Tapestry, EMGraph). Surface Areale marked experimental. (6) Modular manager pattern (Stratigraphy, Epoch, Visual, Reconstruction, Paradata, Document managers) with Scene.em_tools single source of truth. (7) Visual Manager with property-based colouring and colour ramps. (8) Proxy Box Creator. (9) Performance optimization framework (~4,000 lines, ~30% integrated).
