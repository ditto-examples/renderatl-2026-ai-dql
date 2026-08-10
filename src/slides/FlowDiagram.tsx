import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'

const ACCENT = 'var(--deck-accent)'
const HOT = 'var(--deck-bad)'

// Generic, industry-standard stages only — nothing from the codebase.
const STAGES = [
  { t: 'SDK call', s: 'FFI / JNI boundary' },
  { t: 'Query engine', s: 'parse · plan · run' },
  { t: 'Planner', s: 'no index → full scan', hot: true },
  { t: 'Scan', s: 'read every document', hot: true },
  { t: 'Project', s: 'materialize all fields', hot: true },
  { t: 'Distinct → Result', s: 'dedupe · serialize' },
]

const flow: Variants = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
}
const node: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

export default function FlowDiagram() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/8')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/10')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 50% 10%, var(--deck-bg-from) 0%, var(--deck-bg-to) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            02 · Investigate · the diagrams
          </p>
          <Heading level={1} className="font-kairos text-3xl md:text-5xl">
            AI drew the map
          </Heading>
          <p className="mt-3 max-w-3xl text-lg text-text-secondary">
            I had AI turn each Perfetto trace into a code-flow diagram — so I
            could see the whole path at once.
          </p>
        </motion.div>

        {/* Summary flow — a simplified, generic view of the path */}
        <motion.div
          className="mt-8 flex flex-wrap items-stretch gap-2"
          variants={flow}
          initial="initial"
          animate="animate"
        >
          {STAGES.map((stage, i) => (
            <div key={stage.t} className="flex items-stretch gap-2">
              <motion.div
                variants={node}
                className="flex min-w-[9.5rem] flex-col justify-center rounded-xl px-4 py-3"
                style={{
                  background: stage.hot
                    ? 'rgba(var(--deck-bad-rgb),0.08)'
                    : 'rgba(var(--deck-surface-rgb),0.04)',
                  border: `1px solid ${stage.hot ? 'rgba(var(--deck-bad-rgb),0.35)' : 'rgba(var(--deck-surface-rgb),0.10)'}`,
                }}
              >
                <span className="font-semibold text-text-primary">{stage.t}</span>
                <span
                  className="mt-0.5 text-xs"
                  style={{ color: stage.hot ? HOT : undefined }}
                >
                  <span className={stage.hot ? '' : 'text-text-tertiary'}>
                    {stage.s}
                  </span>
                </span>
              </motion.div>
              {i < STAGES.length - 1 && (
                <span className="flex items-center text-text-tertiary">→</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-4 flex items-center gap-2 text-sm text-text-tertiary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: HOT }}
          />
          where the time was going · a simplified view —{' '}
          <span className="text-text-secondary">
            the real diagrams map every call in the path, in far more detail.
          </span>
        </motion.p>

        <motion.p
          className="mt-4 max-w-4xl leading-relaxed text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
        >
          When the engineers saw what Perfetto gave me, they asked for the same on
          the Rust side. So I instrumented the{' '}
          <span className="font-semibold text-text-primary">Rust core</span> and
          rendered{' '}
          <span className="font-semibold" style={{ color: ACCENT }}>
            flame graphs to SVG
          </span>{' '}
          — embedded right in the portal for them to explore on the fly.
        </motion.p>

        {/* The thesis beat */}
        <motion.div
          className="mt-5 rounded-xl p-4"
          style={{
            background: 'rgba(var(--deck-accent-rgb),0.06)',
            border: '1px solid rgba(var(--deck-accent-rgb),0.22)',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <p className="leading-relaxed text-text-primary md:text-lg">
            The team assumed I'd had AI scan the code. I hadn't — the diagrams
            came from{' '}
            <span className="font-semibold" style={{ color: ACCENT }}>
              real traces
            </span>
            . That's when they trusted them.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  )
}
