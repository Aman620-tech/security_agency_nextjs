'use client'

import { useState } from 'react'
import { FileText, Calendar, Building2, TrendingUp, Clock, Download } from 'lucide-react'
import { toast } from 'sonner'

export default function ReportsPage() {
  const [reportType, setReportType] = useState('attendance')
  const [dateRange, setDateRange] = useState({ start: '', end: '' })
  const [generating, setGenerating] = useState(false)

  const reportTypes = [
    { id: 'attendance', label: 'Attendance Report', icon: Calendar },
    { id: 'tender-deployment', label: 'Tender Deployment', icon: Building2 },
    { id: 'salary-summary', label: 'Salary Summary', icon: TrendingUp },
    { id: 'contract-expiry', label: 'Contract Expiry', icon: Clock },
  ]

  const generateReport = async () => {
    setGenerating(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    toast.success(`${reportTypes.find(r => r.id === reportType)?.label} generated!`)
    setGenerating(false)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Reports</h1>
        <p className="text-gray-400 mt-1">Generate and download various reports</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Report Options</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Report Type</label>
                <div className="space-y-2">
                  {reportTypes.map(type => {
                    const Icon = type.icon
                    return (
                      <label key={type.id} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-slate-700 rounded-lg transition">
                        <input 
                          type="radio" 
                          name="reportType" 
                          value={type.id} 
                          checked={reportType === type.id} 
                          onChange={(e) => setReportType(e.target.value)} 
                          className="text-amber-500 focus:ring-amber-500"
                        />
                        <Icon className="h-4 w-4 text-amber-500" />
                        <span className="text-gray-200">{type.label}</span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {reportType === 'attendance' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Start Date</label>
                    <input 
                      type="date" 
                      value={dateRange.start} 
                      onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">End Date</label>
                    <input 
                      type="date" 
                      value={dateRange.end} 
                      onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={generateReport}
                disabled={generating}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {generating ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-950 border-t-transparent"></div>
                ) : (
                  <>
                    <FileText className="h-5 w-5" />
                    <span>Generate Report</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-800 rounded-xl p-6 min-h-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white">Report Preview</h2>
              <button className="text-amber-500 hover:text-amber-400 flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-6 text-center">
              <FileText className="h-12 w-12 text-gray-500 mx-auto mb-3" />
              <p className="text-gray-400">Select report options and click Generate</p>
              <p className="text-gray-500 text-sm mt-2">Reports will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}