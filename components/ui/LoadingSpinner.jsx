'use client'

export function LoadingSpinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  }
  
  return (
    <div className={`inline-block animate-spin rounded-full border-4 border-gold-500 border-t-transparent ${sizes[size]} ${className}`} />
  )
}

export function LoadingSkeleton({ count = 3, className = '' }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-4 bg-navy-800 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-navy-800 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}