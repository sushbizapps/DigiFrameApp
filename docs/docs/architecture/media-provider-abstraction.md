---
sidebar_position: 4
---

# Media Provider Abstraction

Phase 1 ships with only two content sources — local device storage and USB
drives — but the app needs to scale to cloud providers (Google Photos,
Dropbox, OneDrive, Flickr, NAS/SMB, Immich, etc.) without reworking the
slideshow engine, cache, or UI later. This page defines the abstraction that
makes that possible, and lists which providers are deferred to future
phases.

## Why this has to be decided now

If local-file and USB access get written directly into the slideshow
engine, cache, and UI, every future provider becomes a retrofit. If instead
everything downstream talks to one common interface, adding a provider
later means writing one new adapter class — nothing else changes. This is
cheap to do at the start of Phase 1 and expensive to bolt on afterward, so
it's treated as a Phase 1 architecture requirement even though only two
adapters ship in Phase 1.

## The interface

```dart
abstract class MediaProvider {
  String get id;
  bool get requiresNetwork;
  bool get requiresAuth;

  Future<void> authenticate();               // no-op for local/USB
  Future<List<Album>> listAlbums();
  Future<List<MediaItem>> listMedia(Album album);
  Future<MediaBytes> fetchBytes(MediaItem item, {Size? maxSize});
  Future<ChangeSet> refresh();                // diff since last known state
}
```

The slideshow engine, media cache, and "add source" UI depend only on this
interface — never on a specific provider's SDK or storage API.

## Phase 1 concrete providers

| Provider | `requiresAuth` | `requiresNetwork` | `refresh()` behavior |
|---|---|---|---|
| `LocalMediaProvider` (Android `MediaStore`) | No | No | Simple rescan of the device library |
| `UsbMediaProvider` (Storage Access Framework) | No (grants persisted URI permission once) | No | Simple rescan of the mounted drive |

Both are read-only. Neither needs the diff/confirm-before-delete UI
described in [Sync Engine](/architecture/sync-engine) — that risk category
(silent deletion from a remote account) doesn't exist when the app only
ever reads local storage. That UI gets (re)introduced when the first
provider with real remote-deletion risk is added.

## Future enhancements: additional providers

Not in Phase 1 scope. Each row becomes one new `MediaProvider` adapter when
prioritized — no changes required to the slideshow engine, cache, or core
UI beyond the "add source" step matching that provider's auth model.

| Provider | Auth model | Relative difficulty | Notes |
|---|---|---|---|
| **Immich** (self-hosted) | API key | Easiest | Full REST API, no scoped-access restriction, no app-store/verification review process — good candidate for the first provider added after Phase 1 |
| **Flickr** | API key / OAuth1 | Easy–moderate | |
| **Dropbox** | OAuth2 + REST | Moderate | |
| **OneDrive** | OAuth2 + REST | Moderate | |
| **Google Photos** | OAuth2 + Picker API | Moderate | Picker API's scoped-access model (session-based, not a full library scan) needs validation before implementing — carried over open question from [Sync Engine](/architecture/sync-engine) |
| **iCloud Photos** | Apple-specific auth | Moderate–hard | Third-party access model needs research, per [Apple platform notes](/platforms/ios-tvos) |
| **NAS / SMB / DLNA** | Network credentials + device discovery (UPnP/mDNS) | Hardest | No OAuth, but real protocol/discovery engineering; likely needs a Flutter plugin or platform channel rather than a pure-Dart REST client |

## What adding a provider requires vs. doesn't

**Requires:** one new class implementing `MediaProvider`; an "add source"
UI step matching that provider's auth model; provider-specific rate-limit
and backoff handling.

**Does not require:** any change to the slideshow engine, media cache, or
core UI — that isolation is the point of the abstraction.

## Portability note

Because Flutter is the shared codebase across all target platforms (unlike
the original native-per-platform plan), a `MediaProvider` adapter written
once in Dart works everywhere the app runs — Android now, other Flutter
targets later — without a per-platform rewrite.
