import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import benchyMetrics from '../assets/benchy-metrics-zoom.png'

const ACCENT = 'var(--deck-accent)'

const CAPABILITIES = [
  'SDK from source, per chip',
  'Swap SDK versions & platforms',
  'Benchmark vs SQLite',
  'Dataset + query library',
  'Instrument & profile',
  'Compare engine versions',
  'Flame graphs',
]

const chips: Variants = {
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } },
}
const chip: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

export default function BuildingBenchy() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/6')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/8')
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
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            01 · Build
          </p>
          <Heading level={1} className="font-kairos text-3xl md:text-5xl">
            Building Benchy
          </Heading>
          <p className="mt-2 max-w-3xl text-base text-text-secondary">
            Named after the little boat 3D printers print to test themselves.
          </p>
        </motion.div>

        {/* The real unlock */}
        <motion.div
          className="mt-4 rounded-xl p-3"
          style={{
            background: 'rgba(var(--deck-accent-rgb),0.06)',
            border: '1px solid rgba(var(--deck-accent-rgb),0.22)',
          }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="leading-relaxed text-text-primary md:text-lg">
            <span className="font-semibold" style={{ color: ACCENT }}>
              The real unlock:
            </span>{' '}
            I wrote custom{' '}
            <span className="font-semibold" style={{ color: ACCENT }}>
              Skill files
            </span>{' '}
            that taught the AI not just how to do a task — but how to write{' '}
            <span className="font-semibold" style={{ color: ACCENT }}>
              Python scripts to automate it
            </span>
            . Weeks of infrastructure became days.
          </p>
        </motion.div>

        {/* What Benchy can do — compact chips */}
        <motion.div
          className="mt-3 flex flex-wrap gap-2"
          variants={chips}
          initial="initial"
          animate="animate"
        >
          {CAPABILITIES.map((c) => (
            <motion.span
              key={c}
              variants={chip}
              className="rounded-full px-3 py-1 text-sm text-text-secondary"
              style={{
                background: 'rgba(var(--deck-surface-rgb),0.05)',
                border: '1px solid rgba(var(--deck-surface-rgb),0.08)',
              }}
            >
              {c}
            </motion.span>
          ))}
        </motion.div>

        {/* Benchy Portal — full-width so the numbers are readable */}
        <motion.figure
          className="m-0 mt-4"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={benchyMetrics}
            alt="Benchy Portal — DQL metrics comparing query times across Ditto builds"
            className="mx-auto w-full rounded-xl"
            style={{
              maxHeight: '40vh',
              objectFit: 'contain',
              border: '1px solid rgba(var(--deck-surface-rgb),0.10)',
            }}
          />
          <figcaption className="mt-2 text-center text-sm text-text-tertiary">
            <span style={{ color: ACCENT }}>Benchy Portal</span> — query times
            across builds, side by side.
          </figcaption>
        </motion.figure>

        <motion.p
          className="mt-4 text-lg text-text-primary"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          First run, on real hardware. The numbers{' '}
          <span className="font-semibold" style={{ color: 'var(--deck-bad)' }}>
            weren't great.
          </span>
        </motion.p>

        <p className="mt-3 text-xs tracking-wide text-text-tertiary">
          Press <kbd className="font-mono">→</kbd> to continue ·{' '}
          <kbd className="font-mono">←</kbd> to go back
        </p>
      </div>
    </SlideShell>
  )
}
