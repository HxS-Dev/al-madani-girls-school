import { Routes, Route } from 'react-router-dom'
import Policies from './Policies/Policies'

function Information() {
  return (
    <Routes>
      <Route path="/" element={<Policies />} />
      <Route path="/policies" element={<Policies />} />
    </Routes>
  )
}

export default Information