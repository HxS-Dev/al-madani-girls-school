import React from 'react'

function ApplicationForm() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-display text-navy mb-8 text-center">Application Form</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg text-gray-700 mb-6">
          The form is straightforward, with some basic information to fill in – some where you type in the answer, others where you choose an answer from a list of responses.
        </p>
        <div className="bg-navy/10 rounded-lg p-4 mb-6 text-navy font-semibold text-center">
          Application forms <span className="font-bold">MUST</span> be filled in and sent back by email to <a href="mailto:admissions@almadanigirls.uk" className="underline text-navy hover:text-gold">admissions@almadanigirls.uk</a>.<br />If the form is not returned by email, your child may not be entered for the Exam.
        </div>
        <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Required Additional Items</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Proof of child’s age – a photo of your child’s birth certificate or passport.</li>
          <li>Photo of your child – a recent photo, clearly showing their face.</li>
          <li>Proof of address – a photo of your council tax bill, a utility bill or similar.</li>
          <li>Proof of Processing fee payment – a screenshot or photo of your bank transfer confirming the Processing fee has been paid (our Finance Department is separate from the school, hence the necessity for this).</li>
        </ul>
        <p className="text-gray-700 mb-4">
          All of these items are needed in addition to the application form. If time is tight before the entrance exam date, you may send in the form first – but we expect the other paperwork to be with us before the exam starts.
        </p>
        <p className="text-gray-700 mb-4">
          There is a checklist at the end of the application form to assist you with these additional items. <span className="font-semibold text-navy">Students without all of the above will either not be entered for the exam, or will not have their papers marked.</span>
        </p>
      </div>
    </div>
  )
}

export default ApplicationForm