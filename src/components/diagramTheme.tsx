/**
 * Shared palette and primitives for the deck's hand-built SVG diagrams
 * (ExecutionPathDiagram, InstrumentationDiagram).
 *
 * These render as artifacts rather than page furniture: they keep their own
 * dark panel in both light and dark theme, in the palette of the tooling the
 * real traces came out of.
 */

export const C = {
  panel: '#0b0e13',
  text: '#e6edf3',
  muted: '#8b949e',
  dim: '#6e7681',
  cyan: '#39c5cf',
  green: '#3fb950',
  amber: '#d29922',
  red: '#f85149',
  violet: '#a371f7',
}

export const MONO = "'IBM Plex Mono', ui-monospace, monospace"

/** Small letterspaced band label — the numbered beats down a diagram. */
export function BandLabel({
  x,
  y,
  children,
}: {
  x: number
  y: number
  children: string
}) {
  return (
    <text x={x} y={y} fontSize={13} letterSpacing={2} fill={C.dim}>
      {children.toUpperCase()}
    </text>
  )
}

/** Rounded container. `hot` tints it with its own color to mark a hot path. */
export function Box({
  x,
  y,
  w,
  h,
  color,
  hot,
}: {
  x: number
  y: number
  w: number
  h: number
  color: string
  hot?: boolean
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={10}
      fill={hot ? `${color}14` : 'rgba(255,255,255,0.03)'}
      stroke={hot ? `${color}88` : 'rgba(255,255,255,0.14)'}
      strokeWidth={1.5}
    />
  )
}

/** Arrowhead marker def. `id` must be unique per diagram. */
export function ArrowMarker({ id, color = C.dim }: { id: string; color?: string }) {
  return (
    <marker id={id} markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill={color} />
    </marker>
  )
}
