---
id: "DP-72"
title: "Functional Units (component aggregation)"
cat: "core"
impacts:
  - "s3d"
  - "config"
  - "yed"
  - "emtools"
status: "partial"
statusLabel: "Partial — data and sheet built"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "A typed aggregation node — a functional/architectural unit (e.g. a column) that groups the stratigraphic units (US) composing it. The bottom-up, stratigraphic way to expose an architectural-component view of an EM graph. Built on the Container Nodes (DP-36) infrastructure; distinct from the Activity group node (DP-43) and from generic containers. References a geometry-type taxonomy (bSDD / Getty AAT / HBIM shape-grammar vocabulary) rather than internalizing any geometric construction grammar."
components:
  - "s3Dgraphy Functional Unit node type — additive to the datamodel via the categorized sections + registry regeneration (procedure), with a concise scope_note + attach rules. First deliverable, Claude Code."
  - "Distinct semantics: NOT a generic Container (DP-36) and NOT an Activity group (DP-43, action/process). A Functional Unit is a *structural/componential* aggregation — 'the column made of its US'."
  - "Bottom-up: aggregates existing US (from the stratigraphic realization) into a recognisable component, keeping the individual US intact and fully stratigraphic underneath."
  - "Geometry type by reference to a taxonomy (bSDD / Getty AAT / HBIM shape-grammar vocabulary); the Functional Unit does NOT internalize the geometric construction grammar (that stays with the modeller / OpenBIM at export)."
  - "Consumption (later): EMTools — create a Functional Unit, assign US to it, filter/see the graph 'by functional unit'; reuse the Container Nodes filtering axis (DP-36). Then the other tools (EMStudio, Heriverse)."
  - "Interop: the Functional Unit is the natural anchor for projecting an EM graph to architectural-component vocabularies in the s3Dgraphy CIDOC/target-ontology mapping, letting an EM graph also speak the architectural-component view."
thesis: true
stratigraph: true
keyStudy: "Needed (architectural case — Basilica Iulia-like)"
notes: "In 1.6 (E.D., 17 Nov 2026): the data (Functional Unit group, is_in_functional_unit) and the ICCD sheet are built; to add an «assign to FU» action and a FU filter in EMStudio, and EM Tools support. The merged proxy and the cross-epoch view are DP-77 (1.7)."
relatedDPs:
  - "DP-36"
  - "DP-43"
  - "DP-30"
  - "DP-31"
  - "DP-27"
  - "DP-47"
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** test on a real case — a column or a wall made of several units, with a check of the RDF export.

*Original project description:*

A **Functional Unit** is a typed aggregation node that groups the stratigraphic units (US) which together make up a recognisable functional/architectural component — the *column* made of its US, a *wall* made of its US. It answers a need the stratigraphic reading alone does not: to handle, name and reason about a component as a whole, while keeping the individual US underneath intact and fully stratigraphic.

It is deliberately **distinct from two existing constructs**. It is not a generic **Container Node** (DP-36), which groups stratigraphic-family nodes into an arbitrary logical bundle (e.g. anastylosis fragments); and it is not an **Activity group node** (DP-43), which clusters *actions/processes*. A Functional Unit is a *structural/componential* aggregation: what a set of US *is*, as a building component, not how it was acted upon or when. It is built on the same container/group infrastructure those DPs shipped, reusing their filtering axis and GraphML round-trip rather than inventing a parallel mechanism.

The Functional Unit is also the natural **anchor for an architectural-component view** of an EM graph. Where architectural approaches decompose a building *top-down* by typological identity into component elements, EM builds the same "component" node *bottom-up* from its US. The two meet at the component: under the Functional Unit, EM keeps the stratigraphic, temporal, provenance-bearing US; alongside it, the s3Dgraphy CIDOC mapping can project the node to architectural-component vocabularies, so an EM graph can also speak the architectural view. Geometry type is carried by **reference to a taxonomy** (bSDD / Getty AAT, or an HBIM shape-grammar vocabulary), not by internalising the geometric construction grammar — that stays with the modeller and with OpenBIM at export time, where the model is simulated (solar, static) to *study* the ancient project, not to *validate* it.

Build order: the s3Dgraphy datamodel node type comes first (a small, additive session), then EMTools consumes it (create a Functional Unit, assign US, filter the graph by functional unit), and finally the other tools.
