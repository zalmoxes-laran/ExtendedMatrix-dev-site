---
id: "DP-104"
title: "Language of the data & translations"
cat: "core"
impacts:
  - "s3d"
  - "emstudio"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Every text knows its language (guessed when not said); a translation is a node of its own, a witness revised from the original."
components:
  - "data.lang and automatic recognition"
  - "Translation as a node (was_revision_of)"
  - "Translation tools in EMStudio"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built; widens DP-63."
relatedDPs:
  - "DP-63"
---

*Declared on 17 November 2026: built before it had a development project.*

A description written in Italian and its English version are two testimonies, not two fields: the translation keeps its author and its date.

Evidence: s3Dgraphy `language.py`, `translation.py` (1 Oct 2026); EMStudio `translation*.ts`, `lang-guess.ts`; report `2026-10-27-MICRO-la-lingua-dei-dati`.
