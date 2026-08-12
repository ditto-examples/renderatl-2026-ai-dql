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

          {/* Where to find me, and where to find Ditto. Stacked so each is its
              own tap target on a phone; the full URLs are visible because
              someone in the room will be reading, not clicking. */}
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/aaron-labeau-b444747/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-base underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70 md:text-lg"
              style={{ color: ACCENT }}
            >
              <LinkedInIcon />
              linkedin.com/in/aaron-labeau-b444747
            </a>
            <a
              href="https://ditto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-base underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70 md:text-lg"
              style={{ color: ACCENT }}
            >
              <GlobeIcon />
              ditto.com
            </a>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  )
}

/* ── icons (stroke = currentColor, so they take the link colour) ─── */

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="flex-none"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.1 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.52-2.45-1.82-2.45-1 0-1.6.67-1.86 1.32-.1.23-.12.55-.12.87V21h-4V9z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="flex-none"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18" />
    </svg>
  )
}
