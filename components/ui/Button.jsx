'use client'

import { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

export const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  isLoading = false,
  icon: Icon,
  className = '',
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-gold-500 hover:bg-gold-600 text-navy-950',
    secondary: 'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950',
    outline: 'border border-charcoal-700 text-charcoal-300 hover:bg-navy-800',
    ghost: 'text-charcoal-300 hover:text-gold-500',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }
  
  return (
    <button
      ref={ref}
      disabled={isLoading || props.disabled}
      className={`
        inline-flex items-center justify-center space-x-2 font-semibold rounded-lg
        transition-all transform hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {Icon && !isLoading && <Icon className="h-4 w-4" />}
      <span>{children}</span>
    </button>
  )
})

Button.displayName = 'Button'