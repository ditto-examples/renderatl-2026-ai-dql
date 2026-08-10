import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { SlideShell } from '../components/SlideShell'

const TYPING_MS = 1600

// Fixed Slack-dark palette. Deliberately literal hex — Anvil's dark theme
// inverts the raw Tailwind palette (white -> #000, slate-* -> dark), so
// theme-derived utilities would render this always-dark card unreadable.
const C = {
  green: '#4ec98a', // Slack name / mention
  mentionBg: 'rgba(78,201,138,0.12)',
  body: '#d7dbe0', // message text
  strong: '#ffffff',
  muted: '#8b93a1', // timestamps, kicker, hints
  subtle: '#cbd5e1', // dividers, framing
  card: '#1a1d21',
  hair: 'rgba(255,255,255,0.10)',
  hair2: 'rgba(255,255,255,0.16)',
  bubble: 'rgba(255,255,255,0.06)',
}

export default function ColdOpen() {
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const [delivered, setDelivered] = useState(false)

  // The message "arrives" after a brief typing indicator.
  useEffect(() => {
    if (reduceMotion) {
      setDelivered(true)
      return
    }
    const t = setTimeout(() => setDelivered(true), TYPING_MS)
    return () => clearTimeout(t)
  }, [reduceMotion])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/2')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 50% 15%, #14181d 0%, #0b0d10 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6 py-16">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm font-medium tracking-[0.2em] uppercase"
          style={{ color: C.muted }}
        >
          The message that started it all
        </motion.p>

        {/* Slack surface */}
        <div
          className="rounded-2xl shadow-2xl shadow-black/50"
          style={{ background: C.card, border: `1px solid ${C.hair}` }}
        >
          <DateDivider label="Thursday" />

          <div className="px-6 pt-2 pb-6">
            <AnimatePresence mode="wait">
              {!delivered ? (
                <TypingRow key="typing" />
              ) : (
                <Message key="message" reduceMotion={!!reduceMotion} />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Framing — appears once the message has landed */}
        <AnimatePresence>
          {delivered && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <p className="text-lg leading-relaxed" style={{ color: C.subtle }}>
                This talk is that investigation — what I found, how we fixed it,
                and how I used{' '}
                <span className="font-medium" style={{ color: C.strong }}>
                  AI at every step
                </span>{' '}
                to move faster than I could alone.
              </p>
              <p
                className="mt-6 text-xs tracking-wide"
                style={{ color: C.muted }}
              >
                Press <kbd className="font-mono">→</kbd> to continue ·{' '}
                <kbd className="font-mono">←</kbd> to go back
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideShell>
  )
}

/** Slack's centered day divider ("Thursday" pill over a hairline). */
function DateDivider({ label }: { label: string }) {
  return (
    <div className="relative flex items-center justify-center px-6 py-3">
      <div
        className="absolute inset-x-6 top-1/2 h-px"
        style={{ background: C.hair }}
      />
      <span
        className="relative rounded-full px-3 py-0.5 text-xs font-bold"
        style={{ background: C.card, border: `1px solid ${C.hair2}`, color: C.subtle }}
      >
        {label}
      </span>
    </div>
  )
}

/** Adam's blue "VIP" badge, matching the screenshot. */
function VipBadge() {
  return (
    <span className="ml-1.5 inline-flex translate-y-[-1px] items-center rounded-[3px] bg-[#1264a3] px-1 align-middle text-[10px] leading-[1.5] font-bold tracking-wide text-[#ffffff]">
      VIP
    </span>
  )
}

/** Red do-not-disturb status dot. */
function DndIcon() {
  return (
    <span
      className="ml-1.5 inline-flex h-[15px] w-[15px] translate-y-[-1px] items-center justify-center rounded-full bg-[#e01e5a] align-middle"
      aria-label="Do not disturb"
      role="img"
    >
      <span className="block h-[2px] w-[7px] rounded-full bg-[#ffffff]" />
    </span>
  )
}

function Timestamp() {
  return (
    <time
      className="shrink-0 pt-0.5 text-xs tabular-nums"
      style={{ color: C.muted }}
    >
      10:19&nbsp;AM
    </time>
  )
}

/** "Adam Fish is typing…" three-dot indicator. */
function TypingRow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="flex gap-3"
    >
      <Timestamp />
      <div
        className="flex items-center gap-1.5 rounded-full px-4 py-3"
        style={{ background: C.bubble }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block h-2 w-2 rounded-full"
            style={{ background: C.muted }}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.18,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

/** The delivered message, in Slack's compact channel format. */
function Message({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-3"
    >
      <Timestamp />
      <div
        className="min-w-0 space-y-3 text-[15px] leading-relaxed"
        style={{ color: C.body }}
      >
        <p>
          <span className="font-bold" style={{ color: C.green }}>
            Adam Fish
          </span>
          <VipBadge />
          <DndIcon />{' '}
          <span
            className="rounded px-1 font-medium"
            style={{ color: C.green, backgroundColor: C.mentionBg }}
          >
            @Aaron LaBeau
          </span>{' '}
          I need your help this week. With v5 out, the results from their test
          aren't where they should be. Did we help them with this? The numbers
          seem off to me. As it stands, the deal is at real risk unless we can
          turn this around.
        </p>
        <p>
          I'd like you to produce a robust Ditto performance test suite, so we can
          go back with credible, reproducible numbers and show that their results
          don't match ours. And if it turns out we do have genuine issues, let's
          pull in the right people to fix them.
        </p>
        <p>Can you help with this?</p>
      </div>
    </motion.div>
  )
}
