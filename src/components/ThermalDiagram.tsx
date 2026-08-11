import type { CSSProperties } from 'react'
import { BandLabel, Box, C, MONO } from './diagramTheme'

/**
 * Why the benchmark numbers wouldn't hold still: the phone and tablet were
 * thermally throttling under the sustained load of a full benchmark run.
 *
 * Three bands: what one PR test costs the device, what the numbers did on
 * each class of hardware, and what fixed it.
 *
 * No plotted curves here on purpose — the real run data isn't in this repo,
 * and a drawn-from-memory chart in a talk about careful measurement is worse
 * than stating the finding plainly.
 */

const W = 1500
const H = 624
const PAD = 40

/* ── band 1 · the workload behind one PR test ─────────────── */
const CHIPS = [
  { x: 100, w: 240, title: '45 queries', sub: 'the benchmark suite' },
  { x: 380, w: 330, title: '60 iterations each', sub: '10 to warm up · 50 measured' },
  { x: 750, w: 230, title: '3 runs', sub: 'every PR under test' },
  { x: 1020, w: 380, title: '8,100 executions', sub: '+ 135 DQL profiles · per PR', accent: true },
]
const OPS = [
  { x: 360, label: '×' },
  { x: 730, label: '×' },
  { x: 1000, label: '=' },
]

/* ── band 2 · what the numbers did ────────────────────────── */
const VERDICTS = [
  {
    x: PAD,
    title: 'Pixel Tablet · Pixel 10',
    verdict: 'UNSTABLE',
    color: C.red,
    lines: [
      'standard deviation all over the place',
      'the spread swamped the change under test',
    ],
  },
  {
    x: 780,
    title: 'Cooled SoC board · no battery',
    verdict: 'REPEATABLE',
    color: C.green,
    lines: [
      'deviation tight enough to trust',
      'a difference meant the code changed',
    ],
  },
]

/* ── band 3 · what fixed it ───────────────────────────────────
   SVG text doesn't wrap, so each line is pre-broken to fit the card:
   at 15px the mono advance is 0.6em, so FIX_W minus padding leaves room
   for ~41 characters. Keep new copy under that. */
const FIXES = [
  {
    title: 'AI found the pattern',
    lines: ['the slowdown tracked elapsed time,', 'not the code under test'],
    color: C.cyan,
  },
  {
    title: 'Swap the hardware',
    lines: ['an SoC board with a desktop cooler,', 'no battery, its own case'],
    color: C.green,
  },
  {
    title: 'A week from Amazon',
    lines: ['after that, an unstable query', 'was ours — not the room’s'],
    color: C.green,
  },
]
const FIX_W = (W - PAD * 2 - 32 * 2) / 3
const fixX = (i: number) => PAD + i * (FIX_W + 32)

interface Props {
  className?: string
  style?: CSSProperties
}

export function ThermalDiagram({ className, style }: Props) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Thermal throttling on the benchmark hardware. One pull-request test runs 45 queries at 60 iterations each across 3 runs — 8,100 query executions plus 135 profiles. On the Pixel Tablet and Pixel 10 the results were unstable, with standard deviation all over the place and the spread swamping the change under test; on an actively cooled board with no battery the deviation was tight enough that a difference meant the code had changed. AI found that the slowdown tracked elapsed time rather than the code under test, and swapping to cooled hardware made unstable queries attributable to the code."
      className={`block w-full min-w-[46rem] rounded-2xl md:h-[45vh] md:w-auto md:max-w-full md:min-w-0 ${className ?? ''}`}
      style={{
        background: C.panel,
        border: '1px solid rgba(var(--deck-surface-rgb),0.12)',
        fontFamily: MONO,
        ...style,
      }}
    >
      {/* ── 1 · the load ───────────────────────────────────── */}
      <BandLabel x={PAD} y={30}>
        1 · what one PR test asks of the device
      </BandLabel>
      {CHIPS.map((c) => (
        <g key={c.title}>
          <Box
            x={c.x}
            y={44}
            w={c.w}
            h={76}
            color={c.accent ? C.amber : C.cyan}
            hot={c.accent}
          />
          <text
            x={c.x + c.w / 2}
            y={78}
            textAnchor="middle"
            fontSize={20}
            fontWeight="bold"
            fill={c.accent ? C.amber : C.text}
          >
            {c.title}
          </text>
          <text x={c.x + c.w / 2} y={103} textAnchor="middle" fontSize={15} fill={C.muted}>
            {c.sub}
          </text>
        </g>
      ))}
      {OPS.map((o) => (
        <text key={o.x} x={o.x + 20} y={90} textAnchor="middle" fontSize={22} fill={C.dim}>
          {o.label}
        </text>
      ))}

      {/* ── 2 · what the numbers did ───────────────────────── */}
      <BandLabel x={PAD} y={176}>
        2 · what the numbers did
      </BandLabel>
      {VERDICTS.map((v) => (
        <g key={v.title}>
          <Box x={v.x} y={192} w={680} h={230} color={v.color} hot />
          <text x={v.x + 32} y={228} fontSize={19} fontWeight="bold" fill={C.text}>
            {v.title}
          </text>
          <text x={v.x + 32} y={302} fontSize={42} fontWeight="bold" fill={v.color}>
            {v.verdict}
          </text>
          {v.lines.map((l, li) => (
            <text key={l} x={v.x + 32} y={352 + li * 28} fontSize={16} fill={C.muted}>
              {l}
            </text>
          ))}
        </g>
      ))}

      {/* ── 3 · what fixed it ──────────────────────────────── */}
      <BandLabel x={PAD} y={470}>
        3 · what fixed it
      </BandLabel>
      {FIXES.map((f, i) => (
        <g key={f.title}>
          <Box x={fixX(i)} y={484} w={FIX_W} h={110} color={f.color} />
          <text x={fixX(i) + 24} y={518} fontSize={18} fontWeight="bold" fill={f.color}>
            {f.title}
          </text>
          {f.lines.map((l, li) => (
            <text key={l} x={fixX(i) + 24} y={548 + li * 24} fontSize={15} fill={C.muted}>
              {l}
            </text>
          ))}
        </g>
      ))}
    </svg>
  )
}
