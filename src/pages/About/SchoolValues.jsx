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

      <div className="space-y-16">
        {/* Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-4">Our Mission</h3>
            <p className="text-sage text-lg leading-relaxed">{values.mission}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-4">Our Vision</h3>
            <p className="text-sage text-lg leading-relaxed">{values.vision}</p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h3 className="font-display text-2xl font-bold text-charcoal mb-12 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.values.map((value, index) => (
              <Card key={index} hover className="text-center">
                <Card.Body>
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-navy">
                      {value.title.charAt(0)}
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
    </div>
  )
}

export default SchoolValues