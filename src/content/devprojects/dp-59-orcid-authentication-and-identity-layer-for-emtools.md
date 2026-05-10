---
id: "DP-59"
title: "ORCID Authentication & Identity Layer for EMtools"
cat: "infra"
impacts:
  - "emtools"
  - "s3d"
  - "heriverse"
status: "concept"
statusLabel: "Concept"
targetVersion: "1.7"
incorporated: null
embargo: false
desc: "Optional ORCID-based identity layer for EMtools that unlocks federated services (Zenodo upload, Heriverse collaborative scenes, AuthorNode/Canvas-header auto-fill) while keeping every authoring feature usable offline / anonymously."
components:
  - "ORCID OAuth 2.0 client (em_auth module in EMtools or s3Dgraphy)"
  - "Blender Preferences panel 'Identity & Services'"
  - "One-shot localhost HTTP callback listener (randomized port)"
  - "Per-user token storage in CONFIG dir with 0600 perms, never in .blend / graph / xlsx"
  - "Service-token registry consumed by DP-57 (Zenodo) and Heriverse export"
  - "Anonymous-by-default contract: every feature works without sign-in"
  - "AuthorNode (DP-51) auto-fill from connected ORCID, free-text fallback"
  - "Canvas header ORCID tag (DP-40) auto-fill from connected ORCID"
  - "Heriverse Keycloak federated-IdP integration: ORCID as upstream IdP for single sign-on (with DP-11)"
  - "CI / headless bypass via env-vars (ZENODO_TOKEN, ORCID_ID) for DP-57 GitHub Actions"
  - "Sign-out + switch-user for multi-tenant lab machines"
  - "Offline-graceful: expired tokens fall back to anonymous mode silently"
  - "Audit log of authenticated operations (Publish, Push, Pull) in user prefs"
thesis: false
stratigraph: true
keyStudy: "Needed"
notes: "Service dependency: DP-57 (Zenodo) — DP-57's OAuth becomes a service-token slot inside DP-59's registry; CI/headless deposits keep working via env-var bypass. Identity dependency: DP-51 (Author Node) — connected ORCID feeds AuthorNode auto-fill. Header dependency: DP-40 (Canvas Header tags) — connected ORCID feeds the canvas header tag. Heriverse alignment: DP-11 already runs Keycloak; recommended architecture is ORCID-as-federated-IdP inside the Heriverse Keycloak realm (single sign-on across Blender and web). Anonymous-by-default is non-negotiable — every authoring, import, export and local-publish feature must keep working without an account. To be matured against the Zenodo deposit field test that DP-57 schedules."
---

Adds an optional identity layer to EMtools, anchored on ORCID as the canonical academic identifier. Sign-in is strictly additive: every authoring, import, export and local-publish feature continues to work without an account — the anonymous-by-default contract is the load-bearing requirement of this DP. Authentication unlocks a curated set of federated services — first and foremost the Zenodo deposit pipeline (DP-57), the Heriverse collaborative editor (DP-11, Keycloak), and the AuthorNode/Canvas-header auto-fill flows (DP-51, DP-40). Architecture: (1) OAuth 2.0 client launching an external browser with a one-shot localhost callback listener on a randomized port; (2) token storage in Blender user prefs (bpy.utils.user_resource('CONFIG')/em_tools/auth.json) with restrictive POSIX permissions, never in the .blend, never in the GraphML, never in source_list.xlsx; (3) per-service access tokens chained to a single ORCID identity (Zenodo gets its own token, Heriverse gets its own Keycloak token), exposed as a service-token registry that DP-57 and the Heriverse export panel consume; (4) a Preferences > Identity & Services panel showing connection state per service with sign-in / sign-out / switch-user; (5) AuthorNode and Canvas-header tag pre-fill from the connected ORCID identity, with graceful fallback to free-text input when offline / signed-out; (6) headless / CI bypass via env-vars so DP-57 GitHub Actions can publish with service-account tokens without interactive OAuth. Heriverse already runs on Keycloak (DP-11): the recommended direction is to configure ORCID as a federated IdP in the Heriverse Keycloak realm, so a single ORCID sign-in transparently authenticates the user on both Blender and the Heriverse web client (single sign-on across the EM ecosystem). The alternative — independent ORCID + Keycloak connections — is supported as fallback. Privacy: ORCID public profile only, no off-protocol scraping; user can opt-out at any time by signing out (revokes local tokens; ORCID-side revocation is delegated to the user via orcid.org). Offline graceful: when a stored token expires and there is no network, EMtools falls back silently to anonymous mode and surfaces a soft 'session expired, sign in again to publish' notification on the next publish attempt.
