'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Building2, Save, X, User, Phone, Mail, MapPin, Users, Calendar, DollarSign } from 'lucide-react'
import { tendersAPI } from '@/lib/api'
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
    
    try {
      await tendersAPI.create(formData)
      toast.success('Tender created successfully!')
      router.push('/dashboard/tenders')
    } catch (error) {
      toast.error('Failed to create tender: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <Building2 className="h-8 w-8 text-gold-500" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Create New Tender</h1>
        </div>
        <p className="text-charcoal-400">Add a new client contract or site</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-navy-800 rounded-xl p-6 border border-gold-500/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Tender/Site Name *</label>
            <input type="text" name="tenderName" required value={formData.tenderName} onChange={handleChange} className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Owner Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="text" name="ownerName" required value={formData.ownerName} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Company Name *</label>
            <input type="text" name="ownerCompanyName" required value={formData.ownerCompanyName} onChange={handleChange} className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Contact Number *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="tel" name="ownerContactNumber" required value={formData.ownerContactNumber} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Email *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="email" name="ownerEmail" required value={formData.ownerEmail} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Site Address *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-charcoal-400" />
              <textarea name="siteAddress" required value={formData.siteAddress} onChange={handleChange} rows="3" className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Required Guards *</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="number" name="requiredGuards" required value={formData.requiredGuards} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Monthly Contract Value (₹) *</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="number" name="monthlyContractValue" required value={formData.monthlyContractValue} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Contract Start Date *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="date" name="contractStartDate" required value={formData.contractStartDate} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal-200 mb-2">Contract End Date *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
              <input type="date" name="contractEndDate" required value={formData.contractEndDate} onChange={handleChange} className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-charcoal-800">
          <button type="submit" disabled={loading} className="flex-1 bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50">
            {loading ? <div className="animate-spin rounded-full h-5 w-5 border-2 border-navy-950 border-t-transparent"></div> : <><Save className="h-5 w-5" /><span>Create Tender</span></>}
          </button>
          <button type="button" onClick={() => router.back()} className="flex-1 bg-navy-700 hover:bg-navy-600 text-charcoal-200 font-semibold py-2 rounded-lg flex items-center justify-center space-x-2">
            <X className="h-5 w-5" /><span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  )
}