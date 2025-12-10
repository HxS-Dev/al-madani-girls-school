import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../sanityClient'

function ApplicationTimeline() {
  const [timeline, setTimeline] = useState(null)

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "applicationTimeline"][0]{cycle, rows}`
    ).then(setTimeline)
  }, [])

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-navy mb-8 text-center">
          Application Timeline{timeline?.cycle ? ` for ${timeline.cycle} applications` : ''}
        </h1>
        {timeline && timeline.rows && timeline.rows.length > 0 ? (
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-3 text-left text-base font-semibold">Date</th>
                  <th className="px-6 py-3 text-left text-base font-semibold">Description</th>
                  <th className="px-6 py-3 text-left text-base font-semibold">Fee/Note</th>
                </tr>
              </thead>
              <tbody>
                {timeline.rows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-charcoal whitespace-pre-line">{row.date}</td>
                    <td className="px-6 py-4 text-charcoal whitespace-pre-line">{row.description}</td>
                    <td className="px-6 py-4 text-charcoal whitespace-pre-line">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-700">No application timeline available.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApplicationTimeline