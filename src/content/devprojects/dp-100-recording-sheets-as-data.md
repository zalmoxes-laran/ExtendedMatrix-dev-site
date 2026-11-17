---
id: "DP-100"
title: "Recording sheets as data (stratigraph-templates)"
cat: "collab"
impacts:
  - "emstudio"
  - "s3d"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "National recording sheets (ICCD US 2021, iDAI.field, Spain, Hungary) are written once as definitions and read by EMStudio and StratiField; the act of documentation and the record status are part of the data."
components:
  - "stratigraph-templates: SPEC and compiled sheets"
  - "Sheet reader in EMStudio (fill, print)"
  - "Sheet reader in StratiField"
  - "Act of documentation, record_status, sheet signs in the datamodel"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Built; a StratiGraph deliverable. DP-82 covers only the view, DP-13 is the USV sheet to add."
relatedDPs:
  - "DP-13"
  - "DP-82"
  - "DP-09"
---

*Declared on 17 November 2026: built before it had a development project.*

A sheet is a way of looking at a unit, not a separate database. Written as data, the same ICCD sheet fills the graph from the browser, from the field assistant, and prints like the paper one.

Evidence: stratigraph-templates `SPEC.md`, `dist/schede/`; EMStudio `sheet.ts` (19190fc, 337b016, c94ac17); stratigraph-chatbot `app/scheda.py`; s3Dgraphy ac75461; reports `2026-11-17-REPORT-schede`, `-scheda-spec-vocabolari`, `-stampa-nel-desktop`.
