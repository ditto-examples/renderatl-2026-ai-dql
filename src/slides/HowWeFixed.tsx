import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'

const ACCENT = '#eaf044'

// Generic categories only — no library or internal names.
const CATEGORIES = [
  { t: 'Zero-copy format', s: 'no encode/decode twice on every read' },
  { t: 'Tombstone storage', s: 'changed how deletion metadata is kept' },
  { t: 'Storage tuned for reads', s: 'laid out for how queries actually access data' },
]

// Steps in the continuous benchmarking loop.
const LOOP = ['PR & commit IDs', 'Benchy', 'Local lab', 'perf delta']

const grid: Variants = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const cardV: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function HowWeFixed() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/9')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/11')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 50% 12%, #14181d 0%, #0b0d10 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            The fix
          </p>
          <Heading level={1} className="font-kairos text-3xl md:text-5xl">
            It became a team sport
          </Heading>
          <p className="mt-3 max-w-3xl text-lg text-text-secondary">
            This is where it stopped being me — and became a war room: query, SDK,
            and platform engineers.
          </p>
        </motion.div>

        {/* What changed — generic categories */}
        <p className="mt-7 text-xs font-medium tracking-[0.15em] text-text-tertiary uppercase">
          What changed — improvements already on our roadmap, landed faster with AI
        </p>
        <motion.div
          className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3"
          variants={grid}
          initial="initial"
          animate="animate"
        >
          {CATEGORIES.map((c) => (
            <motion.div
              key={c.t}
              variants={cardV}
              className="rounded-xl p-4"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="font-semibold text-text-primary">{c.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-tertiary">
                {c.s}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* The hero: continuous benchmarking gate */}
        <motion.div
          className="mt-6 rounded-2xl p-5"
          style={{
            background: 'rgba(234,240,68,0.06)',
            border: '1px solid rgba(234,240,68,0.22)',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-text-primary">
            Every PR, benchmarked{' '}
            <span style={{ color: ACCENT }}>before merge</span>
          </h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-text-secondary">
            AI orchestrated Benchy in my local lab from a running list of PR &
            commit IDs — so we saw each change's real-world impact immediately,
            before it ever merged.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {LOOP.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 text-sm text-text-secondary"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  {step}
                </span>
                {i < LOOP.length - 1 && (
                  <span className="text-text-tertiary">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="mt-6 text-xl text-text-primary md:text-2xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Change by change, the number{' '}
          <span className="font-semibold" style={{ color: ACCENT }}>
            fell.
          </span>
        </motion.p>

        <p className="mt-5 text-xs tracking-wide text-text-tertiary">
          Press <kbd className="font-mono">→</kbd> to continue ·{' '}
          <kbd className="font-mono">←</kbd> to go back
        </p>
      </div>
    </SlideShell>
  )
}
