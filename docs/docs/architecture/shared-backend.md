---
sidebar_position: 2
---

# Shared Backend / Core Logic

Regardless of platform, the following should be built once and shared:

- **Account linking & auth** — Google, iCloud, OneDrive, etc.
- **Photo sync engine** — scheduling, caching, diffing, conflict handling
  (see [Sync Engine](/architecture/sync-engine))
- **Curation logic** — face grouping, duplicate/blur detection, auto-tagging
  (see [Smart Curation](/features/smart-curation))
- **API contracts** — a stable interface every platform (native or web) talks
  to, so sync behavior doesn't have to be reasoned about differently per
  platform
- **Design tokens** — one source of truth (e.g., Figma) for icons, color
  themes, motion specs, shared across native and web UIs

## What is *not* shareable

- Remote-control/D-pad navigation logic — genuinely different per platform
  (Android TV's D-pad focus handling vs. tvOS's native focus engine vs.
  Tizen/webOS spatial navigation vs. Roku SceneGraph focus), even where the
  underlying app code (Flutter or React) is shared. Budget this as separate,
  non-reusable engineering effort per platform.
- Store compliance/submission process — each store (Google Play, Apple App
  Store, Amazon Appstore, Samsung/LG stores, Roku Developer Program) has its
  own review process.
- Platform-native casting/display APIs — Google Cast SDK vs. AirPlay vs.
  built-in smart TV display APIs.

## Team/skill implication

Realistically this requires two engineering skillsets rather than one team
per platform:

1. **Flutter/Dart** — one codebase covering Android phone, Android TV, Fire
   TV, iOS, iPadOS, tvOS, and macOS
2. **Web/JS (React)** — covers PWA, Samsung Tizen, LG webOS, Electron
   desktop (Windows/Linux)

Roku remains a fully separate, non-shared BrightScript effort regardless of
team structure.
