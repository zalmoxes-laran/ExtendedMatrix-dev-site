---
id: "DP-57"
title: "Zenodo automation: push & retrieve with custom EM metadata"
cat: "infra"
impacts:
  - "emtools"
  - "s3d"
  - "heriverse"
status: "planned"
statusLabel: "Planned"
targetVersion: "1.7"
incorporated: null
embargo: false
desc: "Automate publishing of EM datasets, examples and case studies to the EM Zenodo community, with a custom metadata system that lets EM-aware tools search and retrieve them. Closes the loop between authoring (EMtools / Heriverse) and FAIR data deposit."
components:
  - "em_metadata.json schema (versioned, in s3Dgraphy)"
  - "EMtools 'Publish to Zenodo' operator (Export Manager → new tab)"
  - "Heriverse 'Publish scene' button (collaborative-mode export)"
  - "Zenodo REST API client in s3Dgraphy (push + retrieve)"
  - "Discoverer service (CLI + HTTP) with faceted search over em_metadata.json"
  - "EMtools 'Browse Zenodo' panel — paginated list, filters, one-click install"
  - "Heriverse 'Open from Zenodo' entry point on the public scene gallery"
  - "GitHub Action that publishes example datasets on tag (EXAMPLES_EM_AI_WORKFLOW repo)"
  - "Zenodo service-token slot in DP-59 auth registry (OAuth user flow factored out)"
  - "Schema migration helpers (em_metadata v1 → v2 → ...)"
thesis: true
stratigraph: true
keyStudy: "Needed"
notes: "Lives at the intersection of FAIR data principles and the StratiGraph EU project's ECCCH connector workstream. The custom metadata layer is what makes EM datasets first-class searchable in a heritage-domain-aware way — Zenodo's vanilla schema is too generic. Coordinates with the CIDOC-CRM alignment work: each em_metadata.json carries the CRM mapping version it was generated under, so a future ECCCH harvester can produce CRM triples on the fly from the deposited bundle. Public surface on the new website (extendedmatrix.org) shows the live Zenodo community feed and a search box that talks to the discoverer service. OAuth user flow factored out to DP-59 (ORCID Authentication & Identity Layer): DP-57 consumes DP-59's per-service token registry instead of carrying its own auth code; CI/headless deposits keep working via env-var bypass exposed by DP-59."
---

The EM Zenodo community (https://zenodo.org/communities/extendedmatrix) is the canonical landing place for EM datasets, training material, case-study GraphML, paradata bundles, and reference reconstructions. DP-57 turns it from a manual deposit area into a programmable infrastructure with two directions of automation. (1) PUSH side. EMtools and Heriverse expose a one-click 'Publish to Zenodo' operator that packages the project (graphml + DosCo + scene snapshot + Heriverse JSON) and uploads it to the EM community via the Zenodo REST API, attaching a EM-specific metadata file (em_metadata.json) alongside Zenodo's standard fields. The custom metadata captures EM-domain attributes that Zenodo's vanilla schema cannot: site code, period coverage, stratigraphic typology coverage (which US/USV/USD/SF/TSU types are present), epoch range, paradata-chain coverage statistics, CIDOC-CRM mapping version, language version (EM 1.5 / 1.6 / ...), licence and embargo. (2) RETRIEVE side. A discoverer service (CLI + HTTP endpoint) reads the EM Zenodo community via the same API, indexes the em_metadata.json files, and exposes a faceted search ('all sites with TSU records, EM 1.5+, CC-BY, Roman period, with proxy meshes attached'). EMtools and Heriverse offer a Browse Zenodo panel that talks to this service and downloads + installs example projects in one click — turning Zenodo into a project-template marketplace inside the addon. A reference em_metadata.json schema ships with s3Dgraphy and is versioned; older deposits carry their schema version and the discoverer migrates them on the fly. The whole pipeline is OAuth-based on the user side (each researcher uploads with their own Zenodo token) and CI-runnable (GitHub Action pushes example datasets from the EXAMPLES_EM_AI_WORKFLOW repo on tag).
