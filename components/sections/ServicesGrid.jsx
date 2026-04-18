'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Building2, Factory, Home, Calendar, Camera, ChevronRight, Users, Lock, CheckCircle } from 'lucide-react'

const servicesData = [
  {
    id: 'commercial-industrial',
    title: 'Commercial & Industrial Security',
    shortDescription: 'Protect your assets, workforce, and infrastructure with zero disruption to operations.',
    longDescription: 'Your business operations carry real risk — from asset theft and unauthorised access to safety breaches on factory floors. Our Commercial & Industrial Security services are designed to protect your assets, workforce, and infrastructure with zero disruption to operations.',
    icon: 'Building2',
    features: [
      'Access control & perimeter management',
      'Shift-based guard deployment (12hr / 24hr)',
      'CCTV monitoring coordination',
      'Material movement & gate-pass management',
      'Emergency response protocols',
      'Fire safety & first aid trained personnel'
    ],
    idealFor: ['IT parks & corporate campuses', 'Manufacturing plants & warehouses', 'Logistics hubs & distribution centres', 'Construction sites', 'Government & PSU establishments'],
    color: 'navy'
  },
  {
    id: 'residential',
    title: 'Residential Security',
    shortDescription: 'Trained residential security guards for housing societies, gated communities, and luxury residences.',
    longDescription: 'Home is where your family should feel safe — not vulnerable. We provide trained residential security guards for housing societies, gated communities, and luxury residences, ensuring controlled access and genuine peace of mind, 24 hours a day.',
    icon: 'Home',
    features: [
      'Visitor management & intercom coordination',
      'Night patrolling & surveillance rounds',
      'Vehicle entry/exit log maintenance',
      'Emergency escalation procedures',
      'Staff background checks & conduct monitoring',
      'Clubhouse & common area security'
    ],
    idealFor: ['Residential societies & RWAs', 'Gated townships', 'High-rise apartment complexes', 'Individual bungalows & villas', 'Senior living communities'],
    color: 'gold'
  },
  {
    id: 'event-vip',
    title: 'Event & VIP Security',
    shortDescription: 'Crowd management, threat assessment, and dignitary protection for events of any size.',
    longDescription: 'From high-footfall public events to intimate VIP gatherings, security planning cannot be improvised. Our event security teams are trained in crowd management, threat assessment, and dignitary protection — keeping every event smooth, safe, and incident-free.',
    icon: 'Calendar',
    features: [
      'Pre-event risk assessment & security plan',
      'Crowd management & frisking personnel',
      'VIP escort & personal security officers',
      'Entry/exit flow management',
      'Rapid response team on standby',
      'Emergency medical coordination'
    ],
    idealFor: ['Corporate conferences & award nights', 'Weddings & large social gatherings', 'Political & government events', 'Concerts, exhibitions & trade fairs', 'VIP visits & celebrity management'],
    color: 'charcoal'
  },
  {
    id: 'facility-manpower',
    title: 'Facility Manpower Services',
    shortDescription: 'Trained manpower for facility management, housekeeping, and support operations.',
    longDescription: 'Beyond security, we supply disciplined, trained manpower for facility management, housekeeping, and support operations. Every personnel is vetted, documented, and placed with a clear scope of work — reducing your HR burden while maintaining operational quality.',
    icon: 'Users',
    features: [
      'Housekeeping & sanitation staff',
      'Pantry & support service personnel',
      'Parking & traffic management staff',
      'Verified documentation for all workers',
      'Replacement guaranteed within 24 hours',
      'GST-compliant billing & payroll management'
    ],
    idealFor: ['Corporate offices & business parks', 'Hospitals & healthcare facilities', 'Educational institutions', 'Malls & retail establishments', 'Hotels & hospitality properties'],
    color: 'navy'
  },
  {
    id: 'armed',
    title: 'Armed Security',
    shortDescription: 'Licensed armed guards for high-risk environments, banks, and VIP protection.',
    longDescription: 'For high-risk environments requiring maximum protection, our armed security services provide licensed, trained personnel equipped to handle critical situations with precision and professionalism.',
    icon: 'Shield',
    features: [
      'Licensed firearm handling',
      'Tactical training & risk assessment',
      'Bank & cash transit security',
      'High-value asset protection',
      'VIP close protection',
      '24/7 emergency response'
    ],
    idealFor: ['Banks & financial institutions', 'Jewelry stores', 'Government buildings', 'VIP residences', 'Cash transit vehicles'],
    color: 'gold'
  },
  {
    id: 'cctv',
    title: 'CCTV Surveillance',
    shortDescription: 'Advanced surveillance solutions with trained monitoring personnel for 24/7 oversight.',
    longDescription: 'State-of-the-art CCTV systems combined with professional monitoring for complete security coverage. Our trained personnel ensure real-time threat detection and rapid response.',
    icon: 'Camera',
    features: [
      'Real-time monitoring & recording',
      'Motion detection & alerts',
      'Remote access via mobile',
      'Night vision capability',
      'Facial recognition',
      'Cloud backup storage'
    ],
    idealFor: ['Retail stores', 'Banks & ATMs', 'Airports & transport hubs', 'Parking lots', 'Educational institutions'],
    color: 'charcoal'
  }
]

const iconMap = {
  Shield: Shield,
  Building2: Building2,
  Factory: Factory,
  Home: Home,
  Calendar: Calendar,
  Camera: Camera,
  Users: Users,
  Lock: Lock
}

const colorMap = {
  gold: 'from-amber-500 to-amber-700',
  navy: 'from-slate-700 to-slate-900',
  charcoal: 'from-gray-700 to-gray-900'
}

function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Shield
  const gradientClass = colorMap[service.color] || colorMap.navy
  
  return (
    <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative p-6 z-10 flex flex-col h-full">
        <div className="mb-4">
          <IconComponent className="h-12 w-12 text-amber-500 group-hover:scale-110 transition-transform" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{service.shortDescription}</p>
        
        <div className="mt-auto">
          <Link
            href={`/services/${service.id}`}
            className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 font-medium transition-colors group/link"
          >
            <span>Learn More</span>
            <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ServicesGrid() {
  const [services, setServices] = useState(servicesData)
  const [loading, setLoading] = useState(false)

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="h-px w-12 bg-amber-500 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Security & <span className="text-amber-500">Manpower Solutions</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tailored security services to meet your specific requirements, delivered with precision and professionalism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}