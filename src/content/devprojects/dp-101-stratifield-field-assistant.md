---
id: "DP-101"
title: "StratiField — field assistant"
cat: "tool"
impacts:
  - "s3d"
  - "server"
status: "in-dev"
statusLabel: "Built — behind «Experimental features» in 1.6"
targetVersion: "1.6-exp"
incorporated: null
embargo: false
desc: "Voice or text in the trench becomes an intent and then an attributed write on the graph."
components:
  - "Field assistant (stratigraph-chatbot)"
  - "Tool contract shared with connectors"
  - "Sheets read from stratigraph-templates"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "In 1.6 behind «Experimental features» (WP7)."
relatedDPs:
  - "DP-83"
  - "DP-96"
  - "DP-100"
---

*Declared on 17 November 2026: built before it had a development project.*

The archaeologist speaks; the assistant proposes the change and writes it only under that person's name.

Evidence: stratigraph-chatbot (from 15 Aug 2026, about 180 commits), `app/contract.py`. StratiGraph WP7.
