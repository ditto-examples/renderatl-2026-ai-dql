import { useNavigate, useLocation } from 'react-router-dom'

/**
 * Linear slide order — matches the <Route> table in App and the per-slide
 * arrow-key handlers. Home is "/", then /2../15 in sequence.
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
]

/**
 * Fixed-position prev/next buttons, one on each edge, vertically centered.
 * Primarily for touch devices, where the arrow-key hints don't apply and
 * there's otherwise no way to advance. Hidden at the ends of the deck.
 */
export function SlideNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const i = ORDER.indexOf(pathname)
  if (i === -1) return null // unknown route — stay out of the way

  const prev = i > 0 ? ORDER[i - 1] : null
  const next = i < ORDER.length - 1 ? ORDER[i + 1] : null

  const base =
    'fixed top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm transition-opacity hover:opacity-100 active:scale-95 md:h-12 md:w-12'

  const style = {
    background: 'rgba(var(--deck-surface-rgb),0.08)',
    border: '1px solid rgba(var(--deck-surface-rgb),0.15)',
    color: 'var(--deck-accent)',
  }

  return (
    <>
      {prev && (
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => navigate(prev)}
          className={`${base} left-4 opacity-60`}
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
          className={`${base} right-4 opacity-60`}
          style={style}
        >
          <Chevron dir="right" />
        </button>
      )}
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
