'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Building2, Calendar, Users, DollarSign, Edit, Trash2 } from 'lucide-react'
import { tendersAPI } from '@/lib/api'
import { toast } from 'sonner'

export default function TendersPage() {
  const [tenders, setTenders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTenders()
  }, [])

  const fetchTenders = async () => {
    try {
      const data = await tendersAPI.getAll()
      setTenders(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Failed to fetch tenders:', error)
      toast.error('Failed to load tenders')
      setTenders([])
    } finally {
      setLoading(false)
    }
  }

  const handleClose = async (id) => {
    if (confirm('Are you sure you want to close this tender?')) {
      try {
        await tendersAPI.close(id)
        toast.success('Tender closed successfully')
        fetchTenders()
      } catch (error) {
        toast.error('Failed to close tender')
      }
    }
  }

  const isActive = (endDate) => {
    return new Date(endDate) > new Date()
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Tender Management</h1>
          <p className="text-gray-400 mt-1">Manage client contracts and security sites</p>
        </div>
        <Link href="/dashboard/tenders/create" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold">
          <Plus className="h-5 w-5" />
          <span>Create Tender</span>
        </Link>
      </div>

      {tenders.length === 0 ? (
        <div className="text-center py-12 bg-slate-800 rounded-xl">
          <Building2 className="h-12 w-12 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-400">No tenders found</p>
          <Link href="/dashboard/tenders/create" className="text-amber-500 hover:text-amber-400 mt-2 inline-block">
            Create your first tender →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tenders.map((tender) => (
            <div key={tender.id} className="bg-slate-800 rounded-xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-8 w-8 text-amber-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{tender.tenderName}</h3>
                    <p className="text-gray-400 text-sm">{tender.ownerCompanyName}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${isActive(tender.contractEndDate) ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {isActive(tender.contractEndDate) ? 'Active' : 'Expired'}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Users className="h-4 w-4" />
                  <span>{tender.requiredGuards} Guards Required</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>{tender.contractStartDate?.split('T')[0]} to {tender.contractEndDate?.split('T')[0]}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <DollarSign className="h-4 w-4" />
                  <span>₹{tender.monthlyContractValue?.toLocaleString()}/month</span>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-slate-700">
                <Link href={`/dashboard/tenders/${tender.id}`} className="text-amber-500 hover:text-amber-400">
                  <Edit className="h-5 w-5" />
                </Link>
                <button onClick={() => handleClose(tender.id)} className="text-red-500 hover:text-red-400">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}