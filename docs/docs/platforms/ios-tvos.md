---
sidebar_position: 2
---

# Apple (iOS / iPadOS / tvOS / macOS)

## Why this matters

Several households are mixed-ecosystem. A reference app reviewer specifically
praised being able to combine Google Photos **and** iCloud into one
slideshow. Native Apple support unlocks iCloud Photos users without relying
solely on casting from a phone.

## Scope

| Target | Notes |
|---|---|
| iOS / iPadOS | Companion/controller app, browsing UI |
| tvOS | Native big-screen slideshow experience for Apple TV owners |
| macOS | Via Flutter's desktop target — useful for office/desk digital signage and native iCloud slideshow/screensaver |

## Code sharing

Flutter/Dart is the same shared codebase used for Android (see
[Android platform notes](/platforms/android)) — business logic, networking,
and the sync/data layer are shared across every Apple target *and* with
Android. UI layers still differ meaningfully: tvOS uses a remote-based focus
engine, quite different from iOS touch navigation or Android TV's D-pad
input, so budget separate design/engineering time for the tvOS interface.

## Key technical notes

- **iCloud Photos access**: research current API options/limitations for
  third-party access to a user's iCloud Photo Library (this is more
  restricted than Google's Picker API in some respects) — confirm feasibility
  early, as this is core to the "combine Google + iCloud" differentiator
- **Casting equivalent**: AirPlay, instead of Chromecast — bridged via a
  native platform channel, no mature cross-platform Flutter plugin covers
  this
- **Screensaver-like behavior**: macOS screen saver extension API, if that
  use case is prioritized — this is an OS extension point, so it needs a
  small native Swift shim even with Flutter as the main app

## Open questions

- [ ] Confirm current iCloud Photos third-party API access model
- [ ] Decide macOS priority relative to tvOS (tvOS likely matters more given the "big screen" positioning)
