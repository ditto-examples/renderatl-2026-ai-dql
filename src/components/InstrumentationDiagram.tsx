import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import { ArrowMarker, BandLabel, Box, C, MONO } from './diagramTheme'

/**
 * "What instrumentation is" — for a developer who has never done it.
 *
 * Left: the pattern (mark a start, do the work, record the elapsed time) and
 * where the marks are worth putting. Right: what you get back — a waterfall
 * where bar width is time and indentation is the call stack. Bottom: the loop
 * for doing it with AI.
 *
 * Entirely generic: a made-up request path, no Ditto specifics.
 */

const W = 1500
const H = 760

const PAD = 40
const PANEL_W = 680
const LEFT_X = PAD
const RIGHT_X = PAD + PANEL_W + 60 // 780
const PANEL_Y = 56
const PANEL_H = 444

/* Left — where the probes go. */
const PLACES = [
  'entry point — a request, a tap, a screen load',
  'every boundary — network, disk, database',
  'inside loops that run once per item',
  'the one function you already suspect',
]

/* Right — the waterfall you get back. Times are illustrative. */
const TOTAL_MS = 240
const SPANS = [
  { label: 'request', indent: 0, start: 0, dur: 240, color: C.cyan },
  { label: 'auth', indent: 1, start: 4, dur: 12, color: C.green },
  { label: 'load', indent: 1, start: 18, dur: 180, color: C.amber },
  { label: 'query', indent: 2, start: 30, dur: 140, color: C.red, hot: true },
  { label: 'render', indent: 1, start: 200, dur: 40, color: C.violet },
]

/* Bottom — the loop. */
const STEPS = [
  {
    n: '1',
    title: 'Ask where to measure',
    line1: 'hand it the code, get back the',
    line2: 'boundaries worth timing',
  },
  {
    n: '2',
    title: 'Add the probes',
    line1: 'a few lines per layer —',
    line2: 'no rewrite, no new framework',
  },
  {
    n: '3',
    title: 'Run the real thing once',
    line1: 'the slow screen, the flaky call,',
    line2: 'the path you want to learn',
  },
  {
    n: '4',
    title: 'Hand the trace back',
    line1: 'get a map of the path and',
    line2: 'where the time actually went',
  },
]

/* waterfall geometry */
const BAR_X = 1104 // bars start here
const BAR_SPAN = 336 // px for the full run
const px = (ms: number) => (ms / TOTAL_MS) * BAR_SPAN

/* step-card geometry */
const CARD_W = (W - PAD * 2 - 32 * 3) / 4 // 331
const cardX = (i: number) => PAD + i * (CARD_W + 32)

interface Props {
  className?: string
  style?: CSSProperties
}

export function InstrumentationDiagram({ className, style }: Props) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Instrumentation explained: mark a start time, run the work, record the elapsed time — placed at entry points, boundaries, loops and suspect functions. What you get back is a waterfall where bar width is time spent and indentation is the call stack, showing a database query taking most of a request. Below, the four-step loop for doing it with AI: ask where to measure, add the probes, run the real scenario once, then hand the trace back for a map."
      // Height-driven in presentation mode; on phones it keeps a legible
      // minimum width and pans inside its wrapper. See ExecutionPathDiagram.
      className={`block w-full min-w-[46rem] rounded-2xl md:h-[56vh] md:w-auto md:max-w-full md:min-w-0 ${className ?? ''}`}
      style={{
        background: C.panel,
        border: '1px solid rgba(var(--deck-surface-rgb),0.12)',
        fontFamily: MONO,
        ...style,
      }}
    >
      <defs>
        <ArrowMarker id="instr-arrow" />
      </defs>

      {/* ── left panel · the probes ─────────────────────────── */}
      <BandLabel x={LEFT_X} y={38}>
        1 · put probes around the work
      </BandLabel>
      <Box x={LEFT_X} y={PANEL_Y} w={PANEL_W} h={PANEL_H} color={C.cyan} />

      {/* the pattern, as three lines of pseudo-code */}
      <rect
        x={LEFT_X + 24}
        y={PANEL_Y + 28}
        width={PANEL_W - 48}
        height={150}
        rx={8}
        fill="rgba(0,0,0,0.35)"
        stroke="rgba(255,255,255,0.08)"
      />
      <circle cx={LEFT_X + 48} cy={PANEL_Y + 66} r={5} fill={C.cyan} />
      <text x={LEFT_X + 68} y={PANEL_Y + 72} fontSize={20} fill={C.cyan}>
        start = now()
      </text>
      <text x={LEFT_X + 68} y={PANEL_Y + 116} fontSize={20} fill={C.muted}>
        … the work you care about …
      </text>
      <circle cx={LEFT_X + 48} cy={PANEL_Y + 154} r={5} fill={C.cyan} />
      <text x={LEFT_X + 68} y={PANEL_Y + 160} fontSize={20} fill={C.cyan}>
        record("load", now() − start)
      </text>

      <text x={LEFT_X + 24} y={PANEL_Y + 224} fontSize={17} fontWeight="bold" fill={C.text}>
        Where it pays to put them
      </text>
      {PLACES.map((p, i) => (
        <g key={p}>
          <circle cx={LEFT_X + 32} cy={PANEL_Y + 253 + i * 38} r={3.5} fill={C.dim} />
          <text x={LEFT_X + 50} y={PANEL_Y + 259 + i * 38} fontSize={17} fill={C.muted}>
            {p}
          </text>
        </g>
      ))}

      {/* run it → */}
      <line
        x1={LEFT_X + PANEL_W + 12}
        y1={PANEL_Y + PANEL_H / 2}
        x2={RIGHT_X - 10}
        y2={PANEL_Y + PANEL_H / 2}
        stroke={C.dim}
        strokeWidth={2}
        markerEnd="url(#instr-arrow)"
      />

      {/* ── right panel · the timeline ──────────────────────── */}
      <BandLabel x={RIGHT_X} y={38}>
        2 · read the timeline it gives you
      </BandLabel>
      <Box x={RIGHT_X} y={PANEL_Y} w={PANEL_W} h={PANEL_H} color={C.cyan} />

      <text x={RIGHT_X + 24} y={PANEL_Y + 40} fontSize={17} fontWeight="bold" fill={C.text}>
        one run · 240 ms end to end
      </text>

      {SPANS.map((s, i) => {
        const y = PANEL_Y + 74 + i * 62
        return (
          <g key={s.label}>
            {/* indent = depth in the call stack */}
            <text
              x={RIGHT_X + 24 + s.indent * 22}
              y={y + 19}
              fontSize={17}
              fill={s.hot ? s.color : C.text}
            >
              {s.label}
            </text>
            <text x={BAR_X - 16} y={y + 19} fontSize={15} textAnchor="end" fill={C.muted}>
              {s.dur} ms
            </text>
            <motion.rect
              x={BAR_X + px(s.start)}
              y={y}
              height={26}
              rx={4}
              fill={s.color}
              opacity={s.hot ? 1 : 0.55}
              initial={{ width: 0 }}
              animate={{ width: px(s.dur) }}
              transition={{ delay: 0.5 + i * 0.13, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </g>
        )
      })}

      <text x={RIGHT_X + 24} y={PANEL_Y + 424} fontSize={15} fill={C.dim}>
        <tspan fill={C.red}>width = time spent</tspan>
        <tspan dx={16}>·</tspan>
        <tspan dx={16}>indent = the call stack</tspan>
      </text>

      {/* ── bottom band · the loop ──────────────────────────── */}
      <BandLabel x={PAD} y={540}>
        3 · the loop, with AI doing the tedious parts
      </BandLabel>
      {STEPS.map((s, i) => (
        <g key={s.n}>
          <Box x={cardX(i)} y={556} w={CARD_W} h={140} color={C.cyan} />
          <circle cx={cardX(i) + 38} cy={590} r={15} fill={`${C.cyan}22`} stroke={`${C.cyan}66`} />
          <text
            x={cardX(i) + 38}
            y={596}
            textAnchor="middle"
            fontSize={16}
            fontWeight="bold"
            fill={C.cyan}
          >
            {s.n}
          </text>
          <text x={cardX(i) + 64} y={596} fontSize={18} fontWeight="bold" fill={C.text}>
            {s.title}
          </text>
          <text x={cardX(i) + 24} y={640} fontSize={15} fill={C.muted}>
            {s.line1}
          </text>
          <text x={cardX(i) + 24} y={664} fontSize={15} fill={C.muted}>
            {s.line2}
          </text>
        </g>
      ))}
    </svg>
  )
}
