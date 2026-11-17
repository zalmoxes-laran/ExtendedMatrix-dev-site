---
id: "DP-53"
title: "Multi-source GraphML Assembly Pipeline"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
  - "config"
status: "superseded"
statusLabel: "Superseded by em.json and graph merging"
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
notes: "Closed: GraphML is no longer the target format; several sources are merged in em.json (graph and corpus merging, several open sources and «Copy to…» in EMStudio). The 1.6 authoring manual is still to write."
---

<!-- MICRO-O 2026-11-17 -->
**Closed (17 November 2026):** superseded by em.json as working format and by graph merging.

*Original project description:*

Follow-up to DP-48 (GraphML Writer & Updater). DP-48 shipped the core exporter + patcher used by Create Host, Bake, and Save GraphML; this DP covers the higher-level orchestration that combines multiple input sources (one or more XLSX tables, Blender scene data, manual annotation) into a single target GraphML with deterministic merge semantics, conflict resolution coherent with the DP-45 wizard, and an updated authoring manual. Scope includes: a multi-source job descriptor (which sources feed which sheets/branches), deterministic ordering so re-running the pipeline is idempotent, integration with the DP-45 GraphMerger for paradata conflict resolution, and the revised authoring manual as part of the 1.6 docs refresh.
