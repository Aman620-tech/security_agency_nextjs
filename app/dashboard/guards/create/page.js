'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Save, X, User, Phone, Mail, Calendar, Briefcase, MapPin } from 'lucide-react'
import { guardsAPI } from '@/lib/api'
import { toast } from 'sonner'

export default function CreateGuardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    residentialAddress: '',
    aadhaarNumber: '',
    dateOfJoining: new Date().toISOString().split('T')[0],
    basicMonthlySalary: '',
    assignedSupervisor: '',
    assignedTender: '',
    esiApplicable: true,
    pfApplicable: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await guardsAPI.create(formData)
      toast.success('Guard created successfully!')
      router.push('/dashboard/guards')
    } catch (error) {
      toast.error('Failed to create guard: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Add New Guard</h1>
        <p className="text-gray-400 mt-1">Create a new security personnel record</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-6 border border-amber-500/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Full Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" placeholder="Enter full name" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Mobile Number *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="tel" name="mobileNumber" required value={formData.mobileNumber} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" placeholder="10-digit number" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" placeholder="email@example.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Aadhaar Number</label>
            <input type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" placeholder="12-digit Aadhaar" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Date of Joining *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="date" name="dateOfJoining" required value={formData.dateOfJoining} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Basic Monthly Salary (₹) *</label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="number" name="basicMonthlySalary" required value={formData.basicMonthlySalary} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" placeholder="Monthly salary" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-200 mb-2">Residential Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea name="residentialAddress" rows="3" value={formData.residentialAddress} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" placeholder="Full residential address" />
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" name="esiApplicable" checked={formData.esiApplicable} onChange={handleChange} className="w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500" />
              <span className="text-gray-200">ESI Applicable</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" name="pfApplicable" checked={formData.pfApplicable} onChange={handleChange} className="w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500" />
              <span className="text-gray-200">PF Applicable</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-slate-700">
          <button type="submit" disabled={loading} className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50">
            {loading ? <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-950 border-t-transparent"></div> : <><Save className="h-5 w-5" /><span>Create Guard</span></>}
          </button>
          <button type="button" onClick={() => router.back()} className="flex-1 bg-slate-700 hover:bg-slate-600 text-gray-200 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2">
            <X className="h-5 w-5" /><span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  )
}