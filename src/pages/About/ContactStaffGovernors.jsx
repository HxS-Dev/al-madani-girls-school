import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { sanityClient } from '../../sanityClient'

const ContactStaffGovernors = () => {
  const [staffGroups, setStaffGroups] = useState([])
  const [staffByGroup, setStaffByGroup] = useState({})

  useEffect(() => {
    // Fetch staff groups
    sanityClient.fetch(
      `*[_type == "staffGroup"]|order(order asc){_id, name, order}`
    ).then(groups => {
      setStaffGroups(groups)
      // For each group, fetch staff
      Promise.all(
        groups.map(group =>
          sanityClient.fetch(
            `*[_type == "staff" && staffGroup._ref == $groupId]|order(position asc){_id, name, position}`,
            { groupId: group._id }
          )
        )
      ).then(staffArrays => {
        const byGroup = {}
        groups.forEach((group, idx) => {
          byGroup[group._id] = staffArrays[idx]
        })
        setStaffByGroup(byGroup)
      })
    })
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Contact, Staff & Governors
        </h2>
        <p className="text-xl text-sage">
          Get in touch with our dedicated team who are here to support you and your daughter.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-navy mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-charcoal">Address</p>
                  <p className="text-sage">339-341 Bath Road, Slough, SL1 5PR</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-navy mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-charcoal">Phone</p>
                  <p className="text-sage">+44 1628 298841</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-navy mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-charcoal">Email</p>
                  <p className="text-sage">office@almadanigirls.uk</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-navy mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-charcoal">Office Hours</p>
                  <p className="text-sage">Monday - Friday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-display text-2xl font-bold text-charcoal mb-6 text-center">Send us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-charcoal font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-charcoal font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-charcoal font-medium mb-2">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent">
                <option>General Inquiry</option>
                <option>Admissions</option>
                <option>Academic</option>
                <option>Finance</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-charcoal font-medium mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                placeholder="Your message..."
              />
            </div>
            <div>
              <Button type="submit" variant="primary" size="large">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Dynamic Staff Groups */}
      {staffGroups.map(group => (
        <section className="mb-12" key={group._id}>
          <h3 className="font-display text-2xl font-bold text-navy mb-4">{group.name}</h3>
          <div className="bg-white rounded-xl shadow p-6 mb-4">
            <ul className="space-y-2">
              {staffByGroup[group._id] && staffByGroup[group._id].length > 0 ? (
                staffByGroup[group._id].map(staff => (
                  <li key={staff._id}>
                    <span className="font-semibold">{staff.name}</span>
                    {staff.position ? ` – ${staff.position}` : ''}
                  </li>
                ))
              ) : (
                <li>No staff listed in this group.</li>
              )}
            </ul>
          </div>
        </section>
      ))}
    </div>
  )
}

export default ContactStaffGovernors