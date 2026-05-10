---
id: "DP-01"
title: "Tapestry"
cat: "research"
impacts:
  - "emtools"
  - "s3d"
status: "in-dev"
statusLabel: "In development"
targetVersion: "1.5"
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
notes: "Core tested and functional. Next: ComfyUI installation, Web UI, EMtools bridge."
---

Image-to-image generation system constrained by Extended Matrix knowledge graphs. Core implementation complete: FastAPI server, ComfyUI integration with ControlNet (depth + canny), Stable Diffusion SDXL. Deterministic property-to-prompt mapping from s3Dgraphy graph nodes. Input: RGB render, depth map (EXR), ID masks, s3Dgraphy graph extract (JSON). Output: photorealistic image + paradata JSON for reincorporation into s3Dgraphy. Dedicated repository: EM-Tapestry.
