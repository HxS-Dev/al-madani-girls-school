import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../sanityClient'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'

function AnnualCalendar() {
  const [pdfUrl, setPdfUrl] = useState('')

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "annualCalendar"][0]{pdf{asset->{url}}}`
    ).then(data => {
      setPdfUrl(data?.pdf?.asset?.url || '')
    })
  }, [])

  return (
    <div className="min-h-screen py-16 flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <h1 className="text-4xl font-display text-navy mb-8">Annual Calendar</h1>
        {pdfUrl ? (
          <div className="flex-1 flex justify-center items-center w-full">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <div className="w-full h-[80vh] max-w-5xl mx-auto">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={pdfUrl}
                    defaultScale={SpecialZoomLevel.PageWidth}
                  />
                </Worker>
              </div>
            </a>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed">
              School annual calendar and important dates will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AnnualCalendar