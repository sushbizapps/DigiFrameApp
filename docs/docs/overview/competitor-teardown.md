---
sidebar_position: 2
---

# Competitor Teardown: PixFolio (Snapwood)

Findings from directly inspecting the PixFolio APK (`com.snapwood.photos2`),
Snapwood's Google Photos slideshow app — the primary reference app for this
project. This is based on static inspection of the APK contents (file
listing, `classes.dex` strings), not decompiled source code or dynamic
testing.

## Platform & build

- **Native Android (Kotlin/Java)** — confirmed by the complete absence of a
  `lib/` folder (no native `.so` binaries) and zero trace of `libflutter.so`,
  `libhermes.so`, or any Flutter/React Native engine assets. A Flutter or RN
  app cannot ship without those files, so this rules out both frameworks
  definitively.
- **Multidex build** — 7 `classes.dex` files, indicating a large, mature
  codebase (first published July 2014, still actively updated).
- **Traditional Android View system (XML layouts)** — no trace of Jetpack
  Compose anywhere in the bytecode.

## Shared codebase across Snapwood's app family

Package structure reveals two top-level namespaces:

```
com/snapwood/picfolio/          ← app-specific code (PixFolio's own UI/features)
com/snapwood/sharedlibrary/     ← shared code reused across Snapwood's other apps
```

The `sharedlibrary` package includes reusable modules for:
- `blurry` — background blur effect
- `weather` — clock/weather overlay
- `webserver` — an embedded local web server (see below)
- `database`, `animations`, `tasks`

This confirms that PixFolio, gFolio (Google Drive), SkyFolio (OneDrive),
FlickFolio (Flickr), dfolio (Dropbox), and nFolio (NAS/SMB/DLNA) are all
built from **one shared native codebase**, with each published app swapping
in its own cloud-provider adapter. The "one app per provider" pattern
observed on the Play Store is a store-listing/ASO strategy, not a technical
constraint — internally it's a single core product.

## Confirmed libraries & SDKs

| Category | Library | Notes |
|---|---|---|
| Language/runtime | Kotlin + kotlinx.coroutines + kotlinx.serialization | Modernized over time from its 2014 origin |
| Networking | **Ktor Client** (not Retrofit) + OkHttp underneath | |
| Local database | **Room** (Jetpack) | Matches our own planned local-cache approach |
| Background jobs | **WorkManager** (Jetpack) | Matches our own planned sync scheduler |
| Image loading | Both **Glide** and **Coil** present | Possibly one is a transitive dependency of the other |
| Video playback | **AndroidX Media3 / ExoPlayer** | |
| Casting | **Google Play Services Cast** + **MediaRouter** | Standard Chromecast integration |
| NAS/DLNA discovery | **jUPnP** (`org.jupnp`) | Explains the nFolio NAS/SMB/DLNA sister app's discovery mechanism |
| Billing/IAP | **Google Play Billing Library** | Likely powers a premium/lifetime-unlock purchase |
| Crash/analytics | **Firebase Analytics + Crashlytics** | |
| Security | Bouncy Castle | Likely supports the embedded webserver/DLNA/TLS handling |

## Notable architectural detail: embedded local webserver

The presence of a `webserver` module combined with jUPnP strongly suggests
the app runs a **small embedded HTTP/DLNA server on the device**, serving
photos directly to smart TVs and casting devices on the local network —
rather than relying solely on the standard Chromecast media protocol. This
is a pattern worth considering for our own Android TV / Fire TV casting
design (see [Android platform notes](/platforms/android)).

## What's *not* visible in the client

No backend API traces are visible beyond Ktor as a generic HTTP client —
consistent with this being a **thin, mostly client-side app**: Google Photos
Picker + local files + direct provider OAuth, with no evidence of a
substantial custom backend. This lines up with the sync-reliability
complaints surfaced in Play Store reviews (see
[Reliability & Trust Features](/features/reliability-trust)) — a purely
client-driven sync with no authoritative server-side state is more prone to
exactly the "breaks silently, requires manual re-add" pattern users
reported.

## Implications for our own build

1. **Room + WorkManager validated** — our planned local-cache/background-sync
   approach mirrors what's already working (partially) for the reference
   app; the difference should be in *reliability engineering* around it, not
   the base technology choice.
2. **A real backend is a genuine differentiator** — since the reference app
   appears to be thin-client-only, our planned shared backend (sync state,
   diff/log, multi-provider merge) is a substantive architectural advantage,
   not just extra complexity.
3. **Consider an embedded local server for LAN casting** as a lower-latency
   alternative/supplement to standard Chromecast, especially for the
   digital-signage use case.
4. **A shared internal core across platform variants** (their `sharedlibrary`
   pattern) is a proven approach — validates our own plan to keep provider
   adapters modular behind a common interface (see
   [Sync Engine](/architecture/sync-engine)).

## Method note

This teardown is based on static analysis of the publicly downloaded APK
(archive file listing + strings extracted from `classes.dex`) — no
decompilation of proprietary source/business logic was performed, and no
paid analysis tools were used. Confirmed items above are things that are
structurally unambiguous from the file (e.g., presence/absence of specific
package namespaces); anything not listed here (e.g., exact backend
infrastructure, if any) was simply not observable from the client APK alone.
