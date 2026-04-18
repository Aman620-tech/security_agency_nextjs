'use client'

import { Shield, Clock, Award, Users, Phone, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Shield, value: '5000+', label: 'Personnel Deployed' },
  { icon: Clock, value: '30min', label: 'Response Time' },
  { icon: Award, value: '98%', label: 'Client Satisfaction' },
  { icon: Users, value: '350+', label: 'Active Clients' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-8">
            <Shield className="h-4 w-4 text-amber-500" />
            <span className="text-amber-400 text-sm font-medium">India's Most Trusted Security Agency</span>
          </div>
          
          {/* Main Heading - Updated */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Protecting What Matters Most</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">— With Zero Compromise.</span>
          </h1>
          
          {/* Sub-Headline - Updated */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Prabha Indira Special Security Agency Private Limited Agency Private Limited. delivers 360° security guard services and professional manpower solutions across India — backed by rigorous training, verified personnel, and round-the-clock supervision.
          </p>
          
          {/* CTA Buttons - Updated */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Request a Free Security Assessment</span>
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Speak to a Security Expert
            </Link>
          </div>
          
          {/* Statistics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-amber-500/20 pt-10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-7 w-7 text-amber-500 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}