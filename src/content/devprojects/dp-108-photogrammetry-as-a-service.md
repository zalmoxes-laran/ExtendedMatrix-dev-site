---
id: "DP-108"
title: "Photogrammetry as a service"
cat: "extension"
impacts:
  - "s3d"
  - "server"
status: "in-dev"
statusLabel: "Built — behind «Experimental features» in 1.6"
targetVersion: "1.6-exp"
incorporated: null
embargo: false
desc: "The semantics of a reconstruction from photographs, and NodeODM running on the StratiGraph node."
components:
  - "Photogrammetry package (semantics of the reconstruction)"
  - "NodeODM client on the server"
thesis: false
stratigraph: false
keyStudy: "Needed"
notes: "In 1.6 behind «Experimental features»."
relatedDPs:
  - "DP-85"
  - "DP-83"
---

*Declared on 17 November 2026: built before it had a development project.*

A photo set uploaded to the node comes back as a model whose chain (DTC) is already written.

Evidence: s3Dgraphy `photogrammetry/` (29 Aug 2026), `test_photogrammetry_delta.py`; stratigraph-server `nodeodm_client.py`, 79104b5.
