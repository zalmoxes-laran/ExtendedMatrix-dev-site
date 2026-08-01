---
id: "DP-78"
title: "Switchable Clustering in the EM Graph Editor"
cat: "core"
impacts:
  - "emtools"
  - "yed"
  - "s3d"
status: "concept"
statusLabel: "Concept"
targetVersion: "1.7"
incorporated: null
embargo: false
desc: "A future EM graph editor lets the user switch the active visual clustering register — excavation/location vs activity vs time — rendering one folder register at a time, while the graph keeps all memberships as nodes + edges. Resolves the yEd no-overlapping-folders limitation that makes activity and excavation clusters collide."
components:
  - "Multiple orthogonal grouping registers coexist as data: ActivityNodeGroup (intention), LocationNodeGroup (excavation/space, DP-65/DP-43), EpochNode (time), ParadataNodeGroup (DP-60/DP-19)"
  - "Editor toggle to choose which register is rendered as folders/containers at a time"
  - "Non-active registers stay as nodes + edges (is_in_activity / is_in_location / epoch edges), not drawn as folders"
  - "Core/yEd constraint: only ONE folder register at a time (yEd cannot draw overlapping group folders)"
  - "Layout recompute on register switch; graph data unchanged across switches"
thesis: false
stratigraph: true
keyStudy: "Needed"
relatedDPs:
  - "DP-43"
  - "DP-60"
  - "DP-19"
  - "DP-65"
  - "DP-36"
draft: false
---

Extended Matrix has several **orthogonal grouping registers** that all want to "contain" the same stratigraphic units: **activity** (intention — e.g. "construction of the villa's external portico"), **excavation / location** (space — e.g. "saggio 1" / "saggio 2", the `LocationNodeGroup` of DP-65 / DP-43), **time** (`EpochNode` swimlanes), and **paradata** (DP-60 per-US / DP-19 swimlane). These registers are genuinely independent: the remains of a single activity are routinely dispersed across several excavation areas, so an activity cluster and an excavation cluster **intersect**.

yEd — the current EM authoring surface — cannot draw **overlapping group folders**: a node lives in at most one folder. So the registers cannot all be rendered as folders at once; forcing two (e.g. activity folders + excavation folders) produces a collision. For this reason EM **core**, while bound to yEd, keeps a **single** folder register (activity) and represents the others as **nodes + edges** (`is_in_location`, `is_in_activity`, epoch edges) — never dropping the data, only the competing folder rendering. (This is why the shared exporter should serialize `LocationNodeGroup` as node + `is_in_location`, not as a second folder layer.)

The future **EM graph editor** removes the constraint: the user picks which register is the **active visual clustering** (excavation/location ↔ activity ↔ time), and the editor renders that register as folders / containers while the others stay as edges — switchable on demand, with a layout recompute. The graph data is unchanged across switches (all memberships always present as nodes + edges); only the *view* changes. This decouples the EM data model (multi-register, m:n) from the single-register limitation of any one drawing surface.

Originating discussion: collision between excavation (`saggio`) clustering and activity clustering when one activity's remains span multiple saggi.
