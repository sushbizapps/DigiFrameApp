---
sidebar_position: 2
---

# Phase 2: Fire TV

**Rough duration:** 2 weeks

## Goal

Google Photos integration (the first cloud provider), transitions, shuffle,
video/GIF playback — and Fire TV as a near-zero-extra-cost addition given
Phase 1's shared Android codebase.

## Deliverables

- [ ] Google OAuth 2.0 login flow
- [ ] Google Photos Picker API integration (album/photo selection)
- [ ] Slideshow transitions (fade/dissolve, timing control)
- [ ] Shuffle/random order playback
- [ ] Video and animated GIF playback inline in the slideshow
- [ ] Fire TV build: Amazon Appstore submission, Fire OS API substitutions where Google Play Services is unavailable

## Why now

Local device and USB playback already shipped in
[Phase 1](/roadmap/phase-1-android), so Phase 2 adds the first cloud
provider as a new `MediaProvider` adapter. Fire TV has a big installed base
for exactly this photo-frame/slideshow use case, and requires minimal extra
code given Phase 1's shared Android codebase. See
[Android platform notes](/platforms/android).
