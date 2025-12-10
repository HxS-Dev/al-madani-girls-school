import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ApplicationTimeline from './Admissions/ApplicationTimeline'
import AdmissionsPolicy from './Admissions/AdmissionsPolicy'
import AdmissionsFees from './Admissions/AdmissionsFees'
import EntranceExamOverview from './Admissions/EntranceExamOverview'

function Admissions() {
  return (
    <Routes>
      <Route path="/" element={<ApplicationTimeline />} />
      <Route path="/calendar" element={<ApplicationTimeline />} />
      <Route path="/procedure" element={<AdmissionsPolicy />} />
      <Route path="/fees" element={<AdmissionsFees />} />
      <Route path="/entrance-exam" element={<EntranceExamOverview />} />
    </Routes>
  )
}

export default Admissions