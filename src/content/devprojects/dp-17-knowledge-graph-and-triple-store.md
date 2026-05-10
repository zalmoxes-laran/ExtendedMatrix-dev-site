---
id: "DP-17"
title: "Knowledge Graph & Triple Store"
cat: "infra"
impacts:
  - "s3d"
status: "research"
statusLabel: "Research"
targetVersion: "1.7"
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
notes: "Merged from former DP-17 and DP-22. CIDOC-CRM mappings already in s3Dgraphy. Targeted to EM 1.7."
---

Connector between s3Dgraphy and triple store / knowledge graph backends (Blaze, Grapho, etc.). Includes triple store database for holistic archaeology and cultural heritage documentation. Covers RDF mapping, SPARQL queries, and database schema. s3Dgraphy already has CIDOC-CRM mappings for all edge types (v1.5.4). Planned in s3Dgraphy roadmap: RDF/TTL export for semantic web compliance, Neo4j export for graph database integration.
