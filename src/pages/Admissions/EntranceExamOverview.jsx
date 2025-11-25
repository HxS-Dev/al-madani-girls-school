import React from 'react'

function EntranceExamOverview() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-display text-navy mb-8 text-center">Entrance Exam Overview</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg text-gray-700 mb-6">
          Our Entrance Exams cover what children learn at school (Key Stages). For Year 6 students, the exam covers Key Stage 2 (KS2) material, plus a few KS3 questions to stretch pupils. For In-Year students (existing Year 7, 8 or 9), the questions cover KS3 material a student is expected to know.
        </p>
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Exam Papers</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><span className="font-semibold">English (approx. 2 hours):</span> covers creative writing, reading comprehensions, spelling & grammar</li>
          <li><span className="font-semibold">Maths (approx. 2 hours):</span> one calculator paper and one non-calculator paper</li>
          <li><span className="font-semibold">Basic Islamiyat (approx. 30 mins):</span> assessment of basic understanding. <span className="text-navy">(NB: This is sometimes saved for Stage 2 of the recruitment process)</span></li>
        </ul>
        <div className="bg-navy/10 rounded-lg p-4 text-navy font-semibold text-center">
          If your daughter achieves the requisite <span className="font-bold">70%+</span> pass mark, Stage 2 of the recruitment process involves an interview with the Head & another Senior leader (Governor or SLT).
        </div>
      </div>
    </div>
  )
}

export default EntranceExamOverview