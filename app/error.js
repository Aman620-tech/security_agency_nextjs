'use client'

import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950">
      <div className="text-center max-w-md mx-auto px-4">
        <AlertCircle className="h-16 w-16 text-gold-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Something went wrong!</h2>
        <p className="text-charcoal-300 mb-6">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}