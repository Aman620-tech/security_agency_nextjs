'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Search, Edit, Trash2, Shield, Phone, Mail } from 'lucide-react'
import { guardsAPI } from '@/lib/api'
import { toast } from 'sonner'

export default function GuardsPage() {
  const [guards, setGuards] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchGuards()
  }, [])

  const fetchGuards = async () => {
    try {
      const data = await guardsAPI.getAll()
      setGuards(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Failed to fetch guards:', error)
      toast.error('Failed to load guards')
      setGuards([])
    } finally {
      setLoading(false)
    }
  }

  const handleDeactivate = async (id) => {
    if (confirm('Are you sure you want to deactivate this guard?')) {
      try {
        await guardsAPI.deactivate(id)
        toast.success('Guard deactivated successfully')
        fetchGuards()
      } catch (error) {
        toast.error('Failed to deactivate guard')
      }
    }
  }

  const filteredGuards = guards.filter(guard =>
    guard.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guard.guardId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guard.mobileNumber?.includes(searchTerm)
  )

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
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Guard Management</h1>
          <p className="text-gray-400 mt-1">Manage all security personnel</p>
        </div>
        <Link href="/dashboard/guards/create" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2 rounded-lg flex items-center space-x-2 font-semibold">
          <Plus className="h-5 w-5" />
          <span>Add New Guard</span>
        </Link>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, ID or mobile..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
          />
        </div>
      </div>

      {guards.length === 0 ? (
        <div className="text-center py-12 bg-slate-800 rounded-xl">
          <Shield className="h-12 w-12 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-400">No guards found</p>
          <Link href="/dashboard/guards/create" className="text-amber-500 hover:text-amber-400 mt-2 inline-block">
            Add your first guard →
          </Link>
        </div>
      ) : (
        <div className="bg-slate-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900">
                <tr className="text-left text-gray-300 text-sm">
                  <th className="px-4 py-3">Guard ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Mobile</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredGuards.map((guard) => (
                  <tr key={guard.id} className="hover:bg-slate-700/50">
                    <td className="px-4 py-3 text-white font-mono text-sm">{guard.guardId || `SG-${guard.id}`}</td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-white font-medium">{guard.fullName}</p>
                        <p className="text-gray-400 text-xs">{guard.email}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-300">{guard.mobileNumber}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        guard.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {guard.status || 'active'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        <Link href={`/dashboard/guards/${guard.id}`} className="text-amber-500 hover:text-amber-400">
                          <Edit className="h-5 w-5" />
                        </Link>
                        <button onClick={() => handleDeactivate(guard.id)} className="text-red-500 hover:text-red-400">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
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