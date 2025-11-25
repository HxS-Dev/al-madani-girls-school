import React from 'react'

function SchoolFees() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-display text-navy mb-8 text-center">School Fees</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Fee Structure</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Fee for the 2025/26 academic year: <span className="font-bold text-navy">£5,000</span> excl. VAT</li>
            <li>As of January 2025, schools are required to charge VAT on fees. Therefore, for the 2025/26 academic year, the total amount including VAT is <span className="font-bold text-navy">£6,000</span></li>
          </ul>
          <div className="bg-navy/10 rounded-lg p-4 mb-4 text-navy font-semibold text-center">
            The academic year is 10 months long. Parents may pay in a lump sum or monthly via bank transfer.<br />For 2025/26, this means ten monthly payments of <span className="font-bold">£500 excl. VAT</span> starting from October 1st.
          </div>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Payment Instructions</h2>
          <p className="mb-2 text-gray-700">All fees must be paid by bank transfer to the trust. The account details are:</p>
          <div className="bg-cream rounded-lg p-4 mb-4">
            <p className="font-semibold text-charcoal">Account Name: <span className="text-navy">Abu Haneefa Educational Trust</span></p>
            <p className="font-semibold text-charcoal">Bank: <span className="text-navy">Natwest Slough</span></p>
            <p className="font-semibold text-charcoal">A/c No: <span className="text-navy">1432 4245</span></p>
            <p className="font-semibold text-charcoal">Sort Code: <span className="text-navy">01-08-15</span></p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Important Notes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>On entry, your child’s offer letter provides a unique bank reference. <span className="font-semibold text-navy">Use this reference for every payment.</span></li>
            <li>If you have misplaced the reference, contact Al-Madani Girls School at <a href="mailto:office@almadanigirls.uk" className="underline text-navy hover:text-gold">office@almadanigirls.uk</a>.</li>
            <li>Do not use a different reference, as the finance team may not be able to check your payments.</li>
            <li>First payment must cover the entire first term plus a registration fee (<span className="font-bold">£150</span>).</li>
            <li>After the first term, all future payments must be by bank transfer.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default SchoolFees