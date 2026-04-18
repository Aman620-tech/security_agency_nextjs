'use client'

import { useState } from 'react'
import { DollarSign, Calendar, TrendingUp, Download } from 'lucide-react'
import { toast } from 'sonner'

export default function SalaryPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [calculating, setCalculating] = useState(false)
  const [salaryData, setSalaryData] = useState(null)

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const years = [2023, 2024, 2025]

  const calculateSalaries = async () => {
    setCalculating(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const mockData = [
      { id: 1, name: 'Rajesh Kumar', basicSalary: 12500, presentDays: 26, overtimeHours: 5, deductions: 500, netSalary: 13500 },
      { id: 2, name: 'Suresh Sharma', basicSalary: 12500, presentDays: 24, overtimeHours: 2, deductions: 800, netSalary: 12900 },
      { id: 3, name: 'Amit Singh', basicSalary: 13000, presentDays: 26, overtimeHours: 8, deductions: 500, netSalary: 14500 },
    ]
    setSalaryData(mockData)
    toast.success('Salaries calculated successfully!')
    setCalculating(false)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Salary Management</h1>
        <p className="text-gray-400 mt-1">Calculate and manage staff salaries</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-2">Month</label>
            <select 
              value={selectedMonth} 
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
            >
              {months.map((month, idx) => (
                <option key={idx} value={idx + 1}>{month}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-200 mb-2">Year</label>
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <button
            onClick={calculateSalaries}
            disabled={calculating}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-2 rounded-lg flex items-center space-x-2 disabled:opacity-50"
          >
            {calculating ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-950 border-t-transparent"></div>
            ) : (
              <>
                <TrendingUp className="h-5 w-5" />
                <span>Calculate</span>
              </>
            )}
          </button>
        </div>
      </div>

      {salaryData && (
        <div className="bg-slate-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900">
                <tr className="text-left text-gray-300 text-sm">
                  <th className="px-4 py-3">Guard Name</th>
                  <th className="px-4 py-3">Basic Salary</th>
                  <th className="px-4 py-3">Present Days</th>
                  <th className="px-4 py-3">OT Hours</th>
                  <th className="px-4 py-3">Deductions</th>
                  <th className="px-4 py-3">Net Salary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {salaryData.map((salary) => (
                  <tr key={salary.id} className="hover:bg-slate-700/50">
                    <td className="px-4 py-3 text-white">{salary.name}</td>
                    <td className="px-4 py-3 text-gray-300">₹{salary.basicSalary.toLocaleString()}</td>
                    <td className="px-4 py-3 text-gray-300">{salary.presentDays}</td>
                    <td className="px-4 py-3 text-gray-300">{salary.overtimeHours}</td>
                    <td className="px-4 py-3 text-red-400">-₹{salary.deductions.toLocaleString()}</td>
                    <td className="px-4 py-3 text-amber-500 font-semibold">₹{salary.netSalary.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}