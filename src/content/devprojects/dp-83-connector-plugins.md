---
id: "DP-83"
title: "Connector Plugins (interoperability contract)"
cat: "infra"
impacts:
  - "s3d"
  - "emstudio"
  - "heriverse"
  - "emtools"
status: "in-dev"
statusLabel: "In development — foundations built & measured; two reference connectors"
targetVersion: "1.6"
incorporated: null
embargo: false
draft: true
desc: "One contract lets any tool interoperate with the Extended Matrix: a connector is an adapter that declares a ConnectorDescriptor and speaks the common wire — em.json, a content-addressed object store, a CRDT — where every write is DTC-attributed. It is the SAME contract as the stratigraph-chatbot tool contract, generalised: one shared core in s3Dgraphy, two consumers (the chatbot's ToolRegistry and EMStudio's ConnectorRegistry). The model rests on two orthogonal axes (collaboration x connectors, giving Standalone / Sidecar / Hub, which compose rather than overlap), a rendezvous ladder (direct = Sidecar, LAN = local Hub, cloud = global Hub — an online Heriverse is a cloud connector), and three shareable layers each with its own reach (document to the room; ephemeral interaction / link-selection to the user's own paired tool, never other users; presence to the room, information only — so the room never lets one user's click drive another's software). Foundations are built and measured: the s3dgraphy.contract core (Descriptor, Registry, invoke returning a DTC-attributed Result, four honest refusals whose words are a parameter), a consumer_drift version handshake, role- and author-gated writes, volatile-until-baked ingest. Two reference connectors exist: Blender (bidirectional, app-side, guarded) and a Heriverse consumer (read-only, cloud, dissemination — served, not writing)."
components:
  - "**One contract, two consumers.** The interoperability surface is a single core in s3Dgraphy (`s3dgraphy.contract`): a Descriptor, a Registry, an `invoke` that returns a DTC-attributed Result, and four refusals whose wording is a parameter. The stratigraph-chatbot's ToolRegistry and EMStudio's ConnectorRegistry are thin specialisations of it — the same shape whether the caller is a voice tool or a desktop connector."
  - "**Two orthogonal axes, not three modes.** Collaboration (no-room to room) and connectors (no-tool to tool) are independent; their four cells are Standalone, Sidecar, collaborative EMStudio and Hub. Sidecar and Hub are the same connector over two transports; the room is a layer above, and the two compose rather than overlap."
  - "**A rendezvous ladder.** Direct / local = Sidecar (no server); LAN server = local Hub (a Field Computing Node); cloud server = global Hub (ECCCH). An online Heriverse is a connector on the top rung. 'The network in between' is just which rung the rendezvous sits on."
  - "**Three shareable layers, three reaches.** The document (graph / asset / DTC) travels on the CRDT with room reach; ephemeral interaction (selection, camera, `link-selection`) travels on an ephemeral channel with USER reach — it links your EMStudio to your own paired tool, never to other users; presence has room reach but is information only. The room never lets one user's click drive another user's software."
  - "**Capabilities as a closed set** — a capability is the thing a UI draws an affordance from: document `read-graph / write-graph / subscribe`; interaction `link-selection / presence`; asset `attach-asset / resolve-asset / resolve-preview / materialize-3D / publish-3D`; ingest `ingest-batch`; semantic `resolve-uri`. Adding one is data, not a new framework."
  - "**Version handshake (`consumer_drift`).** A connector announces the em.json / datamodel / connector-API versions it speaks; a mismatch is an honest refusal ('speaks datamodel 1.6.2, current is 1.6.11 — update it'), not a silent break."
  - "**Reference connectors.** Blender (EM Tools) is connector #1 — app-side, bidirectional, guarded (adopt / materialise / publish). A Heriverse consumer is the read-only, cloud, dissemination half — the published graph is *served*, with rights (embargo, licence) enforced at the door and identically to the HTTP gate. Next candidates: Tropy import, PyArchInit bidirectional, Aïoli, FBK."
thesis: false
stratigraph: true
keyStudy: "Templu Mare (EMStudio) and the stratigraph-chatbot field assistant — the two consumers that proved one contract holds across a desktop editor and a voice tool."
notes: "Design note: EM_design_connector-plugins.md. Foundations measured 2026-08-21 (core + Blender reference #1) and the Heriverse consumer measured 2026-08-22 (32 live checks on the dev stack: a consumer enters as viewer, reads the published graph, is refused when it tries to write, resolves assets by sha256 with the licence header, and is refused with the embargo date — the seam and the server giving the same answer on the same document). One real gap found by measuring: a consumer cannot yet announce its descriptor inside a room (the relay does not forward host_info between clients); the smallest fix is a field on the presence member in em-server, not a new channel. Cross-refs: DP-76 (Heriverse exporter unification), DP-38 (Tropy import), DP-37 (Chronontology connector), DP-59 (ORCID identity / attributed writes), DP-11 (Heriverse), DP-75 (EMStudio 3D via ATON/Heriverse), DP-17 (KG / triple store)."
relatedDPs:
  - "DP-76"
  - "DP-38"
  - "DP-37"
  - "DP-59"
  - "DP-11"
  - "DP-75"
  - "DP-17"
---

For a decade Extended Matrix has grown tool by tool — a Blender add-on, a web
editor, a 3D viewer, a field assistant — and each new pairing risked becoming a
bespoke bridge that agreed with its neighbour today and diverged on the first
refusal somebody added to one side. DP-83 replaces those bridges with **one
contract**. A connector is an adapter that declares a **ConnectorDescriptor** and
speaks the common wire — em.json, a content-addressed object store, a CRDT — and
every write it makes is **DTC-attributed**. Nothing about a tool's internals is
shared; only the descriptor and a thin adapter are.

The decisive move is that this is not a new contract at all: it is the **same
shape** the stratigraph-chatbot already used for its tools (a tool declares what
it answers, what it needs and what it changes), generalised so that a *connector*
and a *tool* are two readings of one core. That core lives once in s3Dgraphy —
`Descriptor`, `Registry`, an `invoke` that returns a DTC-attributed `Result`, and
four refusals whose exact words are a parameter — and it has two consumers: the
chatbot's `ToolRegistry` and EMStudio's `ConnectorRegistry`. Writing it twice
would have produced two contracts destined to drift; writing it once makes
interoperability a property of the system rather than of a diligent adapter.

Three clarifications hold the architecture together. **Two orthogonal axes**, not
three modes: collaboration (in a room or not) and connectors (a tool attached or
not) are independent, and their combinations — Standalone, Sidecar, collaborative
EMStudio, Hub — *compose* rather than overlap. A **rendezvous ladder** describes
where the meeting happens: direct on one machine (Sidecar), on a LAN server (a
local Hub, the Field Computing Node), or in the cloud (a global Hub, ECCCH) — an
online Heriverse is simply a connector on the top rung. And **three shareable
layers, three reaches**: the document travels on the CRDT and reaches the whole
room; ephemeral interaction (a selection, a camera move, `link-selection`)
travels on an ephemeral channel and reaches only the user's *own* paired tool;
presence reaches the room but carries information only. The room never lets one
user's click drive another user's software — that is the Sidecar link, confined
to one person's rendezvous.

Foundations are built and measured. The core enforces its refusals (an
undeclared capability, a write with no author, a datamodel that has drifted); a
`consumer_drift` handshake turns a version mismatch into an honest sentence
rather than a silent break; role and authorship gate every write; and an ingest
stays **volatile until a person bakes it**, so a batch that arrived is a proposal,
not yet a fact about the study. Two reference connectors exercise the two
directions: **Blender** (EM Tools) writes into the graph, guarded; a **Heriverse
consumer** reads it, served — entering as a viewer, receiving the published
graph, refused when it tries to write, resolving assets by digest with their
licence, and refused with the embargo date, the seam and the server giving the
same answer on the same document. The remaining candidates — Tropy, PyArchInit,
Aïoli, FBK — are each a descriptor and a thin adapter on this same base.

See the design note `EM_design_connector-plugins.md` for the full model.
