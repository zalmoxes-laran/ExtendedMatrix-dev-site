---
id: "DP-111"
title: "Series nodes (serUSD, serVSF)"
cat: "core"
impacts:
  - "s3d"
  - "emstudio"
  - "emtools"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "One logical unit for many repeated things: a series of documentary units (serUSD) or the same virtual special find repeated (serVSF, the tile instanced over a whole roof)."
components:
  - "serUSD: SeriesOfDocumentarySU, em:SeriesOfDocumentarySU (P46)"
  - "serVSF: series of virtual special finds"
  - "is_series in the classification, life of units"
thesis: true
stratigraph: false
keyStudy: "Roha Sajjad (Padua) for serUSD"
notes: "Built. A short paper with Roha Sajjad is planned (serUSD first, after a dedicated test on her case); serVSF needs a real use first."
relatedDPs:
  - "DP-30"
---

*Declared on 17 November 2026: built before it had a development project.*

**Thesis line:** publication of a node — serUSD on Roha Sajjad's case; serVSF on a roof or a repeated cladding.

Some evidence comes in series — a run of drawings, a roof of identical tiles. A series node lets one record speak for all of them without losing the single pieces.

Evidence: serUSD eb561a9 (6 Feb 2026), node datamodel, em.ttl, EMStudio add menu, EM Tools unit types; serVSF ac5d4414 (23 Oct 2026), `tests/test_series_vsf.py`. serUSD was used on Roha Sajjad's case (Padua).
