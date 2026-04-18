'use client'

import { Shield, Clock, Users, FileText, Headphones, ClipboardCheck, Eye, Award } from 'lucide-react'

const trustPoints = [
  {
    icon: Headphones,
    title: '24/7 Rapid Response',
    description: 'Our control room operates round the clock. Incidents are escalated and addressed in real time - no delays, no excuses.'
  },
  {
    icon: Shield,
    title: 'PSARA-Compliant Agency',
    description: 'We operate in full compliance with the Private Security Agencies Regulation Act - protecting you legally and operationally.'
  },
  {
    icon: Award,
    title: 'Trained & Certified Guards',
    description: 'All personnel are trained in first aid, fire safety, access control, and situational response before going on-duty.'
  },
  {
    icon: Users,
    title: 'Dedicated Account Management',
    description: 'You always have a single point of contact who knows your site, your expectations, and your security requirements.'
  },
  {
    icon: ClipboardCheck,
    title: 'Verified & Background-Checked Personnel',
    description: 'Every guard undergoes police verification, medical fitness check, and reference validation before deployment.'
  },
  {
    icon: FileText,
    title: 'Customised Security Plans',
    description: 'No two sites are identical. We conduct a site audit and design a tailored security protocol for every client.'
  },
  {
    icon: Eye,
    title: 'On-Ground Supervision',
    description: 'Our supervisors conduct regular surprise checks, duty rounds, and shift reports - ensuring consistent guard performance.'
  },
  {
    icon: Clock,
    title: 'Transparent SLA-Backed Contracts',
    description: 'Clear deliverables, defined response times, and performance guarantees - all documented in your service agreement.'
  }
]

export default function TrustSignals() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="h-px w-12 bg-amber-500 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why <span className="text-amber-500">200+ Clients</span> Trust Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We don't just provide security — we deliver peace of mind with operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all hover:-translate-y-1"
              >
                <Icon className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </div>

        {/* PSARA License Display */}
        <div className="mt-12 text-center p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
          <p className="text-gray-300 text-sm">
            <span className="text-amber-500 font-semibold">PSARA License No.:</span> [Insert License Number] | 
            <span className="text-amber-500 font-semibold ml-2">ISO 9001:2015 Certified</span> | 
            <span className="text-amber-500 font-semibold ml-2">NSDC Partner</span>
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Registered under Companies Act 2013, Madhya Pradesh
          </p>
        </div>
      </div>
    </section>
  )
}