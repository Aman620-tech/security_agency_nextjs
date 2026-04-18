'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { 
  LayoutDashboard, Users, Building2, Calendar, 
  DollarSign, FileText, LogOut, Menu, X,
  Shield, ChevronRight
} from 'lucide-react'
import { toast } from 'sonner'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Guards', href: '/dashboard/guards' },
  { icon: Building2, label: 'Tenders', href: '/dashboard/tenders' },
  { icon: Calendar, label: 'Attendance', href: '/dashboard/attendance' },
  { icon: DollarSign, label: 'Salary', href: '/dashboard/salary' },
  { icon: FileText, label: 'Reports', href: '/dashboard/reports' },
]

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
        console.log({token, userData},"================ ")
    if (!token) {
      router.push('/login')
      return
    }
    
    if (userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    // localStorage.removeItem('token')
    // localStorage.removeItem('user')
    toast.success('Logged out successfully')
    // router.push('/')
        Cookies.remove('auth_token', { path: '/' })
    Cookies.remove('user', { path: '/' })
    
    // Small delay to ensure cookies are removed
    setTimeout(() => {
      router.push('/')
    }, 500)
    
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-amber-500 border-t-transparent"></div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-slate-800 p-2 rounded-lg"
      >
        {sidebarOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full w-64 bg-slate-800 border-r border-amber-500/20 z-40
        transform transition-transform duration-300 ease-in-out pt-20
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* User Info */}
          <div className="px-4 py-4 border-b border-amber-500/20">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <p className="text-white font-medium">{user?.fullName || 'Admin'}</p>
                <p className="text-gray-400 text-xs capitalize">{user?.role || 'Administrator'}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center justify-between px-3 py-2 rounded-lg transition-all
                    ${isActive 
                      ? 'bg-amber-500/20 text-amber-500' 
                      : 'text-gray-300 hover:bg-slate-700 hover:text-amber-500'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="h-4 w-4" />}
                </Link>
              )
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-amber-500/20">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </main>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}