---
id: "DP-90"
title: "Representation container & survey document"
cat: "core"
impacts:
  - "s3d"
  - "emstudio"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "A survey campaign is a document, and its models sit in a container that says when they were acquired; one model may belong to more than one container."
components:
  - "new_document, create_container"
  - "Epoch check of a container"
  - "acquired / valid_until on container and models (datamodel 1.6.48)"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built. Not the same thing as the stratigraphic container of DP-36: a naming note on the three «containers» is pending (E.D.)."
relatedDPs:
  - "DP-36"
  - "DP-74"
  - "DP-07"
---

*Declared on 17 November 2026: built before it had a development project.*

A survey is not timeless: the models of a 2013 campaign show the monument of 2013. The container groups the models of one campaign and carries its date, so the graph can say what each model is a witness of.

Evidence: s3Dgraphy 5d48cfd (13 Nov 2026), f3e37b4 (23 Oct 2026), fd86ac3 (17 Nov 2026).
