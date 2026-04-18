'use client'

import { useState, useEffect } from 'react'
import { Calendar, Check, X, Clock, Users } from 'lucide-react'
import { toast } from 'sonner'

export default function AttendancePage() {
  const [guards, setGuards] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [attendance, setAttendance] = useState({})
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetchGuards()
  }, [])

  const fetchGuards = async () => {
    try {
      // Mock data
      const mockGuards = [
        { id: 1, fullName: 'Rajesh Kumar', guardId: 'SG-001' },
        { id: 2, fullName: 'Suresh Sharma', guardId: 'SG-002' },
        { id: 3, fullName: 'Amit Singh', guardId: 'SG-003' },
        { id: 4, fullName: 'Vikram Rathore', guardId: 'SG-004' },
      ]
      setGuards(mockGuards)
      
      const initialAttendance = {}
      mockGuards.forEach(guard => {
        initialAttendance[guard.id] = 'present'
      })
      setAttendance(initialAttendance)
    } catch (error) {
      toast.error('Failed to load guards')
    } finally {
      setLoading(false)
    }
  }

  const handleAttendanceChange = (guardId, status) => {
    setAttendance(prev => ({ ...prev, [guardId]: status }))
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success(`Attendance marked for ${Object.keys(attendance).length} guards`)
    setSubmitting(false)
  }

  const getStatusButton = (status, currentStatus, guardId) => {
    const isActive = attendance[guardId] === status
    const colors = {
      present: isActive ? 'bg-green-500 text-white' : 'bg-slate-700 text-gray-300 hover:bg-green-500/20',
      absent: isActive ? 'bg-red-500 text-white' : 'bg-slate-700 text-gray-300 hover:bg-red-500/20',
      halfDay: isActive ? 'bg-yellow-500 text-slate-950' : 'bg-slate-700 text-gray-300 hover:bg-yellow-500/20',
    }
    const labels = { present: 'P', absent: 'A', halfDay: 'H' }
    
    return (
      <button
        onClick={() => handleAttendanceChange(guardId, status)}
        className={`w-10 h-10 rounded-lg font-semibold transition-all ${colors[status]}`}
      >
        {labels[status]}
      </button>
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-amber-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Mark Attendance</h1>
        <p className="text-gray-400 mt-1">Record daily attendance for security personnel</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-4 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-amber-500" />
            <span className="text-white font-medium">Select Date:</span>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-6 py-2 rounded-lg flex items-center space-x-2 disabled:opacity-50"
          >
            {submitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-950 border-t-transparent"></div>
            ) : (
              <>
                <Check className="h-5 w-5" />
                <span>Save Attendance</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {guards.map((guard) => (
          <div key={guard.id} className="bg-slate-800 rounded-xl p-4 border border-amber-500/10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-white font-semibold">{guard.fullName}</h3>
                <p className="text-gray-400 text-sm">{guard.guardId}</p>
              </div>
              <div className="flex space-x-2">
                {getStatusButton('present', attendance[guard.id], guard.id)}
                {getStatusButton('absent', attendance[guard.id], guard.id)}
                {getStatusButton('halfDay', attendance[guard.id], guard.id)}
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Status: {attendance[guard.id]?.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}