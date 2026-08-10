import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'

const GOOD = 'var(--deck-good)'
const BAD = 'var(--deck-bad)'
const ACCENT = 'var(--deck-accent)'

const WORKED = [
  'Building tooling, fast — the harness, SDK-from-source, Benchy Portal, flame graphs',
  'Drawing code-flow diagrams from real traces',
  'Narrowing suspect code from profiling data',
  'Researching hardware issues (thermal throttling)',
]

const DIDNT = [
  'Understanding why code worked — it flagged intentional logging as “bad”',
  'Subagents guessing at fixes we couldn’t validate',
  'Non-experts “vibe-coding” query-engine changes',
  'Grasping the query language from source alone',
]

const list: Variants = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}
const item: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

export default function WorkedVsNot() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/12')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/14')
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
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            The honest part
          </p>
          <Heading level={1} className="font-kairos text-3xl md:text-5xl">
            What worked, what didn't
          </Heading>
        </motion.div>

        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Column
            title="Worked"
            color={GOOD}
            symbol="✓"
            items={WORKED}
            tint="rgba(var(--deck-good-rgb),0.28)"
          />
          <Column
            title="Didn't"
            color={BAD}
            symbol="✕"
            items={DIDNT}
            tint="rgba(var(--deck-bad-rgb),0.28)"
          />
        </div>

        {/* The pattern — the thesis, stated plainly */}
        <motion.div
          className="mt-6 rounded-xl p-4"
          style={{
            background: 'rgba(var(--deck-accent-rgb),0.06)',
            border: '1px solid rgba(var(--deck-accent-rgb),0.22)',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="leading-relaxed text-text-primary md:text-lg">
            The difference, every time:{' '}
            <span className="font-semibold" style={{ color: ACCENT }}>
              grounded in real data + driven by a domain expert
            </span>{' '}
            wins. <span style={{ color: BAD }}>Ungrounded or speculative</span>{' '}
            misses.
          </p>
        </motion.div>
      </div>
    </SlideShell>
  )
}

function Column({
  title,
  color,
  symbol,
  items,
  tint,
}: {
  title: string
  color: string
  symbol: string
  items: string[]
  tint: string
}) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: 'rgba(var(--deck-surface-rgb),0.03)', border: `1px solid ${tint}` }}
    >
      <h3
        className="mb-4 text-lg font-semibold tracking-wide uppercase"
        style={{ color }}
      >
        {title}
      </h3>
      <motion.ul
        className="space-y-3"
        variants={list}
        initial="initial"
        animate="animate"
      >
        {items.map((text) => (
          <motion.li key={text} variants={item} className="flex gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-xs font-bold"
              style={{ background: tint, color }}
              aria-hidden="true"
            >
              {symbol}
            </span>
            <span className="leading-snug text-text-secondary">{text}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
