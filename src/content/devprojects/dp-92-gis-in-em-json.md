---
id: "DP-92"
title: "GIS in the em.json"
cat: "extension"
impacts:
  - "s3d"
  - "emstudio"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "GIS layers (shapefile, GeoPackage, GeoJSON, GeoTIFF/COG) enter the study as resources and documents, without GDAL; footprints, ground from a DEM, contour lines, DXF and world files."
components:
  - "Four formats read without GDAL"
  - "Footprints of sites, trenches and cuts"
  - "GIS data as documents"
  - "Ground from DEM and orthophoto, stamped contour lines"
  - "GIS button in the EMStudio Space"
thesis: false
stratigraph: false
keyStudy: "Templu Mare"
notes: "Built; a companion of the georeferencing pipeline (DP-56)."
relatedDPs:
  - "DP-56"
  - "DP-04"
---

*Declared on 17 November 2026: built before it had a development project.*

The map of the excavation and the matrix belong to the same record: a trench outline is a document, with its date and its author, not a loose layer in another program.

Evidence: s3Dgraphy `gis/` (3f6e608, 6 Nov 2026; cf78595, 15 Nov 2026); EMStudio `gis-space.ts`, `gis-scene.ts`; report `2026-11-15-REPORT-gis-documenti`. Tried on real Templu Mare shapefiles (EPSG:31700).
