---
sidebar_position: 4
---

# Roku

## Why it's separate

Roku uses **BrightScript/SceneGraph**, not JavaScript or Dart — none of the
code shared across the Flutter (Android/Apple) or Web (React) cores applies
here. This is a genuinely standalone build.

## Why it's still worth doing

Roku has a large installed base specifically in the "screensaver/slideshow
channel" category, which matches this app's core use case closely.

## Scope

- Roku Channel using BrightScript/SceneGraph
- Reuse only: API contracts (sync engine endpoints), design assets/tokens,
  and product requirements — no shared code

## Sequencing

Per the phased roadmap, Roku is deliberately placed **after** the Android,
Apple, and Web-core phases (Phase 6) — build it once demand from the earlier
platforms validates the product, since it requires a fully separate
engineering investment with no code reuse.

## Open questions

- [ ] Confirm Roku Developer Program submission requirements
- [ ] Decide whether Roku channel supports full cloud provider sync or a lighter "cast-only" experience first
