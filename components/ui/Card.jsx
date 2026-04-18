'use client'

import { forwardRef } from 'react'

export const Card = forwardRef(({ children, className = '', hover = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl overflow-hidden
        border border-gold-500/10
        ${hover ? 'hover:border-gold-500/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export const CardHeader = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={`p-6 border-b border-gold-500/10 ${className}`} {...props}>
      {children}
    </div>
  )
})

CardHeader.displayName = 'CardHeader'

export const CardBody = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
})

CardBody.displayName = 'CardBody'

export const CardFooter = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={`p-6 border-t border-gold-500/10 ${className}`} {...props}>
      {children}
    </div>
  )
})

CardFooter.displayName = 'CardFooter'