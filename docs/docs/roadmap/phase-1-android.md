---
sidebar_position: 1
---

# Phase 1: Android Phone + Android TV

**Rough duration:** 2–3 weeks

## Goal

Local device photo playback and USB/external drive playback, basic
slideshow of selected photos, running on both Android phone/tablet and
Android TV from one codebase.

## Deliverables

- [ ] Local device photo support (`MediaStore`, via platform channel)
- [ ] USB/external drive support (Storage Access Framework, via platform channel)
- [ ] Basic slideshow engine: sequential playback, fixed timing
- [ ] Android TV D-pad/focus-based UI shell (Flutter `FocusNode`, not Leanback/Compose)
- [ ] Local Drift (SQLite) cache for thumbnails/metadata

## Why first

No OAuth flow or API review to get through — local and USB sources are
the fastest path to a working demo, and a single Flutter/Dart codebase
covers both phone and TV form factors for the highest reach at the lowest
incremental cost. This also matches the Phase 1 architecture requirement
in [Media Provider Abstraction](/architecture/media-provider-abstraction):
the `MediaProvider` interface is designed against these two zero-auth,
zero-network adapters before any cloud provider is added. Google Photos
integration follows in [Phase 2](/roadmap/phase-2-firetv). See
[Android platform notes](/platforms/android).
