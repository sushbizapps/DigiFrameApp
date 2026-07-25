# Photo Slideshow App — Project Documentation

This is a [Docusaurus](https://docusaurus.io/) site pre-filled with the
project spec, architecture, roadmap, and feature backlog for the photo
slideshow / digital photo frame app project.

## Structure

```
docs/
├── overview/            product vision & wedge
├── platforms/           android, apple, smart-tv/web, roku
├── architecture/        shared backend, sync engine, mermaid diagrams
├── roadmap/              phase 1 → phase 7
└── features/            slideshow engine, curation, signage, reliability, sharing
blog/                     "Updates" — a running dev log (mounted at /updates)
```

## Getting started

Requires Node.js 18+.

```bash
npm install
npm start
```

This starts a local dev server at http://localhost:3000 with live reload as
you edit any `.md` file.

## Building for production

```bash
npm run build
```

Outputs a static site to `build/`, deployable free on **GitHub Pages**,
**Netlify**, or **Vercel**.

### Deploying to GitHub Pages

1. Push this project to a GitHub repo.
2. In `docusaurus.config.js`, set `url`, `organizationName`, and
   `projectName` to match your repo.
3. Run:
   ```bash
   npm run deploy
   ```

## Editing content

- Every page is plain Markdown (or `.mdx`) under `docs/` — edit and commit
  like any other file.
- Diagrams live as [Mermaid](https://mermaid.js.org/) code blocks inside
  `docs/architecture/diagrams.md` — edit the text, the diagram re-renders
  automatically. No separate diagramming tool needed.
- Use `blog/` (rendered at `/updates`) as an informal running log for
  day-to-day decisions — create a new file per entry, e.g.
  `blog/2026-07-20-sync-engine-design-locked.md`.
- The sidebar order is controlled by `sidebars.js` and each file's
  `sidebar_position` frontmatter.

## Notes

- This scaffold was generated without running `npm install` (no network
  access in the generating environment) — dependency versions in
  `package.json` should be treated as a starting point; run `npm install`
  and adjust as needed once you have internet access.
- Uses `@docusaurus/theme-mermaid` for the diagrams in
  `docs/architecture/diagrams.md`.
