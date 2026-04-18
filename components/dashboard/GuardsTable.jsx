'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, Eye } from 'lucide-react'
import { guardsAPI } from '@/lib/api'

export default function RecentGuardsTable() {
  const [guards, setGuards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGuards()
  }, [])

  const fetchGuards = async () => {
    try {
      const data = await guardsAPI.getAll()
      setGuards(data.slice(0, 5))
    } catch (error) {
      console.error('Failed to load guards:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-navy-800 rounded-xl p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-navy-700 rounded w-32"></div>
          <div className="space-y-2">
            {[1,2,3].map(i => <div key={i} className="h-12 bg-navy-700 rounded"></div>)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-navy-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Recent Guards</h3>
        <Link href="/dashboard/guards" className="text-gold-500 text-sm hover:text-gold-400">View All</Link>
      </div>
      <div className="space-y-3">
        {guards.map((guard) => (
          <div key={guard.id} className="flex justify-between items-center p-3 bg-navy-900 rounded-lg">
            <div>
              <p className="text-white font-medium">{guard.fullName}</p>
              <p className="text-charcoal-400 text-sm">{guard.guardId || 'SG-' + guard.id}</p>
            </div>
            <Link href={`/dashboard/guards/${guard.id}`} className="text-gold-500 hover:text-gold-400">
              <Eye className="h-5 w-5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}