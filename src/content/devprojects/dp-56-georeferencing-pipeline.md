---
id: "DP-56"
title: "Georeferencing Pipeline"
cat: "core"
impacts:
  - "emtools"
  - "s3d"
  - "heriverse"
status: "in-dev"
statusLabel: "In development"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Unified Georeferencing panel in EMTools orchestrating shift + EPSG across BlenderGIS and 3D Survey Collection. GeoPositionNode as a passive mirror of scene state for 1.6; active canonical source in 1.7+ when geometries enter the graph."
components:
  - "Georeferencing micro-panel (EM tab, default closed, four editable fields + traffic lights)"
  - "Autonomous shift.txt parser (3DSC format, no hard dep on 3DSC addon)"
  - "BlenderGIS lazy adapter (GeoScene.setOriginPrj synch=False, updObjLoc=False by default)"
  - "3D Survey Collection lazy adapter (scene.BL_epsg / BL_x/y/z_shift read/write)"
  - "Traffic-light status (green/yellow/grey/red) with integration tooltips when addons are missing"
  - "Advanced toggles: move_objects_on_change (off), sync_lat_lon (off)"
  - "GeoPositionNode.set_from_scene() at save / Heriverse JSON export (passive mirror)"
  - "Import/Export shift.txt operators"
  - "Sync all / Pull from addon / Push to GeoNode operators"
  - "Patch 3DSC shift_from.dsc to use GeoScene API instead of wm.geoscnProps (upstream PR or fork)"
  - "stratiGraph/BlenderGIS fork for code sovereignty (parallel, non-blocking)"
  - "Cross-CRS reprojection engine with BGIS/PyProj (deferred, Phase 2)"
  - "Multigraph heterogeneous shift reconciliation (deferred, Phase 2)"
  - "Bulk graph+geometries import pipeline (deferred, Phase 2)"
  - "Heriverse/Cesium frontend consumption of GeoPositionNode shift at scene load (parallel, heriverse-docker repo)"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Scope 1.6 is deliberately strict: no CRS reprojection, homogeneous multigraph only. This unblocks the archaeological workflow (already-shifted geometries on populated scenes) without dragging in GDAL/PyProj dependencies. The design is switch-friendly: flipping the GeoNode from passive mirror to active canonical source is a one-line callback inversion in Phase 2, when Extended Matrix geometries enter the graph itself and bulk import/export will require a proper reprojection engine (BGIS as backend, PyProj in requirements_wheels.txt). Related: DP-10 (Multigraph) — 1.6 assumes same-CRS / same-shift; DP-04 (Landscape & Urban Surfaces) — territorial graph will share this georef infrastructure."
---

EMTools becomes the single entry point for georeferencing in the Extended Matrix ecosystem. A new Georeferencing micro-panel exposes the four canonical fields (EPSG, shift_x/y/z) and orchestrates two external Blender addons when installed: BlenderGIS (scene CRS + projected origin) and 3D Survey Collection (scene.BL_* shift properties). The panel is autonomous — an in-house shift.txt parser ships with EMTools, so the 3DSC file format is usable even without 3DSC installed. Traffic-light sync status (green/yellow/grey/red) indicates whether each addon's state matches the canonical EMTools values, with in-panel tooltips describing what each integration adds when missing (no nagging, no install dialogs). Editing in EMTools propagates to the installed addons via safe API calls — specifically GeoScene.setOriginPrj(synch=False) for BGIS, which side-steps both the WGS84 reprojection path (no GDAL/PyProj needed in 1.6) and the object-translation callback wired to window_manager.geoscnProps (the regression that caused 3DSC sync to shift already-imported geometries by thousands of kilometers on populated scenes). Two advanced toggles are OFF by default: "Move objects on origin change" (opt-in traslation of top-level objects when the origin changes) and "Compute lat/lon (needs PyProj)" (opt-in WGS84 sync). The s3Dgraphy GeoPositionNode — auto-created per graph with id geo_{graph_id} — is populated in read at save and at Heriverse JSON export: in 1.6 it behaves as a passive mirror, so the graph continues to carry no user-authored geographic coordinates (consistent with current practice where the shift lives in scene state). The design keeps the door open for the 1.7+ inversion where the GeoNode becomes the canonical active source (already the contract consumed by Heriverse and Cesium). Multigraph assumption for 1.6 is strict homogeneity: all co-loaded graphs must share the same EPSG and shift, otherwise loading is refused. Cross-CRS reprojection and heterogeneous shifts are deferred to Phase 2 (DP follow-up) when geometries will enter the graph itself and a bulk import pipeline with BGIS (PyProj) as reprojection engine will become necessary. A companion patch for 3D Survey Collection replaces the wm.geoscnProps writes in shift_from.dsc with the GeoScene API (setOriginPrj synch=False, updObjLoc=False by default), eliminating the need for the "scene must be empty" confirmation dialog. The BlenderGIS fork under the stratiGraph organization is tracked as a parallel deliverable for code sovereignty: it keeps minimal divergence from upstream (opt-in 'Freeze scene objects on origin change' toggle as its main patch, PR-upstream friendly) and ensures continuity if upstream BGIS is discontinued.
