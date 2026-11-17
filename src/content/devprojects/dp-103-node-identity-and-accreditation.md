---
id: "DP-103"
title: "Node identity & accreditation"
cat: "infra"
impacts:
  - "server"
  - "emstudio"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "On a StratiGraph node people sign in with ORCID (OIDC through Keycloak), are invited and accredited; holds and a recycle bin protect the data."
components:
  - "Sign in with ORCID via Keycloak"
  - "Invites and accredited persons"
  - "Holds and recycle bin"
  - "ORCID / OIDC sign-in in EMStudio"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Built; widens DP-59."
relatedDPs:
  - "DP-59"
  - "DP-84"
---

*Declared on 17 November 2026: built before it had a development project.*

Who writes is a person with a verified identity, so every attribution in the graph means something.

Evidence: stratigraph-server `identity.py`, `accredited.py`, `invites.py`, `holds.py`, 6c15428; EMStudio `orcid-signin.ts`, `oidc.ts`.
