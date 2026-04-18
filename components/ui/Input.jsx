'use client'

import { forwardRef } from 'react'

export const Input = forwardRef(({ 
  label, 
  error, 
  icon: Icon, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-charcoal-200">
          {label}
          {props.required && <span className="text-gold-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-charcoal-400" />
          </div>
        )}
        
        <input
          ref={ref}
          className={`
            w-full px-4 py-2 bg-navy-900 border rounded-lg transition-colors
            text-white placeholder-charcoal-500
            focus:outline-none focus:ring-2
            ${Icon ? 'pl-10' : 'pl-4'}
            ${error 
              ? 'border-red-500 focus:ring-red-500/20' 
              : 'border-charcoal-700 focus:border-gold-500 focus:ring-gold-500/20'
            }
            ${className}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'