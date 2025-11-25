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
          Headteacher's Introduction
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {headteacher.message.split('\n\n').map((para, idx) => (
              <p key={idx} className="mb-4">{para}</p>
            ))}

            <div className="mt-8">
              <p className="text-sage mt-2">— {headteacher.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadteacherIntroduction