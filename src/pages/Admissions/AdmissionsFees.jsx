import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../sanityClient'

function AdmissionsFees() {
  const [fees, setFees] = useState(null)

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "admissionsFees"][0]{rows}`
    ).then(setFees)
  }, [])

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display text-navy mb-8 text-center">Admissions Fees</h1>
        {fees && fees.rows && fees.rows.length > 0 ? (
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-3 text-left text-base font-semibold">Fee Type</th>
                  <th className="px-6 py-3 text-left text-base font-semibold">Amount/Value</th>
                </tr>
              </thead>
              <tbody>
                {fees.rows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-charcoal whitespace-pre-line">{row.label}</td>
                    <td className="px-6 py-4 text-charcoal whitespace-pre-line">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-700">No admissions fees information available.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdmissionsFees