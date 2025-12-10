import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { sanityClient } from '../sanityClient'

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null)
  const [applicationFormUrl, setApplicationFormUrl] = useState('')
  const location = useLocation()

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "applicationForm"][0]{pdf{asset->{url}}}`)
      .then((data) => {
        setApplicationFormUrl(data?.pdf?.asset?.url)
      })
      .catch((err) => console.error('Sanity fetch error:', err))
  }, [])

  const menuItems = [
    {
      name: 'About Us',
      path: '/about',
      dropdown: [
        { name: "Headteacher's Introduction", path: '/about/headteacher' },
        { name: 'School Vision & Ethos', path: '/about/values' },
        { name: 'Ofsted Report', path: 'https://reports.ofsted.gov.uk/provider/27/136955' },
        { name: 'Academic Results', path: '/about/results' },
        { name: 'Contact, Staff & Governors', path: '/about/contact' }
      ]
    },
    {
      name: 'News & Events',
      path: '/news-events',
      dropdown: [
        { name: 'News', path: '/news-events/news' },
        { name: 'Events', path: '/news-events/events' }
      ]
    },
    {
      name: 'Annual Calendar',
      path: '/key-dates/calendar',
    },
    {
      name: 'Admissions',
      path: '/admissions',
      dropdown: [
        { name: 'Application Timeline', path: '/admissions/calendar' },
        { name: 'Admissions Policy', path: '/admissions/procedure' },
        { name: 'Admissions Fees', path: '/admissions/fees' },
        { name: 'Application Form', path: applicationFormUrl },
        { name: 'Entrance Exam Overview', path: '/admissions/entrance-exam' }
      ]
    },
    {
      name: 'Policies',
      path: '/policies/policies'
    }
  ]

  const handleDropdownToggle = (index) => {
    if (typeof index === 'string' && index.startsWith('mobile')) {
      setOpenDropdown(openDropdown === index ? 'mobile' : index)
    } else {
      setOpenDropdown(openDropdown === index ? null : index)
    }
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null)
    }, 200)
    setDropdownTimeout(timeout)
  }

  const handleMouseEnter = (index) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout)
    setOpenDropdown(index)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
    if (dropdownTimeout) clearTimeout(dropdownTimeout)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3" onClick={closeDropdown}>
            <img src="/images/Al-Madani Girls School no slogan.jpg" alt="Al-Madani Girls School Logo" className="w-10 h-10 object-cover" />
            <div>
              <h1 className="text-xl font-display text-navy font-bold">Al-Madani Girls School</h1>
              <p className="text-sage text-sm">Tarbiyah For Generations</p>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                {item.dropdown ? (
                  <button
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      location.pathname.startsWith(item.path)
                        ? 'bg-navy text-white'
                        : 'text-navy hover:bg-cream'
                    }`}
                    onClick={() => handleDropdownToggle(index)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === index}
                  >
                    {item.name}
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-navy text-white'
                        : 'text-navy hover:bg-cream'
                    }`}
                    onClick={closeDropdown}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown items */}
                {item.dropdown && openDropdown === index && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {item.dropdown.map((subItem) => {
                      const isExternal = subItem.path?.startsWith('http')
                      const isEmpty = !subItem.path

                      if (isEmpty) {
                        return (
                          <span
                            key={subItem.name}
                            className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                          >
                            {subItem.name}
                          </span>
                        )
                      }

                      return isExternal ? (
                        <a
                          key={subItem.name}
                          href={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-cream"
                          onClick={closeDropdown}
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === subItem.path
                              ? 'bg-navy text-white'
                              : 'text-gray-700 hover:bg-cream'
                          }`}
                          onClick={closeDropdown}
                        >
                          {subItem.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-cream"
            onClick={() => setOpenDropdown(openDropdown === 'mobile' ? null : 'mobile')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {openDropdown === 'mobile' && (
          <div className="lg:hidden pb-4">
            {menuItems.map((item, index) => (
              <div key={item.name} className="mb-2">
                {item.dropdown ? (
                  <div>
                    <button
                      className="w-full text-left px-4 py-2 text-navy hover:bg-cream rounded-lg flex items-center justify-between"
                      onClick={() => setOpenMobileSubmenu(openMobileSubmenu === index ? null : index)}
                      aria-haspopup="true"
                      aria-expanded={openMobileSubmenu === index}
                    >
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    {openMobileSubmenu === index && (
                      <div className="ml-4 mt-1">
                        {item.dropdown.map((subItem) => {
                          const isExternal = subItem.path?.startsWith('http')
                          const isEmpty = !subItem.path

                          if (isEmpty) {
                            return (
                              <span
                                key={subItem.name}
                                className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                              >
                                {subItem.name}
                              </span>
                            )
                          }

                          return isExternal ? (
                            <a
                              key={subItem.name}
                              href={subItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-cream rounded-lg"
                              onClick={() => { setOpenDropdown(null); setOpenMobileSubmenu(null); }}
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-cream rounded-lg"
                              onClick={() => { setOpenDropdown(null); setOpenMobileSubmenu(null); }}
                            >
                              {subItem.name}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-navy hover:bg-cream rounded-lg"
                    onClick={closeDropdown}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
