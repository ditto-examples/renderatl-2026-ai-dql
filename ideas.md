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

**Constraints:** 20 minutes. ~1–2 min/slide → ~12 slides. Be concise.

**The through-line (say it, prove it twice):** AI is powerful when it's grounded
in real, measured data and driven by someone with domain context — and it fails
when it isn't. Proven by the skepticism story (slide 9) and the "what didn't
work" list (slide 11).

## About Ditto (reference)

Edge-based database that syncs via a mesh network; SQL-like query language (DQL).
- https://docs.ditto.live/home/about-ditto
- https://docs.ditto.live/key-concepts/mesh-networking
- https://docs.ditto.live/dql/dql

---

# The 12-slide flow

## Slide 1 — Home / Title  ✅ built

- Name of the talk + brief description. "Start the talk" → cold open.
- Background: drifting-squares animation ported from the presence viewer
  (VS Code plugin at /Users/labeaaa/Developer/ditto-vsc-es).

## Slide 2 — Cold open (the Slack message)  ✅ built

- Adam (CEO) DMs me: a prospect benchmarked us on Android; query performance and
  memory look bad; figure out if the numbers are even right, and if so, fix it.
  It was a Thursday.
- Frame the talk: how I investigated, what I found, how I fixed it — and how I
  used AI at every step.

## Slide 3 — Who am I  ✅ built

- Developer Advocate at Ditto; software engineer for 30 years.
- Couchbase (Principal Engineer & Developer Advocate); EY (Assistant Director /
  Technical Lead — Developer Experience/Gaia Platform, and Mobile Technologies).
- Shipped through every era: dot-com, Y2K, Web 2.0, mobile, cloud — now AI.

## Slide 4 — What is Ditto  ✅ built

- Mobile database with edge connectivity and CRDTs built in; the only one to pair
  peer-to-peer edge connectivity with CRDTs.
- Four pillars + the Rainbow Connection (transport multiplexer) callout.
- Keep under a minute.

## Slide 5 — The Problem

- The prospect benchmarked two things:
  - **Query performance.**
  - **Memory usage** — inject a document every 250 ms and observe it on another
    device via our observer API.
  - Report: query performance significantly slower than expected; memory spiking.
- Thursday afternoon, planned with my boss Skyler. The report only gave us the
  *rules* they tested — not the dataset.
- Decision: **tackle query performance first**, deal with memory once we had a
  grip on queries.
- What I needed to get started:
  - Data shaped similarly (not the exact data). Skyler had used the MongoDB
    **MFlix** sample dataset for a small JS benchmark tool.
  - His **45 queries** against MFlix — reuse them on Android.
  - Ability to: build the SDK from source on the fly; build against any Ditto SDK
    version (features differ, e.g. indexing); test against other engines (SQLite);
    run query-engine profiling and capture results.

## Slide 6 — "Don't we already have tools?"

- Yes — **Ditto Test Protocol (DTP)**: complex tooling that tests the SDK in the
  **Mesh Lab** (50 devices, soon 100).
- But DTP tests **networking/sync, not the query engine**, and it's very
  opinionated / Ditto-only — I couldn't compare against SQLite.
- So I was going to have to build something.
- (Credibility beat: we have serious tooling — just not for this.)

## Slide 7 — What I did with AI (the spine)

- Two buckets, previewed up front so the payoff is clear:
  - **Build** — AI as a force multiplier for infrastructure.
  - **Investigate** — AI as an analysis partner, grounded in real data.

## Slide 8 — Building the harness with AI

- **Name it clearly up front:** I call the whole suite **Benchy** — after the
  little boat 3D printers print to benchmark themselves. (I'll say "Benchy" a lot;
  it's the umbrella name for everything I built.) The name is already introduced
  on Slide 7's Build panel.
- **The real unlock (lead with this):** I wrote custom **Skill files** that
  taught the AI not just how to do a task, but how to write **Python scripts to
  automate** that task — so the work became repeatable, not one-off. This is why
  AI acted as a force multiplier.
- Used AI + agent skills to build **custom Ditto SDK versions on the fly** for
  specific processor types to run in my lab.
- Built a suite of scripts + apps that could:
  - dynamically switch Ditto SDK versions (or test other platforms)
  - a library of benchmarks (data + queries) across industry sample datasets
  - test query performance
  - instrument the entire application
  - profile query statements and compare across Query Engine versions
  - produce flame graphs
  - **"Benchy Portal"** — a dashboard showing Query and Memory (AI cut build time)
- First version came together in a few hours; I code-reviewed and fixed a few
  things. Ran the first benchmarks on local physical hardware — the numbers
  weren't great.
- Spoken color: gradle + adapter pattern to swap SDK/platform; Android-only focus
  (that's what the prospect used); AI researched a fix for **thermal throttling**
  on the bench hardware.

## Slide 9 — Investigating with AI (measure)

- Friday night. I'm not a query engineer and I'm new to the engine's codebase.
  Answer due Monday. Can't ask the team to explain the whole engine.
- Two ways to see where the time went:
  1. **Instrument** — Perfetto traces (Android standard) show where time is spent.
  2. **Profile** — DQL profiling pinpoints what the engine spends time on.
- **Visual:** `benchy-profiling-zoom.png` — Benchy Portal's side-by-side
  execution-plan comparison (full scan of 400 rows → idScan returns 1; 32 ms →
  433 µs). The artifact that helped the query team pinpoint problems.

## Slide 9b ("AI drew the map") — the diagrams

- **First AI tip:** have AI turn each Perfetto trace into a **code-flow diagram**
  so I could see the whole path at once.
- **The skepticism story (thesis beat):** the team assumed I'd had AI *scan the
  code*. I hadn't — the diagrams came from **real traces**. That's when they
  trusted them. → Trust came from real data.
- **InfoSec note:** the real AI diagram (`distinct-values-ditto.png`) exposes file
  paths, function names, line numbers, and branch/ticket IDs — NOT shippable.
  Decision: show a **clean, generic summary diagram** built in-deck (industry-
  standard stages only: FFI → engine → planner → scan → project → distinct →
  result, with hotspots), and say verbally that the real ones are far more
  detailed. No source artifact ships.

## Slide 10 - How we fixed it

- Put a war room together of engineers including the query team, members from the SDK team, and members from other parts of engineering
- We looked at improvements we were already working on and tried to get those done faster by using AI
  - We knew we had a new encoding engine called Archive that would be a lot faster than the old one CBOR.
- The query team changed the way we store tombstone metadata
- The query team changed the internal storage/schema on how we stored data
- Every PR went through the benchy tool before we even merged it so we could see the performance changes as soon as possible - this was managed by AI reading a text file of PR and commit Ids as everything was running in my local mesh lab

## Slide 11 — The payoff: 2,253 ms → 1.84 ms

- The `count_all` aggregation over the POS dataset.
- Animated count-down from 2,253 ms to 1.84 ms; **1,226×** faster
  (portal shows 1,225.88×). "Over two seconds → real time."
- The specific fixes were covered generically on Slide 10 (no internals shown).

## Slide 12 — The whole board moved

- Not just one query: the same fixes lifted the entire aggregation workload.
- Hero: `count-benchmarks.png` (cropped — no build labels / versions / hardware
  codenames). `count_all` led at 1,226×; every other aggregation got faster too.

## Slide 13 — What worked vs what didn't with AI

- **Worked:**
  - building tooling fast (SDK-from-source, harness, Benchy Portal, flame graphs)
  - drawing code-flow diagrams from real traces
  - narrowing down suspect code from profiling data
  - researching hardware issues (thermal throttling)
- **Didn't work (AI was only "OK" at investigating):**
  - lacked context for *why* code worked the way it did — e.g. flagged
    intentional logging code as "bad" when it wasn't
  - a team of subagents trying speculative caching ideas we couldn't validate
  - non-experts "vibe-coding" fixes to a query engine
  - asking AI to fully understand DQL from the source alone
- The pattern: grounded + expert-driven = wins; ungrounded/speculative = misses.
- This is the payoff of the "(More on that later.)" teaser on Slide 7.

## Slide 14 — Takeaways / how it changed how we ship

- Heading: **Measure. Don't guess.**
- 1. **Instrument first** — AI is only as good as the data you feed it.
- 2. **Give AI the context** — AI can investigate too, but only with the same
  understanding the authors have; in big codebases, invest in docs written for AI.
- 3. **Make performance a habit** — every release now runs through Benchy before
  it ships. (This is the "how it changed how we ship.")
- Closer: "The regression that ate a weekend? We'd catch it now — before it
  ships." + Thank you / Aaron LaBeau · Developer Advocate, Ditto.

---

# Parked (not building slides for these)

- Deep memory investigation — one sentence max ("memory's another talk").
- DTP internals — one credibility beat is enough.
