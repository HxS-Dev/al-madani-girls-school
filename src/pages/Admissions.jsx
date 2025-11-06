import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdmissionsCalendar from './Admissions/AdmissionsCalendar'
import AdmissionsProcedure from './Admissions/AdmissionsProcedure'
import AdmissionsFees from './Admissions/AdmissionsFees'
import ApplicationForm from './Admissions/ApplicationForm'
import EntranceExamOverview from './Admissions/EntranceExamOverview'
import Gallery from './Admissions/Gallery'

function Admissions() {
  return (
    <Routes>
      <Route path="/" element={<AdmissionsCalendar />} />
      <Route path="/calendar" element={<AdmissionsCalendar />} />
      <Route path="/procedure" element={<AdmissionsProcedure />} />
      <Route path="/fees" element={<AdmissionsFees />} />
      <Route path="/application" element={<ApplicationForm />} />
      <Route path="/entrance-exam" element={<EntranceExamOverview />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  )
}

export default Admissions