'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { Loader2 } from 'lucide-react'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    Cookies.remove('auth_token', { path: '/' })
    Cookies.remove('user', { path: '/' })
    setTimeout(() => router.push('/'), 500)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 text-amber-500 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-white mb-2">Logging out...</h2>
        <p className="text-gray-400">You are being securely logged out.</p>
      </div>
    </div>
  )
}