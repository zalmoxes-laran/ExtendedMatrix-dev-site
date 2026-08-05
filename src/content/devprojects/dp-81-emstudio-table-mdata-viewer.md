---
id: "DP-81"
title: "EMStudio Table / EEM-Data viewer"
cat: "extension"
impacts:
  - "emstudio"
  - "s3d"
  - "config"
status: "idea"
statusLabel: "Design sketch — tabular views + EM-Data over the graph"
targetVersion: "2.0"
incorporated: null
embargo: false
draft: true
desc: "A dockable, full-width tabular viewer at the bottom of EMStudio that turns the graph into editable tables. Two levels: simple graph-views (e.g. a Stratigraphic-Unit table — id / type / description / epoch — with record selection, in-place editing and two-way propagation to em.json, exactly like the Inspector but tabular and bulk), and EM-Data — the powerful multi-table mapping of the whole Extended Matrix, including every assertion WITH its provenance. Crucially EM-Data is not a new data model: it is a live, editable view over the SAME five-sheet em_data structure that StratiMiner already produces (Units / Epochs / Claims / Authors / Documents — the canonical xlsx→em.json intermediate), so the viewer, the AI-generated table (StratiMiner path A) and the imported spreadsheet are one thing seen three ways. Auxiliary files (DP-ET/AUX, often tables) surface inside EM-Data too, marked in a distinct colour because their content is not yet baked into the graph — the same volatile/baked distinction the resource layer already carries. The dock is full-width UNDER the side wings (which shorten to sit above it), resizable from its top edge, collapsible to a thin bar, with a table selector. The result: inspect and edit the graph as data, review and correct AI-authored tables, and peek into un-baked auxiliaries, without leaving the canvas."
components:
  - "**Bottom dock, full-width, resizable, closable.** A panel that spans the screen left-to-right UNDER the two side wings (the wings shorten to sit above it); default ~1/3 height, dragged from its top edge, collapsible to a thin bar. A table selector (dropdown / tabs) chooses which table is shown. Screen-space chrome, theme-aware (light/dark)."
  - "**Simple graph-view tables (editable, propagating).** e.g. a Stratigraphic-Unit table: id / type / description / epoch of membership / …; select records, edit cells in place, and PROPAGATE to the graph (two-way binding on em.json, the same mutation path the Inspector uses — checkpoint/undo). Bulk editing is the payoff over the one-node Inspector."
  - "**EM-Data — the five-sheet em_data, live and editable.** EM-Data is a view/editor over the canonical StratiMiner intermediate (`em_data_template.xlsx`): sheets **Units, Epochs, Claims, Authors, Documents**. The **Claims** sheet is the powerful one — TARGET_ID / PROPERTY_TYPE / VALUE / UNITS / COMBINER_REASONING / (EXTRACTOR, DOCUMENT, AUTHOR, AUTHOR_KIND)×n — i.e. every assertion WITH its full paradata provenance chain (US → property → combiner → extractor → document → author). Fully editable, propagating to em.json (deterministic uuid5 keys, as UnifiedXLSXImporter already does)."
  - "**One structure, three views.** The graph-as-tables, the AI-generated table (StratiMiner path A: the model writes ONLY the table, the bridge materialises the workbook), and an imported/edited xlsx are the SAME em_data seen three ways. EM-Data is therefore also the human-validation surface for AI output — the moat: generate → review-in-table → propagate."
  - "**Auxiliary data is VOLATILE-but-VISIBLE (refined 2026-08-05).** An auxiliary file's mapping loads its info INTO the s3dgraphy graph (in memory), so it is visible BOTH in the graph (the graph shows everything, volatiles included) AND in the EM-Data table — but marked as volatile (e.g. **blue font / distinct colour**) because it is not yet baked into em.json. Volatile ≠ hidden: it is shown everywhere, flagged, and simply not persisted on save until an explicit **bake** promotes it. This is the corrected volatile model (supersedes 'aux invisible until baked')."
  - "**All EMtools auxiliary types (parity).** EMStudio's auxiliary section must offer ALL the element types EMtools exposes: emdb_xlsx, pyarchinit, dosco, source_list, resource_collection. The xlsx types carry a POWERFUL mapping system (the s3Dgraphy mappings registry, DP-61) that transforms a spreadsheet into nodes — EMStudio reuses those mappings so an aux xlsx loads into s3dgraphy and appears (volatile) in graph + table."
  - "**source_list.xlsx — sources in EM-Data (merge reflection).** source_list.xlsx (documents/sources for document/extractor/combiner nodes) OVERLAPS the em_data **Documents** sheet. Direction (E.D. 2026-08-05): treat the Documents sheet as the canonical 'sources' table and let source_list.xlsx be an IMPORT path (an auxiliary with its mapping) that maps INTO Documents — one truth, many import routes — rather than a parallel structure. Keep the source_list.xlsx importer (via auxiliary files): it stays important. Open sub-decision: whether to EXTEND the Documents-sheet / DocumentNode schema to absorb source_list's richer bibliographic fields (relates to DP-58), or map a subset."
  - "**Provenance is read-mostly.** The provenance columns (the DTC chain) are shown but edited through their own affordance, not free-typed, so the assertion↔evidence link stays honest."
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "E.D. 2026-08-05: EM-Data fully editable from the start, using em_data.xlsx (StratiMiner deliverable) as the template. Dock UNDER the wings, full width (recommended, confirmed). Phase A = the dock + US table (editable, propagating) + EM-Data over em_data + aux (baked/unbaked colour). Phase B (in DP-82) formalises the central-area MODE and the narrative-from-graph template. This DP deliberately reuses existing truth: em_data 5-sheet structure + UnifiedXLSXImporter (uuid5), StratiMiner path A, the AUX volatile/baked distinction — it is a VIEW with edit-propagation, not a second model. Refinements (E.D. 2026-08-05): the name is EM-Data (it IS em_data, not 'M-Data'); the viewer also manages source_list.xlsx (kept via auxiliary import, mapping into the Documents sheet — reflect on merging sources into em_data); ALL EMtools aux types wanted (emdb_xlsx/pyarchinit/dosco/source_list/resource_collection) with their mapping system; corrected volatile model — mapped aux is VISIBLE in graph AND table, marked volatile (blue font), not persisted until bake."
relatedDPs:
  - "DP-80"
  - "DP-13"
  - "DP-21"
  - "DP-79"
  - "DP-82"
---

## Data Funnel and provenance in EM-Data

EM-Data is where the Data Funnel (DP-32) becomes visible as columns: an assertion's author/licence/embargo
may be explicit on the row or inherited (node → activity → epoch → canvas); the table shows the effective
value and its source, mirroring the badge/`Propagative metadata` split in the canvas. Editing a value at the
row level is a node-scope declaration (it overrides the inherited one), keeping the funnel semantics intact.

## Sequencing

Phase A (freeze-safe): the dock + the simple US table (editable, propagating) + EM-Data over em_data + aux with
the baked/un-baked colour, editable per E.D. Phase B: the central-area MODE enum and narrative-from-graph
template (DP-82). The heavier Blender-like workspace tiling and the US form sheet live in DP-82.
