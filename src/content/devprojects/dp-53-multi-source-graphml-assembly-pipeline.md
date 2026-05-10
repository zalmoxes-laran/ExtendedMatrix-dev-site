---
id: "DP-53"
title: "Multi-source GraphML Assembly Pipeline"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
  - "config"
status: "planned"
statusLabel: "Planned"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Pipeline for assembling a single target GraphML from multiple input sources (XLSX tables, Blender scene data, manual annotation). Split out from DP-48."
components:
  - "Multi-source job descriptor (planned)"
  - "Deterministic merge order (planned)"
  - "Integration with DP-45 GraphMerger conflict resolution (planned)"
  - "Authoring manual update (planned)"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Split out from DP-48 when its core (exporter + patcher) shipped in 1.5. Related to DP-06 (Data Transformation Chunk) and DP-45 (XLSX Auxiliary Data)."
---

Follow-up to DP-48 (GraphML Writer & Updater). DP-48 shipped the core exporter + patcher used by Create Host, Bake, and Save GraphML; this DP covers the higher-level orchestration that combines multiple input sources (one or more XLSX tables, Blender scene data, manual annotation) into a single target GraphML with deterministic merge semantics, conflict resolution coherent with the DP-45 wizard, and an updated authoring manual. Scope includes: a multi-source job descriptor (which sources feed which sheets/branches), deterministic ordering so re-running the pipeline is idempotent, integration with the DP-45 GraphMerger for paradata conflict resolution, and the revised authoring manual as part of the 1.6 docs refresh.
