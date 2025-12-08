import React from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { contentData } from '../../data/content'

const SchoolValues = () => {
  const { values } = contentData.about
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
          School Vision & Ethos
        </h2>
        <p className="text-xl text-sage max-w-3xl mx-auto">
          Our values form the foundation of everything we do at Al-Madani Girls School.
        </p>
      </div>

      {/* Mission and bullet lists in two columns */}
      <section className="mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 gap-12">
            <ul className="mb-6 list-disc list-outside text-sage text-lg leading-relaxed">
              {values.map((value, idx) => (
                <li key={idx} style={{ textIndent: '-0.2em', paddingLeft: '0.9em', wordBreak: 'break-word' }}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SchoolValues