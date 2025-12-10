import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../sanityClient'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'

function AdmissionsPolicy() {
  const [pdfUrl, setPdfUrl] = useState('')

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "admissionsPolicy"][0]{pdf{asset->{url}}}`
    ).then(data => {
      setPdfUrl(data?.pdf?.asset?.url || '')
    })
  }, [])

  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-display text-navy mb-8 text-center">Admissions Policy</h1>
      {pdfUrl ? (
        <div className="flex justify-center w-full">
          <div className="max-w-md w-full h-auto max-h-[800px] mx-auto">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={pdfUrl}
                  defaultScale={SpecialZoomLevel.PageFit}
                />
              </Worker>
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-700">Admissions policy PDF not available.</p>
        </div>
      )}
    </div>
  )
}

export default AdmissionsPolicy