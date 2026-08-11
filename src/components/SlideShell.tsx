import { motion, type Variants } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'
import { useTheme } from '@dittolive/anvil'
import dittoLogoWhite from '../assets/ditto_full-logotype_white.svg'
import dittoLogoDark from '../assets/ditto_full-logotype_dark.svg'

/**
 * Full-viewport wrapper every slide sits in. Provides the shared dark
 * canvas plus a consistent enter/exit transition so routing between
 * slides cross-dissolves cleanly (driven by <AnimatePresence> in App).
 */
const variants: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
}

interface SlideShellProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function SlideShell({ children, className, style }: SlideShellProps) {
  const { resolvedTheme } = useTheme()
  const isDark =
    resolvedTheme === 'dark' || resolvedTheme === 'dark-high-contrast'

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      // Clipped in presentation mode; on phones content is allowed to run past
      // the viewport so the page can scroll it into reach.
      className={`bg-background relative min-h-dvh w-full overflow-visible md:overflow-hidden ${className ?? ''}`}
      style={style}
    >
      {children}
      {/* Subtle Ditto brand mark, bottom-right of every slide (theme-aware). */}
      <img
        src={isDark ? dittoLogoWhite : dittoLogoDark}
        alt="Ditto"
        aria-hidden="true"
        className="pointer-events-none absolute right-6 bottom-5 z-20 h-auto w-24 opacity-45 select-none md:w-28"
      />
    </motion.div>
  )
}
