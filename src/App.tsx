import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { useTheme } from '@dittolive/anvil'
import Home from './slides/Home'
import ColdOpen from './slides/ColdOpen'
import Intro from './slides/Intro'
import WhatIsDitto from './slides/WhatIsDitto'
import Problem from './slides/Problem'
import ExistingTools from './slides/ExistingTools'
import AiOverview from './slides/AiOverview'
import BuildingBenchy from './slides/BuildingBenchy'
import Investigating from './slides/Investigating'
import FlowDiagram from './slides/FlowDiagram'
import HowWeFixed from './slides/HowWeFixed'
import Payoff from './slides/Payoff'
import BroaderWin from './slides/BroaderWin'
import WorkedVsNot from './slides/WorkedVsNot'
import Takeaways from './slides/Takeaways'

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
        <Route path="/4" element={<Problem />} />
        <Route path="/5" element={<ExistingTools />} />
        <Route path="/6" element={<AiOverview />} />
        <Route path="/7" element={<BuildingBenchy />} />
        <Route path="/8" element={<Investigating />} />
        <Route path="/9" element={<FlowDiagram />} />
        <Route path="/10" element={<HowWeFixed />} />
        <Route path="/11" element={<Payoff />} />
        <Route path="/12" element={<BroaderWin />} />
        <Route path="/13" element={<WorkedVsNot />} />
        <Route path="/14" element={<Takeaways />} />
      </Routes>
    </AnimatePresence>
  )
}
