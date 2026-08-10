import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'

const PROBLEMS = [
  {
    icon: StopwatchIcon,
    title: 'Query performance',
    status: 'Seconds, when it should be milliseconds.',
    note: 'A representative set of queries, far slower than expected.',
  },
  {
    icon: TrendUpIcon,
    title: 'Memory usage',
    status: 'Climbing and spiking.',
    note: 'For 20 minutes straight: inject a document every 250 ms and observe it on another device.',
  },
]

const CONSTRAINTS = [
  'We got the test rules — not the dataset.',
  'I had the weekend. An answer was due Monday.',
  'The plan: fix query first, tackle memory later.',
]

const grid: Variants = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}
const card: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function Problem() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/3')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/5')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 50% 12%, var(--deck-bg-from) 0%, var(--deck-bg-to) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            The problem
          </p>
          <Heading level={1} className="font-kairos text-4xl md:text-6xl">
            Two benchmarks. Both bad.
          </Heading>
          <p className="mt-4 max-w-3xl text-lg text-text-secondary">
            A prospect benchmarked Ditto on Android — query performance and
            memory — and the report wasn't pretty.
          </p>
        </motion.div>

        <motion.div
          className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2"
          variants={grid}
          initial="initial"
          animate="animate"
        >
          {PROBLEMS.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={card}
                className="rounded-xl p-6"
                style={{
                  background: 'rgba(var(--deck-surface-rgb),0.04)',
                  border: '1px solid rgba(var(--deck-bad-rgb),0.25)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg text-fill-critical">
                    <Icon />
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 text-xl font-semibold text-fill-critical">
                  {p.status}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-tertiary">
                  {p.note}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.ul
          className="mt-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {CONSTRAINTS.map((c) => (
            <li key={c} className="flex items-start gap-3 text-text-secondary">
              <span className="mt-2 block h-1.5 w-1.5 flex-none rounded-full bg-[var(--deck-accent)]" />
              <span>{c}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          className="mt-8 text-lg text-text-primary"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          First problem: I had no way to even{' '}
          <span className="font-semibold" style={{ color: 'var(--deck-accent)' }}>
            measure
          </span>{' '}
          this.
        </motion.p>

        <p className="mt-6 text-xs tracking-wide text-text-tertiary">
          Press <kbd className="font-mono">→</kbd> to continue ·{' '}
          <kbd className="font-mono">←</kbd> to go back
        </p>
      </div>
    </SlideShell>
  )
}

/* ── icons ─────────────────────────────────────────────────────── */

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: 24,
  height: 24,
}

function StopwatchIcon() {
  return (
    <svg {...svgProps} aria-hidden="true">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13V9" />
      <path d="M9.5 2h5" />
      <path d="M18.5 6.5 20 5" />
    </svg>
  )
}

function TrendUpIcon() {
  return (
    <svg {...svgProps} aria-hidden="true">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  )
}
