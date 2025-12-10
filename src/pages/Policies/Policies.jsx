import React, { useEffect, useState } from 'react'
import sanityClient from '../../sanityClient'

function Policies() {
  const [policies, setPolicies] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "policy"]{name, order, pdf{asset->{url}}}`)
      .then((data) => {
        // Sort by order, unordered at end
        const ordered = data
          .filter((p) => typeof p.order === 'number')
          .sort((a, b) => a.order - b.order)
        const unordered = data.filter((p) => typeof p.order !== 'number')
        setPolicies([...ordered, ...unordered])
      })
  }, [])

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display text-navy mb-8">Policies</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          {policies.length === 0 ? (
            <p className="text-gray-700 leading-relaxed">No policies found.</p>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {policies.map((policy, idx) => (
                <a
                  key={policy.name + idx}
                  href={policy.pdf?.asset?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-navy text-white rounded-lg shadow hover:bg-blue-700 transition p-6 text-center font-semibold text-lg"
                >
                  {policy.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Policies