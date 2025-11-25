import React from 'react'

function SchoolCurriculum() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-display text-navy mb-8 text-center">School Curriculum</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Key Stage 3 (Y7-Y9)</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 mb-4 list-disc list-inside">
            <li>Arabic</li>
            <li>Art</li>
            <li>Computer Science</li>
            <li>English Language</li>
            <li>English Literature</li>
            <li>Geography</li>
            <li>History</li>
            <li>Islamiyat</li>
            <li>Karate</li>
            <li>Mathematics</li>
            <li>Physical Education</li>
            <li>PSHCE</li>
            <li>Quran</li>
            <li>Religious Studies</li>
            <li>Science</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Key Stage 4 (Y10-Y11 GCSE)</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 mb-4 list-disc list-inside">
            <li>Arabic (to be confirmed)</li>
            <li>Biology</li>
            <li>Chemistry</li>
            <li>Computer Science</li>
            <li>English Language</li>
            <li>English Literature</li>
            <li>History</li>
            <li>Islamiyat (to be confirmed)</li>
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Religious Studies</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default SchoolCurriculum