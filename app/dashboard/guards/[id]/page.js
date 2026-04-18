'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Shield, Save, X, User, Phone, MapPin, CreditCard, Calendar, Briefcase } from 'lucide-react'
import { guardsAPI } from '@/lib/api'
import { toast } from 'sonner'

export default function EditGuardPage() {
  const router = useRouter()
  const params = useParams()
  const guardId = params.id
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    residentialAddress: '',
    aadhaarNumber: '',
    dateOfJoining: '',
    basicMonthlySalary: '',
    assignedSupervisor: '',
    assignedTender: '',
    esiApplicable: false,
    pfApplicable: false,
  })

  useEffect(() => {
    fetchGuard()
  }, [])

  const fetchGuard = async () => {
    try {
      const data = await guardsAPI.getById(guardId)
      setFormData({
        fullName: data.fullName || '',
        mobileNumber: data.mobileNumber || '',
        residentialAddress: data.residentialAddress || '',
        aadhaarNumber: data.aadhaarNumber || '',
        dateOfJoining: data.dateOfJoining?.split('T')[0] || '',
        basicMonthlySalary: data.basicMonthlySalary || '',
        assignedSupervisor: data.assignedSupervisor || '',
        assignedTender: data.assignedTender || '',
        esiApplicable: data.esiApplicable || false,
        pfApplicable: data.pfApplicable || false,
      })
    } catch (error) {
      toast.error('Failed to load guard data')
      router.push('/dashboard/guards')
    } finally {
      setFetching(false)
    }
  }

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
      await guardsAPI.update(guardId, formData)
      toast.success('Guard updated successfully!')
      router.push('/dashboard/guards')
    } catch (error) {
      toast.error('Failed to update guard: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  if (fetching) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-gold-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <Shield className="h-8 w-8 text-gold-500" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Edit Guard</h1>
        </div>
        <p className="text-charcoal-400">Update security personnel information</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-navy-800 rounded-xl p-6 border border-gold-500/20">
        {/* Same form fields as create page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Full Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Mobile Number *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="tel" name="mobileNumber" required value={formData.mobileNumber} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Residential Address *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-charcoal-400" />
              <textarea name="residentialAddress" required value={formData.residentialAddress} onChange={handleChange} rows="3" className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Aadhaar Number</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Date of Joining *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="date" name="dateOfJoining" required value={formData.dateOfJoining} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Basic Monthly Salary (₹) *</label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="number" name="basicMonthlySalary" required value={formData.basicMonthlySalary} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" name="esiApplicable" checked={formData.esiApplicable} onChange={handleChange} className="w-4 h-4 rounded border-charcoal-700 text-gold-500 focus:ring-gold-500" />
              <span className="text-charcoal-200">ESI Applicable</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-3">
              <input type="checkbox" name="pfApplicable" checked={formData.pfApplicable} onChange={handleChange} className="w-4 h-4 rounded border-charcoal-700 text-gold-500 focus:ring-gold-500" />
              <span className="text-charcoal-200">PF Applicable</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-charcoal-800">
          <button type="submit" disabled={loading} className="flex-1 bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50">
            {loading ? <div className="animate-spin rounded-full h-5 w-5 border-2 border-navy-950 border-t-transparent"></div> : <><Save className="h-5 w-5" /><span>Update Guard</span></>}
          </button>
          <button type="button" onClick={() => router.back()} className="flex-1 bg-navy-700 hover:bg-navy-600 text-charcoal-200 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2">
            <X className="h-5 w-5" /><span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  )
}