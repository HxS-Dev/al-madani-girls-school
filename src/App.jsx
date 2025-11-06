import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Dates from './pages/Dates'
import Admissions from './pages/Admissions'
import Information from './pages/Information'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading time for smooth entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-navy border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-navy font-display text-xl">Loading Al-Madani Girls School...</p>
          <p className="text-sage text-sm mt-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/news-events/*" element={<News />} />
            <Route path="/key-dates/*" element={<Dates />} />
            <Route path="/admissions/*" element={<Admissions />} />
            <Route path="/fees-information/*" element={<Information />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App