---
id: "DP-01"
title: "Tapestry"
cat: "research"
impacts:
  - "emtools"
  - "s3d"
status: "partial"
statusLabel: "Partially built — research line outside the release"
targetVersion: "1.7"
incorporated: null
embargo: true
embargoNotes: "Paper in preparation. Expected submission: 2026. Standalone repo: EM-Tapestry."
desc: "AI-based image-to-image generation constrained by EM knowledge graphs."
components:
  - "FastAPI server"
  - "ComfyUI workflow builder"
  - "ControlNet integration"
  - "s3Dgraphy constraint builder"
  - "EMtools integration (planned)"
  - "Web UI (planned)"
thesis: false
stratigraph: false
keyStudy: "Sarmizegetusa"
notes: "Not part of the 1.6 beta (1.7 nursery). Tapestry now lives in its own repository and its own Blender add-on (since October 2026); it is no longer bundled with EM Tools. The paper is in preparation."
---

Image-to-image generation system constrained by Extended Matrix knowledge graphs. Core implementation complete: FastAPI server, ComfyUI integration with ControlNet (depth + canny), Stable Diffusion SDXL. Deterministic property-to-prompt mapping from s3Dgraphy graph nodes. Input: RGB render, depth map (EXR), ID masks, s3Dgraphy graph extract (JSON). Output: photorealistic image + paradata JSON for reincorporation into s3Dgraphy. Dedicated repository: EM-Tapestry.
