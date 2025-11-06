import React from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { contentData } from '../../data/content'

const OfstedReport = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Ofsted Report
        </h2>
        <p className="text-xl text-sage">
          Our latest Ofsted inspection results demonstrate our commitment to excellence.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gold rounded-full mb-4">
            <span className="text-3xl font-bold text-white">1</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
            Outstanding - Grade 1
          </h3>
          <p className="text-sage">Latest Inspection: November 2023</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-charcoal mb-4">Inspection Categories</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-sage">Overall Effectiveness</span>
                <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">Outstanding</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sage">Quality of Education</span>
                <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">Outstanding</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sage">Behaviour & Attitudes</span>
                <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">Outstanding</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sage">Personal Development</span>
                <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">Outstanding</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sage">Leadership & Management</span>
                <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">Outstanding</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-charcoal mb-4">Key Strengths</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sage">Exceptional academic standards</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sage">Outstanding teaching quality</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sage">Excellent student behavior</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sage">Strong leadership and management</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sage">Safe and supportive environment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sage mb-6 italic">
            "Pupils at Al-Madani Girls School receive an exceptional education. The school provides a highly 
            ambitious curriculum that is delivered exceptionally well by dedicated and expert staff."
          </p>
          <p className="text-charcoal font-semibold">— Ofsted Inspector</p>
          
          <div className="mt-8">
            <Button variant="primary" size="large">
              Download Full Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfstedReport