'use client'

import { useState, useEffect } from 'react'
import { UserCog, Plus, Edit, Trash2, Shield, Mail, Phone, CheckCircle, XCircle } from 'lucide-react'
import { authAPI } from '@/lib/api'
import { useAuth } from '@/context/AuthContext'
import { toast } from 'sonner'

export default function UsersPage() {
  const { user } = useAuth()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    mobileNumber: '',
    role: 'admin',
    zoneName: '',
  })

  useEffect(() => {
    if (user?.role === 'admin' || user?.role === 'director') {
      fetchUsers()
    }
  }, [user])

  const fetchUsers = async () => {
    try {
      const data = await authAPI.getAllUsers()
      setUsers(data)
    } catch (error) {
      toast.error('Failed to load users')
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      await authAPI.register(formData)
      toast.success('User created successfully!')
      setShowCreateModal(false)
      fetchUsers()
      setFormData({ fullName: '', email: '', username: '', password: '', mobileNumber: '', role: 'admin', zoneName: '' })
    } catch (error) {
      toast.error('Failed to create user')
    }
  }

  const handleDeactivate = async (userId) => {
    if (confirm('Deactivate this user?')) {
      try {
        await authAPI.deactivateUser(userId)
        toast.success('User deactivated')
        fetchUsers()
      } catch (error) {
        toast.error('Failed to deactivate user')
      }
    }
  }

  if (user?.role !== 'admin' && user?.role !== 'director') {
    return (
      <div className="p-6 text-center">
        <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
        <p className="text-charcoal-400">You don't have permission to access this page.</p>
      </div>
    )
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">User Management</h1>
          <p className="text-charcoal-400 mt-1">Manage system users and permissions</p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="h-5 w-5" /><span>Add User</span>
        </button>
      </div>

      <div className="bg-navy-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-navy-900">
              <tr className="text-left text-charcoal-300 text-sm">
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800">
              {users.map((userItem) => (
                <tr key={userItem.id} className="hover:bg-navy-800/80">
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-white font-medium">{userItem.fullName}</p>
                      <p className="text-charcoal-400 text-sm">{userItem.username}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${userItem.role === 'director' ? 'bg-gold-500/20 text-gold-500' : userItem.role === 'admin' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
                      {userItem.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1 text-charcoal-300 text-sm"><Mail className="h-3 w-3" /><span>{userItem.email}</span></div>
                      <div className="flex items-center space-x-1 text-charcoal-300 text-sm"><Phone className="h-3 w-3" /><span>{userItem.mobileNumber}</span></div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {userItem.isActive ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => handleDeactivate(userItem.id)} className="text-red-500 hover:text-red-400">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-navy-800 rounded-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-white mb-4">Create New User</h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <input type="text" placeholder="Full Name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white" required />
              <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white" required />
              <input type="text" placeholder="Username" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white" required />
              <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white" required />
              <input type="tel" placeholder="Mobile Number" value={formData.mobileNumber} onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})} className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white" required />
              <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white">
                <option value="admin">Admin</option>
                <option value="supervisor">Supervisor</option>
              </select>
              <div className="flex gap-3 pt-4">
                <button type="submit" className="flex-1 bg-gold-500 text-navy-950 py-2 rounded-lg">Create</button>
                <button type="button" onClick={() => setShowCreateModal(false)} className="flex-1 bg-navy-700 text-charcoal-200 py-2 rounded-lg">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}