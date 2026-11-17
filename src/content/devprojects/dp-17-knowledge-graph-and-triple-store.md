---
id: "DP-17"
title: "Knowledge Graph & Triple Store"
cat: "infra"
impacts:
  - "s3d"
status: "partial"
statusLabel: "Partial — RDF/TTL both ways built, SPARQL endpoint to build"
targetVersion: "1.6"
incorporated: null
embargo: false
embargoNotes: "Core infrastructure for KG vision. CIDOC-CRM mappings done. RDF/TTL and Neo4j exports planned in s3Dgraphy roadmap."
desc: "s3Dgraphy to triple store / knowledge graph connector and database backend. RDF/TTL and Neo4j export planned."
components:
  - "s3Dgraphy export/import"
  - "RDF mapping"
  - "SPARQL"
  - "Database backend"
  - "RDF schema"
  - "CIDOC-CRM edge mappings (done in s3Dgraphy)"
  - "RDF/TTL export (planned)"
  - "Neo4j export (planned)"
thesis: true
stratigraph: true
keyStudy: "Basilica"
notes: "In 1.6 (E.D., 17 Nov 2026): RDF/TTL import and export, built and tested, and a SPARQL endpoint on a triple store — the July 2026 decision «TTL now, Virtuoso later» is superseded. Neo4j is not planned."
---

<!-- MICRO-O 2026-11-17 -->
**Thesis line:** use — load the Basilica Iulia TTL into a triple store and write CIDOC/CRMarchaeo queries.

*Original project description:*

Connector between s3Dgraphy and triple store / knowledge graph backends (Blaze, Grapho, etc.). Includes triple store database for holistic archaeology and cultural heritage documentation. Covers RDF mapping, SPARQL queries, and database schema. s3Dgraphy already has CIDOC-CRM mappings for all edge types (v1.5.4). Planned in s3Dgraphy roadmap: RDF/TTL export for semantic web compliance, Neo4j export for graph database integration.
