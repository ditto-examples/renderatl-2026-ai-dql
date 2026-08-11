import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import blueprint from '../assets/ditto-blueprint.jpg'

const ACCENT = 'var(--deck-accent)'

/* Four talking points, one line each — the diagram carries the explanation. */
const PILLARS = [
  { icon: DatabaseIcon, title: 'Edge-native database', note: 'reads and writes stay local' },
  { icon: MeshIcon, title: 'Peer-to-peer mesh', note: 'syncs with no server' },
  { icon: ShieldIcon, title: 'CRDTs', note: 'concurrent edits just merge' },
  { icon: CodeIcon, title: 'DQL', note: 'SQL-like, over JSON' },
]

const grid: Variants = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
}
const card: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhatIsDitto() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/2')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/4')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 85% 10%, var(--deck-bg-from) 0%, var(--deck-bg-to) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            Before we start
          </p>
          <Heading level={1} className="font-kairos text-4xl md:text-6xl">
            What is Ditto?
          </Heading>
          <p className="mt-3 max-w-3xl text-lg text-text-secondary md:text-xl">
            A database that lives on the device and syncs device-to-device —{' '}
            <span className="text-text-primary">with or without the cloud.</span>
          </p>
        </motion.div>

        {/* Hero: the architecture diagram from the Ditto docs. It ships on a
            near-black canvas, so it sits in a deliberate dark frame that reads
            the same in light and dark themes. */}
        <motion.figure
          className="m-0 mt-6"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(var(--deck-surface-rgb),0.12)',
            }}
          >
            <img
              src={blueprint}
              alt="Ditto architecture: devices running the Ditto Edge SDK sync peer-to-peer over Bluetooth LE, P2P Wi-Fi and LAN, and replicate to Ditto Server in the cloud or on-premise, which connects to existing systems via Kafka, webhooks and SQL."
              className="mx-auto block w-full"
              style={{ maxHeight: '52vh', objectFit: 'contain' }}
            />
          </div>
          <figcaption className="mt-3 text-sm text-text-tertiary md:text-base">
            <span className="font-semibold" style={{ color: ACCENT }}>
              The Rainbow Connection:
            </span>{' '}
            each color is a different transport — the mesh hops between them on
            the fly, always taking whichever is fastest.
          </figcaption>
        </motion.figure>

        <motion.div
          className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4"
          variants={grid}
          initial="initial"
          animate="animate"
        >
          {PILLARS.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={card}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: 'rgba(var(--deck-surface-rgb),0.04)',
                  border: '1px solid rgba(var(--deck-surface-rgb),0.08)',
                }}
              >
                <span
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-lg"
                  style={{ background: `rgba(var(--deck-accent-rgb),0.1)`, color: ACCENT }}
                >
                  <Icon />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base leading-tight font-semibold text-text-primary">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-tight text-text-secondary">
                    {p.note}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SlideShell>
  )
}

/* ── minimal line icons (stroke = currentColor) ────────────────── */

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: 22,
  height: 22,
}

function DatabaseIcon() {
  return (
    <svg {...svgProps} aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </svg>
  )
}

function MeshIcon() {
  return (
    <svg {...svgProps} aria-hidden="true">
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M6.8 6h10.4M6.7 7.5 10.6 16.2M17.3 7.5 13.4 16.2" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg {...svgProps} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg {...svgProps} aria-hidden="true">
      <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" />
    </svg>
  )
}
