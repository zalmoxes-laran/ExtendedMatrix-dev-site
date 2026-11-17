---
id: "DP-74"
title: "RM temporal validity (start/end) with paradata + RM Manager editing"
cat: "core"
impacts:
  - "s3d"
  - "emtools"
  - "config"
status: "partial"
statusLabel: "Partial — fields built, paradata justification missing"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "Make a Representation Model's validity delta [start, end] first-class and paradata-justifiable — e.g. 'this photogrammetric model represents the site from 2016 until the 2018 earthquake' — beyond the current has_first_epoch + survive_in_epoch membership, and make it editable in the RM Manager."
components:
  - "s3Dgraphy: start/end of an RM's representation-validity as first-class, with paradata chains that justify each boundary (why the RM starts/stops being the valid representation), on top of the existing has_first_epoch (start) + survive_in_epoch (range)"
  - "The boundary justification reuses EM's paradata machinery (extractor/combiner chains) — EM's strength is exactly here"
  - "RM Manager (EMTools): UI to view and edit start/end validity and attach/inspect the justifying paradata"
  - "Export: the validity delta + its paradata travel with the RM"
thesis: true
stratigraph: true
keyStudy: "Needed (a site with a datable change — e.g. an earthquake)"
notes: "In 1.6 (E.D., 17 Nov 2026): acquired / valid_until on representations, documents and containers are built (datamodel 1.6.48, Inspector); to add the paradata that justify them and readers that hide expired models (Space, epochs, Heriverse). Editing in the EM Tools RM Manager is a 1.7 tail."
relatedDPs:
  - "DP-12"
  - "DP-20"
  - "DP-30"
  - "DP-47"
  - "DP-75"
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** test on a real case — the Templu Mare surveys of 2013, 2015 and 2016 against the dates of the documents.

**Overlap:** DP-07 holds the document side of the same time gap.

*Original project description:*

A Representation Model represents a real or reconstructed state over a span of time — a photogrammetric scan of March 2016 is the best representation of the site from 2016 until, say, an earthquake changes it in 2018. Today that span is only *implicit*: an RM carries `has_first_epoch` (its start) and `survive_in_epoch` (the later epochs through which it survives), but there is no first-class, justified **[start, end]** and no record of *why* the representation stops being valid at a given moment.

DP-74 makes the validity delta first-class and, crucially, **paradata-justifiable**: the start and the end of an RM's validity become boundaries an author can defend with a paradata chain (the 2018 earthquake, a demolition, a rebuild), exactly the kind of source-based reasoning EM is strongest at. The RM Manager gains the UI to set and edit these boundaries and to attach or inspect the justifying paradata.

This is also where the 3D layer meets the editing experience: editing an RM's temporal validity, its transform and its paradata is the concrete case that motivates making the 3D-node part editable from EMStudio (DP-75), rather than only from Blender.
