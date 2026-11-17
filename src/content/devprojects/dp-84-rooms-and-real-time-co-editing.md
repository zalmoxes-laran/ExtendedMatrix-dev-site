---
id: "DP-84"
title: "Rooms & real-time co-editing"
cat: "infra"
impacts:
  - "s3d"
  - "emstudio"
  - "server"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Several people work on the same em.json at the same time, each change attributed and kept: a study lives in a «room» on a StratiGraph node."
components:
  - "Merge with data promoted to a CRDT: tombstones, operation log, presence (s3Dgraphy crdt)"
  - "Rooms on the node: open, join, presence, operation log (stratigraph-server)"
  - "Room client in EMStudio"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Built since August 2026. Declared on the site on 17 Nov 2026 (it had no DP). Missing for the beta: a real multi-user session recorded on a case, user documentation."
relatedDPs:
  - "DP-83"
  - "DP-103"
---

*Declared on 17 November 2026: built before it had a development project.*

A study no longer travels as a file sent by e-mail: it lives in a room, and everyone who joins sees the same graph. Every change is an operation that carries its author; nothing is overwritten in silence, a deletion leaves a trace. This is the backbone of StratiGraph: field, laboratory and office write on the same record.

Evidence: s3Dgraphy `crdt.py` (P4.1, 13 Aug 2026, with the P4.1/P4.2 reports); EMStudio `crdt.ts`, `rooms.ts`; stratigraph-server `rooms.py`, `oplog.py`, `ws.py`, `presence.py`.
