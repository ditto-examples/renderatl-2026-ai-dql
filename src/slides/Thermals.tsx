import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Heading } from '@dittolive/anvil'
import { SlideShell } from '../components/SlideShell'
import { ThermalDiagram } from '../components/ThermalDiagram'

const ACCENT = 'var(--deck-accent)'

export default function Thermals() {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/7')
      if (e.key === 'ArrowRight' || e.key === 'Enter') navigate('/9')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <SlideShell
      style={{
        background:
          'radial-gradient(120% 120% at 70% 10%, var(--deck-bg-from) 0%, var(--deck-bg-to) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-text-secondary uppercase">
            01 · Build · trusting the bench
          </p>
          <Heading level={1} className="font-kairos text-3xl md:text-5xl">
            Same code. Different numbers.
          </Heading>
          <p className="mt-2 max-w-3xl text-lg text-text-secondary">
            We started on a Pixel Tablet and a Pixel 10 — real, representative
            hardware. The numbers wouldn't hold still.
          </p>
        </motion.div>

        <motion.figure
          className="m-0 mt-5"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            data-swipe-ignore
            className="-mx-6 overflow-x-auto px-6 md:mx-0 md:flex md:justify-center md:overflow-visible md:px-0"
          >
            <ThermalDiagram />
          </div>
        </motion.figure>

        <motion.p
          className="mt-4 max-w-5xl text-sm text-text-tertiary md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          We chased it for a while — even cutting the dataset down — before AI
          named it: thermal throttling.{' '}
          <span style={{ color: ACCENT }}>
            You can't measure your code on hardware that's busy protecting
            itself.
          </span>{' '}
          Several vendors make what I switched to — an SoC board with a
          desktop-grade cooler and no battery: Orange Pi 6 Plus, Radxa,
          Minisforum MS-R1.
        </motion.p>
      </div>
    </SlideShell>
  )
}
