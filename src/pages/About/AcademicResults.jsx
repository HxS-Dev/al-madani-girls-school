import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../sanityClient';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function AcademicResults() {
  const [resultsTimeline, setResultsTimeline] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "academicResults"] | order(year desc){
          year,
          pdf{asset->{url}}
        }`
      )
      .then(setResultsTimeline)
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Academic Results
        </h2>
        <p className="text-xl text-sage max-w-3xl mx-auto">
          View our academic results for each year. Click the PDF to download the report.
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Timeline vertical line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-navy/30 z-0"
        />

        {resultsTimeline.map((result, idx) => (
          <div
            key={result.year}
            className="w-full flex flex-col md:flex-row items-center mb-24 relative z-10"
          >
            {/* Left side */}
            <div
              className={`w-full md:w-1/2 flex ${
                idx % 2 === 0 ? 'justify-end md:pr-8' : 'justify-start md:pl-8'
              } order-1 md:order-none`}
            >
              {/* On mobile, show empty div for left side if needed */}
              {idx % 2 === 0 || window.innerWidth >= 768 ? (
                <a href={result.pdf?.asset?.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <div className="max-w-md w-full h-auto max-h-[800px]">
                    {idx % 2 === 0 && (
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer
                          fileUrl={result.pdf?.asset?.url}
                          defaultScale={SpecialZoomLevel.PageWidth}
                        />
                      </Worker>
                    )}
                  </div>
                </a>
              ) : null}
            </div>

            {/* Timeline dot */}
            <div className="w-0 flex flex-col items-center z-10 order-0 md:order-none">
              <div className="w-24 h-24 bg-gold rounded-full border-4 border-navy flex items-center justify-center shadow-lg">
                <span
                  className="text-navy font-bold text-3xl text-center w-full"
                  style={{ lineHeight: 1 }}
                >
                  {result.year}
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="w-full md:w-1/2 flex justify-start md:pl-16 order-2 md:order-none">
              <div className="max-w-md w-full h-auto max-h-[800px] md:pl-8">
                {idx % 2 === 1 || window.innerWidth < 768 ? (
                  <a href={result.pdf?.asset?.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                      <Viewer
                        fileUrl={result.pdf?.asset?.url}
                        defaultScale={SpecialZoomLevel.PageWidth}
                      />
                    </Worker>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicResults;
