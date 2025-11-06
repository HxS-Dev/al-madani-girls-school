import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  onClick = null 
}) => {
  const hoverStyles = hover ? 'card-hover cursor-pointer' : ''
  const clickStyles = onClick ? 'cursor-pointer' : ''

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden ${hoverStyles} ${clickStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`p-6 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

const CardBody = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

const CardFooter = ({ children, className = '' }) => {
  return (
    <div className={`p-6 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

const CardImage = ({ src, alt, className = '' }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-48 object-cover ${className}`}
    />
  )
}

const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`font-display text-xl font-semibold text-charcoal ${className}`}>
      {children}
    </h3>
  )
}

const CardText = ({ children, className = '' }) => {
  return (
    <p className={`text-sage mt-2 ${className}`}>
      {children}
    </p>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage
Card.Title = CardTitle
Card.Text = CardText

export default Card