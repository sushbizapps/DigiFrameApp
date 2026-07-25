---
sidebar_position: 4
---

# Phase 4: PWA / Web Core

**Rough duration:** ongoing, becomes a reusable base

## Goal

Build the web-based core UI (React) as a standalone Progressive Web App —
this becomes the reusable base for Samsung Tizen, LG webOS, and Electron
desktop wrappers in later phases, plus doubles as a remote-control companion
for the TV apps.

## Deliverables

- [ ] Core slideshow UI in React, running as an installable PWA
- [ ] Shared API contract calls to the sync engine (see [Shared Backend](/architecture/shared-backend))
- [ ] Remote-control mode: control a TV app's slideshow from the PWA over local network

## Why now

Building this well once avoids rebuilding it three more times in Phases 5–7.
See [Smart TV & Web platform notes](/platforms/smart-tv-web).
