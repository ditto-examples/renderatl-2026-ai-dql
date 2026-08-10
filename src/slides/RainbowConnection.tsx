import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import meshDiagram from '../assets/mesh-diagram.jpg'

const ACCENT = '#eaf044'

// The "rainbow" — each transport the multiplexer can switch between.
const TRANSPORTS = [
  { label: 'Bluetooth LE', note: 'long-range, low power', color: '#3b82f6' },
  { label: 'P2P Wi-Fi', note: 'AWDL / Wi-Fi Aware', color: '#ec4899' },
  { label: 'LAN', note: 'no internet required', color: '#22c55e' },
  { label: 'Cloud', note: 'WebSocket to Ditto Server', color: '#a855f7' },
]

const listContainer: Variants = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
}
const listItem: Variants = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function RainbowConnection() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/3')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 15% 10%, #14181d 0%, #0b0d10 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 py-12">
        {/* Header — concise, so the diagram can dominate */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            How the mesh works
          </p>
          <Heading level={1} className="font-kairos text-4xl md:text-5xl">
            The Rainbow Connection
          </Heading>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-text-secondary">
            A{' '}
            <span className="font-semibold text-text-primary">
              transport multiplexer
            </span>{' '}
            switches between connection types{' '}
            <span className="font-semibold" style={{ color: ACCENT }}>
              on the fly
            </span>{' '}
            — each color of the rainbow a different transport, always using
            whichever is fastest.
          </p>
        </motion.div>

        {/* The diagram — the highlight of the page */}
        <motion.figure
          className="m-0 mt-6"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={meshDiagram}
            alt="Ditto edge devices forming a mesh and syncing to Ditto Server and existing systems"
            className="mx-auto w-full rounded-xl"
            style={{
              maxHeight: '56vh',
              objectFit: 'contain',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
          />
        </motion.figure>

        {/* Transport rainbow — compact row beneath */}
        <motion.ul
          className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
          variants={listContainer}
          initial="initial"
          animate="animate"
        >
          {TRANSPORTS.map((t) => (
            <motion.li key={t.label} variants={listItem} className="flex items-center gap-2.5">
              <span
                className="block h-3 w-3 flex-none rounded-full"
                style={{ background: t.color, boxShadow: `0 0 10px 0 ${t.color}80` }}
              />
              <span className="font-medium text-text-primary">{t.label}</span>
              <span className="hidden text-sm text-text-tertiary sm:inline">
                — {t.note}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <p className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-wide text-text-tertiary">
        Press <kbd className="font-mono">→</kbd> to continue ·{' '}
        <kbd className="font-mono">←</kbd> to go back
      </p>
    </SlideShell>
  )
}
