'use client'

import { useEffect } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const colorMap = {
  success: 'bg-green-500/10 border-green-500/20 text-green-400',
  error: 'bg-red-500/10 border-red-500/20 text-red-400',
  warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
  info: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
}

export function Toast({ message, type = 'info', onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)
    
    return () => clearTimeout(timer)
  }, [duration, onClose])
  
  const Icon = iconMap[type]
  const colorClass = colorMap[type]
  
  return (
    <div className={`
      fixed bottom-4 right-4 z-50
      flex items-center space-x-3
      px-4 py-3 rounded-lg border
      animate-slide-up
      ${colorClass}
    `}>
      <Icon className="h-5 w-5" />
      <p className="text-sm font-medium">{message}</p>
      <button onClick={onClose} className="ml-4 hover:opacity-70">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}