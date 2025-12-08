import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import { contentData } from '../data/content'
import HeadteacherIntroduction from './About/HeadteacherIntroduction'
import SchoolValues from './About/SchoolValues'
import OfstedReport from './About/OfstedReport'
import AcademicResults from './About/AcademicResults'
import ContactStaffGovernors from './About/ContactStaffGovernors'

function About() {
  return (
    <Routes>
      <Route path="/headteacher" element={<HeadteacherIntroduction />} />
      <Route path="/values" element={<SchoolValues />} />
      <Route path="/ofsted" element={<OfstedReport />} />
      <Route path="/results" element={<AcademicResults />} />
      <Route path="/contact" element={<ContactStaffGovernors />} />
    </Routes>
  )
}

export default About