---
id: "DP-97"
title: "Properties with several owners & provenance"
cat: "core"
impacts:
  - "s3d"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "One property can belong to several units, each link marked as own or inherited; the resolver says where a value comes from."
components:
  - "Several has_property links, marked inherited"
  - "inherit_property"
  - "Provenance resolver: own or inherited, and from where"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built; supersedes pattern 1 of DP-66."
relatedDPs:
  - "DP-66"
  - "DP-32"
---

*Declared on 17 November 2026: built before it had a development project.*

A measurement taken once may describe several units. Instead of copying it, the graph links it to each of them and keeps track of whose it was first.

Evidence: s3Dgraphy `ownership.py` (2bfb765a, 29 Sep 2026), `resolvers/provenance.py` (da67981, 14 Nov 2026); report `2026-11-14-REPORT-proprio-ed-ereditato`.
