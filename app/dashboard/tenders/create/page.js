'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Save, X, Building2, User, Phone, Mail, MapPin, Users, Calendar, DollarSign } from 'lucide-react'
import { toast } from 'sonner'

export default function CreateTenderPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    tenderName: '',
    ownerName: '',
    ownerCompanyName: '',
    ownerContactNumber: '',
    ownerEmail: '',
    siteAddress: '',
    requiredGuards: '',
    contractStartDate: new Date().toISOString().split('T')[0],
    contractEndDate: '',
    monthlyContractValue: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Tender created successfully!')
    router.push('/dashboard/tenders')
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Create New Tender</h1>
        <p className="text-gray-400 mt-1">Add a new client contract or security site</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-6 border border-amber-500/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-200 mb-2">Tender/Site Name *</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                name="tenderName" 
                required 
                value={formData.tenderName} 
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                placeholder="Enter tender name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Owner Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                name="ownerName" 
                required 
                value={formData.ownerName} 
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                placeholder="Owner full name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Company Name *</label>
            <input 
              type="text" 
              name="ownerCompanyName" 
              required 
              value={formData.ownerCompanyName} 
              onChange={handleChange} 
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Contact Number *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="tel" 
                name="ownerContactNumber" 
                required 
                value={formData.ownerContactNumber} 
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                placeholder="10-digit mobile number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="email" 
                name="ownerEmail" 
                required 
                value={formData.ownerEmail} 
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                placeholder="email@company.com"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-200 mb-2">Site Address *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea 
                name="siteAddress" 
                required 
                rows="3" 
                value={formData.siteAddress} 
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                placeholder="Full site address"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Required Guards *</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="number" 
                name="requiredGuards" 
                required 
                value={formData.requiredGuards} 
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                placeholder="Number of guards"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Monthly Contract Value (₹) *</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="number" 
                name="monthlyContractValue" 
                required 
                value={formData.monthlyContractValue} 
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                placeholder="Monthly contract amount"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Contract Start Date *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="date" 
                name="contractStartDate" 
                required 
                value={formData.contractStartDate} 
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Contract End Date *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="date" 
                name="contractEndDate" 
                required 
                value={formData.contractEndDate} 
                onChange={handleChange} 
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-slate-700">
          <button 
            type="submit" 
            disabled={loading} 
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-950 border-t-transparent"></div>
            ) : (
              <>
                <Save className="h-5 w-5" />
                <span>Create Tender</span>
              </>
            )}
          </button>
          <button 
            type="button" 
            onClick={() => router.back()} 
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-gray-200 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2"
          >
            <X className="h-5 w-5" />
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  )
}