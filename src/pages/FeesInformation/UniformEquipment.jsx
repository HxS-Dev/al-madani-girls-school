import React from 'react'

function UniformEquipment() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-display text-navy mb-8 text-center">Uniform & Equipment</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Uniform</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Navy school blazer with school logo</li>
            <li>Plain White school shirt – with collars. Please make sure your child has a minimum of 3 plain white shirts</li>
            <li>Charcoal grey trousers</li>
            <li>Charcoal grey or black socks (plain with no logos)</li>
            <li>Black leather/ leather-like shoes (clean and polished – Trainer like shoes are not acceptable)</li>
            <li>White topi/ kufi/ skull cap for prayers (no other colours please)</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Jubba</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>If your child chooses to wear a Jubba it must be white with collars. Only plain white t shirts are to be worn under Jubbas – no football shirts or non-white shirts please.</li>
            <li>For clarification, trousers / joggers worn underneath a Jubba must be grey & plain – ie no visible stripes / logos etc.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Sports Uniform</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Black full length tracksuit bottoms with Al-Madani Girls School printed on the left leg</li>
            <li>Al-Madani Girls School navy and white sports t-shirt with printed Al-Madani Girls School logo</li>
            <li>Black sports socks and suitable Training Shoes depending on activity (eg trainers, football boots)</li>
            <li>Karate suit / gear. <span className="font-semibold">NB do not purchase this beforehand – suit/gear are purchased after meeting the Karate lead.</span></li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Supplier</h2>
          <div className="bg-cream rounded-lg p-4 mb-4">
            <p className="font-semibold text-charcoal">Our approved supplier of school uniform is <span className="text-navy">Goyals</span> which is situated at 28a Bridge Street, Maidenhead, Berkshire, SL6 8BJ</p>
            <p className="text-gray-700">Tel: 01628 639725; e-mail: <a href="mailto:sales@goyals.co.uk" className="underline text-navy hover:text-gold">sales@goyals.co.uk</a></p>
            <p className="text-gray-700">You may use the following link to view and order your uniform online, or visit the store to purchase.</p>
            <a href="https://www.goyalsmaidenhead.co.uk/product-category/amigs-independent-grammar-school/" target="_blank" rel="noopener noreferrer" className="inline-block bg-navy text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gold transition-colors mt-2">Order Uniform Online</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UniformEquipment