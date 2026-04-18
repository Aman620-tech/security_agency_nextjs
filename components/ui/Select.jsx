'use client'

import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'

export const Select = forwardRef(({ 
  label, 
  error, 
  options = [],
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
        <select
          ref={ref}
          className={`
            w-full px-4 py-2 bg-navy-900 border rounded-lg transition-colors
            text-white appearance-none
            focus:outline-none focus:ring-2
            ${error 
              ? 'border-red-500 focus:ring-red-500/20' 
              : 'border-charcoal-700 focus:border-gold-500 focus:ring-gold-500/20'
            }
            ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal-400 pointer-events-none" />
      </div>
      
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  )
})

Select.displayName = 'Select'