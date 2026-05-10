---
id: "DP-48"
title: "GraphML Writer & Updater"
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
desc: "Core tools for writing and incrementally updating GraphML files — exporter and patcher used across the Create Host, Bake, and Save GraphML flows."
components:
  - "GraphML exporter (done)"
  - "GraphML patcher/updater (done)"
  - "Volatile Save GraphML flow (done)"
  - "Integration with Create Host + Bake Paradata (done)"
  - "Visual rules honoured end-to-end (done)"
  - "Multi-source assembly pipeline (split out to DP-53, v1.6)"
  - "Authoring manual update (split out to DP-53, v1.6)"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Core exporter + patcher shipped and exercised by Create Host, Bake, Save GraphML. Multi-source assembly pipeline and authoring-manual update split out to DP-53 for v1.6. Related to DP-06 (Data Transformation Chunk) and DP-45 (XLSX Auxiliary Data)."
---

Core toolset for creating and updating GraphML files from the s3Dgraphy in-memory graph. The GraphML exporter writes a fresh .graphml matching the yEd palette template (n1..n36 + n37-n39 reference Master Documents), and the GraphML patcher performs incremental updates to an existing .graphml — used by the volatile Save GraphML flow, the Create Host operator, and the Bake Paradata flow. Both paths read visual styling from em_visual_rules.json (single source of truth) and keep geometry consistent with the palette template reference nodes. The multi-source assembly pipeline (merging multiple XLSX / Blender-scene / manual-annotation sources into a single target GraphML) and the updated authoring manual were scoped out to a v1.6 follow-up tracked as DP-53.
