---
sidebar_position: 1
---

# Android (Phone / Tablet / Android TV / Fire TV)

## Why this is the first target

Android TV, Google TV, and Amazon Fire TV all run on Android (Fire TV is an
Android fork), so a single Kotlin codebase can cover phone, tablet, and TV
form factors with a TV-specific UI layer on top. This gives the widest reach
for the least incremental engineering cost.

## Scope

| Target | Notes |
|---|---|
| Android phone/tablet | Primary "controller" and browsing UI |
| Android TV / Google TV | Leanback or Jetpack Compose for TV, D-pad navigation |
| Amazon Fire TV | Android fork; separate store (Amazon Appstore); no Google Play Services on some devices — substitute Amazon's Fire OS equivalents (e.g., IAP) |

## Key technical notes

- **Local media** (Phase 1): `MediaStore` API for on-device photos; Storage
  Access Framework for USB/external drives (relevant for the "connect a USB
  drive to the TV" use case).
- **Auth** (Phase 2): Google OAuth 2.0 + Google Photos Library API. Note the
  Library API's scoped access model — apps generally can only access what
  they created or what the user explicitly selects via the **Picker API**,
  not a full library scan. Verify current API scope/quota rules before
  finalizing the sync architecture; this restriction is a likely root cause
  of the reference app's sync complaints.
- **Casting**: Google Cast SDK (Sender + Receiver) for Chromecast.
- **Background sync**: `WorkManager` for periodic album re-sync — engineer
  this carefully to avoid the "auto-import silently breaks" complaint seen in
  reference app reviews.
- **Caching**: Room DB for thumbnails/metadata, enabling offline slideshow
  playback.

## Fire TV specific considerations

- Separate submission process (Amazon Appstore review)
- Confirm availability of Google Play Services on target Fire TV hardware;
  branch IAP/casting code paths where absent
- Test D-pad/remote navigation separately — Fire TV remote behavior can
  differ subtly from stock Android TV

## Open questions

- [ ] Confirm current Google Photos Library API / Picker API quota limits
- [ ] Decide minimum supported Android version
- [ ] Decide whether Fire TV ships in the same release train as Android TV or lags behind
