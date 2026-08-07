---
sidebar_position: 5
---

# Architecture Diagrams

These are written as [Mermaid](https://mermaid.js.org/) code blocks, so they
render directly in the docs and stay version-controlled as text rather than
going stale as external images.

## High-level cross-platform architecture

```mermaid
flowchart TB
    subgraph Backend["Shared Backend / Core Logic"]
        A["Sync Engine"]
        B["Auth & Account Linking"]
        C["Curation Logic<br/>(faces, dupes, tagging)"]
        D["API Contracts"]
    end

    subgraph NativeMobile["Native Mobile & TV"]
        E["Android<br/>(Kotlin)<br/>+ Android TV + Fire TV"]
        F["iOS / iPadOS<br/>+ tvOS + macOS<br/>(Swift/SwiftUI)"]
    end

    subgraph WebCore["Web Core (React)"]
        G["PWA"]
        H["Tizen wrapper"]
        I["webOS wrapper"]
        J["Electron desktop<br/>(Windows/Linux)"]
    end

    subgraph Roku["Native Roku"]
        K["BrightScript / SceneGraph"]
    end

    Backend --> NativeMobile
    Backend --> WebCore
    Backend --> Roku
```

## Sync engine flow

```mermaid
sequenceDiagram
    participant App as Client App
    participant Sched as Sync Scheduler
    participant Adapter as Provider Adapter
    participant Cloud as Cloud Provider (e.g. Google Photos)
    participant Cache as Local Cache

    Sched->>Adapter: trigger sync (interval or manual)
    Adapter->>Cloud: fetchAlbums() / fetchMedia()
    Cloud-->>Adapter: current media list
    Adapter->>Cache: compare vs last-known state
    Cache-->>Adapter: diff (add / remove / update)
    Adapter->>App: present diff for confirmation (removes)
    App-->>Adapter: confirm changes
    Adapter->>Cache: apply diff + log sync run
    Cache-->>App: updated media available for slideshow
```

## Phased platform rollout

```mermaid
gantt
    title Phased Platform Rollout (relative sequencing, not fixed dates)
    dateFormat  X
    axisFormat %s
    section Phase 1
    Android phone + Android TV      :p1, 0, 3
    section Phase 2
    Fire TV                          :p2, after p1, 1
    section Phase 3
    iOS + tvOS                       :p3, after p2, 3
    section Phase 4
    PWA / Web core                   :p4, after p3, 2
    section Phase 5
    Samsung Tizen + LG webOS         :p5, after p4, 2
    section Phase 6
    Roku                             :p6, after p5, 2
    section Phase 7
    Windows/Linux desktop (Electron) :p7, after p6, 1
```

:::tip Keep these updated
Edit these diagrams directly in this markdown file as decisions change —
no separate diagramming tool needed, and the diff shows up cleanly in git
history.
:::
