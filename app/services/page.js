import Link from 'next/link'
import { Shield, Building2, Factory, Home, Calendar, Camera, Users, ChevronRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'commercial-industrial',
    title: 'Commercial & Industrial Security',
    description: 'Protect your assets, workforce, and infrastructure with zero disruption to operations.',
    icon: Building2,
    features: ['Access control & perimeter management', 'Shift-based guard deployment', 'CCTV monitoring coordination', 'Emergency response protocols']
  },
  {
    id: 'residential',
    title: 'Residential Security',
    description: 'Trained residential security guards for housing societies, gated communities, and luxury residences.',
    icon: Home,
    features: ['Visitor management & intercom coordination', 'Night patrolling & surveillance rounds', 'Emergency escalation procedures', 'Staff background checks']
  },
  {
    id: 'event-vip',
    title: 'Event & VIP Security',
    description: 'Crowd management, threat assessment, and dignitary protection for events of any size.',
    icon: Calendar,
    features: ['Pre-event risk assessment', 'Crowd management & frisking', 'VIP escort services', 'Rapid response team']
  },
  {
    id: 'facility-manpower',
    title: 'Facility Manpower Services',
    description: 'Trained manpower for facility management, housekeeping, and support operations.',
    icon: Users,
    features: ['Housekeeping & sanitation staff', 'Pantry & support personnel', 'Parking & traffic management', 'Replacement within 24 hours']
  },
  {
    id: 'armed',
    title: 'Armed Security',
    description: 'Licensed armed guards for high-risk environments, banks, and VIP protection.',
    icon: Shield,
    features: ['Licensed firearm handling', 'Tactical training', 'Bank & cash transit security', '24/7 emergency response']
  },
  {
    id: 'cctv',
    title: 'CCTV Surveillance',
    description: 'Advanced surveillance solutions with trained monitoring personnel for 24/7 oversight.',
    icon: Camera,
    features: ['Real-time monitoring', 'Motion detection & alerts', 'Remote mobile access', 'Cloud backup storage']
  }
]

export const metadata = {
  title: 'Our Security Services | Prabha Indira Special Security Agency Private Limited Agency',
  description: 'Comprehensive security solutions including commercial, residential, event security, armed guards, CCTV surveillance, and manpower services across India.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-amber-500">Security Services</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Comprehensive security solutions tailored to your specific needs. Professional, reliable, and available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border border-amber-500/10 h-full flex flex-col">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Icon className="h-12 w-12 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-amber-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 font-medium"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Security Solution?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for a tailored security plan that meets your specific requirements.
          </p>
          <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-3 rounded-lg inline-block">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}