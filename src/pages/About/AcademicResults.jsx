import React from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { contentData } from '../../data/content'

const AcademicResults = () => {
  const { academicResults } = contentData.about
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Academic Results
        </h2>
        <p className="text-xl text-sage">
          Our students consistently achieve outstanding academic results across all key stages.
        </p>
      </div>

      <div className="space-y-12">
        {/* GCSE Results */}
        <section>
          <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
            GCSE Results {academicResults.gcse.year}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-navy mb-2">{academicResults.gcse.grade9}</div>
                <p className="text-sage">Grade 9</p>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-gold mb-2">{academicResults.gcse.grades9_7}</div>
                <p className="text-sage">Grades 9-7</p>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-navy mb-2">{academicResults.gcse.grades9_4}</div>
                <p className="text-sage">Grades 9-4</p>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-gold mb-2">{academicResults.gcse.attainment8}</div>
                <p className="text-sage">Attainment 8</p>
              </Card.Body>
            </Card>
          </div>
        </section>

        {/* A-Level Results */}
        <section>
          <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
            A-Level Results {academicResults.alevel.year}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-navy mb-2">{academicResults.alevel.aStar}</div>
                <p className="text-sage">A* Grades</p>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-gold mb-2">{academicResults.alevel.aStarA}</div>
                <p className="text-sage">A*-A Grades</p>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-navy mb-2">{academicResults.alevel.aStarB}</div>
                <p className="text-sage">A*-B Grades</p>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-gold mb-2">{academicResults.alevel.passRate}</div>
                <p className="text-sage">Pass Rate</p>
              </Card.Body>
            </Card>
          </div>
        </section>

        {/* University Destinations */}
        <section>
          <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
            University Destinations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-navy mb-2">{academicResults.destinations.university}</div>
                <p className="text-sage">University</p>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-gold mb-2">{academicResults.destinations.russellGroup}</div>
                <p className="text-sage">Russell Group</p>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-navy mb-2">{academicResults.destinations.apprenticeship}</div>
                <p className="text-sage">Apprenticeships</p>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <div className="text-3xl font-bold text-gold mb-2">{academicResults.destinations.employment}</div>
                <p className="text-sage">Employment</p>
              </Card.Body>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AcademicResults