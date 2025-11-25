import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🕌</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Al-Madani</h3>
                <p className="text-gray-300">Girls School</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tarbiyah For Generations
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">News & Events</Link></li>
              <li><Link to="/dates" className="text-gray-300 hover:text-white transition-colors">Key Dates</Link></li>
              <li><Link to="/about/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-6">Academic</h4>
            <ul className="space-y-3">
              <li><Link to="/information/curriculum" className="text-gray-300 hover:text-white transition-colors">Islamic Curriculum</Link></li>
              <li><Link to="/about/results" className="text-gray-300 hover:text-white transition-colors">Academic Results</Link></li>
              <li><a href="https://reports.ofsted.gov.uk/provider/27/136955" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Ofsted Report</a></li>
              <li><Link to="/information/policies" className="text-gray-300 hover:text-white transition-colors">School Policies</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-6">Community</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Our School</Link></li>
              <li><Link to="/about/values" className="text-gray-300 hover:text-white transition-colors">Islamic Values</Link></li>
              <li><Link to="/admissions/gallery" className="text-gray-300 hover:text-white transition-colors">School Gallery</Link></li>
              <li><Link to="/information/uniform" className="text-gray-300 hover:text-white transition-colors">Uniform & Equipment</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold text-gold mb-2">Address</h5>
              <p className="text-gray-300 text-sm">339-341 Bath Road<br />Slough, Berkshire<br />SL1 5PR</p>
            </div>
            <div>
              <h5 className="font-semibold text-gold mb-2">Phone</h5>
              <p className="text-gray-300 text-sm">+44 1628 298841</p>
            </div>
            <div>
              <h5 className="font-semibold text-gold mb-2">Email</h5>
              <p className="text-gray-300 text-sm">office@almadanigirls.uk</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Al-Madani Islamic Girls School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer