import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'

const ACCENT = '#eaf044'

const PILLARS = [
  {
    icon: DatabaseIcon,
    title: 'Edge-native database',
    body: 'Data lives on the device. Every app reads and writes locally first — no round-trip to a server.',
  },
  {
    icon: MeshIcon,
    title: 'Sync without a server',
    body: 'Devices form a peer-to-peer mesh and replicate directly to each other — online or off.',
  },
  {
    icon: ShieldIcon,
    title: 'Offline-first, conflict-free',
    body: 'Built on CRDTs, so concurrent edits from any device merge automatically — no lost writes.',
  },
  {
    icon: CodeIcon,
    title: 'Query with DQL',
    body: 'A flexible JSON document model, queried with DQL — an expressive, SQL-like language.',
  },
]

// Transport palette lifted from Ditto's presence viewer (ConnectionLine).
const TRANSPORTS = [
  { label: 'Bluetooth LE', color: '#007AFF' },
  { label: 'P2P Wi-Fi', color: '#C71939' },
  { label: 'LAN', color: '#34C759' },
  { label: 'Cloud', color: '#AF52DE' },
]

const grid: Variants = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
}
const card: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
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
          'radial-gradient(120% 120% at 85% 10%, #14181d 0%, #0b0d10 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            Before we start
          </p>
          <Heading level={1} className="font-kairos text-4xl md:text-6xl">
            What is Ditto?
          </Heading>
          <p className="mt-5 max-w-3xl text-lg text-text-secondary md:text-xl">
            A mobile database with edge connectivity and CRDTs built in. It's the
            only one to pair{' '}
            <span className="text-text-primary">peer-to-peer edge connectivity
            with CRDTs</span>. Your data stays available, consistent, and in
            sync across every device — with or without the cloud.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
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
                className="flex gap-4 rounded-xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-lg"
                  style={{ background: `${ACCENT}1a`, color: ACCENT }}
                >
                  <Icon />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* The Rainbow Connection — how the mesh switches transports */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 rounded-xl p-5"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p className="text-sm leading-relaxed text-text-secondary">
            <span className="font-semibold" style={{ color: ACCENT }}>
              The Rainbow Connection:
            </span>{' '}
            a transport multiplexer switches between these connections on the fly
            — each color a different transport — always using whichever is
            fastest and falling back the moment one drops.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
            {TRANSPORTS.map((t) => (
              <span key={t.label} className="flex items-center gap-2">
                <span
                  className="block h-2.5 w-2.5 rounded-full"
                  style={{ background: t.color, boxShadow: `0 0 10px 0 ${t.color}80` }}
                />
                <span className="text-sm text-text-secondary">{t.label}</span>
              </span>
            ))}
          </div>
        </motion.div>

        <p className="mt-8 text-xs tracking-wide text-text-tertiary">
          Press <kbd className="font-mono">→</kbd> to continue ·{' '}
          <kbd className="font-mono">←</kbd> to go back
        </p>
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
