import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Button, Card, DittoLogo, Heading, useTheme, type Theme } from '@dittolive/anvil'
import { FloatingSquaresBackground } from '../components/FloatingSquaresBackground'
import { DARK_SQUARE_FILLS, LIGHT_SQUARE_FILLS } from '../components/floatingSquares'
import { DittoButton } from '../components/DittoButton'
import { SlideShell } from '../components/SlideShell'

const START_PATH = '/2' // Intro (the Cold Open slide was removed)
const THEME_CYCLE: Theme[] = ['dark', 'light', 'system']

function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const next = THEME_CYCLE[(THEME_CYCLE.indexOf(theme) + 1) % THEME_CYCLE.length]
  return (
    <Button variant="outline" size="sm" onClick={() => setTheme(next)}>
      Theme: {theme}
      <span className="opacity-60"> ({resolvedTheme})</span>
    </Button>
  )
}

const STATS = [
  { label: 'Before', value: '2,253 ms', tone: 'text-fill-critical' },
  { label: 'After', value: '1.84 ms', tone: 'text-fill-success' },
  { label: 'Speedup', value: '1,226×', tone: 'text-fill-brand-primary' },
]

export default function Home() {
  const navigate = useNavigate()
  const { resolvedTheme } = useTheme()
  const isDark =
    resolvedTheme === 'dark' || resolvedTheme === 'dark-high-contrast'

  // Keyboard-driven start — natural for a live deck.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault()
        navigate(START_PATH)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell>
      {/* Small drifting-squares field, ported from the Ditto presence viewer. */}
      <FloatingSquaresBackground
        key={resolvedTheme}
        className="pointer-events-none absolute inset-0 h-full w-full"
        fills={isDark ? DARK_SQUARE_FILLS : LIGHT_SQUARE_FILLS}
      />

      <div className="relative z-10 px-6 py-12 md:px-12">
        <header className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <DittoLogo className="h-8 w-auto" />
            <span className="text-text-secondary text-sm font-medium tracking-wide uppercase">
              RenderATL 2026
            </span>
          </div>
          <ThemeToggle />
        </header>

        <main className="mx-auto mt-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-text-secondary mb-4 text-sm font-medium tracking-widest uppercase">
              A performance story
            </p>
            <Heading level={1} className="font-kairos text-5xl md:text-7xl">
              From 2,253&nbsp;ms to 1.84&nbsp;ms
            </Heading>
            <p className="text-text-secondary mt-6 max-w-2xl text-lg">
              How AI-assisted instrumentation turned one of Ditto's heaviest
              queries into a real-time one — and changed the way we ship.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              >
                <Card className="p-6">
                  <p className="text-text-secondary text-xs font-medium tracking-widest uppercase">
                    {stat.label}
                  </p>
                  <p className={`mt-2 text-4xl font-semibold ${stat.tone}`}>
                    {stat.value}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <DittoButton onClick={() => navigate(START_PATH)}>
              Start the talk
            </DittoButton>
            <Button variant="ghost" size="lg" onClick={() => navigate('/15')}>
              Skip to results
            </Button>
            {/* asChild renders a real anchor with the ghost-button styling, so
                it's middle-clickable and matches the button beside it. */}
            <Button asChild variant="ghost" size="lg">
              <a href="https://ditto.com" target="_blank" rel="noopener noreferrer">
                ditto.com
              </a>
            </Button>
          </div>
        </main>
      </div>
    </SlideShell>
  )
}
