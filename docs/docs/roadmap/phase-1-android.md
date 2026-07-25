---
sidebar_position: 1
---

# Phase 1: Android Phone + Android TV

**Rough duration:** 2–3 weeks

## Goal

Google OAuth + Photos Picker integration, basic slideshow of selected photos,
running on both Android phone/tablet and Android TV from one codebase.

## Deliverables

- [ ] Google OAuth 2.0 login flow
- [ ] Google Photos Picker API integration (album/photo selection)
- [ ] Basic slideshow engine: sequential playback, fixed timing
- [ ] Android TV Leanback/Compose-for-TV UI shell
- [ ] Local Room cache for thumbnails/metadata

## Why first

Core audience overlap, Google Photos integration is a natural fit, and a
single Kotlin codebase covers both phone and TV form factors — the highest
reach for the lowest incremental cost. See [Android platform notes](/platforms/android).
