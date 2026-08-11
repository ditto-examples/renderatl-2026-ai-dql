import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import { InstrumentationDiagram } from '../components/InstrumentationDiagram'

const ACCENT = 'var(--deck-accent)'

export default function Instrumentation() {
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
          'radial-gradient(120% 120% at 20% 10%, var(--deck-bg-from) 0%, var(--deck-bg-to) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            02 · Investigate · instrumentation
          </p>
          <Heading level={1} className="font-kairos text-3xl md:text-5xl">
            Instrument anything
          </Heading>
          <p className="mt-2 max-w-3xl text-lg text-text-secondary">
            You don't have to understand the code to see what it's doing.
          </p>
        </motion.div>

        <motion.figure
          className="m-0 mt-5"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center">
            <InstrumentationDiagram />
          </div>
        </motion.figure>

        <motion.p
          className="mt-4 text-sm text-text-tertiary md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          Nothing exotic — your stack already ships this: OpenTelemetry,
          Perfetto, Xcode Instruments, the browser's performance panel.{' '}
          <span style={{ color: ACCENT }}>
            Works the same on an API call, a screen, or a codebase you've never
            opened.
          </span>
        </motion.p>
      </div>
    </SlideShell>
  )
}
