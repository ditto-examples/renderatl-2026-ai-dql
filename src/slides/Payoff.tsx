import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'

const ACCENT = 'var(--deck-accent)'
const BEFORE = '2,253' // 2,253.06 ms
const AFTER = '1.84'
const SPEEDUP = 1226 // 1,225.88× rounded

export default function Payoff() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/12')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/14')
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
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center px-6 py-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading level={1} className="font-kairos text-4xl md:text-6xl">
            The payoff
          </Heading>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 mb-8 max-w-xl text-lg text-text-secondary md:text-xl"
        >
          One of our heaviest queries — a{' '}
          <span className="font-mono text-text-primary">COUNT</span> over a large
          dataset.
        </motion.p>

        {/* The number. Stated, not counted down — the figure is the point, and
            watching it tick was more distracting than dramatic. */}
        <motion.div
          className="flex items-baseline justify-center gap-3"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-kairos text-7xl leading-none font-semibold tabular-nums sm:text-8xl md:text-[10rem]"
            style={{ color: ACCENT }}
          >
            {AFTER}
          </span>
          <span className="font-kairos text-3xl text-text-secondary md:text-6xl">
            ms
          </span>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-xl text-text-tertiary line-through md:text-3xl">
            {BEFORE} ms
          </span>
          <span
            className="rounded-full px-4 py-1.5 text-lg font-semibold md:text-2xl"
            style={{ background: `rgba(var(--deck-accent-rgb),0.1)`, color: ACCENT }}
          >
            {SPEEDUP}× faster
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-8 text-lg text-text-secondary md:text-xl"
        >
          Over two seconds → real time.
        </motion.p>
      </div>
    </SlideShell>
  )
}
