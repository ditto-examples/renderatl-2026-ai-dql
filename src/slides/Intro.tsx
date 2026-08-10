import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import profileUrl from '../assets/aaron-profile.jpeg'

const ACCENT = '#eaf044'

const ERAS = [
  { year: '1998', name: 'The dot-com era' },
  { year: '2000', name: 'Y2K' },
  { year: '2005', name: 'Web 2.0' },
  { year: '2008', name: 'The rise of mobile' },
  { year: '2013', name: 'The cloud era' },
  { year: 'Now', name: 'The AI era', current: true },
]

const COMPANIES = [
  { name: 'Couchbase', roles: ['Principal Engineer & Developer Advocate'] },
  {
    name: 'EY',
    roles: [
      'Assistant Director (Technical Lead) — Developer Experience / Gaia Platform',
      'Assistant Director (Technical Lead) — Mobile Technologies',
    ],
  },
]

const listContainer: Variants = {
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
}
const listItem: Variants = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export default function Intro() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/1')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/3')
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
      <div className="relative z-10 mx-auto grid min-h-dvh max-w-5xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
        {/* Left — who */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            Who am I
          </p>

          <div className="flex items-center gap-5">
            <img
              src={profileUrl}
              alt="Aaron LaBeau"
              className="h-28 w-28 flex-none rounded-2xl object-cover md:h-32 md:w-32"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(234,240,68,0.30), 0 20px 60px -20px rgba(0,0,0,0.7)',
              }}
            />
            <div>
              <Heading level={1} className="font-kairos text-4xl md:text-5xl">
                Aaron LaBeau
              </Heading>
              <p className="mt-2 text-lg text-text-secondary">
                Developer Advocate at{' '}
                <span className="font-semibold" style={{ color: ACCENT }}>
                  Ditto
                </span>
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-text-secondary">
            I've been a software engineer for{' '}
            <span className="font-semibold text-text-primary">30 years</span> —
            small startups to global enterprises.
          </p>

          <div className="mt-6 space-y-2">
            {COMPANIES.map((c) => (
              <div
                key={c.name}
                className="rounded-lg px-3 py-2"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="font-semibold text-text-primary">{c.name}</span>
                <ul className="mt-1 space-y-0.5">
                  {c.roles.map((role) => (
                    <li key={role} className="text-sm text-text-tertiary">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — eras timeline */}
        <div>
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            I've shipped through every era
          </p>

          <motion.ol
            className="relative"
            variants={listContainer}
            initial="initial"
            animate="animate"
          >
            {/* vertical spine */}
            <div
              className="absolute top-2 bottom-2 left-[7px] w-px"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            />
            {ERAS.map((era) => (
              <motion.li
                key={era.name}
                variants={listItem}
                className="relative flex items-center gap-4 py-2.5 pl-8"
              >
                {/* dot */}
                <span
                  className="absolute left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full"
                  style={
                    era.current
                      ? { background: ACCENT, boxShadow: `0 0 16px 2px ${ACCENT}80` }
                      : { background: '#3a4048', border: '1px solid rgba(255,255,255,0.15)' }
                  }
                >
                  {era.current && (
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      style={{ background: ACCENT }}
                      animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                </span>

                <span
                  className="w-14 flex-none text-sm tabular-nums"
                  style={{ color: era.current ? ACCENT : undefined }}
                >
                  <span className={era.current ? '' : 'text-text-tertiary'}>
                    {era.year}
                  </span>
                </span>
                <span
                  className={`text-xl ${era.current ? 'font-semibold' : 'text-text-primary'}`}
                  style={era.current ? { color: ACCENT } : undefined}
                >
                  {era.name}
                </span>
                {era.current && (
                  <span
                    className="ml-1 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase"
                    style={{ background: `${ACCENT}22`, color: ACCENT }}
                  >
                    We are here
                  </span>
                )}
              </motion.li>
            ))}
          </motion.ol>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 max-w-sm text-text-secondary"
          >
            A lot has changed. This one feels different — and it changed how I
            work on this very problem.
          </motion.p>

          <p className="mt-6 text-xs tracking-wide text-text-tertiary">
            Press <kbd className="font-mono">→</kbd> to continue ·{' '}
            <kbd className="font-mono">←</kbd> to go back
          </p>
        </div>
      </div>
    </SlideShell>
  )
}
