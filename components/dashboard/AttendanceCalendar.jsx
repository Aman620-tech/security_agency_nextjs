'use client'

import { useState, useEffect } from 'react'
import { Calendar, TrendingUp } from 'lucide-react'
import { attendanceAPI } from '@/lib/api'

export default function AttendanceChart() {
  const [stats, setStats] = useState({ present: 0, absent: 0, halfDay: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // This would be replaced with actual API call
      setStats({ present: 85, absent: 10, halfDay: 5 })
    } catch (error) {
      console.error('Failed to load stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const total = stats.present + stats.absent + stats.halfDay
  const presentPercent = (stats.present / total) * 100
  const absentPercent = (stats.absent / total) * 100
  const halfDayPercent = (stats.halfDay / total) * 100

  return (
    <div className="bg-navy-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Attendance Overview</h3>
        <Calendar className="h-5 w-5 text-gold-500" />
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-32 bg-navy-700 rounded"></div>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-green-400">Present</span>
              <span className="text-charcoal-300">{stats.present}%</span>
            </div>
            <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${presentPercent}%` }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-red-400">Absent</span>
              <span className="text-charcoal-300">{stats.absent}%</span>
            </div>
            <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: `${absentPercent}%` }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-yellow-400">Half Day</span>
              <span className="text-charcoal-300">{stats.halfDay}%</span>
            </div>
            <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${halfDayPercent}%` }}></div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}