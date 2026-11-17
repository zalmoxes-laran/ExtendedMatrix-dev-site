---
id: "DP-94"
title: "Rights, licences & embargo of assets"
cat: "core"
impacts:
  - "s3d"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "What may be done with an asset — show it, download it, publish it — is read from the graph: licence and embargo travel with the data."
components:
  - "rights resolver"
  - "Licence and embargo per study and per asset"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built."
relatedDPs:
  - "DP-93"
  - "DP-65"
---

*Declared on 17 November 2026: built before it had a development project.*

A public beta needs this: a viewer must know, before showing a model, whether it is allowed to.

Evidence: s3Dgraphy `rights.py` (16 Aug 2026; reports `2026-08-16-NIGHT-rights-checksum-dtc`, `-study-kind-licenza-embargo`).
