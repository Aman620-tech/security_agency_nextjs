'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Cookies from 'js-cookie'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Check login status from cookies
  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get('auth_token')
      setIsLoggedIn(!!token)
    }
    
    checkAuth()
  }, [])
  
  // Don't show header on dashboard pages
  if (pathname?.startsWith('/dashboard')) {
    return null
  }
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-slate-900/80 shadow-lg border-b border-amber-500/20'
          : 'bg-slate-950/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ✅ LOGO SECTION (UPDATED) */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logos/pisa_logo.png"
              alt="PISA Logo"
              width={120}
              height={120}
              className="h-10 w-auto group-hover:scale-105 transition-transform flex-shrink-0"
            />

             <div>
              <div className="hidden sm:block font-bold text-xl">
                <span className="text-white">Prabha Indira Special Security Agency</span>
                <span className="text-amber-500"> Pvt. Ltd.</span>
              </div>
              <div className="sm:hidden font-bold text-sm md:text-base">
                <span className="text-white">Prabha Indira Special</span>
                <br />
                <span className="text-amber-500 text-xs">Security Agency Pvt. Ltd.</span>
              </div>
              <div className="text-xs text-gray-400">Since 2009</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-amber-500 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn && (
              <Link
                href="/dashboard"
                className="text-amber-500 hover:text-amber-400 font-medium"
              >
                Dashboard
              </Link>
            )}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <a href="tel:+919876543210" className="flex items-center space-x-2 text-gray-200 hover:text-amber-500 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a> */}
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-6 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Login
              </Link>
            ) : (
              <Link
                href="/logout"
                className="bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold px-6 py-2 rounded-lg transition-all border border-red-500/30"
              >
                Logout
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-500/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-200 hover:text-amber-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn && (
              <Link
                href="/dashboard"
                className="block py-3 text-amber-500 hover:text-amber-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <div className="pt-4 space-y-3">
              {/* <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-gray-200 hover:text-amber-500"
              >
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a> */}
              {!isLoggedIn ? (
                <Link
                  href="/login"
                  className="block bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-6 py-2 rounded-lg text-center transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              ) : (
                <Link
                  href="/logout"
                  className="block bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold px-6 py-2 rounded-lg text-center transition-colors border border-red-500/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}