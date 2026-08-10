import { motion, type Variants } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'

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
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`bg-background relative min-h-dvh w-full overflow-hidden ${className ?? ''}`}
      style={style}
    >
      {children}
    </motion.div>
  )
}
