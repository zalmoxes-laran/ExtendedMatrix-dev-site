---
id: "DP-52"
title: "Document Wrapping of Graphs and Subgraphs"
cat: "research"
impacts:
  - "s3d"
  - "config"
status: "research"
statusLabel: "Research"
targetVersion: "1.7"
incorporated: null
embargo: false
desc: "Formalize the DocumentNode's capacity to wrap non-traditional entities (US, subgraphs, external graphs) for comparative reuse and cumulative reconstruction."
components:
  - "Design document mapping use cases and technical choices"
  - "Formalism extension: new edge types and document-wrapper properties to distinguish traditional wrapping from structural embedding"
  - "Proof of concept on a simple case (e.g. embedding a single US from an external graph) before generalizing"
  - "Granularity policy (single node vs coherent subgraph vs entire graph)"
  - "Trans-graph identity model (shared document vs independent snapshot)"
  - "Versioning policy (live link vs frozen snapshot)"
  - "Relationship with DP-10 multigraph (same inter-graph space, different semantics)"
  - "Transitive paradata model across the wrapping edge"
thesis: true
stratigraph: false
keyStudy: "Needed"
notes: "Research-only for v1.6 — parallel line, documented but not operational, to mature on real use cases. Related: DP-07 (Document Node as Spatio-Temporal Entity), DP-10 (Multigraph), DP-32 (Propagative Metadata)."
---

In the EM formalism the DocumentNode is always a functional wrapper: elevating any entity to document status makes it operationalizable for information extraction via Extractor nodes. There is no distinction between 'document' and 'document-wrapper' — wrapping is intrinsic to the document node. This research track explores and formalizes the DocumentNode's ability to wrap non-traditional entities — specifically stratigraphic units, portions of EM graphs, or entire external stratigraphic graphs — so that whole cultural patterns and reconstructive chains can become the *source* of new reasoning. Use cases include cross-site comparisons (a photogrammetrically-surveyed capital from another graph used as a source for hypothesizing a capital in the current graph), embedding of cultural patterns (a typical constructive sequence wrapped as a comparative template), and self-reuse (extracting information from one's own prior graphs as a source for a new reconstruction). Open technical issues to resolve: granularity of embedding (single node vs coherent subgraph vs entire graph — likely node / subgraph), trans-graph identity (the same external node wrapped in multiple graphs: shared document vs independent snapshots, each with pros and cons), versioning behaviour (what happens to the wrapper if the source graph changes: automatic propagation, notification, frozen snapshot), and disentanglement from the multigraph line of work (DP-10) which addresses different inter-graph relations. Broader significance: this formalizes a mechanism of *structural citation* between reconstructive graphs — analogous to bibliographic citation but with richer semantics (traceable attribution lineage, transitive paradata across the citation edge). Epistemologically it grounds reconstructive knowledge as compositional: graphs lean on other graphs in a cumulative network, and the quality of a downstream reconstruction inherits traceably from the quality of its upstream formalized sources. This reinforces reconstruction as an autonomous discipline with formalized knowledge transfer. Target is EM 1.7 or later — deliberately kept out of 1.6 to avoid adoption confusion with the new three-axis document classification (role / content_nature / geometry) landing there. To be matured against real use cases as they emerge in practice.
