---
id: "DP-96"
title: "Human validation of AI"
cat: "core"
impacts:
  - "s3d"
  - "emstudio"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "What an AI proposes is signed by a person with an ORCID before it counts; what nobody validated is left out of the exports."
components:
  - "AI validation record signed with ORCID"
  - "Exports drop unvalidated content"
  - "Validation panel in EMStudio"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built, together with DP-02."
relatedDPs:
  - "DP-02"
  - "DP-101"
---

*Declared on 17 November 2026: built before it had a development project.*

The machine may propose, a person answers for it. This is the rule that lets StratiMiner (DP-02) and StratiField write into a scholarly record.

Evidence: s3Dgraphy `ai_validation.py` (d8b3b85a, 29 Sep 2026), a74e0305; EMStudio `ai-validation.ts`.
