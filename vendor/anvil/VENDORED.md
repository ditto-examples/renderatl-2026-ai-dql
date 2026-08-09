# Vendored: `@dittolive/anvil`

This directory is a **temporary vendored copy** of Ditto's Anvil React design
system. Anvil is **not yet published** to any npm / GitHub Packages registry, so
the CRDT Viewer vendors its source here as a pnpm `workspace:*` package until the
public package ships.

## Source

- Repo: `git@github.com:getditto/cloud-services.git`, subfolder `anvil/`
- Package: `@dittolive/anvil@0.0.4`
- Vendored at cloud-services commit: **`5684dd6152ad4b0c5183bcec9bd4946dd1d37ca6`**

## Why patches were needed

Upstream, Anvil builds **inside** the `cloud-services` Yarn monorepo and relies
on monorepo context that does not exist in this repo. To make it build
standalone as a pnpm workspace package, the following **minimal** changes were
applied to the vendored copy (and only the vendored copy):

1. **`tsconfig.json`** — upstream does `extends: "../portal/tsconfig.json"`
   (a sibling monorepo package). Replaced with a self-contained config
   (same compiler options Anvil already set, plus `esModuleInterop`,
   `allowSyntheticDefaultImports`, `skipLibCheck`). `tsconfig.build.json`
   is unchanged (still extends the local `tsconfig.json`).
2. **`package.json` dependencies** — added packages that Anvil's `src`
   imports but that were previously hoisted from the monorepo root and so
   were absent from Anvil's own manifest:
   `classnames`, `lodash` (+ dev `@types/lodash`), `@dnd-kit/utilities`,
   `@lezer/highlight`, `@tanstack/table-core`.

No component source was modified.

## Build & consumption

Build pipeline (from `package.json` scripts):
- `build:bundle` → `vite build` → ESM runtime bundle (`dist/esm/index.js`,
  `theme-config.js`), externalizing declared deps. **Builds clean.**
- `build:assets` → `scripts/copy-assets.mjs` → copies `theme.css`,
  `theme-palette.css`, `index.css`, and `font/*` into `dist/esm`.
- `build:types` → `tsc -p tsconfig.build.json` → emits `dist/esm/*.d.ts`.
  Emits a usable `index.d.ts` but still reports ~5 **cosmetic, types-only**
  errors in components this project does not use (ComboBox, Select,
  ChipInput, MessagePanel) caused by isolated-vs-monorepo dependency version
  drift. These do **not** affect the runtime bundle. Consumers set
  `skipLibCheck: true`.

The built **`dist/` is committed** here (minus sourcemaps) so a plain
`pnpm install` yields a runnable app without a separate Anvil build step.
`@dittolive/anvil`'s `exports` map serves everything from `dist/esm`
(`.` → `index.js`, `./theme.css`, `./theme-config`, `./index.css`, `./font/*`).

To rebuild after changing vendored source: `pnpm --filter @dittolive/anvil run build`.

## Removal plan (when the public package ships)

1. Delete `vendor/anvil/`.
2. Remove `vendor/anvil` from `pnpm-workspace.yaml`.
3. Change `apps/desktop`'s dependency `"@dittolive/anvil": "workspace:*"` to the
   published version range.
4. Drop the `!vendor/anvil/dist/` exception from the root `.gitignore`.
5. `pnpm install`.
