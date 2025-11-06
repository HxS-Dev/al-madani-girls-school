import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Button from './Button'

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton,
  backgroundImage = '/resources/hero-school.png'
}) => {
  const typedRef = useRef(null)

  useEffect(() => {
    if (typedRef.current && subtitle) {
      const typed = new Typed(typedRef.current, {
        strings: [subtitle],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      })

      return () => {
        typed.destroy()
      }
    }
  }, [subtitle])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center hero-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.1), rgba(217, 119, 6, 0.1)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-gold/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
            {title}
          </h1>

          {/* Animated Subtitle */}
          {subtitle && (
            <div className="text-xl md:text-2xl lg:text-3xl text-navy mb-8 font-accent">
              <span ref={typedRef}></span>
            </div>
          )}

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-sage mb-12 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryButton && (
                <Button 
                  size="large" 
                  onClick={primaryButton.onClick}
                >
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button 
                  variant="outline" 
                  size="large"
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero