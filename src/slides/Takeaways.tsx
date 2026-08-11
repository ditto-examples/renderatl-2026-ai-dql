import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'

const ACCENT = 'var(--deck-accent)'

const TAKEAWAYS = [
  {
    t: 'Instrument first',
    s: 'AI is only as good as the data you feed it — real traces, real profiles.',
  },
  {
    t: 'Give AI the context',
    s: 'AI can investigate too — but only with the same understanding the authors have. In big codebases, invest in docs written for AI to read.',
  },
  {
    t: 'Make performance a habit',
    s: 'Every release now runs through Benchy before it ships.',
  },
]

const list: Variants = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
}
const item: Variants = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function Takeaways() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/15')
      if (e.key === 'Home') navigate('/')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 50% 15%, var(--deck-bg-from) 0%, var(--deck-bg-to) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-4xl flex-col justify-center px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            Takeaways
          </p>
          <Heading level={1} className="font-kairos text-4xl md:text-6xl">
            Measure. Don't guess.
          </Heading>
        </motion.div>

        <motion.ol
          className="mt-8 space-y-4"
          variants={list}
          initial="initial"
          animate="animate"
        >
          {TAKEAWAYS.map((k, i) => (
            <motion.li key={k.t} variants={item} className="flex gap-4">
              <span
                className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-sm font-semibold"
                style={{ background: `rgba(var(--deck-accent-rgb),0.1)`, color: ACCENT }}
              >
                {i + 1}
              </span>
              <p className="text-lg leading-snug text-text-secondary">
                <span className="font-semibold text-text-primary">{k.t}.</span>{' '}
                {k.s}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.p
          className="mt-8 text-xl text-text-primary md:text-2xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          The regression that ate a weekend? We'd catch it now —{' '}
          <span className="font-semibold" style={{ color: ACCENT }}>
            before it ships.
          </span>
        </motion.p>

        <motion.div
          className="mt-12 border-t pt-5"
          style={{ borderColor: 'rgba(var(--deck-surface-rgb),0.1)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-lg font-medium text-text-primary">Thank you.</p>
          <p className="mt-1 text-text-secondary">
            Aaron LaBeau · Developer Advocate, Ditto
          </p>
        </motion.div>
      </div>
    </SlideShell>
  )
}
