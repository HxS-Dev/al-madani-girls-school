import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../sanityClient'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'

function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "event"]|order(date desc){
        _id,
        title,
        date,
        order,
        pdf{asset->{url}}
      }`
    ).then(events => {
      // Only show events with order set
      const filtered = events.filter(e => typeof e.order === 'number')
      // Sort by order desc, then date desc
      filtered.sort((a, b) => {
        if (b.order !== a.order) return b.order - a.order
        return new Date(b.date) - new Date(a.date)
      })
      const now = new Date().toISOString().slice(0, 10)
      const upcoming = filtered.filter(e => e.date >= now)
      const past = filtered.filter(e => e.date < now)
      setUpcomingEvents(upcoming)
      setPastEvents(past)
    })
  }, [])

  function formatDateDDMMYYYY(dateStr) {
    if (!dateStr) return ''
    const [year, month, day] = dateStr.split('-')
    return `${day}-${month}-${year}`
  }

  function renderEvent(event) {
    return (
      <div key={event._id} className="mb-12 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-navy mb-2 text-center">{event.title}</h3>
        <p className="text-navy text-lg font-bold mb-4 text-center">{formatDateDDMMYYYY(event.date)}</p>
        {event.pdf?.asset?.url && (
          <div className="flex justify-center w-full">
            <div className="max-w-md w-full h-auto max-h-[800px] mx-auto">
              <a href={event.pdf.asset.url} target="_blank" rel="noopener noreferrer">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={event.pdf.asset.url}
                    defaultScale={SpecialZoomLevel.PageWidth}
                  />
                </Worker>
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display text-navy mb-8">Events</h1>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Upcoming Events</h2>
          {upcomingEvents.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-gray-700">No upcoming events.</p>
            </div>
          ) : (
            upcomingEvents.map(renderEvent)
          )}
        </div>
        <div>
          <details className="bg-white rounded-lg shadow-lg" closed>
            <summary className="cursor-pointer px-6 py-4 text-navy font-semibold text-2xl font-bold mb-6">
              Past Events
            </summary>
            {pastEvents.length === 0 ? (
              <div className="p-8">
                <p className="text-gray-700">No past events.</p>
              </div>
            ) : (
              <div className="px-6 pb-6">
                {pastEvents.map(renderEvent)}
              </div>
            )}
          </details>
        </div>
      </div>
    </div>
  )
}

export default Events