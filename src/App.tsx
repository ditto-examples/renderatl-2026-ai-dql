import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { useTheme } from '@dittolive/anvil'
import Home from './slides/Home'
import Intro from './slides/Intro'
import WhatIsDitto from './slides/WhatIsDitto'
import Problem from './slides/Problem'
import ExistingTools from './slides/ExistingTools'
import AiOverview from './slides/AiOverview'
import BuildingBenchy from './slides/BuildingBenchy'
import Thermals from './slides/Thermals'
import Investigating from './slides/Investigating'
import Instrumentation from './slides/Instrumentation'
import FlowDiagram from './slides/FlowDiagram'
import HowWeFixed from './slides/HowWeFixed'
import Payoff from './slides/Payoff'
import BroaderWin from './slides/BroaderWin'
import WorkedVsNot from './slides/WorkedVsNot'
import Takeaways from './slides/Takeaways'
import { SlideNav } from './components/SlideNav'

export default function App() {
  const { setTheme } = useTheme()
  const location = useLocation()

  // Default to dark (the deck is designed dark), but respect a saved choice
  // from the theme toggle so light mode sticks across reloads.
  useEffect(() => {
    let stored: string | null = null
    try {
      stored = localStorage.getItem('portal-ui-theme') // Anvil's THEME_STORAGE_KEY
    } catch {
      stored = null
    }
    if (!stored) setTheme('dark')
  }, [setTheme])

  // Phones scroll (see index.css), so a slide entered while the previous one
  // was scrolled down would start part-way in. Every slide starts at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Cross-dissolve between slides: the outgoing slide finishes its exit
  // (SlideShell) before the incoming one enters (mode="wait").
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/2" element={<Intro />} />
          <Route path="/3" element={<Problem />} />
          <Route path="/4" element={<WhatIsDitto />} />
          <Route path="/5" element={<ExistingTools />} />
          <Route path="/6" element={<AiOverview />} />
          <Route path="/7" element={<BuildingBenchy />} />
          <Route path="/8" element={<Thermals />} />
          <Route path="/9" element={<Investigating />} />
          <Route path="/10" element={<Instrumentation />} />
          <Route path="/11" element={<FlowDiagram />} />
          <Route path="/12" element={<HowWeFixed />} />
          <Route path="/13" element={<Payoff />} />
          <Route path="/14" element={<BroaderWin />} />
          <Route path="/15" element={<WorkedVsNot />} />
          <Route path="/16" element={<Takeaways />} />
        </Routes>
      </AnimatePresence>
      {/* Persistent touch-friendly prev/next controls (outside AnimatePresence
          so they don't cross-dissolve with each slide). */}
      <SlideNav />
    </>
  )
}
