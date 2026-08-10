import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { useTheme } from '@dittolive/anvil'
import Home from './slides/Home'
import ColdOpen from './slides/ColdOpen'
import Intro from './slides/Intro'
import WhatIsDitto from './slides/WhatIsDitto'
import RainbowConnection from './slides/RainbowConnection'

export default function App() {
  const { setTheme } = useTheme()
  const location = useLocation()

  // The deck is designed dark for now; pin it so it doesn't follow the OS.
  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  // Cross-dissolve between slides: the outgoing slide finishes its exit
  // (SlideShell) before the incoming one enters (mode="wait").
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<ColdOpen />} />
        <Route path="/2" element={<Intro />} />
        <Route path="/3" element={<WhatIsDitto />} />
        <Route path="/4" element={<RainbowConnection />} />
      </Routes>
    </AnimatePresence>
  )
}
