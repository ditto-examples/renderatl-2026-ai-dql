import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import meshLab from '../assets/mesh-lab.jpg'

const ACCENT = '#eaf044'

const GAPS = [
  'Built to test networking & sync — not the query engine.',
  'Opinionated and Ditto-only — no way to benchmark against SQLite.',
]

export default function ExistingTools() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/4')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/6')
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
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            A fair question
          </p>
          <Heading level={1} className="font-kairos text-3xl md:text-5xl">
            Don't we already have tools?
          </Heading>
        </motion.div>

        <div className="mt-7 grid grid-cols-1 items-center gap-8 md:grid-cols-[3fr_2fr] md:gap-10">
          {/* The Mesh Lab — the impressive visual */}
          <motion.figure
            className="m-0"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={meshLab}
              alt="Ditto's Mesh Lab — an RF-shielded chamber walled with racks of mobile devices"
              className="w-full rounded-xl"
              style={{
                maxHeight: '62vh',
                objectFit: 'cover',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            />
            <figcaption className="mt-3 text-sm text-text-tertiary">
              The Mesh Lab — <span style={{ color: ACCENT }}>50+ devices</span>{' '}
              (soon 100), driven by our Ditto Test Protocol (DTP).
            </figcaption>
          </motion.figure>

          {/* The story: serious tooling, wrong tool for this */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              Yes — serious ones.{' '}
              <span className="font-semibold text-text-primary">DTP</span>{' '}
              battle-tests the SDK's networking and sync at real-world scale.
            </p>

            <p className="mt-6 text-xs font-medium tracking-[0.15em] text-text-tertiary uppercase">
              But not for this
            </p>
            <ul className="mt-3 space-y-3">
              {GAPS.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-xs"
                    style={{ background: 'rgba(248,113,113,0.15)', color: '#f87171' }}
                    aria-hidden="true"
                  >
                    ✕
                  </span>
                  <span className="leading-relaxed text-text-secondary">{g}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-xl text-text-primary md:text-2xl">
              So I had to{' '}
              <span className="font-semibold" style={{ color: ACCENT }}>
                build something.
              </span>
            </p>
          </motion.div>
        </div>

        <p className="mt-6 text-xs tracking-wide text-text-tertiary">
          Press <kbd className="font-mono">→</kbd> to continue ·{' '}
          <kbd className="font-mono">←</kbd> to go back
        </p>
      </div>
    </SlideShell>
  )
}
