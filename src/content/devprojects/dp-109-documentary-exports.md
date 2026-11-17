---
id: "DP-109"
title: "Documentary exports"
cat: "tool"
impacts:
  - "s3d"
status: "near"
statusLabel: "Built — real-case test and documentation pending for the beta"
targetVersion: "1.6"
incorporated: null
embargo: false
desc: "LaTeX, docx, notebook and HTML produced from the graph and from narratives."
components:
  - "LaTeX exporter"
  - "docx exporter"
  - "Jupyter notebook exporter"
  - "HTML"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "Built, together with DP-79."
relatedDPs:
  - "DP-79"
  - "DP-21"
---

*Declared on 17 November 2026: built before it had a development project.*

The graph becomes a report, an article draft or a reproducible notebook without copying by hand.

Evidence: s3Dgraphy `exporter/latex_exporter.py` (L1, 2 Aug 2026), docx, `ipynb_exporter.py` (a2bedf62).
