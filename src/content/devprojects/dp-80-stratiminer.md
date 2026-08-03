---
id: "DP-80"
title: "StratiMiner — assisted graph creation from data"
cat: "extension"
impacts:
  - "s3d"
  - "emstudio"
  - "emtools"
  - "config"
status: "idea"
statusLabel: "Design — porting out of EMTools"
targetVersion: "2.0"
incorporated: null
embargo: false
draft: true
desc: "StratiMiner turns disorganised source data in folders into an Extended Matrix graph, through a canonical intermediate table (em_data.xlsx, five typed sheets) that becomes em.json. The intermediate sheet is deliberate: an AI writes a canonical table far more reliably than it writes a graph directly, and the table is inspectable before it is turned into a graph. Two guaranteed paths reach the same place — (A) folder → em_data.xlsx via an API/LLM call, (B) folder → an extraction prompt the author runs in an external assisted session — and both converge on a single field: the path to em_data.xlsx, which a deterministic importer (s3Dgraphy UnifiedXLSXImporter) transforms into em.json. StratiMiner currently lives in EMTools (a Blender modelling addon), which is the wrong home: the pipeline is data → sheet → em.json, not 3D modelling. This DP ports it out — pure logic into s3Dgraphy, the assisted-authoring UI into EMStudio — reusing the provider-neutral LLM seam with a heavier, frontier-class model for the extraction step."
components:
  - "**The canonical intermediate: `em_data.xlsx` (five typed sheets).** The unified schema that replaced the legacy two-step (stratigraphy.xlsx + em_paradata.xlsx). It is the contract between the messy sources and the graph: standardised, canonical, human-inspectable. The AI's job stops here — it never writes the graph, only this table."
  - "**Two guaranteed paths, one convergence point.** *Path A (API):* the folder is handed to the LLM seam (a frontier-class model), which produces em_data.xlsx and pre-fills the path field. *Path B (assisted):* EMStudio builds the extraction prompt (the v5.4 five-sheet prompt) from the folder and hands it to the author, who runs it in an external assisted session and saves em_data.xlsx by hand. Both paths end at the same field — the path to em_data.xlsx — and the same deterministic step: `UnifiedXLSXImporter` → em.json."
  - "**Deterministic table → graph.** em_data.xlsx → em.json is the existing s3Dgraphy `UnifiedXLSXImporter`, reused unchanged. This is the guardrail: the AI produces an inspectable table; a deterministic importer produces the graph. Canonisation stays verifiable before it becomes stratigraphy."
  - "**Porting out of EMTools.** `operators/stratiminer.py` (copy_prompt + import_em_data) and the xlsx wizard leave EMTools; the pure logic (prompt builder + import) moves to s3Dgraphy `api`, the assisted-authoring UI to EMStudio. EMTools returns to being the 3D modelling tool. Removal from EMTools follows validation of the EMStudio port."
  - "**Frontier-model, per-task.** Extraction is harder than narrative prose — it wants a more robust model. The provider-neutral LLM seam (see the EM Narrative AI layer) already supports this: add a heavier adapter and select the model per task (light for prose, heavy for StratiMiner), with local adapters possible for data sovereignty."
thesis: false
stratigraph: true
keyStudy: "Existing EMTools StratiMiner (em_data.xlsx unified flow, five typed sheets) proves the pipeline; s3Dgraphy's UnifiedXLSXImporter proves the deterministic table→graph step. What this DP adds is the correct home (s3Dgraphy + EMStudio, not EMTools) and Path A (API-automated folder→table) alongside the existing Path B (prompt-for-external-session)."
notes: "Decision (E.D., 2026-08-03): port StratiMiner out of EMTools entirely — it is data→sheet→em.json, resident in the StratiGraph/s3Dgraphy world, not Blender modelling. Two paletti: (1) the two paths are explicit, not a black box; (2) the AI never writes the graph — only the inspectable em_data.xlsx — and the table→graph step is deterministic. UI placement: an 'assisted graph creation' surface in EMStudio. The frontier-model need reuses the provider-neutral LLM seam (per-task model selection; local adapters for sovereignty). First step: SM1 (EMStudio port + s3Dgraphy api.import_em_data + prompt builder), keeping StratiMiner in EMTools until validated. Draft/hidden until E.D. unhides. Cross-refs: DP-79 (EM Narrative — same LLM seam, same generate→validate discipline), DP-63 (multilingual — em_data can be authored in any language), the acquisition-seam / Shelf work (sources of the folder data)."
relatedDPs:
  - "DP-79"
  - "DP-63"
---

Extended Matrix has always started from data an archaeologist already has — a folder of PDFs, spreadsheets, notes, scattered and inconsistent — and the hardest, most manual part of the method has been turning that pile into the first structured artefact from which a graph can grow. **StratiMiner** is the tool for that first mile, and this DP does two things to it: it puts it in the right place, and it gives it a fully assisted path.

The design rests on a deliberate intermediate. StratiMiner does not ask an AI to write a stratigraphic graph from a folder — that is brittle and unverifiable. It asks for a **canonical table**, `em_data.xlsx`, five typed sheets that standardise the messy sources into the shape the Extended Matrix expects. An AI writes such a table far more reliably than it writes a graph, and — crucially — the table can be **read and corrected by a human before it becomes stratigraphy**. Only then does a deterministic importer, s3Dgraphy's `UnifiedXLSXImporter`, turn `em_data.xlsx` into `em.json`. The AI produces something inspectable; the machine produces the graph. That split is the guardrail.

There are **two guaranteed paths** into the intermediate, and they converge on one point. Path A is automated: the folder is handed to the language-model seam — a frontier-class model, because extraction is harder than prose — which produces `em_data.xlsx` and pre-fills the path field. Path B is assisted-external: the tool builds the extraction prompt from the folder and hands it to the author, who runs it in an external assisted session and saves the table by hand. Both paths end at the same field, *the path to `em_data.xlsx`*, and the same deterministic transform into `em.json`. Neither path lets the AI touch the graph; both keep the canonical table as the checkpoint.

The second change is where StratiMiner lives. Today it sits inside EMTools, the Blender modelling addon — the wrong home, because the pipeline is *data → sheet → em.json* and has nothing to do with 3D modelling. This DP ports it out: the pure logic (the prompt builder and the import) into s3Dgraphy's access API, the assisted-authoring surface into EMStudio, where creating a graph from data belongs next to editing it. EMTools goes back to being the modelling tool. The frontier-model need is not a new dependency but a use of the provider-neutral seam already built for the EM Narrative: add a heavier adapter, select the model per task, and — for a project that will handle sensitive material — allow local adapters for data sovereignty. StratiMiner and the narrative thus share one discipline: an AI proposes, a human validates, and the graph records who did which.
