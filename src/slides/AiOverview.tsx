import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'

const ACCENT = 'var(--deck-accent)'

const BUCKETS = [
  {
    num: '01',
    icon: CogIcon,
    title: 'Build',
    tagline: 'A force multiplier',
    verdict: { label: 'Big win', tone: 'good' as const },
    body: (
      <>
        I built a benchmarking suite I call{' '}
        <span className="font-semibold text-text-primary">Benchy</span> — AI
        turned weeks of infrastructure into days.
      </>
    ),
    chips: ['the harness', 'SDK from source', 'Benchy Portal', 'flame graphs'],
  },
  {
    num: '02',
    icon: SearchIcon,
    title: 'Investigate',
    tagline: 'A capable assistant',
    verdict: { label: 'Just OK', tone: 'mixed' as const },
    body: 'Great for narrowing the search — but it lacked the context to always be right. (More on that later.)',
    chips: ['flow diagrams from traces', 'hotspots from profiling'],
  },
]

const grid: Variants = {
  animate: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
}
const panel: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function AiOverview() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/5')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/7')
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
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            How I used AI
          </p>
          <Heading level={1} className="font-kairos text-4xl md:text-6xl">
            What I did with AI
          </Heading>
          <p className="mt-4 max-w-3xl text-lg text-text-secondary">
            Two very different jobs. AI was far better at one than the other — but
            in both, it worked from{' '}
            <span className="text-text-primary">real data</span>, and we drove it.
          </p>
        </motion.div>

        <motion.div
          className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={grid}
          initial="initial"
          animate="animate"
        >
          {BUCKETS.map((b) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                variants={panel}
                className="rounded-2xl p-7"
                style={{
                  background: 'rgba(var(--deck-surface-rgb),0.04)',
                  border: '1px solid rgba(var(--deck-surface-rgb),0.08)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{ background: `rgba(var(--deck-accent-rgb),0.1)`, color: ACCENT }}
                  >
                    <Icon />
                  </span>
                  <span
                    className="font-kairos text-4xl font-semibold"
                    style={{ color: 'rgba(var(--deck-surface-rgb),0.14)' }}
                  >
                    {b.num}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-text-primary">
                    {b.title}
                  </h3>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase"
                    style={
                      b.verdict.tone === 'good'
                        ? { background: 'rgba(var(--deck-accent-rgb),0.15)', color: ACCENT }
                        : { background: 'rgba(245,158,11,0.15)', color: '#f59e0b' }
                    }
                  >
                    {b.verdict.label}
                  </span>
                </div>
                <p className="mt-1 text-base font-medium" style={{ color: ACCENT }}>
                  {b.tagline}
                </p>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  {b.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {b.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full px-3 py-1 text-sm text-text-secondary"
                      style={{ background: 'rgba(var(--deck-surface-rgb),0.06)' }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SlideShell>
  )
}

/* ── icons ─────────────────────────────────────────────────────── */

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: 24,
  height: 24,
}

function CogIcon() {
  return (
    <svg {...svgProps} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2.1 2.1M17.4 17.4l2.1 2.1M4.5 19.5l2.1-2.1M17.4 6.6l2.1-2.1" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg {...svgProps} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  )
}
