# From 2,253 ms to 1.84 ms

The presentation for **Aaron LaBeau's RenderATL 2026 talk** — the story of taking
one of Ditto's heaviest queries (a `COUNT` over a large dataset) from
**2,253 ms down to 1.84 ms** (≈1,226× faster), using AI-assisted instrumentation
and tooling built along the way.

The talk is delivered as a website: an interactive, keyboard-navigable slide deck
built with **Vite + React + Motion**, themed with Ditto's **Anvil** design
system.

## Links

- ▶️ **Live talk:** https://ditto-examples.github.io/renderatl-2026-ai-dql/
- 📚 **Ditto documentation:** https://docs.ditto.live
- 🌐 **Ditto website:** https://www.ditto.com

## What the talk covers

Using AI to map code paths into visual flows from real instrumentation traces,
then measuring them with purpose-built benchmarking tools — and, just as
importantly, where AI helped and where it didn't. The through-line: **AI is
powerful when it's grounded in real, measured data and driven by domain
expertise — and it falls down when it isn't.**

## Tech stack

- **Vite 7** + **React 18** — static SPA, builds to plain files
- **Motion** (`motion/react`) — slide transitions and animations
- **[@dittolive/anvil](vendor/anvil)** — Ditto's React design system (Tailwind v4
  theme, fonts, components), vendored under `vendor/` as a pnpm workspace package
- **react-router-dom** (`HashRouter`) — one route per slide; hash routing keeps
  deep links working on GitHub Pages
- Deployed to **GitHub Pages** via GitHub Actions on every push to `main`

> React is pinned to **18** because Anvil requires it. See the notes in
> [`vendor/anvil/VENDORED.md`](vendor/anvil/VENDORED.md).

## Getting started

Requires Node 20.19+ (Node 24 recommended) and **pnpm**.

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

Other scripts:

```bash
pnpm build      # type-check + production build to dist/
pnpm preview    # serve the production build locally
```

## Navigating the deck

- **→ / Enter** — next slide
- **← / Esc** — previous slide
- **Start the talk** on the title screen begins the deck

## The deck

One route per slide (`src/slides/`), wired in `src/App.tsx`:

1. **Home** — title
2. **Cold open** — the Slack message that started it
3. **Who am I**
4. **What is Ditto** — pillars + the Rainbow Connection
5. **The Problem** — the benchmark report
6. **Don't we already have tools?** — DTP + the Mesh Lab
7. **What I did with AI** — the two buckets (build / investigate)
8. **Building Benchy** — the benchmarking suite
9. **Investigating with AI** — instrument + profile
10. **AI drew the map** — code-flow diagrams from real traces
11. **How we fixed it** — the war room + continuous benchmarking
12. **The payoff** — 2,253 ms → 1.84 ms
13. **The whole board moved** — the broader win
14. **What worked, what didn't** — the honest lessons
15. **Takeaways** — measure, don't guess

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. The Vite `base` path is derived from the
repository name at build time, so the deployed asset URLs stay correct.

## Notes

- The drifting-squares animation on the title screen is ported from Ditto's
  VS Code extension presence viewer.
- The mesh/transport colors reuse Ditto's presence-viewer connection palette.
- This repository vendors Anvil temporarily; it will be replaced by the published
  package when that ships.
