import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NewsPage from './NewsEvents/NewsPage'
import Events from './NewsEvents/Events'

function News() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  )
}

export default News