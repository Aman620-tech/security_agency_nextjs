'use client'

import { Shield, CheckCircle, Award, Clock, Users, Building2 } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block mb-4">
              <div className="h-px w-12 bg-amber-500"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              India's Trusted Name in <span className="text-amber-500">Security & Manpower</span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Incorporated under the Companies Act 2013 and registered in Madhya Pradesh, Prabha Indira Special Security Agency Private Limited Agency Private Limited. has been delivering professional security guard services and facility manpower solutions to corporate, residential, industrial, and institutional clients across India since 2009.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              <span className="text-amber-500 font-semibold">We don't deploy guards — we deploy discipline.</span> Every personnel we place undergoes structured training, thorough background verification, and continuous on-ground supervision. Our leadership brings deep expertise in security operations, compliance, and workforce management, ensuring you never have to worry about who stands at your gate.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Serving <span className="text-amber-500 font-semibold">200+ satisfied clients</span> across <span className="text-amber-500 font-semibold">25+ cities</span>, we have built a reputation for reliability, integrity, and operational excellence.
            </p>
            
            {/* Why Choose Us - Two Column */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-amber-500" />
                  Operational Excellence
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">✓ Fully verified, trained security personnel</li>
                  <li className="flex items-start gap-2">✓ PSARA-compliant operations & documentation</li>
                  <li className="flex items-start gap-2">✓ Customised security plans for each client</li>
                  <li className="flex items-start gap-2">✓ Dedicated Account Manager for every contract</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  Client Commitment
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">✓ 24/7 control room support & rapid response</li>
                  <li className="flex items-start gap-2">✓ Transparent billing with zero hidden charges</li>
                  <li className="flex items-start gap-2">✓ Regular audits & performance reports</li>
                  <li className="flex items-start gap-2">✓ PAN India deployment capability</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Column - Stats Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-amber-500/20">
            <div className="text-center mb-6">
              <Shield className="h-12 w-12 text-amber-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">PSARA Compliant Agency</h3>
              <p className="text-gray-400 text-sm mt-2">Registered under Companies Act 2013, Madhya Pradesh</p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-amber-500/10 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">200+</div>
                <div className="text-xs text-gray-400">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">25+</div>
                <div className="text-xs text-gray-400">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">15+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">24/7</div>
                <div className="text-xs text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}