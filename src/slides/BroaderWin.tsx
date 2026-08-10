import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import countBenchmarks from '../assets/count-benchmarks.png'

const ACCENT = 'var(--deck-accent)'

export default function BroaderWin() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/11')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/13')
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
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            Not just one query
          </p>
          <Heading level={1} className="font-kairos text-3xl md:text-5xl">
            The whole board moved
          </Heading>
          <p className="mt-3 max-w-3xl text-lg text-text-secondary">
            The same fixes lifted the{' '}
            <span className="text-text-primary">entire aggregation workload</span>{' '}
            — <span className="font-mono">count_all</span> led at{' '}
            <span className="font-semibold" style={{ color: ACCENT }}>
              1,226×
            </span>
            , and everything else got faster too.
          </p>
        </motion.div>

        <motion.figure
          className="m-0 mt-6"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={countBenchmarks}
            alt="Benchy Portal aggregation benchmarks — new build vs. legacy across POS queries"
            className="mx-auto w-full rounded-xl"
            style={{
              maxHeight: '56vh',
              objectFit: 'contain',
              border: '1px solid rgba(var(--deck-surface-rgb),0.10)',
            }}
          />
          <figcaption className="mt-2 text-center text-sm text-text-tertiary">
            New build vs. legacy across our POS aggregation benchmarks.
          </figcaption>
        </motion.figure>
      </div>
    </SlideShell>
  )
}
