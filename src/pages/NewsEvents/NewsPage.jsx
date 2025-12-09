import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../sanityClient'

function NewsPage() {
  const [groupedNewsletters, setGroupedNewsletters] = useState({})
  const [years, setYears] = useState([])

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "newsletter"]|order(date desc){
        _id,
        title,
        date,
        pdf{asset->{url}}
      }`
    ).then(items => {
      const groups = items.reduce((acc, item) => {
        const y = item.date ? item.date.slice(0, 4) : 'Unknown'
        acc[y] = acc[y] || []
        acc[y].push(item)
        return acc
      }, {})
      Object.keys(groups).forEach(y => {
        groups[y].sort((a,b) => new Date(b.date) - new Date(a.date))
      })
      const sortedYears = Object.keys(groups).sort((a,b) => Number(b) - Number(a))
      setGroupedNewsletters(groups)
      setYears(sortedYears)
    })
  }, [])

  function formatDateDDMMYYYY(dateStr) {
    if (!dateStr) return ''
    const [year, month, day] = dateStr.split('-')
    return `${day}-${month}-${year}`
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display text-navy mb-8">Newsletters</h1>
        {years.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700">No newsletters available yet.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {years.map(year => (
              <details key={year} className="bg-white rounded-lg shadow-lg">
                <summary className="cursor-pointer px-6 py-4 text-navy font-semibold flex items-center justify-between">
                  <span>{year}</span>
                  <span className="text-sage text-sm">{groupedNewsletters[year].length} items</span>
                </summary>
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {groupedNewsletters[year].map(n => (
                      <a key={n._id} href={n.pdf?.asset?.url} target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-lg hover:shadow-md transition">
                        <div className="p-4">
                          <h3 className="text-navy font-semibold mb-1">{n.title || `Newsletter`}</h3>
                          <p className="text-gray-600 text-sm">Open PDF</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsPage