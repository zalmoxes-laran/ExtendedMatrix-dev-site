---
id: "DP-91"
title: "Bringing a study in («Bring inside…»)"
cat: "tool"
impacts:
  - "s3d"
  - "emstudio"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "A folder of a study enters a room with a standard project tree, documents numbered D.nn, and a date required for every document."
components:
  - "Room import of a folder"
  - "Standard project tree"
  - "Document names D.nn"
  - "Date required at the door; Tropy plan"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built."
relatedDPs:
  - "DP-38"
  - "DP-84"
---

*Declared on 17 November 2026: built before it had a development project.*

The door is where scattered files become a documented study: each document receives a number and a date, or is refused until it has one. Without a date a document cannot stand in its epoch.

Evidence: s3Dgraphy `room_import/`, `project_tree.py`, `door.py` (61d73a9, 16 Nov 2026), `document_names.py`; EMStudio `door.ts`, `ingress.ts`.
