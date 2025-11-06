import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Policies from './FeesInformation/Policies'
import SchoolFees from './FeesInformation/SchoolFees'
import SchoolCurriculum from './FeesInformation/SchoolCurriculum'
import UniformEquipment from './FeesInformation/UniformEquipment'

function Information() {
  return (
    <Routes>
      <Route path="/" element={<Policies />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/fees" element={<SchoolFees />} />
      <Route path="/curriculum" element={<SchoolCurriculum />} />
      <Route path="/uniform" element={<UniformEquipment />} />
    </Routes>
  )
}

export default Information