---
sidebar_position: 1
---

# Android (Phone / Tablet / Android TV / Fire TV)

## Why this is the first target

Android TV, Google TV, and Amazon Fire TV all run on Android (Fire TV is an
Android fork), so a single Flutter/Dart codebase can cover phone, tablet,
and TV form factors with a TV-specific UI layer on top — and that same
codebase extends to Apple platforms too (see
[Apple platform notes](/platforms/ios-tvos)). This gives the widest reach
for the least incremental engineering cost.

## Scope

| Target | Notes |
|---|---|
| Android phone/tablet | Primary "controller" and browsing UI |
| Android TV / Google TV | Flutter's `FocusNode`/D-pad focus handling for TV navigation (no Leanback/Jetpack Compose — those are Kotlin-only View toolkits) |
| Amazon Fire TV | Android fork; separate store (Amazon Appstore); no Google Play Services on some devices — substitute Amazon's Fire OS equivalents (e.g., IAP) |

## Key technical notes

- **Framework**: Flutter/Dart, shared with the Apple client. Platform
  channels bridge to the Android-native APIs below where no mature Flutter
  plugin exists.
- **Local media** (Phase 1): `MediaStore` API for on-device photos; Storage
  Access Framework for USB/external drives (relevant for the "connect a USB
  drive to the TV" use case).
- **Auth** (Phase 2): Google OAuth 2.0 + Google Photos Library API. Note the
  Library API's scoped access model — apps generally can only access what
  they created or what the user explicitly selects via the **Picker API**,
  not a full library scan. Verify current API scope/quota rules before
  finalizing the sync architecture; this restriction is a likely root cause
  of the reference app's sync complaints.
- **Casting**: Google Cast SDK (Sender + Receiver) for Chromecast, via
  platform channel.
- **Background sync**: `WorkManager` (via Flutter's `workmanager` plugin)
  for periodic album re-sync — engineer this carefully to avoid the
  "auto-import silently breaks" complaint seen in reference app reviews.
- **Caching**: Drift (SQLite) for thumbnails/metadata — the Flutter-native
  equivalent of Room, and usable as-is on the Apple client too — enabling
  offline slideshow playback.

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
