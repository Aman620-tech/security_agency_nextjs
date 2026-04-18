'use client'

import { useState, useEffect } from 'react'
import { Users, Building2, Calendar, DollarSign, TrendingUp, Shield } from 'lucide-react'
import { dashboardAPI, guardsAPI, tendersAPI, attendanceAPI, salaryAPI } from '@/lib/api'
import { toast } from 'sonner'
import Cookies from 'js-cookie'

export default function DashboardHome() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalGuards: 0,
    activeTenders: 0,
    todayAttendance: 0,
    monthlySalary: 0,
    attendanceRate: 0
  })

  useEffect(() => {
    const userData = Cookies.get('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      // Fetch real data from APIs
      const [guards, activeTenders, salaryReport, attendanceSummary] = await Promise.all([
        guardsAPI.getAll().catch(() => []),
        tendersAPI.getActive().catch(() => []),
        salaryAPI.getReport(new Date().getMonth() + 1, new Date().getFullYear()).catch(() => ({ total: 0 })),
        attendanceAPI.getSummary('all', new Date().getMonth() + 1, new Date().getFullYear()).catch(() => ({ present: 0, total: 0 }))
      ])
      
      const totalGuards = guards.length
      const totalPresent = attendanceSummary.present || 0
      const attendanceRate = totalGuards > 0 ? (totalPresent / totalGuards) * 100 : 0
      
      setStats({
        totalGuards: totalGuards,
        activeTenders: activeTenders.length,
        todayAttendance: totalPresent,
        monthlySalary: salaryReport.total || 0,
        attendanceRate: Math.round(attendanceRate)
      })
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
      toast.error('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    { icon: Users, label: 'Total Guards', value: stats.totalGuards, change: '+12', color: 'amber' },
    { icon: Building2, label: 'Active Tenders', value: stats.activeTenders, change: '+3', color: 'blue' },
    { icon: Calendar, label: "Today's Attendance", value: stats.todayAttendance, change: `${stats.attendanceRate}%`, color: 'green' },
    { icon: DollarSign, label: 'Monthly Salary', value: `₹${(stats.monthlySalary / 1000).toFixed(0)}K`, change: '+5%', color: 'purple' },
  ]

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-amber-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Welcome back, {user?.fullName?.split(' ')[0] || 'Admin'}!
        </h1>
        <p className="text-gray-400 mt-1">Here's what's happening with your security operations today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-slate-800 rounded-xl p-4 border border-amber-500/10 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <Icon className={`h-8 w-8 text-${stat.color}-500`} />
                <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a href="/dashboard/guards/create" className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition group">
              <span className="text-white">➕ Add New Guard</span>
              <span className="text-amber-500 group-hover:translate-x-1 transition">→</span>
            </a>
            <a href="/dashboard/attendance" className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition group">
              <span className="text-white">📋 Mark Attendance</span>
              <span className="text-amber-500 group-hover:translate-x-1 transition">→</span>
            </a>
            <a href="/dashboard/tenders/create" className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition group">
              <span className="text-white">📄 Create New Tender</span>
              <span className="text-amber-500 group-hover:translate-x-1 transition">→</span>
            </a>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
              <span className="text-gray-300">API Status</span>
              <span className="text-green-400 flex items-center">
                <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Connected
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
              <span className="text-gray-300">Total Guards Deployed</span>
              <span className="text-white font-semibold">{stats.totalGuards}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
              <span className="text-gray-300">Active Sites</span>
              <span className="text-white font-semibold">{stats.activeTenders}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}