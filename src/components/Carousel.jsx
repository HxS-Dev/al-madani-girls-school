import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Carousel = ({ 
  items = [], 
  options = {},
  className = '' 
}) => {
  const defaultOptions = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1rem',
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    breakpoints: {
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      }
    },
    ...options
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-sage">
        <p>No items to display</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <Splide options={defaultOptions}>
        {items.map((item, index) => (
          <SplideSlide key={index}>
            <div className="h-full">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.alt || item.title || 'Carousel item'} 
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}
              {(item.title || item.description) && (
                <div className="p-4">
                  {item.title && (
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="text-sage text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Carousel