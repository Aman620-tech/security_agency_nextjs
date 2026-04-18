'use client'

import { Users, Building2, Calendar, DollarSign } from 'lucide-react'

const iconMap = {
  Users, Building2, Calendar, DollarSign
}

export default function StatsCards({ stats, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-navy-800 rounded-xl p-4 animate-pulse">
            <div className="h-10 w-10 bg-navy-700 rounded-lg mb-3"></div>
            <div className="h-6 bg-navy-700 rounded w-20 mb-2"></div>
            <div className="h-4 bg-navy-700 rounded w-24"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon.name] || stat.icon
        return (
          <div key={index} className="bg-navy-800 rounded-xl p-4 border border-gold-500/10 hover:border-gold-500/30 transition-all">
            <Icon className={`h-8 w-8 text-${stat.color}-500 mb-3`} />
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-charcoal-400">{stat.label}</div>
          </div>
        )
      })}
    </div>
  )
}