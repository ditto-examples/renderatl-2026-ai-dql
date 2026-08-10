import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import benchyProfiling from '../assets/benchy-profiling-zoom.png'

const ACCENT = 'var(--deck-accent)'

const STEPS = [
  {
    title: 'Instrument',
    body: 'Perfetto traces show where the time actually goes.',
  },
  {
    title: 'Profile',
    body: 'DQL profiling pinpoints what the engine spends its time on.',
  },
]

const list: Variants = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const item: Variants = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function Investigating() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/7')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/9')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 80% 10%, var(--deck-bg-from) 0%, var(--deck-bg-to) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            02 · Investigate
          </p>
          <Heading level={1} className="font-kairos text-3xl md:text-5xl">
            Investigating with AI
          </Heading>
          <p className="mt-2 text-base text-text-secondary">
            Friday night. New to the query engine. Answers due Monday.
          </p>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 items-center gap-8 md:grid-cols-[2fr_3fr] md:gap-10">
          {/* Left — how I measured */}
          <div>
            <p className="mb-4 text-base text-text-secondary">
              Two ways to see where the time was going:
            </p>
            <motion.ol
              className="space-y-3"
              variants={list}
              initial="initial"
              animate="animate"
            >
              {STEPS.map((s, i) => (
                <motion.li key={s.title} variants={item} className="flex gap-3">
                  <span
                    className="flex h-6 w-6 flex-none items-center justify-center rounded-full text-sm font-semibold"
                    style={{ background: `rgba(var(--deck-accent-rgb),0.1)`, color: ACCENT }}
                  >
                    {i + 1}
                  </span>
                  <p className="leading-snug text-text-secondary">
                    <span className="font-semibold text-text-primary">
                      {s.title}.
                    </span>{' '}
                    {s.body}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </div>

          {/* Right — the profiling artifact */}
          <motion.figure
            className="m-0"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={benchyProfiling}
              alt="Benchy Portal profiling — side-by-side execution plans for two Ditto builds"
              className="w-full rounded-xl"
              style={{
                maxHeight: '64vh',
                objectFit: 'contain',
                border: '1px solid rgba(var(--deck-surface-rgb),0.10)',
              }}
            />
            <figcaption className="mt-2 text-sm text-text-tertiary">
              Profiling, side by side: a full{' '}
              <span style={{ color: 'var(--deck-bad)' }}>scan of 400 rows</span> becomes
              an <span style={{ color: ACCENT }}>idScan that returns 1</span> —
              32 ms → 433 µs.
            </figcaption>
          </motion.figure>
        </div>

        <p className="mt-5 text-xs tracking-wide text-text-tertiary">
          Press <kbd className="font-mono">→</kbd> to continue ·{' '}
          <kbd className="font-mono">←</kbd> to go back
        </p>
      </div>
    </SlideShell>
  )
}
