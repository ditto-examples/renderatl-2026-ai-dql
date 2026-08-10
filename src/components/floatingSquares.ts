// floatingSquares.ts
//
// Ported from Ditto's VS Code extension — the presence-graph background
// (webview-ui/presence-graph/floating-stars.ts), itself a port of SwiftUI's
// FloatingSquaresLayer. Same behaviour distribution (80% drift, 10% pulse,
// 10% spin) and motion feel, adapted here to:
//   - screen space, so the field covers any viewport without a camera, and
//   - a light, low-contrast palette so it sits *behind* slide content
//     without competing with it.
//
// Framework-agnostic on purpose: a plain class ticked/drawn by a React
// canvas host (FloatingSquaresBackground.tsx). Uses a seeded xorshift RNG
// so a given seed always lays out the same field.

/** Soft blue-grey fills, low alpha — a whisper of texture on a light page.
 *  Mirrors the presence viewer's blue/neutral mix, lightened for light bg. */
export const LIGHT_SQUARE_FILLS: readonly string[] = [
  'rgba(37, 99, 235, 0.07)', // blue-600
  'rgba(59, 130, 246, 0.08)', // blue-500
  'rgba(96, 165, 250, 0.10)', // blue-400
  'rgba(100, 116, 139, 0.08)', // slate-500
  'rgba(148, 163, 184, 0.10)', // slate-400
  'rgba(203, 213, 225, 0.13)', // slate-300
]

/** Faint light blue-grey fills for a dark page — the presence viewer's
 *  original habitat. Low alpha keeps them behind the content. */
export const DARK_SQUARE_FILLS: readonly string[] = [
  'rgba(148, 163, 184, 0.16)', // slate-400
  'rgba(203, 213, 225, 0.14)', // slate-300
  'rgba(226, 232, 240, 0.12)', // slate-200
  'rgba(96, 165, 250, 0.16)', // blue-400
  'rgba(59, 130, 246, 0.14)', // blue-500
  'rgba(125, 211, 252, 0.14)', // sky-300
]

const TAU = Math.PI * 2

type Anim =
  | {
      kind: 'drift'
      startX: number
      startY: number
      targetX: number
      targetY: number
      tStart: number
      duration: number
    }
  | { kind: 'pulse'; phase: number; period: number }
  | { kind: 'spin'; phase: number; period: number }

interface Square {
  x: number
  y: number
  fill: string
  size: number
  rotation: number
  scale: number
  baseAlpha: number
  alpha: number
  anim: Anim
}

export interface FloatingSquaresOptions {
  /** Deterministic layout seed. */
  seed?: number
  /** Fixed square count. If omitted, scales with viewport area. */
  count?: number
  /** Fill palette (CSS color strings). */
  fills?: readonly string[]
  /** Smallest square edge in CSS px. */
  minSize?: number
  /** Largest square edge in CSS px. */
  maxSize?: number
}

export class FloatingSquares {
  private squares: Square[] = []
  private width = 0
  private height = 0
  private rngSeed: number
  private readonly fixedCount?: number
  private readonly fills: readonly string[]
  private readonly minSize: number
  private readonly maxSize: number

  constructor(opts: FloatingSquaresOptions = {}) {
    // Seed must be non-zero for xorshift; fall back to a fixed constant.
    this.rngSeed = (opts.seed ?? 0x9e3779b9) | 0 || 0x9e3779b9
    this.fixedCount = opts.count
    this.fills = opts.fills ?? LIGHT_SQUARE_FILLS
    // Small by default — a subtle field, not a foreground element.
    this.minSize = opts.minSize ?? 2
    this.maxSize = opts.maxSize ?? 5
  }

  /** xorshift32 — cheap, deterministic visual noise (no Math.random so the
   *  seed actually controls the layout). Returns [0, 1). */
  private rand(): number {
    let s = this.rngSeed | 0
    s ^= s << 13
    s ^= s >>> 17
    s ^= s << 5
    this.rngSeed = s
    return (s >>> 0) / 0xffffffff
  }

  private range(min: number, max: number): number {
    return min + (max - min) * this.rand()
  }

  /** Target count for the current viewport — ~1 square per 12k px², clamped,
   *  so laptops and projectors both get a comfortable density. */
  private targetCount(): number {
    if (this.fixedCount != null) return this.fixedCount
    const byArea = Math.round((this.width * this.height) / 12000)
    return Math.max(70, Math.min(240, byArea))
  }

  /** Set/refresh the field size. First call spawns the field; later calls
   *  keep existing squares and just fold any strays back on-screen. */
  resize(width: number, height: number): void {
    const first = this.width === 0 && this.height === 0
    this.width = width
    this.height = height
    if (first) {
      this.spawn()
      return
    }
    for (const s of this.squares) {
      s.x = ((s.x % width) + width) % width
      s.y = ((s.y % height) + height) % height
    }
    // Grow/shrink toward the new viewport's target density.
    const want = this.targetCount()
    while (this.squares.length < want) this.squares.push(this.makeSquare())
    if (this.squares.length > want) this.squares.length = want
  }

  private spawn(): void {
    this.squares = []
    const n = this.targetCount()
    for (let i = 0; i < n; i += 1) this.squares.push(this.makeSquare())
  }

  private makeSquare(): Square {
    const x = this.range(0, this.width)
    const y = this.range(0, this.height)
    const fill = this.fills[Math.floor(this.rand() * this.fills.length)]
    const size = this.range(this.minSize, this.maxSize)

    // Match the source distribution: 80% drift, 10% pulse, 10% spin.
    const r = this.rand() * 100
    let anim: Anim
    if (r < 80) {
      anim = this.makeDrift(x, y)
    } else if (r < 90) {
      anim = { kind: 'pulse', phase: this.rand() * TAU, period: this.range(3000, 5000) }
    } else {
      anim = { kind: 'spin', phase: this.rand() * TAU, period: this.range(20000, 30000) }
    }

    return { x, y, fill, size, rotation: 0, scale: 1, baseAlpha: 1, alpha: 1, anim }
  }

  /** A gentle drift leg: pick a nearby target and ease toward it over
   *  8–12s. Targets stay within the viewport (with a small margin) so
   *  squares wander rather than sweep across on a wrap. */
  private makeDrift(fromX: number, fromY: number): Extract<Anim, { kind: 'drift' }> {
    const reach = Math.max(60, Math.min(this.width, this.height) * 0.12)
    const margin = 24
    const targetX = clamp(fromX + this.range(-reach, reach), -margin, this.width + margin)
    const targetY = clamp(fromY + this.range(-reach, reach), -margin, this.height + margin)
    return {
      kind: 'drift',
      startX: fromX,
      startY: fromY,
      targetX,
      targetY,
      tStart: 0, // set on first tick
      duration: this.range(8000, 12000),
    }
  }

  /** Advance the whole field by `dt` ms. `now` is a high-res timestamp. */
  tick(now: number, dt: number): void {
    for (const s of this.squares) this.tickSquare(s, now, dt)
  }

  private tickSquare(s: Square, now: number, dt: number): void {
    if (s.anim.kind === 'drift') {
      const a = s.anim
      if (a.tStart === 0) a.tStart = now
      const t = clamp((now - a.tStart) / a.duration, 0, 1)
      const eased = easeInOutCubic(t)
      s.x = a.startX + (a.targetX - a.startX) * eased
      s.y = a.startY + (a.targetY - a.startY) * eased
      if (t >= 1) s.anim = this.makeDrift(s.x, s.y)
    } else if (s.anim.kind === 'pulse') {
      s.anim.phase += (dt / s.anim.period) * TAU
      const wave = (Math.sin(s.anim.phase) + 1) / 2 // 0..1
      s.scale = 1.0 + wave * 0.25
      s.alpha = s.baseAlpha * (0.5 + wave * 0.5)
    } else {
      s.anim.phase += (dt / s.anim.period) * TAU
      s.rotation = s.anim.phase
    }
  }

  /** Draw every square in screen space. Host clears + sets DPR transform. */
  draw(ctx: CanvasRenderingContext2D): void {
    for (const s of this.squares) {
      ctx.save()
      ctx.translate(s.x, s.y)
      if (s.rotation) ctx.rotate(s.rotation)
      if (s.scale !== 1) ctx.scale(s.scale, s.scale)
      ctx.globalAlpha = s.alpha
      ctx.fillStyle = s.fill
      const half = s.size / 2
      ctx.fillRect(-half, -half, s.size, s.size)
      ctx.restore()
    }
  }
}

function clamp(v: number, min: number, max: number): number {
  return v < min ? min : v > max ? max : v
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}
