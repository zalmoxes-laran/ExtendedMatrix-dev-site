---
id: "DP-02"
title: "StratiMiner"
cat: "research"
impacts:
  - "s3d"
  - "emtools"
status: "near"
statusLabel: "Near completion"
targetVersion: "1.6"
incorporated: null
embargo: false
embargoNotes: "Prompt workflow operational end-to-end. Standalone tool planned."
desc: "AI tool to extract stratigraphic data from grey literature and PDFs. Absorbs former DP-49 (unified em_data.xlsx supersedes the legacy stratigraphy.xlsx + paradata.xlsx two-file schema)."
components:
  - "v5.4 extraction prompt with three-axis document classification (done)"
  - "em_data_template.xlsx 5-sheet schema (done)"
  - "UnifiedXLSXImporter with ROLE / CONTENT_NATURE / GEOMETRY columns (done)"
  - "UnifiedXLSXExporter round-trip (done)"
  - "Per-claim author/extractor attribution (done)"
  - "GraphMerger extended for paradata layer with conflict resolution (done)"
  - "Diagnostics for AI-induced incoherence — cycles + paradox attribution (done)"
  - "EMtools StratiMiner panel in EM Bridge — prompt / import / merge (done, behind experimental_features in 1.5)"
  - "Validation pass on real DosCo data + publication (planned, 1.6)"
  - "Drop experimental_features gate (planned, 1.6)"
  - "Standalone tool (future)"
thesis: true
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "End-to-end pipeline shipped: prompt → em_data.xlsx → graph → graphml or merge. In 1.5 the StratiMiner panel is gated behind scene.em_tools.experimental_features pending field validation and publication; the gate is dropped in 1.6. Absorbs former DP-49 (Stratigraphy & Paradata XLSX Formalization): the unified em_data.xlsx schema supersedes the legacy stratigraphy.xlsx + paradata.xlsx two-file pipeline."
---

Tool to extract stratigraphic information from grey literature, PDFs, and online sources using AI. s3Dgraphy now provides the full end-to-end pipeline: (1) the v5.4 extraction prompt ships inside the package at s3dgraphy/data/StratiMiner_Extraction_Prompt.md — a single coherent document (no more A/B split) producing one em_data.xlsx with 5 typed sheets: Units, Epochs, Claims (long-table, one row per asserted fact with its own attribution), Authors, Documents. v5.4 teaches the three-axis Master-Document classification (role / content_nature / geometry per DP-07) with a decision sketch; (2) UnifiedXLSXImporter builds the complete graph in a single pass, covering scalar qualia, temporal qualia, epoch membership, stratigraphic relations, three-axis document classification, and per-claim author/extractor attribution with AuthorNode vs AuthorAINode distinction; (3) UnifiedXLSXExporter round-trips a graph back to em_data.xlsx (inverse of the importer, reconstructs the paradata chain); (4) GraphMerger extended to compare + resolve conflicts at the paradata layer (qualia added/changed/attribution_added, author/document/epoch added/changed, relation edge attribution added/changed); (5) diagnostics layer flags AI-induced incoherences — stratigraphic cycles and chronology paradoxes — with per-claim attribution walking the paradata chain (direct has_author → has_data_provenance → Extractor.has_author → paradata-group siblings). EMtools EM Bridge surfaces everything through the StratiMiner panel with two logical blocks (CREATE em_data.xlsx via AI or empty template, USE em_data.xlsx to build a new GraphML or merge into an active one). In 1.5 the panel ships behind scene.em_tools.experimental_features so the feature is visible only to opted-in users while the AI-extraction pipeline is validated on real grey literature; the gate is dropped in 1.6. Legacy two-file stratigraphy+paradata workflow is deprecated but still auto-detected for backward compatibility.
