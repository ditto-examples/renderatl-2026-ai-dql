import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import { ArrowMarker, BandLabel, Box, C, MONO } from './diagramTheme'

/**
 * A generic, shareable version of the AI-generated execution-path diagrams.
 *
 * The real diagrams annotate every hop with the exact file and line it lives
 * at in the Ditto source, plus internal ticket numbers and branch names — none
 * of which can be shown publicly. This is written from scratch at the
 * conceptual level instead: the shape of the path, the volume flowing through
 * each stage, and where the time went. Deliberately contains NO source paths,
 * symbol names, ticket IDs, branch names, or competitor comparisons.
 *
 * Rendered as inline SVG on a fixed viewBox so it stays sharp on a projector
 * and scales to whatever room it's shown in. The panel keeps its own dark
 * palette in both light and dark theme — it reads as an artifact, not as page
 * furniture.
 */

const W = 1500
const H = 820

/* Stage 1 — how a query gets in. Three columns, arrows between. */
const ENTRY = [
  { title: 'App calls the SDK', sub: 'crosses into the native core', color: C.cyan },
  { title: 'Query engine', sub: 'parse → plan → execute', color: C.cyan },
  { title: 'Planner', sub: 'no index on the field → full scan', color: C.amber, hot: true },
]

/* Stage 2 — the operator pipeline, one async task per stage. */
const PIPELINE = [
  { title: 'Scan', sub: 'reads every document', hot: true, edge: '10,000 docs' },
  { title: 'Project', sub: 'materializes every field', hot: true, edge: '10,000 rows' },
  { title: 'Distinct', sub: 'dedupes at the very end', edge: '~5 values' },
  { title: 'Finalize', sub: 'strips internal keys', edge: '' },
  { title: 'Result', sub: 'serialized back to the app', edge: '' },
]

/* Stage 3 — what the trace exposed. */
const FINDINGS = [
  {
    title: 'Document deserialization',
    color: C.red,
    lines: ['full parse, then a walk of every field', 'paid once per document'],
    tag: '× 10,000',
  },
  {
    title: 'No covering index',
    color: C.amber,
    lines: ['the planner cannot skip the document read', 'so the whole collection is touched'],
    tag: '0 rows skipped',
  },
  {
    title: 'Pipeline overhead',
    color: C.violet,
    lines: ['a hand-off per document between stages', 'on a single core'],
    tag: 'per-item wake-ups',
  },
]

/* Stage 4 — where the time went, as a share of one traced run. */
const BUDGET = [
  { label: 'Parse + materialize documents', pct: 44, color: C.red },
  { label: 'Field walk (projection)', pct: 32, color: C.amber },
  { label: 'Pipeline hand-offs', pct: 10, color: C.violet },
  { label: 'Store read', pct: 10, color: C.green },
  { label: 'SDK boundary + misc', pct: 4, color: C.cyan },
]

/* geometry — laid out on the fixed viewBox above */
const PAD = 40
const CONTENT = W - PAD * 2 // 1420
const COL_W = (CONTENT - 56 * 2) / 3 // 3 columns, 56px arrow gutters
const colX = (i: number) => PAD + i * (COL_W + 56)

const PIPE_W = 248
const PIPE_GAP = 44
const pipeX = (i: number) => 42 + i * (PIPE_W + PIPE_GAP)

const BAR_MAX = 620 // px width at 100%

interface Props {
  className?: string
  /** Caller constrains the height; the viewBox ratio drives the width. */
  style?: CSSProperties
}

export function ExecutionPathDiagram({ className, style }: Props) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Generic query execution path: the query crosses the SDK boundary into the engine, the planner falls back to a full collection scan for want of an index, and an async operator pipeline scans and projects all ten thousand documents to return about five distinct values. Most of the time goes to parsing and materializing documents."
      className={`block rounded-2xl ${className ?? ''}`}
      style={{
        // Height-driven: slides are viewport-height constrained, and sizing an
        // inline SVG by width instead would letterbox inside its own frame.
        height: '58vh',
        width: 'auto',
        maxWidth: '100%',
        background: C.panel,
        border: '1px solid rgba(var(--deck-surface-rgb),0.12)',
        fontFamily: MONO,
        ...style,
      }}
    >
      <defs>
        <ArrowMarker id="ep-arrow" />
      </defs>

      {/* ── header ─────────────────────────────────────────── */}
      <text x={W / 2} y={44} textAnchor="middle" fontSize={26} fontWeight="bold" fill={C.text}>
        SELECT DISTINCT &lt;field&gt; FROM &lt;collection&gt;
      </text>
      <text x={W / 2} y={72} textAnchor="middle" fontSize={16} fill={C.muted}>
        one traced run · tablet · ~10,000 documents · ~5 distinct values returned
      </text>

      {/* ── 1 · the query gets in ──────────────────────────── */}
      <BandLabel x={PAD} y={116}>1 · the query gets in</BandLabel>
      {ENTRY.map((e, i) => (
        <g key={e.title}>
          <Box x={colX(i)} y={130} w={COL_W} h={78} color={e.color} hot={e.hot} />
          <text x={colX(i) + 20} y={166} fontSize={19} fontWeight="bold" fill={e.color}>
            {e.title}
          </text>
          <text x={colX(i) + 20} y={191} fontSize={15} fill={e.hot ? C.amber : C.muted}>
            {e.sub}
          </text>
          {i < ENTRY.length - 1 && (
            <line
              x1={colX(i) + COL_W + 12}
              y1={169}
              x2={colX(i + 1) - 10}
              y2={169}
              stroke={C.dim}
              strokeWidth={2}
              markerEnd="url(#ep-arrow)"
            />
          )}
        </g>
      ))}

      {/* ── 2 · the operator pipeline ──────────────────────── */}
      <BandLabel x={PAD} y={256}>2 · async pipeline · one task per stage</BandLabel>
      {PIPELINE.map((p, i) => {
        const color = p.hot ? C.red : C.cyan
        return (
          <g key={p.title}>
            <Box x={pipeX(i)} y={270} w={PIPE_W} h={96} color={color} hot={p.hot} />
            <text x={pipeX(i) + PIPE_W / 2} y={305} textAnchor="middle" fontSize={19} fontWeight="bold" fill={color}>
              {p.title}
            </text>
            <text x={pipeX(i) + PIPE_W / 2} y={336} textAnchor="middle" fontSize={14} fill={C.muted}>
              {p.sub}
            </text>
            {i < PIPELINE.length - 1 && (
              <>
                <line
                  x1={pipeX(i) + PIPE_W + 10}
                  y1={318}
                  x2={pipeX(i + 1) - 8}
                  y2={318}
                  stroke={C.dim}
                  strokeWidth={2}
                  markerEnd="url(#ep-arrow)"
                />
                {p.edge && (
                  <text
                    x={pipeX(i) + PIPE_W + PIPE_GAP / 2}
                    y={306}
                    textAnchor="middle"
                    fontSize={13}
                    fill={C.amber}
                  >
                    {p.edge}
                  </text>
                )}
              </>
            )}
          </g>
        )
      })}

      {/* ── 3 · what the trace exposed ─────────────────────── */}
      <BandLabel x={PAD} y={414}>3 · what the trace exposed</BandLabel>
      {FINDINGS.map((f, i) => (
        <g key={f.title}>
          <Box x={colX(i)} y={428} w={COL_W} h={124} color={f.color} hot />
          <text x={colX(i) + 20} y={462} fontSize={19} fontWeight="bold" fill={f.color}>
            {f.title}
          </text>
          {f.lines.map((l, li) => (
            <text key={l} x={colX(i) + 20} y={492 + li * 24} fontSize={14} fill={C.muted}>
              {l}
            </text>
          ))}
          <text x={colX(i) + 20} y={541} fontSize={15} fontWeight="bold" fill={f.color}>
            {f.tag}
          </text>
        </g>
      ))}

      {/* ── 4 · where the time went ────────────────────────── */}
      <BandLabel x={PAD} y={600}>4 · where the time went</BandLabel>
      {BUDGET.map((b, i) => {
        const y = 616 + i * 40
        return (
          <g key={b.label}>
            <motion.rect
              x={PAD}
              y={y}
              height={24}
              rx={4}
              fill={b.color}
              initial={{ width: 0 }}
              animate={{ width: (BAR_MAX * b.pct) / 100 }}
              transition={{ delay: 0.9 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.text
              x={PAD + (BAR_MAX * b.pct) / 100 + 16}
              y={y + 18}
              fontSize={16}
              fill={C.text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + i * 0.12, duration: 0.4 }}
            >
              <tspan fontWeight="bold" fill={b.color}>
                {b.pct}%
              </tspan>
              <tspan dx={10} fill={C.muted}>
                {b.label}
              </tspan>
            </motion.text>
          </g>
        )
      })}
    </svg>
  )
}
