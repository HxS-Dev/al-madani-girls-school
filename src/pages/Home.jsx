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
      image: '/resources/library-students.png',
      title: 'Modern Library & Learning Spaces',
      description: 'State-of-the-art facilities for academic excellence'
    },
    {
      image: '/resources/science-lab.png',
      title: 'Science & Technology Labs',
      description: 'Cutting-edge STEM education facilities'
    },
    {
      image: '/resources/assembly-hall.png',
      title: 'Prayer & Assembly Hall',
      description: 'Multi-purpose space for worship and gatherings'
    },
    {
      image: '/resources/hero-school.png',
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
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.1), rgba(217, 119, 6, 0.1)), url('/resources/hero-school.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-gold/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
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
              Excellence in Islamic Education
            </h2>

            {/* Islamic Mission Statement */}
            <p className="text-lg md:text-xl text-sage mb-12 max-w-3xl mx-auto leading-relaxed">
              At Al-Madani Girls School, we provide exceptional Islamic education that inspires academic excellence, 
              spiritual growth, and moral character. Our dedicated faculty and modern facilities create an environment 
              where every Muslimah can thrive in faith and knowledge.
            </p>

            {/* Quranic Verse */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-12 max-w-2xl mx-auto">
              <p className="text-xl text-navy font-accent mb-2">
                "وَقُلْ رَبِّ زِدْنِي عِلْمًا"
              </p>
              <p className="text-sage text-sm italic">
                "And say: My Lord, increase me in knowledge" - Surah Taha (20:114)
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about">
                <Button size="large" variant="primary">
                  Explore Our School
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

        {/* Islamic Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-center">
            <svg className="h-8 w-8 text-navy mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-sm text-sage">Scroll for more</p>
          </div>
        </div>
      </section>

      {/* Statistics Section with Islamic Context */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-sage max-w-2xl mx-auto">
              By the grace of Allah, we have achieved excellence in both academic and spiritual development
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="reveal">
              <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                <span className="stat-number" data-value="95">0</span>%
              </div>
              <p className="text-sage font-medium">University Acceptance</p>
              <p className="text-sm text-sage mt-1">Including Islamic universities</p>
            </div>
            <div className="reveal">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                <span className="stat-number" data-value="78">0</span>%
              </div>
              <p className="text-sage font-medium">Russell Group Universities</p>
              <p className="text-sm text-sage mt-1">Top UK institutions</p>
            </div>
            <div className="reveal">
              <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                <span className="stat-number" data-value="500">0</span>+
              </div>
              <p className="text-sage font-medium">Muslimah Students</p>
              <p className="text-sm text-sage mt-1">From diverse backgrounds</p>
            </div>
            <div className="reveal">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                <span className="stat-number" data-value="25">0</span>+
              </div>
              <p className="text-sage font-medium">A-Level Subjects</p>
              <p className="text-sm text-sage mt-1">Including Islamic Studies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Islamic Values Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our Islamic Values
            </h2>
            <p className="text-xl text-sage max-w-3xl mx-auto">
              Guided by the Quran and Sunnah, we instill these core values in every aspect of our education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {islamicValues.map((value, index) => (
              <Card key={index} className="reveal text-center" hover>
                <Card.Body>
                  <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Academic & Spiritual Excellence
            </h2>
            <p className="text-xl text-sage max-w-2xl mx-auto">
              Combining traditional Islamic education with modern academic standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="reveal" hover>
              <Card.Image src="/resources/library-students.png" alt="Islamic Studies" />
              <Card.Body>
                <Card.Title>Islamic Studies & Qur'an</Card.Title>
                <Card.Text>
                  Comprehensive Islamic education including Qur'an recitation, Tajweed, Islamic jurisprudence, 
                  and Arabic language studies taught by qualified scholars.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/information/curriculum">
                  <Button variant="outline" size="small">View Curriculum</Button>
                </Link>
              </Card.Footer>
            </Card>

            <Card className="reveal" hover>
              <Card.Image src="/resources/science-lab.png" alt="Modern Sciences" />
              <Card.Body>
                <Card.Title>Modern Sciences & Technology</Card.Title>
                <Card.Text>
                  State-of-the-art science laboratories, computer facilities, and STEM programs that prepare 
                  students for higher education and professional careers.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/about/results">
                  <Button variant="outline" size="small">Academic Results</Button>
                </Link>
              </Card.Footer>
            </Card>

            <Card className="reveal" hover>
              <Card.Image src="/resources/assembly-hall.png" alt="Prayer Facilities" />
              <Card.Body>
                <Card.Title>Prayer & Spiritual Development</Card.Title>
                <Card.Text>
                  Dedicated prayer facilities, daily congregational prayers, Islamic events, and spiritual 
                  guidance to strengthen faith and character development.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/about/values">
                  <Button variant="outline" size="small">Our Values</Button>
                </Link>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Latest News & Events
            </h2>
            <p className="text-xl text-sage max-w-2xl mx-auto">
              Stay updated with the latest achievements and Islamic events from our school community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="reveal" hover>
              <Card.Image src="/resources/library-students.png" alt="Ramadan Achievements" />
              <Card.Body>
                <div className="flex items-center mb-3">
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium">
                    Islamic Events
                  </span>
                  <span className="text-sage text-sm ml-auto">March 15, 2024</span>
                </div>
                <Card.Title>Outstanding Ramadan Program</Card.Title>
                <Card.Text>
                  Our students excelled in this year's Ramadan program, demonstrating exceptional spiritual growth 
                  and community service initiatives.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/news">
                  <Button variant="outline" size="small">Read More</Button>
                </Link>
              </Card.Footer>
            </Card>

            <Card className="reveal" hover>
              <Card.Image src="/resources/science-lab.png" alt="Qur'an Competition" />
              <Card.Body>
                <div className="flex items-center mb-3">
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium">
                    Academic
                  </span>
                  <span className="text-sage text-sm ml-auto">April 2, 2024</span>
                </div>
                <Card.Title>Annual Qur'an Competition</Card.Title>
                <Card.Text>
                  Congratulations to all participants in our annual Qur'an recitation competition. 
                  The standard of recitation was exceptional this year.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/news">
                  <Button variant="outline" size="small">Read More</Button>
                </Link>
              </Card.Footer>
            </Card>

            <Card className="reveal" hover>
              <Card.Image src="/resources/assembly-hall.png" alt="Hajj Workshop" />
              <Card.Body>
                <div className="flex items-center mb-3">
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium">
                    Community
                  </span>
                  <span className="text-sage text-sm ml-auto">May 10, 2024</span>
                </div>
                <Card.Title>Hajj Workshop for Students</Card.Title>
                <Card.Text>
                  Interactive workshop preparing students for Hajj pilgrimage, covering rituals, 
                  history, and spiritual preparation.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/news">
                  <Button variant="outline" size="small">Read More</Button>
                </Link>
              </Card.Footer>
            </Card>
          </div>

          <div className="text-center reveal">
            <Link to="/news">
              <Button size="large">View All News & Events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our Islamic Learning Environment
            </h2>
            <p className="text-xl text-sage max-w-2xl mx-auto">
              State-of-the-art facilities designed to support both academic and spiritual development
            </p>
          </div>

          <div className="reveal">
            <Carousel items={carouselItems} />
          </div>
        </div>
      </section>

      {/* Islamic Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Join Our Islamic Learning Community
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Give your daughter the gift of excellent education rooted in Islamic values. 
              Together, we can nurture the next generation of confident, faithful Muslim women.
            </p>
            
            {/* Islamic Motivation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <p className="text-lg font-accent mb-2">
                "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ"
              </p>
              <p className="text-sm opacity-80">
                "Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise" - Hadith
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button variant="secondary" size="large">
                  Start Application
                </Button>
              </Link>
              <Link to="/about/contact">
                <Button variant="outline" size="large">
                  Schedule Visit
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