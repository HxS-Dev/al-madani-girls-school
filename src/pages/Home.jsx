import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import anime from 'animejs'

const Home = () => {
  useEffect(() => {
    // Animate elements on scroll
    const revealElements = document.querySelectorAll('.reveal')
    
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll() // Check on initial load

    // Animate statistics numbers
    anime({
      targets: '.stat-number',
      innerHTML: (el) => [0, parseInt(el.getAttribute('data-value'))],
      easing: 'easeOutExpo',
      duration: 2000,
      delay: 500,
      round: 1
    })

    return () => {
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [])

  const carouselItems = [
    {
      image: '',
      title: 'Modern Library & Learning Spaces',
      description: 'State-of-the-art facilities for academic excellence'
    },
    {
      image: '',
      title: 'Science & Technology Labs',
      description: 'Cutting-edge STEM education facilities'
    },
    {
      image: '',
      title: 'Prayer & Assembly Hall',
      description: 'Multi-purpose space for worship and gatherings'
    },
    {
      image: '',
      title: 'School Campus',
      description: 'Modern Islamic educational environment'
    }
  ]

  const islamicValues = [
    {
      title: "Faith (Iman)",
      description: "Strengthening belief and spiritual connection through daily prayers and Islamic studies",
      icon: "🕌"
    },
    {
      title: "Knowledge (Ilm)",
      description: "Pursuing both religious and worldly knowledge with dedication and wisdom",
      icon: "📚"
    },
    {
      title: "Character (Akhlaq)",
      description: "Developing noble character and moral excellence in all aspects of life",
      icon: "🌟"
    },
    {
      title: "Community (Ummah)",
      description: "Building strong bonds and serving the wider community with compassion",
      icon: "🤝"
    },
    {
      title: "Excellence (Ihsan)",
      description: "Striving for perfection in all endeavors as an act of worship",
      icon: "✨"
    }
  ]

  return (
    <div>
      {/* Hero Section with Islamic Elements */}
      <section 
        className="relative min-h-screen flex items-center justify-center hero-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.1), rgba(217, 119, 6, 0.1)), url('')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-gold/20"></div> 
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* School Logo */}
            <div className="mb-8">
              <img src="/images/no-bg.png" alt="Al-Madani Girls School Logo" className="w-64 h-64 mx-auto" />
            </div>
            {/* Islamic Welcome */}
            <div className="mb-8">
              <p className="text-2xl text-navy font-accent mb-4">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <p className="text-lg text-sage">In the name of Allah, the Most Gracious, the Most Merciful</p>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Al-Madani Girls School
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-navy mb-8 font-accent">
              Tarbiyah for Generations
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about/results">
                <Button size="large" variant="primary">
                  See Our Results
                </Button>
              </Link>
              <Link to="/admissions">
                <Button size="large" variant="outline">
                  Admissions Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home