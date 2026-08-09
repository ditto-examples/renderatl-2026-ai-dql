import { motion } from 'motion/react'
import {
  Button,
  Card,
  DittoLogo,
  Heading,
  useTheme,
  type Theme,
} from '@dittolive/anvil'

const THEME_CYCLE: Theme[] = ['system', 'light', 'dark']

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

export default function App() {
  return (
    <div className="min-h-full px-6 py-12 md:px-12">
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
            From 7,159&nbsp;ms to 16&nbsp;ms
          </Heading>
          <p className="text-text-secondary mt-6 max-w-2xl text-lg">
            How AI-assisted instrumentation turned one of Ditto's heaviest
            queries into a real-time one — and changed the way we ship.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { label: 'Before', value: '7,159 ms', tone: 'text-fill-critical' },
            { label: 'After', value: '16 ms', tone: 'text-fill-success' },
            { label: 'Speedup', value: '447×', tone: 'text-fill-brand-primary' },
          ].map((stat, i) => (
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

        <div className="mt-12 flex flex-wrap gap-3">
          <Button variant="primary">Start the talk</Button>
          <Button variant="secondary">Skip to results</Button>
          <Button variant="ghost">Speaker notes</Button>
        </div>

        <p className="text-text-tertiary mt-16 text-sm">
          Setup check: Vite + React + Motion rendering Anvil components with live
          theming. Toggle the theme in the top-right to verify tokens flow.
        </p>
      </main>
    </div>
  )
}
