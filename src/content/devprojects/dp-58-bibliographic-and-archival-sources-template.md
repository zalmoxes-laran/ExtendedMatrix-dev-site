---
id: "DP-58"
title: "Bibliographic & Archival Sources Template"
cat: "collab"
impacts:
  - "s3d"
  - "emtools"
status: "partial"
statusLabel: "Partially implemented"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Spreadsheet template (source_list.xlsx) for the systematic registration of bibliographic and archival sources of an EM project."
components:
  - "Source List XLSX 8-column schema v1.3 (done)"
  - "EM 1.5 manual section: stable single-sheet schema + versionadded 1.3 + forward note to DP-58 (planned, this DP)"
  - "Two-sheet Analytical/Comparative split (de-facto in real projects, to be canonicalized in 1.6)"
  - "EM 1.6 revision: closed Type vocabulary aligned with DP-07 three-axis classification (planned, 1.6 only)"
  - "EM 1.6 manual section: two-sheet structure + closed Type vocabulary + DP-07 axis mapping (planned, lands on 1.6 doc branch)"
  - "Optional integration as Documents sheet in em_data.xlsx (DP-02, planned)"
  - "Populated template file ExtendedMatrix/03_Sources_list/sources_list v.1.3.2.xlsx — 972 real entries from the Castrum di Segni project + README front-sheet with delete-and-start-fresh instructions + per-column header help-comments (added) + Notes column (added) + frozen panes. The legacy filename is kept on purpose: download links to it are spread across version-tagged docs and external references; renaming would break them. The same template is the supported artifact for EM 1.3 / 1.4 / 1.5 (the schema did not change). The 1.6 revision will ship under a cleaner naming convention as a fresh start (planned, this DP)."
thesis: false
stratigraph: false
keyStudy: "Basilica"
notes: "Cited in the EM 1.3 release summary as 'formalized source list for data collection'. Two-sheet schema observed in production projects (e.g. AmbaAradam). Revision retargeted to EM 1.6 — aligns with DP-07 (three-axis Document classification) and DP-02 (em_data.xlsx Documents sheet). Manual scope split intentionally: 1.5 manual = stable schema only, 1.6 manual = revised schema. Manual file: source_node.rst (Source List Tool section)."
---

XLSX template for the systematic registration of bibliographic and archival sources of an EM project (the Source List, conventionally source_list.xlsx at the project root). The first version was released with EM 1.3 — cited in the release notes as 'formalized source list for data collection' — and is fully valid for EM 1.4. In real projects (Basilica, Great Temple, Amba Aradam) the schema has converged on 8 columns (Name, Description, Url, Property that can validate, original id., Type, Preview, Notes) and a two-sheet split (Analytical Sources / Comparative Sources) that anticipates the DP-07 Axis 1 (role) classification. A revised version is planned for EM 1.6: (1) formalizes the two-sheet split as canonical schema, (2) aligns the Type column with DP-07 Axis 2 (content_nature) + Axis 3 (geometry) controlled vocabularies, (3) makes the schema directly mergeable into the em_data.xlsx Documents sheet (DP-02) so the bibliographic registry feeds the StratiMiner pipeline without manual duplication, (4) ships a formal column reference and worked example in the EM manual (source_node.rst). To avoid confusion for users learning EM 1.5, the EM 1.5 manual section documents only the stable single-sheet 8-column schema with free-text Type; the two-sheet split, the closed Type vocabulary and the DP-07 axis mapping land on the EM 1.6 manual branch only.
