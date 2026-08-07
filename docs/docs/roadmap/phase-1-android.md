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

- [ ] Local device photo support (`MediaStore`)
- [ ] USB/external drive support (Storage Access Framework)
- [ ] Basic slideshow engine: sequential playback, fixed timing
- [ ] Android TV Leanback/Compose-for-TV UI shell
- [ ] Local Room cache for thumbnails/metadata

## Why first

No OAuth flow or API review to get through — local and USB sources are
the fastest path to a working demo, and a single Kotlin codebase covers
both phone and TV form factors for the highest reach at the lowest
incremental cost. This also matches the Phase 1 architecture requirement
in [Media Provider Abstraction](/architecture/media-provider-abstraction):
the `MediaProvider` interface is designed against these two zero-auth,
zero-network adapters before any cloud provider is added. Google Photos
integration follows in [Phase 2](/roadmap/phase-2-firetv). See
[Android platform notes](/platforms/android).
