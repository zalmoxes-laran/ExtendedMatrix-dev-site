---
id: "DP-05"
title: "Geophysics Workflow"
cat: "extension"
impacts:
  - "emtools"
  - "s3d"
status: "partial"
statusLabel: "Partial — GPR import built in 3D Survey Collection"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Import and annotation system for geophysics data."
components:
  - "Import pipeline"
  - "Pseudo-stratigraphic node"
  - "EM menu"
thesis: true
stratigraph: true
keyStudy: "Needed"
notes: "In 1.6 (E.D., 17 Nov 2026): a GPR depth slice enters the graph as a document, with date, CRS, stamp and DTC step; minimal tests on the GPR core; a manual page. The importer already reads real data (CSIC-Tivoli CS07, UA Ilici). The pseudo-stratigraphic node (the «anomaly») is 1.7."
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** use of the workflow — the GPR of a real case brought in as slice-documents and compared with the excavation.

*Original project description:*

Two-phase: (1) Import & filtering via top-bar EM menu in Blender, (2) Annotation with pseudo-stratigraphic nodes. Consider integration with 3D Survey Collection.
