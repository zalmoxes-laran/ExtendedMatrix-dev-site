---
id: "DP-73"
title: "The ancient project as a hypothetical (unrealized) branch"
cat: "core"
impacts:
  - "s3d"
  - "config"
  - "yed"
  - "emtools"
status: "concept"
statusLabel: "Concept"
targetVersion: "1.7"
incorporated: null
embargo: false
desc: "EM reconstructs what was REALIZED. It has no way to state what was DESIGNED but never built — the ancient project. Two candidate homes for it: a dedicated category of Document (the project as a source), or (preferred) a dedicated kind of Time Branch carrying a hypothetical, counterfactual period — 'had they built it, it would have been like this'. The cases that force the question are real: excavated construction sites frozen mid-work, and unexecuted designs (Michelangelo's project for Porta Pia in Rome). Surfaced by DP-72, whose geometry-type reference cannot be given a shape until it is clear whether the component being described belongs to the realized fabric or to the design."
components:
  - "The gap: EM's stratigraphic reading answers *how it was realized*. The architectural-project view studies the *ancient design* — shape and intent, without temporal depth. Today an EM graph has no honest place for a design that was never executed, and no way to keep it separate from the fabric that was."
  - "Candidate A — the project as a DOCUMENT category. The ancient project enters as a particular class of source that reconstruction reasons FROM. Cheap (reuses the Document + Extractor chain) but it flattens the design into evidence: a project that was never built is not documentation of a building, it is a proposition about one."
  - "Candidate B (preferred, E.D.) — a dedicated kind of TIME BRANCH carrying a hypothetical period: the counterfactual 'if they had realized it, it would have been like this'. Sits naturally beside DP-12's alternative chronological interpretations and DP-43's TimeBranch group node, but differs in kind: the other branches are alternative readings of what DID happen, this one is a period that never happened at all. It needs its own marking so no consumer mistakes it for realized fabric."
  - "The two forcing cases. (1) An excavated construction site frozen mid-work: the fabric is real up to a point, and beyond that point there is only intent. (2) An unexecuted design — Michelangelo's project for Porta Pia in Rome — where nothing was built, yet the design is a fully-formed, studiable object."
  - "Consequence for DP-72. The geometry-type reference on a Functional Unit cannot be given a fixed shape until this is settled: describing a component of the REALIZED fabric and describing a component of the DESIGN are two different assertions, and they may not want the same vocabulary (a built column vs a drawn column type). Until then the field stays deliberately free-form."
  - "Guard to keep: EM must not slide into validating the ancient design against modern criteria. BIM/OpenBIM simulation (solar, static) is used AFTER reconstruction to STUDY the ancient project, never to validate it — the ancients did not build by our criteria."
  - "Open: does the hypothetical branch carry its own epochs, or is it explicitly outside the epoch sequence (a period that never was)? How do the DP-12 inter-branch connectors (excludes / concatenates) behave when one endpoint is counterfactual? Does a realized fabric ever 'partially fulfil' a project branch, and is that an edge?"
thesis: false
stratigraph: true
keyStudy: "Needed (Porta Pia, Rome — unexecuted Michelangelo design; plus an excavated construction site frozen mid-work)"
notes: "Raised by E.D. 2026-08-01 while reviewing DP-72 (Functional Units). Verbatim: «dipende da cosa sto ricostruendo: il progetto antico o cosa è stato realizzato. Andrebbe evidenziato con un DP: necessità di formalizzare il progetto antico e usarlo come una particolare categoria di document o fare (meglio) prevedere un particolare tipo di temporal branch che mostra un periodo ipotetico dell'impossibilità (se lo avessero realizzato allora sarebbe stato cosi - nel caso di rinvenimenti trovati come cantieri in costruzione o progetti non realizzati di michelangelo - esempio di porta pia a roma).» Preference stated for the time-branch route over the document route. Blocks the field-shape decision for DP-72's geometry_type_ref."
relatedDPs:
  - "DP-72"
  - "DP-12"
  - "DP-43"
  - "DP-52"
---

EM reconstructs **what was realized**. Its whole apparatus — stratigraphic units, epochs, the reasoning chain from sources to assertions — is built to say how a thing came to be, and with what degree of confidence. It has no honest place for what was **designed and never built**.

That absence becomes visible as soon as a graph tries to speak the architectural view. The architectural-project reading studies the *ancient design*: shape and intent, without temporal depth. The stratigraphic reading studies the realization. A Functional Unit (DP-72) names a component — but a component *of what*? Of the fabric that stands, or of the project that was drawn? The two are different assertions, and the tools have no way to tell them apart.

Two cases force the question, and neither is exotic. An excavated **construction site frozen mid-work** is real fabric up to a point and pure intent beyond it; the interesting statement is precisely about the part that was never built. An **unexecuted design** — Michelangelo's project for Porta Pia — has no fabric at all, yet is a fully-formed object of study, with its own sources, its own reasoning, its own reconstructive geometry.

Two homes are candidates. The project could enter as a **category of Document**: a source the reconstruction reasons from, reusing the existing Document → Extractor chain. It is cheap, and wrong in a specific way — it flattens a design into evidence, when a design that was never built is not documentation of a building but a *proposition about one*. The preferred route is a **dedicated kind of Time Branch** carrying a hypothetical period: *had they realized it, it would have been like this*. It sits beside the alternative chronological interpretations of DP-12 and the TimeBranch group node of DP-43, but it differs in kind — those branches are alternative readings of what did happen, this one is a period that never happened at all, and it must be marked so that no consumer downstream mistakes counterfactual geometry for realized fabric.

One guard travels with this from the start: EM studies the ancient project, it does not validate it. Simulation on the reconstructed model — solar, static, finite-element — comes *after* reconstruction and serves to understand, never to grade. The ancients did not build by our criteria.
