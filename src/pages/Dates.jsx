import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AnnualCalendar from './KeyDatesTimings/AnnualCalendar'
import SchoolTimetable from './KeyDatesTimings/SchoolTimetable'

function Dates() {
  return (
    <div className="pt-20 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Key Dates & Timings
          </h1>
          <p className="text-xl text-sage max-w-3xl mx-auto">
            Important dates and schedules for the academic year.
          </p>
        </div>

        <Routes>
          <Route path="/" element={<AnnualCalendar />} />
          <Route path="/calendar" element={<AnnualCalendar />} />
          <Route path="/timetable" element={<SchoolTimetable />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dates