---
slug: competitor-apk-teardown
title: PixFolio APK teardown — confirmed native Kotlin, shared codebase across sister apps
authors: []
tags: [research, architecture]
---

Analyzed the PixFolio APK directly (file listing + `classes.dex` strings).
Confirmed it's native Android/Kotlin (no Flutter/RN engine present), built on
a shared internal codebase (`com.snapwood.sharedlibrary`) reused across all
of Snapwood's provider-specific sister apps (gFolio, SkyFolio, dfolio,
FlickFolio, nFolio).

Full findings written up in [Competitor Teardown](/overview/competitor-teardown).

<!--truncate-->

## Key takeaways for our build

- Room + WorkManager choice for local cache/sync is validated by what's
  already shipping in this space
- Their app appears to be thin-client-only with no substantial backend —
  our planned shared backend (sync state, diffing, multi-provider merge) is
  a real differentiator, not over-engineering
- They run an embedded local webserver + jUPnP for LAN casting/DLNA — worth
  evaluating as a supplement to standard Chromecast for our own casting design
- Their "one app per provider, one shared core" pattern validates our own
  provider-adapter architecture plan
