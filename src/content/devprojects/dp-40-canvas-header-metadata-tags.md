---
id: "DP-40"
title: "Canvas Header Metadata Tags"
cat: "core"
impacts:
  - "yed"
  - "config"
status: "done"
statusLabel: "Done — closed"
targetVersion: "1.5"
incorporated: "1.5"
embargo: false
desc: "Graph-level metadata tags in canvas header: ID, ORCID, License, Embargo."
components:
  - "Canvas header tags"
  - "yEd template"
  - "GraphML header"
thesis: false
stratigraph: true
keyStudy: "Sarmizegetusa"
notes: "Closed (1.5); absorbed by graph-scope paradata (DP-65). In em.json 1.1 the header declares its profiles."
---

Added general metadata as tags in square brackets next to the EM canvas title: ID, ORCID, License, and Embargo. These are graph-level metadata propagating to all nodes. Part of the Propagative Metadata System (DP-32) scope, specifically the graph-level header implementation.
