import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import { contentData } from '../data/content'
import HeadteacherIntroduction from './About/HeadteacherIntroduction'
import SchoolValues from './About/SchoolValues'
import OfstedReport from './About/OfstedReport'
import AcademicResults from './About/AcademicResults'
import ContactStaffGovernors from './About/ContactStaffGovernors'

function About() {
  return (
    <Routes>
      <Route path="/" element={<AboutOverview />} />
      <Route path="/headteacher" element={<HeadteacherIntroduction />} />
      <Route path="/values" element={<SchoolValues />} />
      <Route path="/ofsted" element={<OfstedReport />} />
      <Route path="/results" element={<AcademicResults />} />
      <Route path="/contact" element={<ContactStaffGovernors />} />
    </Routes>
  )
}

const AboutOverview = () => {
  return (
    <div className="space-y-16">
      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-charcoal mb-6">
            Excellence in Girls' Education Since 1985
          </h2>
          <p className="text-sage text-lg mb-6 leading-relaxed">
            Al-Madani Girls School has been at the forefront of girls' education in the UK for nearly four decades. 
            We are committed to providing an exceptional learning environment where young women can thrive academically, 
            personally, and socially.
          </p>
          <p className="text-sage text-lg mb-8 leading-relaxed">
            Our school combines traditional values with innovative teaching methods, ensuring that our students are 
            well-prepared for the challenges of higher education and beyond. We believe in nurturing not just academic 
            achievement, but also character, leadership, and social responsibility.
          </p>
          <div className="space-y-4">
            <Link to="/about/headteacher">
              <Button variant="primary">Headteacher's Message</Button>
            </Link>
            <Link to="/about/values" className="ml-4">
              <Button variant="outline">Our Values</Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/resources/hero-school.png" 
            alt="Al-Madani Girls School Campus" 
            className="rounded-xl shadow-lg w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="font-display text-3xl font-bold text-charcoal mb-12 text-center">
          Explore Our School
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <Card.Title>Headteacher's Introduction</Card.Title>
              <Card.Text>
                Read Dr. Sarah Ahmed's vision for the school and our educational philosophy.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/about/headteacher">
                <Button variant="outline" size="small">Read Message</Button>
              </Link>
            </Card.Footer>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <Card.Title>School Values & Mission</Card.Title>
              <Card.Text>
                Discover our core values and mission statement that guide everything we do.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/about/values">
                <Button variant="outline" size="small">Our Values</Button>
              </Link>
            </Card.Footer>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <Card.Title>Academic Results</Card.Title>
              <Card.Text>
                View our outstanding academic achievements and university destinations.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/about/results">
                <Button variant="outline" size="small">View Results</Button>
              </Link>
            </Card.Footer>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <Card.Title>Ofsted Report</Card.Title>
              <Card.Text>
                Read our latest Ofsted inspection report and outstanding ratings.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/about/ofsted">
                <Button variant="outline" size="small">Read Report</Button>
              </Link>
            </Card.Footer>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <Card.Title>Contact, Staff & Governors</Card.Title>
              <Card.Text>
                Get in touch with our team and meet our dedicated staff and governors.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to="/about/contact">
                <Button variant="outline" size="small">Get in Touch</Button>
              </Link>
            </Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default About