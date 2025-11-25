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
          School Values & Mission Statement
        </h2>
        <p className="text-xl text-sage max-w-3xl mx-auto">
          Our values form the foundation of everything we do at Al-Madani Girls School.
        </p>
      </div>

      {/* Vision at top */}
      <section className="mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="font-display text-2xl font-bold text-charcoal mb-4">Our Vision</h3>
          <p className="text-sage text-lg leading-relaxed">{values.vision}</p>
        </div>
      </section>

      {/* Mission and bullet lists in two columns */}
      <section className="mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-display text-2xl font-bold text-charcoal mb-4 text-center">Our Mission</h3>
          <p className="text-sage text-lg leading-relaxed mb-8 text-center">
            {values.mission.split('\n\n')[0]}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Committed to left column */}
            <div>
              <h4 className="font-display text-xl font-bold text-charcoal mb-2">Committed to</h4>
              <ul className="mb-6 list-disc list-inside text-sage text-lg leading-relaxed">
                {values.mission.split('\n\n')[1]
                  .split('\n')
                  .filter(line => line.trim().startsWith('–'))
                  .map((line, idx) => (
                    <li key={idx}>{line.replace(/^–\s*/, '')}</li>
                  ))}
              </ul>
            </div>
            {/* Improving Through right column */}
            <div>
              <h4 className="font-display text-xl font-bold text-charcoal mb-2">Improving Through</h4>
              <ul className="list-disc list-inside text-sage text-lg leading-relaxed">
                {values.mission.split('\n\n')[2]
                  .split('\n')
                  .filter(line => line.trim().startsWith('–'))
                  .map((line, idx) => (
                    <li key={idx}>{line.replace(/^–\s*/, '')}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values grid at bottom */}
      <section>
        <h3 className="font-display text-2xl font-bold text-charcoal mb-12 text-center">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.values.map((value, index) => (
            <Card key={index} hover className="text-center">
              <Card.Body>
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">
                    {value.icon}
                  </span>
                </div>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default SchoolValues