---
id: "DP-98"
title: "Life, definition & attribution of the unit"
cat: "core"
impacts:
  - "s3d"
  - "emstudio"
  - "emtools"
status: "near"
statusLabel: "Built — rule to freeze for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "A unit has a life (from its birth epoch to the last epoch it reaches), a definition (a short sentence with its chain, its interpretation as description) and an attribution (who acquired what, when)."
components:
  - "unit_life: the computed chronology reads the life of the units"
  - "definition as a PropertyNode; echoes (description repeating definition)"
  - "acquired_of: own → DTC capture → publishing document → container"
  - "person_name: names without the surname twice"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built on 14–17 Nov 2026, still fresh: the chronological rule is to be frozen for the beta (E.D.). Previously scattered across DP-20, DP-32 and DP-07."
relatedDPs:
  - "DP-20"
  - "DP-32"
  - "DP-07"
---

*Declared on 17 November 2026: built before it had a development project.*

Three answers about each unit — how long it lasted, what it is, who says so — gathered in one place. On Templu Mare v10 the new life rule changes the end of 47 units; 28 units have a description that only repeats their definition.

Evidence: s3Dgraphy `unit_life.py`, `definition.py`, `attribution.py`, `person_name.py` (1df693d, fd86ac3, e91ad6c); report `2026-11-17-REPORT-definizione-e-passi`.
