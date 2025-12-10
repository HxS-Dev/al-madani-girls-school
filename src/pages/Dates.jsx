import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AnnualCalendar from './KeyDatesTimings/AnnualCalendar'

function Dates() {
  return (
    <Routes>
      <Route path="/" element={<AnnualCalendar />} />
      <Route path="/calendar" element={<AnnualCalendar />} />
    </Routes>
  )
}

export default Dates