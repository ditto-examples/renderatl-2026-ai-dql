import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import { ExecutionPathDiagram } from '../components/ExecutionPathDiagram'

const ACCENT = 'var(--deck-accent)'

export default function FlowDiagram() {
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
          'radial-gradient(120% 120% at 50% 10%, var(--deck-bg-from) 0%, var(--deck-bg-to) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 pt-8 pb-16">
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
          <p className="mt-2 max-w-3xl text-lg text-text-secondary">
            Every Perfetto trace became a diagram — the whole path, at a glance.
          </p>
        </motion.div>

        {/* The artifact. Generic stand-in for the real diagrams, which annotate
            every hop with its exact place in the source. */}
        <motion.figure
          className="m-0 mt-5"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center">
            <ExecutionPathDiagram />
          </div>
          <figcaption className="mt-3 text-sm text-text-tertiary">
            Simplified for this talk — the real ones name every call in the path,
            down to the line.
          </figcaption>
        </motion.figure>

        {/* The thesis beat */}
        <motion.div
          className="mt-4 rounded-xl px-4 py-3"
          style={{
            background: 'rgba(var(--deck-accent-rgb),0.06)',
            border: '1px solid rgba(var(--deck-accent-rgb),0.22)',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <p className="text-text-primary md:text-lg">
            The team assumed I'd had AI read the code. I hadn't — these came from{' '}
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
