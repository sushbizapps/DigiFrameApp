---
sidebar_position: 3
---

# Smart TV & Web (Samsung Tizen, LG webOS, PWA, Desktop)

## Why these are grouped together

Samsung Tizen and LG webOS are both web-based platforms — Chromium-based
runtimes with platform-specific JS APIs layered on top — which makes them
much closer to web apps than native mobile apps. This means a **shared
web-based core UI** (built once in React or plain JS) can realistically
target:

- Samsung Tizen (Tizen Web framework)
- LG webOS (JS)
- A standalone Progressive Web App (PWA)
- Windows/Linux desktop via Electron or Tauri (same core, wrapped)

with thin, per-platform wrappers handling remote/input handling and store
packaging.

## Scope

| Target | Notes |
|---|---|
| PWA | Reference implementation — build this first, well; also useful as a remote-control companion for the TV apps |
| Samsung Tizen | Native smart TV reach without a streaming box |
| LG webOS | Same rationale as Tizen |
| Windows (desktop) | Electron/Tauri wrapping the same web core; useful for office/digital-signage use case |
| Linux (desktop) | Same wrapper; also common in DIY Raspberry Pi photo-frame kiosk setups |

## Key technical notes

- Treat the PWA as the **source of truth** UI; Tizen/webOS/Electron are wrappers
- Remote/D-pad navigation still needs per-platform handling — spatial
  navigation differs between Tizen, webOS, and a mouse/keyboard desktop
  environment
- Confirm current Tizen and webOS store submission requirements before
  committing engineering time

## Rollout note

Per the phased roadmap, this web core is built in **Phase 4**, after Android
and Apple native apps, specifically so it can be reused across Phases 5–7
(Tizen, webOS, Roku's web capabilities where applicable, desktop) rather than
built repeatedly.
