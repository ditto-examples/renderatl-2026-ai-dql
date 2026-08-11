import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

/**
 * Linear slide order — matches the <Route> table in App and the per-slide
 * arrow-key handlers. Home is "/", then /2../16 in sequence.
 *
 * NB: inserting a slide means renumbering here, in App's <Route> table, and in
 * the arrow-key handler of every slide from the insertion point on.
 */
const ORDER = [
  '/',
  '/2',
  '/3',
  '/4',
  '/5',
  '/6',
  '/7',
  '/8',
  '/9',
  '/10',
  '/11',
  '/12',
  '/13',
  '/14',
  '/15',
  '/16',
]

/** Horizontal travel (px) that counts as a swipe rather than a scroll. */
const SWIPE_MIN = 60
/** How much more horizontal than vertical it has to be, so scrolling is safe. */
const SWIPE_RATIO = 1.5

/**
 * Prev/next controls, plus swipe navigation on touch devices.
 *
 * Two layouts: edge-centered circles on tablet and up (where there's room
 * beside the content), and a single compact pill in the bottom-left corner on
 * phones — out of the text, within thumb reach, and clear of the Ditto mark in
 * the opposite corner.
 */
export function SlideNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const i = ORDER.indexOf(pathname)
  const prev = i > 0 ? ORDER[i - 1] : null
  const next = i > -1 && i < ORDER.length - 1 ? ORDER[i + 1] : null

  // Swipe left/right to advance. Vertical-dominant gestures are left alone so
  // they scroll the slide, and anything starting inside a horizontally
  // scrollable element (the wide diagrams) pans that instead.
  useEffect(() => {
    let x0 = 0
    let y0 = 0
    let ignore = false

    const onStart = (e: TouchEvent) => {
      const t = e.touches[0]
      x0 = t.clientX
      y0 = t.clientY
      ignore = !!(e.target as Element | null)?.closest?.('[data-swipe-ignore]')
    }

    const onEnd = (e: TouchEvent) => {
      if (ignore) return
      const t = e.changedTouches[0]
      const dx = t.clientX - x0
      const dy = t.clientY - y0
      if (Math.abs(dx) < SWIPE_MIN) return
      if (Math.abs(dx) < Math.abs(dy) * SWIPE_RATIO) return
      const to = dx < 0 ? next : prev
      if (to) navigate(to)
    }

    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [navigate, prev, next])

  if (i === -1) return null // unknown route — stay out of the way

  const style = {
    background: 'rgba(var(--deck-surface-rgb),0.08)',
    border: '1px solid rgba(var(--deck-surface-rgb),0.15)',
    color: 'var(--deck-accent)',
  }

  const edge =
    'fixed top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full opacity-60 backdrop-blur-sm transition-opacity hover:opacity-100 active:scale-95 md:flex'

  const pill =
    'flex h-10 w-10 items-center justify-center rounded-full active:scale-95'

  return (
    <>
      {/* tablet and up — one control on each edge */}
      {prev && (
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => navigate(prev)}
          className={`${edge} left-4`}
          style={style}
        >
          <Chevron dir="left" />
        </button>
      )}
      {next && (
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => navigate(next)}
          className={`${edge} right-4`}
          style={style}
        >
          <Chevron dir="right" />
        </button>
      )}

      {/* phones — a compact pill, clear of the content, above the home bar */}
      <div
        className="fixed left-3 z-30 flex items-center gap-1 rounded-full p-1 backdrop-blur-sm md:hidden"
        style={{
          ...style,
          bottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)',
        }}
      >
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => prev && navigate(prev)}
          disabled={!prev}
          className={`${pill} disabled:opacity-25`}
        >
          <Chevron dir="left" />
        </button>
        <span
          className="px-1 text-xs tabular-nums"
          style={{ color: 'rgba(var(--deck-surface-rgb),0.55)' }}
        >
          {i + 1}/{ORDER.length}
        </span>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => next && navigate(next)}
          disabled={!next}
          className={`${pill} disabled:opacity-25`}
        >
          <Chevron dir="right" />
        </button>
      </div>
    </>
  )
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === 'left' ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  )
}
