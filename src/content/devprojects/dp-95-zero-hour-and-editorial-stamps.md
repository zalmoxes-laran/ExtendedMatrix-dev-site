---
id: "DP-95"
title: "Zero hour & editorial stamps"
cat: "core"
impacts:
  - "s3d"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Imported nodes get a clock and an author without inventing them; every node keeps who created it and who last changed it."
components:
  - "zero_hour: the moment a legacy file enters the system"
  - "created_by / modified_by"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built."
relatedDPs:
  - "DP-96"
---

*Declared on 17 November 2026: built before it had a development project.*

Old files have no history inside them. The zero hour marks honestly when they entered the system, instead of pretending a date or an author that nobody recorded.

Evidence: s3Dgraphy `zero_hour.py` (report `2026-10-04-NIGHT-l-ora-zero`), `editorial.py` (13 Aug 2026).
