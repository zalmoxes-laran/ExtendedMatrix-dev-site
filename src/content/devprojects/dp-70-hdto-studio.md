---
id: "DP-70"
title: "HDTO Studio (future option)"
cat: "infra"
impacts:
  - "s3d"
  - "config"
status: "concept"
statusLabel: "Concept — recorded option"
targetVersion: "2.0"
incorporated: null
embargo: false
desc: "A possible dedicated HDTO-profile GUI, peer to EMStudio over the shared s3Dgraphy substrate + Studio shell. Deferred: for now HDTO is authored via the HDTO lens inside EMStudio. Kept on the board so the option is not lost."
components:
  - "Peer front-end to EMStudio: same s3Dgraphy substrate (property graph, single source of truth) + same neutral Studio shell / lens framework — an HDTO-profile GUI rather than the EM-profile one"
  - "NOT a triple-editor: authors on the s3Dgraphy property graph and projects to RDF/TTL (no granular KG CRUD, no SPARQL UPDATE) — same discipline as the HDTO lens"
  - "Reversible packaging decision: because the shell/lens boundary makes EM-profile and HDTO-profile front-ends near-interchangeable, 'separate-first, converge-later' is low-cost"
  - "Strategic value: could be offered to the CNR sister projects as a general HDT/CH authoring GUI"
  - "Does NOT duplicate CNRS's 3D HDT scientific viewer (ioli, ECHOES T7.4.3) — EMStudio/HDTO Studio stay 2D"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "2.0, as a recorded option. Today HDT-O is a lens inside EMStudio (decision of 22 Jul 2026)."
relatedDPs:
  - "DP-18"
  - "DP-17"
  - "DP-61"
---

A dedicated HDTO Studio would be a graphical front-end focused on the Heritage Digital Twin Ontology profile — a peer to EMStudio rather than a replacement. Both would sit over the same two commons: the s3Dgraphy property-graph substrate (the single source of truth, which now carries the HDTO HC/HP classes additively alongside the EM vocabulary) and the neutral Studio shell with its lens framework. Where EMStudio presents the stratigraphic EM profile, HDTO Studio would present the catalogue-oriented HDTO profile, but neither edits triples directly: authoring happens on the property graph and is projected to RDF/TTL, preserving the two-tier truth discipline.

For now the decision is to develop everything integrated — HDTO is reachable through the HDTO lens inside EMStudio — so this DP exists to hold the separate-GUI option open without committing to it. The shell/lens boundary is what makes the choice reversible and cheap: standing up a distinct HDTO-profile GUI later is a packaging step, not a rewrite. The trigger to revisit is external: interest from ETT / the ECHOES consortium, or a pull from the CNR sister projects who might want a general HDT/CH authoring tool. It must never duplicate the CNRS 3D scientific viewer (ioli); EMStudio and any HDTO Studio stay 2D.
