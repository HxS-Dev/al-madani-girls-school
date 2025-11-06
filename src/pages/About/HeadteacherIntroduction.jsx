import React from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { contentData } from '../../data/content'

const HeadteacherIntroduction = () => {
  const { headteacher } = contentData.about
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Headteacher's Message
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <img 
            src="/resources/headteacher.png" 
            alt={headteacher.name} 
            className="w-full rounded-xl shadow-lg mb-6"
          />
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-display text-xl font-bold text-charcoal mb-2">
              {headteacher.name}
            </h3>
            <p className="text-sage mb-4">{headteacher.title}</p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Experience</h4>
                <p className="text-sage text-sm">{headteacher.experience}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-sage leading-relaxed mb-6">
              {headteacher.message}
            </p>
            
            <div className="mt-8">
              <h4 className="font-display text-xl font-semibold text-charcoal mb-4">
                Qualifications
              </h4>
              <ul className="space-y-2">
                {headteacher.qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sage">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="font-accent text-lg text-navy italic">
                "Together, we build a community where every girl can shine and achieve her dreams."
              </p>
              <p className="text-sage mt-2">— {headteacher.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadteacherIntroduction