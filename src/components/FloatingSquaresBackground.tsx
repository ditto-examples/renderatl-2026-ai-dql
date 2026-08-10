import { useEffect, useRef } from 'react'
import { FloatingSquares, type FloatingSquaresOptions } from './floatingSquares'

interface Props extends FloatingSquaresOptions {
  className?: string
}

/**
 * Full-bleed canvas that renders the drifting-squares field behind slide
 * content. DPR-aware, resizes with its container, and freezes to a single
 * static frame when the viewer prefers reduced motion.
 *
 * Size it with CSS (e.g. `absolute inset-0 h-full w-full`) — the canvas
 * reads its own client box, so it fills whatever box you give it.
 */
export function FloatingSquaresBackground({ className, ...options }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const field = new FloatingSquares(options)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let raf = 0
    let last = 0
    let dpr = 1

    const paint = (now: number, dt: number) => {
      field.tick(now, dt)
      // Clear in device pixels, then draw in CSS pixels via the DPR scale.
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      field.draw(ctx)
    }

    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (w === 0 || h === 0) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      field.resize(w, h)
      paint(performance.now(), 0)
    }

    const loop = (now: number) => {
      const dt = last ? now - last : 16
      last = now
      paint(now, dt)
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (reduceMotion.matches) {
        paint(performance.now(), 0) // one static frame
      } else {
        last = 0
        raf = requestAnimationFrame(loop)
      }
    }
    const stop = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }
    const onMotionPref = () => {
      stop()
      start()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    start()
    reduceMotion.addEventListener('change', onMotionPref)

    return () => {
      stop()
      ro.disconnect()
      reduceMotion.removeEventListener('change', onMotionPref)
    }
    // Field options are read once at mount; changing them remounts via key.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ display: 'block' }}
    />
  )
}
