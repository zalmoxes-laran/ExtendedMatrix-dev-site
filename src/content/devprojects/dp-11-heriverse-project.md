---
id: "DP-11"
title: "Heriverse Project"
cat: "tool"
impacts:
  - "emtools"
  - "heriverse"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Heritage Metaverse online viewer (successor to EMviq) + EMtools exporter, both shipped in 1.5. May evolve into Strativerse."
components:
  - "Heriverse viewer (Aton-based, beta live)"
  - "Docker deployment (production-ready)"
  - "export_operators/heriverse/ subpackage split (done)"
  - "Multi-graph JSON export (done)"
  - "GLTF with Draco + GPU instancing (done)"
  - "Separate textures + compression (done)"
  - "ParaData objects export (done)"
  - "Special Finds export (done)"
  - "Pre-export collection visibility helper (done)"
  - "Export Manager plugin-style provider (done)"
thesis: true
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Exporter refactored in 1.5 into a plugin-style architecture. Heriverse beta live; possible rebranding to Strativerse."
---

Two components now operational. (1) Heriverse — online Heritage Metaverse service based on the ATON Framework, successor to EMviq with greatly expanded capabilities. Docker-based deployment production-ready (ATON, CouchDB, Keycloak, Nginx HTTPS). Beta version live with open beta-tester program. May evolve into Strativerse. (2) EMtools Heriverse exporter, refactored in 1.5 into a dedicated export_operators/heriverse/ subpackage (split by concern: operator, json_export, gltf wrapper, utils, collections helper). Exporter features: multi-graph JSON export with per-graph publishable flag, GLTF export for proxies and Representation Models with Draco compression and optional GPU instancing, separate texture pipeline with configurable max resolution and quality, ParaData (RMDoc) objects export with transform preservation, Special Finds (RMSF) export, optional ZIP packaging and Cesium tileset skip. A dedicated HERIVERSE_OT_make_collections_visible helper unhides all collections containing RM objects before export. The Export Manager panel now uses a plugin-style provider registry (ExportProvider) that hosts the Heriverse UI without coupling to the panel.
