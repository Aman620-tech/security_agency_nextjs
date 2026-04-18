'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, Users, Building2, Calendar, 
  DollarSign, FileText, Settings, LogOut, Menu, X,
  UserCog
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Guards', href: '/dashboard/guards' },
  { icon: Building2, label: 'Tenders', href: '/dashboard/tenders' },
  { icon: Calendar, label: 'Attendance', href: '/dashboard/attendance' },
  { icon: DollarSign, label: 'Salary', href: '/dashboard/salary' },
  { icon: FileText, label: 'Reports', href: '/dashboard/reports' },
]

const adminMenuItems = [
  { icon: UserCog, label: 'Users', href: '/dashboard/users' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const isAdmin = user?.role === 'admin' || user?.role === 'director'

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-slate-800 p-2 rounded-lg"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-amber-500/20 z-40
        transform transition-transform duration-300 ease-in-out pt-20
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <nav className="flex-1 px-4 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
                    ${isActive 
                      ? 'bg-amber-500/20 text-amber-500 border-l-2 border-amber-500' 
                      : 'text-gray-300 hover:bg-slate-800 hover:text-amber-500'
                    }
                  `}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
            
            {isAdmin && (
              <>
                <div className="h-px bg-slate-800 my-4" />
                {adminMenuItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
                        ${isActive 
                          ? 'bg-amber-500/20 text-amber-500 border-l-2 border-amber-500' 
                          : 'text-gray-300 hover:bg-slate-800 hover:text-amber-500'
                        }
                      `}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </>
            )}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-amber-500/20">
            <div className="mb-3 px-2">
              <p className="text-white text-sm font-medium">{user?.fullName}</p>
              <p className="text-gray-400 text-xs capitalize">{user?.role}</p>
            </div>
            <button
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 w-full transition-all"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}