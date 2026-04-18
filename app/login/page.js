'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Shield, Eye, EyeOff, LogIn } from 'lucide-react'
import { toast } from 'sonner'
import Cookies from 'js-cookie'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/dashboard'

  useEffect(() => {
    const token = Cookies.get('auth_token')
    if (token) router.push(from)
  }, [router, from])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (username === 'admin' && password === 'admin123') {
      const userData = { id: 1, fullName: 'System Administrator', username: 'admin', email: 'admin@securityagency.com', role: 'director' }
      Cookies.set('auth_token', 'mock-token-12345', { expires: 7, path: '/' })
      Cookies.set('user', JSON.stringify(userData), { expires: 7, path: '/' })
      toast.success('Login successful!')
      router.push(from)
    } else {
      toast.error('Invalid credentials. Use admin / admin123')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4"><Shield className="h-16 w-16 text-amber-500" /></div>
          <h1 className="text-2xl font-bold text-white">Prabha Indira Special Security Agency Private Limited </h1>
          <p className="text-gray-400 mt-2">Login to your account</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-amber-500/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Username or Email</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none pr-12" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-500">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50">
              {isLoading ? <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-950 border-t-transparent"></div> : <><LogIn className="h-5 w-5" /><span>Login</span></>}
            </button>
          </form>
          {/* <div className="mt-6 p-4 bg-slate-900/50 rounded-lg">
            <p className="text-xs text-gray-400 text-center mb-2">Demo Credentials:</p>
            <p className="text-xs text-gray-300 text-center">Username: admin<br />Password: admin123</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}