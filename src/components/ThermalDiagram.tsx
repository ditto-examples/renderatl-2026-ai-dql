import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import { BandLabel, Box, C, MONO } from './diagramTheme'

/**
 * Why the benchmark numbers wouldn't hold still: the phone and tablet were
 * thermally throttling under the sustained load of a full benchmark run.
 *
 * Three bands: what one PR test costs the device, the same query traced on a
 * throttling handset vs. an actively cooled board, and what fixed it.
 *
 * The two curves are the SHAPE of the effect, not captured measurements —
 * labelled as such in the diagram, and drawn from fixed arrays so the picture
 * is identical every render.
 */

const W = 1500
const H = 720
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

/* ── band 2 · the two curves ──────────────────────────────── */
const VMIN = 38
const VMAX = 96
const PLOT_W = 570
const PLOT_H = 200
const PANEL_Y = 214
const PANEL_H = 330

// Throttling handset: creeps upward and gets noisier as the SoC heats.
const THROTTLED = [
  42, 41, 43, 42, 44, 43, 45, 46, 44, 47, 49, 48, 52, 50, 55, 53, 58, 61, 57, 64,
  62, 68, 66, 72, 70, 69, 75, 73, 78, 76, 82, 80, 79, 85, 83, 88, 86, 90, 87, 92,
]
// Actively cooled board: same query, same number.
const COOLED = [
  42, 41, 42, 43, 42, 41, 42, 42, 43, 42, 41, 42, 43, 42, 42, 41, 42, 43, 42, 42,
  43, 41, 42, 42, 43, 42, 42, 41, 42, 43, 42, 42, 41, 42, 42, 43, 42, 41, 42, 42,
]

const plotX = (panelX: number) => panelX + 70
const plotTop = () => PANEL_Y + 76
const yFor = (v: number) =>
  plotTop() + (1 - (v - VMIN) / (VMAX - VMIN)) * PLOT_H
const pointsFor = (vals: number[], panelX: number) =>
  vals
    .map((v, i) => `${plotX(panelX) + (i * PLOT_W) / (vals.length - 1)},${yFor(v)}`)
    .join(' ')

/* ── band 3 · what fixed it ───────────────────────────────── */
const FIXES = [
  {
    title: 'AI found the pattern',
    line: 'the slowdown tracked elapsed time, not the code under test',
    color: C.cyan,
  },
  {
    title: 'Swap the hardware',
    line: 'an SoC board with a desktop cooler, no battery, its own case',
    color: C.green,
  },
  {
    title: 'A week from Amazon',
    line: 'after that, an unstable query was ours — not the room’s',
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
      aria-label="Thermal throttling on the benchmark hardware. One pull-request test runs 45 queries at 60 iterations each across 3 runs — 8,100 query executions plus 135 profiles. On a phone or tablet the same query gets steadily slower and noisier as the device heats; on an actively cooled board with no battery it returns the same number every time. AI found that the slowdown tracked elapsed time rather than the code under test, and swapping to cooled hardware made unstable queries attributable to the code."
      className={`block w-full min-w-[46rem] rounded-2xl md:h-[58vh] md:w-auto md:max-w-full md:min-w-0 ${className ?? ''}`}
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
        <text
          key={o.x}
          x={o.x + 20}
          y={90}
          textAnchor="middle"
          fontSize={22}
          fill={C.dim}
        >
          {o.label}
        </text>
      ))}

      {/* ── 2 · the same query, over and over ──────────────── */}
      <BandLabel x={PAD} y={196}>
        2 · the same query, run over and over
      </BandLabel>

      <Chart
        panelX={PAD}
        title="Pixel Tablet · Pixel 10"
        sub="throttles under sustained load"
        color={C.red}
        values={THROTTLED}
        note="≈2× slower by the end of a run"
      />
      <Chart
        panelX={780}
        title="Cooled SoC board · no battery"
        sub="same query, same number"
        color={C.green}
        values={COOLED}
        note="flat for the whole run"
      />

      <text x={W - PAD} y={566} textAnchor="end" fontSize={13} fill={C.dim}>
        shape of the effect — illustrative, not captured measurements
      </text>

      {/* ── 3 · what fixed it ──────────────────────────────── */}
      <BandLabel x={PAD} y={600}>
        3 · what fixed it
      </BandLabel>
      {FIXES.map((f, i) => (
        <g key={f.title}>
          <Box x={fixX(i)} y={614} w={FIX_W} h={82} color={f.color} />
          <text x={fixX(i) + 20} y={646} fontSize={18} fontWeight="bold" fill={f.color}>
            {f.title}
          </text>
          <text x={fixX(i) + 20} y={674} fontSize={15} fill={C.muted}>
            {f.line}
          </text>
        </g>
      ))}
    </svg>
  )
}

function Chart({
  panelX,
  title,
  sub,
  color,
  values,
  note,
}: {
  panelX: number
  title: string
  sub: string
  color: string
  values: number[]
  note: string
}) {
  const x0 = plotX(panelX)
  const top = plotTop()
  const bottom = top + PLOT_H
  const baseline = yFor(values[0])

  return (
    <g>
      <Box x={panelX} y={PANEL_Y} w={680} h={PANEL_H} color={color} />
      <text x={panelX + 24} y={PANEL_Y + 34} fontSize={19} fontWeight="bold" fill={color}>
        {title}
      </text>
      <text x={panelX + 24} y={PANEL_Y + 58} fontSize={15} fill={C.muted}>
        {sub}
      </text>

      {/* axes */}
      <line x1={x0} y1={top} x2={x0} y2={bottom} stroke="rgba(255,255,255,0.12)" />
      <line x1={x0} y1={bottom} x2={x0 + PLOT_W} y2={bottom} stroke="rgba(255,255,255,0.12)" />
      {/* where the run started, for comparison across both charts */}
      <line
        x1={x0}
        y1={baseline}
        x2={x0 + PLOT_W}
        y2={baseline}
        stroke="rgba(255,255,255,0.18)"
        strokeDasharray="5 6"
      />

      <text
        transform={`translate(${panelX + 34}, ${top + PLOT_H / 2}) rotate(-90)`}
        textAnchor="middle"
        fontSize={13}
        fill={C.dim}
      >
        query time
      </text>
      <text x={x0 + PLOT_W} y={bottom + 26} textAnchor="end" fontSize={13} fill={C.dim}>
        iterations →
      </text>

      <motion.polyline
        points={pointsFor(values, panelX)}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.1, ease: 'easeOut' }}
      />

      <text x={x0 + PLOT_W} y={top - 8} textAnchor="end" fontSize={15} fill={color}>
        {note}
      </text>
    </g>
  )
}
