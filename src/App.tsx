import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/landing-page'
import Transport from './components/transport'
import Boende from './components/boende'
import Navbar from './components/navbar'
import { GlobalStyles } from './components/globalstyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/boende" element={<Boende />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
