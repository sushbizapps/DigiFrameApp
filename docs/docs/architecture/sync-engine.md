---
sidebar_position: 2
---

# Sync Engine

This is the highest-priority component to get right — reference app reviews
consistently cite unreliable sync as the top complaint (auto-import
breaking, requiring manual re-adds, and in some cases silently deleting
already-imported photos).

## Design goals

1. **Transparency** — the user should always be able to see what was synced,
   when, and why something changed.
2. **Non-destructive by default** — never silently delete local
   cache/imported items as a side effect of a sync operation.
3. **Resumability** — a sync interrupted mid-way should be able to resume
   without duplicating or losing items.
4. **Provider abstraction** — Google Photos, iCloud, OneDrive, NAS/SMB/DLNA,
   Flickr, and local storage should all conform to one internal interface so
   the rest of the app doesn't special-case providers.

## Proposed building blocks

- **Provider adapters** — one per source (Google Photos, iCloud, OneDrive,
  local `MediaStore`, NAS/SMB, Flickr), each implementing a common
  `fetchAlbums()` / `fetchMedia()` / `resolveChanges()` interface
- **Diffing layer** — compares last-known state vs. current provider state,
  producing an explicit add/remove/update change set — never applies removes
  without an explicit confirmation step (see
  [Reliability & Trust Features](/features/reliability-trust))
- **Local cache (Room / SQLite)** — thumbnails + metadata, enabling offline
  playback
- **Sync scheduler** — `WorkManager` (Android) / background tasks (Apple) /
  service worker or scheduled job (Web), tunable per user preference
  (interval, Wi-Fi-only, etc.)
- **Sync log** — human-readable history of sync runs, surfaced in the UI

## Known platform constraint to validate early

Google Photos Library API's scoped access model may only expose items the
app created or the user explicitly picked (via the Picker API), not a full
library scan. This is a likely root cause of the reference app's reported
sync issues and should be validated against current API docs before
finalizing the diffing/caching design.

## Open questions

- [ ] Confirm current Google Photos Library API / Picker API access scope
- [ ] Confirm iCloud Photos third-party access options
- [ ] Decide default sync interval and whether it's user-configurable per provider
