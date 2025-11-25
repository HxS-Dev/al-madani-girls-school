import React from 'react'
import Button from '../../components/Button'

function AdmissionsProcedure() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-display text-navy mb-8 text-center">Admissions Procedure</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <div className="bg-navy/10 rounded-lg p-4 mb-4 text-navy font-semibold text-center">
            NB: This is a summary of the admissions procedure. The full policy can be found here: <a href="/admissions/policy" className="underline text-navy hover:text-gold">Admissions Policy</a>
          </div>
        </div>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">School Overview</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold">Independent School:</span> Al-Madani Girls School is a fee-paying school. The tuition fees for the 2024-25 academic year are <span className="text-navy font-bold">£5,000</span>, which most parents pay monthly.</li>
            <li><span className="font-semibold">Grammar School:</span> The school has a selective admissions process. Students must pass both an entrance exam and an interview to be accepted.</li>
            <li><span className="font-semibold">Secondary School:</span> Al-Madani Girls School only caters to students in Years 7 to 11, with a maximum enrollment of 24 students per year group, resulting in a total of 120 students.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Before Applying</h2>
          <p className="mb-2 text-gray-700">While not mandatory, we strongly encourage parents to attend the open evenings or schedule a tour of the school in advance of the application process. The school’s website provides comprehensive information about admissions.</p>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Required Documentation</h2>
          <p className="mb-2 text-gray-700">In addition to the initial application form, parents will be required to submit additional documentation for their child to sit the exam. <span className="font-semibold text-navy">Students without the required documentation will not have their papers marked.</span></p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Photocopy of child’s birth certificate or passport</li>
            <li>Passport-style photograph of the child</li>
            <li>Proof of address (e.g., council tax, utility bill)</li>
            <li>Proof of payment of the non-refundable application processing fee, which is <span className="text-navy font-bold">£150</span> for the 2024 academic year (e.g. transaction receipt or screenshot)</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Exam & Interview Process</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Following the completion of the exam, parents will be notified of the results. Results are in the form of pass or fail; Al-Madani Girls School does not provide scores or feedback on candidate performances.</li>
            <li>For students who have passed the exam, the next stage is the interview.</li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold text-navy mb-2">Interview Process:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>A detailed form will be sent to both parents and their child for completion.</li>
              <li>Your child’s school will be contacted for additional information.</li>
              <li>Your child will participate in a structured interview and evaluation with the Headmaster and an additional school official. Both parents are encouraged to attend the interview.</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Offer Letters</h2>
          <p className="text-gray-700">After both stages are completed, students will be ranked, and offer letters will be sent to the successful applicants.</p>
        </section>
      </div>
    </div>
  )
}

export default AdmissionsProcedure