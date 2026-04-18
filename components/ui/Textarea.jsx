'use client'

import { forwardRef } from 'react'

export const Textarea = forwardRef(({ 
  label, 
  error, 
  rows = 4,
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
      
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-2 bg-navy-900 border rounded-lg transition-colors
          text-white placeholder-charcoal-500 resize-none
          focus:outline-none focus:ring-2
          ${error 
            ? 'border-red-500 focus:ring-red-500/20' 
            : 'border-charcoal-700 focus:border-gold-500 focus:ring-gold-500/20'
          }
          ${className}
        `}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'