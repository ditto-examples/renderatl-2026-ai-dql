# RenderATL 2026 — Talk Outline

## Theory of the talk

I've spent a lot of time this past 3 months on a question: not whether we could
make it faster, but where the effort would pay off most — the quickest wins, at
the lowest risk of regression, for the least time spent changing and testing. I
went in confident we had real room to improve; what I didn't expect was just how
much. Following the investigation process I'll walk you through in this talk —
using AI to map our code paths into visual flows, then measuring them with tools
we built along the way — we took one of our heaviest queries, a COUNT over a
large dataset, from 2,253 ms down to 1.84 ms. I knew the ceiling was high. I was
genuinely, pleasantly surprised by how high. This session is the story of how we
got there, and how those numbers changed the way we ship.

**Constraints:** 20 minutes across **15 content screens + Home**. A flat average
per slide is the wrong way to plan this — dry runs showed the spread is huge.
Home and Who-am-I land in **under 30 seconds each**, while the diagram slides
carry 1.5–2 minutes on their own. Slide _count_ matters much less than slide
_weight_, and the fast slides are what funded adding `/8` and `/10` — they were
inserted partly for pacing, because the deck was finishing early.

Budget below sums to **~18 min**, leaving ~2 min of slack. Correct these against
your next dry run; the only measured figure so far is that the opening slides run
short.

| Route | Slide             | Budget | Notes                             |
| ----- | ----------------- | -----: | --------------------------------- |
| `/`   | Home              |    20s | title, then go                    |
| `/2`  | Who am I          |    25s | measured short — don't pad it     |
| `/3`  | The Problem       |    90s | hook + CEO ask + constraints      |
| `/4`  | What is Ditto     |    55s | "keep under a minute"             |
| `/5`  | Existing tools    |    45s | one credibility beat              |
| `/6`  | What I did w/ AI  |    40s | spine preview only                |
| `/7`  | Building Benchy   |   100s | skills + the suite                |
| `/8`  | Thermals          |    90s | the arithmetic, then the verdicts |
| `/9`  | Investigating     |    75s | instrument vs profile             |
| `/10` | Instrument anythg |    90s | the teaching slide                |
| `/11` | AI drew the map   |   100s | thesis beat — don't rush          |
| `/12` | How we fixed it   |    90s | war room + per-PR gating          |
| `/13` | Payoff            |    45s | let the count-down land           |
| `/14` | Whole board moved |    45s | one chart, one sentence           |
| `/15` | Worked vs didn't  |   110s | both lists, the honest part        |
| `/16` | Takeaways         |    75s | 3 points + closer                 |

**If a dry run still finishes early**, the cheapest additions in rough order:

1. **Mesh Lab as its own slide** — `mesh-lab.jpg` is currently a supporting image
   on `/5`; 50 devices (soon 100) is a strong visual that can hold its own beat.
2. **Memory, briefly** — currently parked as "memory's another talk". A single
   slide saying what memory did and why we deferred it is honest and buys ~45s.
3. **The unused portal captures** — `benchy-metrics.png` and
   `benchy-profiling.png` (the un-zoomed versions) are in `src/assets` and
   referenced nowhere; either is a Benchy Portal walkthrough beat.
4. **A live-ish demo or Q&A buffer** — better than stretching a slide that's
   already said its piece.

**The through-line (say it, prove it twice):** AI is powerful when it's grounded
in real, measured data and driven by someone with domain context — and it fails
when it isn't. Proven by the skepticism story (`/11`) and the "what didn't work"
list (`/15`).

## Design direction (Aug 2026 review)

Review feedback was that the deck read **word-heavy vs. imagery and diagrams
people can intuit while I talk**. The rules that came out of it:

- Every slide leads with one visual; prose is cut to a lede plus a single line.
- **Problem before primer** — the benchmark problem now lands _before_ "What is
  Ditto", so the hook comes first and the context arrives once the room wants it.
- Diagrams are built in-deck as SVG: sharp on a projector, scalable to any room,
  and nothing internal can leak. They keep their own dark panel in light and dark
  theme so they read as artifacts rather than page furniture.
- **Nothing invented as if measured.** Where the real data isn't at hand, state
  the finding in words instead of drawing a plausible-looking chart.

## About Ditto (reference)

Edge-based database that syncs via a mesh network; SQL-like query language (DQL).

- https://docs.ditto.live/home/about-ditto
- https://docs.ditto.live/key-concepts/mesh-networking
- https://docs.ditto.live/dql/dql

---

# The flow (route → slide)

All 16 screens are built. Route numbers are the source of truth — they match
App's `<Route>` table and `SlideNav`'s `ORDER`.

## `/` — Home / Title ✅

- Talk name + "From 2,253 ms to 1.84 ms". "Start the talk" → `/2`.
- Background: drifting-squares animation ported from the presence viewer
  (VS Code plugin at /Users/labeaaa/Developer/ditto-vsc-es).
- **The cold-open Slack message slide was cut.** The CEO beat it carried now
  lives on the Problem slide, which is a stronger home for it.

## `/2` — Who am I ✅

- Developer Advocate at Ditto; software engineer for 30 years.
- Couchbase (Principal Engineer & Developer Advocate); EY (Assistant Director /
  Technical Lead — Developer Experience/Gaia Platform, and Mobile Technologies).
- Shipped through every era: dot-com, Y2K, Web 2.0, mobile, cloud — now AI.

## `/3` — The Problem: "Two benchmarks. Both bad." ✅

- **Moved ahead of the Ditto primer** — this is the hook.
- A prospect benchmarked Ditto on Android: **query performance** and **memory
  usage** (inject a document every 250 ms, observe it on another device).
- **The CEO asked me to look into it — he thought maybe they were using our SDK
  wrong.** On-slide, marked with an accent rule. That theory is the hypothesis
  the rest of the talk tests.
- Constraints: we got the test _rules_, not the dataset; I had the weekend and an
  answer was due Monday; the plan was query first, memory later.
- Closer: "First problem: I had no way to even **measure** this."
- Spoken color: planned it Thursday afternoon with my boss Skyler; needed data
  shaped similarly (MongoDB **MFlix** sample set) and his **45 queries** against
  it; needed to build the SDK from source, target any SDK version, and compare
  against other engines.

## `/4` — What is Ditto ✅

- **Hero is the architecture diagram from our own docs** (`bp.jpg`, vendored to
  `src/assets/ditto-blueprint.jpg` so the talk doesn't depend on the CDN).
- Prose cut to one line; the four pillars are short labels only — edge-native
  database · peer-to-peer mesh · CRDTs · DQL.
- The Rainbow Connection is now a one-line caption: the docs image carries its
  own transport legend, so the old colored-dot list was redundant.
- Kicker is "Backing up a second" — it's no longer the first content slide.
- Keep under a minute.

## `/5` — "Don't we already have tools?" ✅

- Yes — **Ditto Test Protocol (DTP)**: complex tooling that tests the SDK in the
  **Mesh Lab** (50 devices, soon 100).
- But DTP tests **networking/sync, not the query engine**, and it's very
  opinionated / Ditto-only — I couldn't compare against SQLite.
- So I was going to have to build something.
- (Credibility beat: we have serious tooling — just not for this.)

## `/6` — What I did with AI (the spine) ✅

- Two buckets, previewed up front so the payoff is clear:
  - **Build** — AI as a force multiplier for infrastructure.
  - **Investigate** — AI as an analysis partner, grounded in real data.
- "Two very different jobs. AI was far better at one than the other."

## `/7` — Building Benchy ✅

- **Name it clearly up front:** the whole suite is **Benchy** — after the little
  boat 3D printers print to benchmark themselves.
- **The real unlock (lead with this):** custom **Skill files** that taught the AI
  not just how to do a task, but how to write **Python scripts to automate** it,
  so the work became repeatable rather than one-off.
- Built custom Ditto SDK versions on the fly for specific processor types.
- The suite could: swap SDK versions and platforms, hold a library of benchmarks
  across sample datasets, test query performance, instrument the app, profile
  statements across engine versions, produce flame graphs, and surface all of it
  in **Benchy Portal**.
- First version came together in a few hours; I code-reviewed and fixed a few
  things.
- Spoken color: gradle + adapter pattern to swap SDK/platform; Android-only focus,
  since that's what the prospect used.

## `/8` — Thermals: "Same code. Different numbers." ✅ NEW

- The step the deck was skipping: **the bench itself wasn't trustworthy.**
- Started on a **Pixel Tablet** and a **Pixel 10**, picked as real representative
  hardware. The numbers wouldn't hold still.
- Diagram band 1 — what one PR test asks of the device: **45 queries × 60
  iterations each (10 to warm up, 50 measured) × 3 runs = 8,100 executions + 135
  DQL profiles.**
- Diagram band 2 — what the numbers did. **UNSTABLE** on the handsets (standard
  deviation all over the place; the spread swamped the change under test) vs.
  **REPEATABLE** on cooled hardware (a difference meant the code changed). _No
  chart here on purpose_ — see "nothing invented as if measured" above.
- Diagram band 3 — what fixed it: AI found the slowdown tracked **elapsed time,
  not the code under test**; swap to an SoC board with a desktop-grade cooler and
  no battery; a week from Amazon.
- Hardware named on-slide: **Orange Pi 6 Plus, Radxa, Minisforum MS-R1.**
- Spoken color: we chased this for a while first, including cutting the dataset
  size down, before AI named it as thermal throttling.
- Kicker is `01 · Build` — it's about trusting the bench, not investigating yet.

## `/9` — Investigating with AI (measure) ✅

- Friday night. I'm not a query engineer and I'm new to the engine's codebase.
  Answer due Monday. Can't ask the team to explain the whole engine.
- Two ways to see where the time went:
  1. **Instrument** — Perfetto traces (Android standard) show where time is spent.
  2. **Profile** — DQL profiling pinpoints what the engine spends time on.
- **Visual:** `benchy-profiling-zoom.png` — Benchy Portal's side-by-side
  execution-plan comparison (full scan of 400 rows → idScan returns 1; 32 ms →
  433 µs).

## `/10` — Instrument anything ✅ NEW

- The "how you'd do this yourself" slide, for a developer who has never
  instrumented anything. **Entirely generic — nothing Ditto-specific.**
- Band 1: the pattern — `start = now()` / _the work you care about_ /
  `record("load", now() − start)` — plus where probes pay off: entry point, every
  boundary, inside per-item loops, the function you already suspect.
- Band 2: what you get back — a waterfall where **width = time spent** and
  **indent = the call stack**. That's the intuition most people are missing.
- Band 3: the loop, with AI doing the tedious parts — ask where to measure, add
  the probes, run the real thing once, hand the trace back.
- Closer: your stack already ships this (OpenTelemetry, Perfetto, Xcode
  Instruments, the browser's performance panel), and it works the same on an API
  call, a screen, or a codebase you've never opened.

## `/11` — "AI drew the map" (the diagrams) ✅

- **First AI tip:** have AI turn each Perfetto trace into a **code-flow diagram**
  so I could see the whole path at once.
- **The skepticism story (thesis beat):** the team assumed I'd had AI _scan the
  code_. I hadn't — the diagrams came from **real traces**. That's when they
  trusted them. → Trust came from real data.
- **InfoSec — settled.** The real diagram (`distinct-values-ditto.png`) carries
  source paths, symbol names, line numbers, ticket IDs, commit hashes, a branch
  name, and a named-competitor benchmark. Not shippable, and no source artifact
  ships. In its place, a generic execution-path diagram **written from scratch**
  at the conceptual level: query gets in → async pipeline → what the trace
  exposed → where the time went. The time budget is shown as **percentages rather
  than absolute milliseconds**, and the competitor comparison is dropped
  entirely. The caption says the real ones name every call in the path, down to
  the line.

## `/12` — How we fixed it ✅

- "It became a team sport" — a war room of query, SDK, and wider engineering.
- We pulled improvements already on the roadmap forward, faster, with AI:
  - the new **Archive** encoding engine replacing CBOR
  - the query team changed how tombstone metadata is stored
  - the query team changed the internal storage/schema
- **Every PR went through Benchy before merge**, managed by AI reading a text
  file of PR and commit IDs while everything ran in my local mesh lab.

## `/13` — The payoff: 2,253 ms → 1.84 ms ✅

- The `count_all` aggregation over the POS dataset.
- Animated count-down; **1,226×** faster (portal shows 1,225.88×). "Over two
  seconds → real time."
- The specific fixes stay generic — no internals shown.

## `/14` — The whole board moved ✅

- Not just one query: the same fixes lifted the entire aggregation workload.
- Hero: `count-benchmarks.png` (cropped — no build labels, versions, or hardware
  codenames). `count_all` led at 1,226×; every other aggregation got faster too.

## `/15` — What worked vs what didn't ✅

- **Worked:** building tooling fast (SDK-from-source, harness, Benchy Portal,
  flame graphs); drawing code-flow diagrams from real traces; narrowing suspect
  code from profiling data; researching hardware issues (thermal throttling).
- **Didn't work** (AI was only "OK" at investigating): lacked context for _why_
  code worked the way it did — flagged intentional logging as "bad"; a team of
  subagents trying speculative caching ideas we couldn't validate; non-experts
  "vibe-coding" fixes to a query engine; asking AI to fully understand DQL from
  the source alone.
- The pattern: grounded + expert-driven = wins; ungrounded/speculative = misses.

## `/16` — Takeaways / how it changed how we ship ✅

- Heading: **Measure. Don't guess.**
- 1. **Instrument first** — AI is only as good as the data you feed it.
- 2. **Give AI the context** — AI can investigate too, but only with the same
     understanding the authors have; in big codebases, invest in docs written for
     AI.
- 3. **Make performance a habit** — every release now runs through Benchy before
     it ships.
- Closer: "The regression that ate a weekend? We'd catch it now — before it
  ships." + Thank you / Aaron LaBeau · Developer Advocate, Ditto.

---

# Deck mechanics (for whoever edits this next)

- **Inserting a slide is not a one-line change.** Order lives in App's `<Route>`
  table, in `SlideNav`'s `ORDER`, and in the arrow-key handler of _every_ slide
  from the insertion point on. Renumber all three or navigation silently skips
  the new slide.
- **Publishing:** any push to `main` deploys to GitHub Pages via
  `.github/workflows/deploy.yml` →
  https://ditto-examples.github.io/renderatl-2026-ai-dql/ — the repo is public,
  so anything committed here is public.
- **Phones get a reading mode:** the page scrolls (presentation mode is
  fixed-viewport at ≥768px), type runs slightly larger than projector size, nav
  collapses to one pill bottom-left plus swipe, and wide diagrams pan
  horizontally instead of shrinking to unreadable.
- **SVG text does not wrap.** Copy that outgrows its box silently draws outside
  it. Each diagram notes its per-card character budget next to the copy — keep
  new text under it.

# Parked (not building slides for these)

- Deep memory investigation — one sentence max ("memory's another talk").
- DTP internals — one credibility beat is enough.
