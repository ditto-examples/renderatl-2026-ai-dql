import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { SlideShell } from '../components/SlideShell'

const ACCENT = 'var(--deck-accent)'
const BEFORE = 2253.06
const AFTER = 1.84
const SPEEDUP = 1226 // 1,225.88× rounded

/** Format the ticking value: whole numbers with commas above 100, else 2dp. */
function fmt(n: number): string {
  return n >= 100
    ? Math.round(n).toLocaleString('en-US')
    : n.toFixed(2)
}

/** Tween a number from → to on mount (eased). Honors reduced motion. */
function useCountDown(from: number, to: number, duration: number, run: boolean) {
  const [value, setValue] = useState(run ? from : to)
  useEffect(() => {
    if (!run) {
      setValue(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setValue(from + (to - from) * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [from, to, duration, run])
  return value
}

export default function Payoff() {
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const value = useCountDown(BEFORE, AFTER, 1700, !reduceMotion)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/10')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/12')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 50% 40%, var(--deck-bg-from) 0%, var(--deck-bg-to) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-center px-6 py-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase"
        >
          The payoff
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-8 max-w-xl text-lg text-text-secondary"
        >
          One of our heaviest queries — a{' '}
          <span className="font-mono text-text-primary">COUNT</span> over a large
          dataset.
        </motion.p>

        {/* The number */}
        <div className="flex items-baseline justify-center gap-3">
          <span
            className="font-kairos text-7xl leading-none font-semibold tabular-nums md:text-9xl"
            style={{ color: ACCENT }}
          >
            {fmt(value)}
          </span>
          <span className="font-kairos text-3xl text-text-secondary md:text-5xl">
            ms
          </span>
        </div>

        {/* Before + speedup, revealed after the count settles */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0.3 : 1.8, duration: 0.6 }}
        >
          <span className="text-xl text-text-tertiary line-through md:text-2xl">
            {fmt(BEFORE)} ms
          </span>
          <span
            className="rounded-full px-4 py-1.5 text-lg font-semibold md:text-xl"
            style={{ background: `rgba(var(--deck-accent-rgb),0.1)`, color: ACCENT }}
          >
            {SPEEDUP}× faster
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0.4 : 2.2, duration: 0.6 }}
          className="mt-8 text-lg text-text-secondary"
        >
          Over two seconds → real time.
        </motion.p>
      </div>
    </SlideShell>
  )
}
