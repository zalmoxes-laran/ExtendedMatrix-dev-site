---
id: "DP-55"
title: "Stratigraphic Unit Creation Workflow Unification"
cat: "tool"
impacts:
  - "emtools"
  - "s3d"
  - "config"
  - "yed"
status: "done"
statusLabel: "Incorporated"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Single shared 'Add Stratigraphic Unit' dialog used by the Stratigraphy Manager, Proxy Box Creator and Surface Areas; JSON-driven US type registry; activity filter by epoch; gap-aware + shared-pool numbering; canonical USN (Negative US) class."
components:
  - "us_helpers.create_us_node factory (done)"
  - "us_types.py facade reading s3Dgraphy classification API (done)"
  - "Shared Add-US floating dialog strat.add_us (done)"
  - "+ Add US toolbar button under the Stratigraphy Manager list with custom proxies_rows_add icon (done)"
  - "Proxy Box Creator Active-US picker + launches the dialog (done)"
  - "Surface Areas Existing-US picker + launches the dialog (done)"
  - "Activity filter by epoch (done, direct populator call from update callback — no silent bpy.ops failures)"
  - "Gap-aware next-number from 1 (done, both per-type and shared-pool modes)"
  - "Shared-numbering default ON (done)"
  - "PREFIX_ALIASES for legacy SU ↔ US, USN ↔ USNEG / US_NEG (done)"
  - "persist_after_create default ON (done)"
  - "Scene-level pending_us_name sentinel (done, cross-operator state sharing)"
  - "NegativeStratigraphicUnit class with USN node_type (done, s3Dgraphy side)"
  - "USN yEd palette node (dashed-border variant) — visual operationalization (1.6 tail)"
  - "GraphML parser handling for USN (1.6 tail)"
  - "End-to-end test of USN authoring path on a real project (1.6 tail)"
  - "Centralised hardcoded US-type lists across 10 files / 15 occurrences (done, fixed three incomplete ones incidentally)"
  - "Field-test validation pass (planned)"
thesis: false
stratigraph: true
keyStudy: "TempluMare"
notes: "Unifies the US creation form across Stratigraphy Manager / Proxy Box Creator (DP-46) / Surface Areas (DP-50). Depends on the s3Dgraphy node datamodel patch to v1.5.2 (additive family + is_series metadata per stratigraphic subtype — EM formalism stays at 1.5, no breaking changes). USN (NegativeStratigraphicUnit) is a real class on the s3Dgraphy side, not a UI-only workaround. 1.6 tail (USN visual operationalization): yEd palette node (dashed-border variant), GraphML parser handling, and end-to-end test on a real project before the 1.6 cut — the s3Dgraphy class is already the operational landing spot; the missing pieces are on the language-visualization side and the end-to-end EMtools authoring path. Remaining work for the 1.5 line: field-test with real graphml to catch edge cases on SU / US numbering pools that span thousands of legacy entries."
---

Cross-tool refactor that consolidates every 'new US' flow in EMtools behind one floating dialog (strat.add_us) and one factory function (us_helpers.create_us_node). Before: the Proxy Box Creator and Surface Areas each had their own inline 'Create new US' branch (with its own type / name / epoch / activity / stratigraphic-link fields) duplicating the Stratigraphy Manager's logic, and a + next-number button in the Stratigraphy dialog that broke because it couldn't peek at the dialog's transient props (operator stack empty until FINISHED). After: a single dialog form with Type, Name + gap-aware suggest-next, Description, Shared-numbering toggle (default ON, trailing-digits across every US type so SU001 ≡ US.1 in the pool), Epoch (mandatory, drives the Activity filter), Activity picker (filtered by epoch via scene.activity_manager.filtered_activities + ACTIVITY_OT_filter_by_epoch), optional stratigraphic link, persist_after_create toggle that saves the graphml to disk on OK. The + suggest-next button writes to a scene-level sentinel (scene.em_tools.stratigraphy.pending_us_name) so the dialog and the button share state without cross-operator lookups. The factory writes the node, has_first_epoch, optional is_in_activity (mirrored onto the per-US PD nodegroup when DP-46 creates one), optional is_after / is_before, and populates the Stratigraphy Manager list. US type registry (us_types.py) is JSON-driven: every picker reads from s3Dgraphy's node datamodel patch v1.5.2 (additive metadata — family + is_series per subtype; EM formalism stays at 1.5). USN (Negative Stratigraphic Unit) lands as a proper s3dgraphy class replacing the ad-hoc US_NEG placeholder. Legacy PREFIX_ALIASES (US ↔ SU, USN ↔ USNEG / US_NEG) prevent numbering collisions across conventions.
