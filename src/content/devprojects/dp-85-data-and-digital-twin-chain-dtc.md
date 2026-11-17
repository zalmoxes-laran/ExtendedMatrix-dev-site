---
id: "DP-85"
title: "DTC — Data / Digital Twin Chain"
cat: "core"
impacts:
  - "s3d"
  - "emstudio"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Every step that turns data into other data (a photo set into a model, a model into a lighter one) is written in the graph as input, process and output, readable in CIDOC-CRMdig and PROV."
components:
  - "DTC nodes: input, process, output"
  - "Edges had_input / had_output / derived_from with CRMdig and PROV projection"
  - "Residency, ingest, corpus, capture of a step"
  - "Tests test_dtc_*"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Built and tested since July 2026; supersedes DP-06. Candidate for a short publication together with the stamp (DP-86) on Templu Mare and San Pietro di Segni."
relatedDPs:
  - "DP-06"
  - "DP-86"
---

*Declared on 17 November 2026: built before it had a development project.*

The DTC answers the question every reviewer asks of a 3D model: where does it come from, and what was done to it? Each step is a small chain — what went in, what process ran, what came out — and the chains link into the history of the object. It realises what DP-06 only announced.

Evidence: s3Dgraphy `dtc/` and `nodes/dtc_node.py` (from 24 Jul 2026, 21 commits), six `test_dtc_*` files; reports `2026-07-24-DTC-substrate`, `2026-07-26-R3-dtc-resident`; EMStudio `stamp-ingest.ts`, `asset-versions.ts`.
