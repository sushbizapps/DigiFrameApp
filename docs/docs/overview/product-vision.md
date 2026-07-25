---
sidebar_position: 1
---

# Product Vision

## Concept

A "photo cloud → big screen slideshow" app. Users connect a cloud photo
library (Google Photos, iCloud, OneDrive, etc.) or local device storage, and
the app turns those photos into a slideshow that can run on a phone, tablet,
TV, or dedicated digital photo frame — with casting support to Chromecast and
native apps for Android TV / Fire TV / Apple TV / smart TVs.

Reference app studied: **PixFolio – Photos & Slideshows** (Snapwood Apps),
available on Google Play. It supports Google Photos + local photo slideshows,
Chromecast/Android TV playback, clock/weather overlays, and digital-signage
style use cases (photo frames, church bulletins, store signage).

## Differentiators (our wedge)

Reviews of the reference app reveal two consistent pain points we can solve
better:

1. **Sync reliability** — users report the Google Photos auto-import
   breaking, requiring manual re-adding of albums, and in some cases silently
   deleting already-imported photos. A more robust, well-tested,
   transparent sync layer is a genuine differentiator. See
   [Reliability & Trust Features](/features/reliability-trust).
2. **Multi-provider in one app** — the reference app ships **separate apps**
   per cloud provider (gFolio for Google Drive, SkyFolio for OneDrive, nFolio
   for NAS/SMB/DLNA, FlickFolio for Flickr). One reviewer specifically wanted
   simultaneous Google Photos + iCloud slideshows. Supporting multiple
   providers in a single app is a stronger value proposition than maintaining
   near-duplicate apps.

## Target use cases

- Personal digital photo frame (e.g., for grandparents)
- Screensaver / ambient display on a phone, tablet, or smart display
- Digital signage: restaurant menus, store marketing, church bulletins,
  school schedules
- Family shared album displayed live in a common space
- Event slideshow (wedding/party) with guest photo contributions

## Non-goals (for now)

- Full photo editing suite (crop/filter tools) — out of scope; this is a
  *display and curation* app, not an editor
- Cloud storage provider of our own — we integrate with existing providers
  rather than hosting original photos ourselves

## How to use this documentation site

- **Docs** (this section) — the stable, structured spec: platforms,
  architecture, roadmap, and feature definitions
- **Updates** (blog) — a running dev log for day-to-day decisions, changes,
  and progress notes; use this to log anything that doesn't yet deserve a
  permanent home in the structured docs
