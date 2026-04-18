'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  Shield, Building2, Factory, Home, Calendar, Camera, 
  CheckCircle, Phone, Mail, MapPin, ArrowLeft, Users, Lock
} from 'lucide-react'

const servicesData = {
  'commercial-industrial': {
    title: 'Commercial & Industrial Security',
    description: 'Protect your assets, workforce, and infrastructure with zero disruption to operations.',
    longDescription: 'Your business operations carry real risk — from asset theft and unauthorised access to safety breaches on factory floors. Our Commercial & Industrial Security services are designed to protect your assets, workforce, and infrastructure with zero disruption to operations.',
    icon: Building2,
    features: [
      'Access control & perimeter management',
      'Shift-based guard deployment (12hr / 24hr)',
      'CCTV monitoring coordination',
      'Material movement & gate-pass management',
      'Emergency response protocols',
      'Fire safety & first aid trained personnel'
    ],
    benefits: [
      'Reduced theft and loss',
      'Safety compliance',
      'Operational continuity',
      'Employee safety'
    ],
    industries: ['IT parks & corporate campuses', 'Manufacturing plants & warehouses', 'Logistics hubs & distribution centres', 'Construction sites', 'Government & PSU establishments']
  },
  residential: {
    title: 'Residential Security',
    description: 'Trained residential security guards for housing societies, gated communities, and luxury residences.',
    longDescription: 'Home is where your family should feel safe — not vulnerable. We provide trained residential security guards for housing societies, gated communities, and luxury residences, ensuring controlled access and genuine peace of mind, 24 hours a day.',
    icon: Home,
    features: [
      'Visitor management & intercom coordination',
      'Night patrolling & surveillance rounds',
      'Vehicle entry/exit log maintenance',
      'Emergency escalation procedures',
      'Staff background checks & conduct monitoring',
      'Clubhouse & common area security'
    ],
    benefits: [
      'Safe community living',
      'Controlled access',
      'Quick emergency response',
      'Resident peace of mind'
    ],
    industries: ['Residential societies & RWAs', 'Gated townships', 'High-rise apartment complexes', 'Individual bungalows & villas', 'Senior living communities']
  },
  'event-vip': {
    title: 'Event & VIP Security',
    description: 'Crowd management, threat assessment, and dignitary protection for events of any size.',
    longDescription: 'From high-footfall public events to intimate VIP gatherings, security planning cannot be improvised. Our event security teams are trained in crowd management, threat assessment, and dignitary protection — keeping every event smooth, safe, and incident-free.',
    icon: Calendar,
    features: [
      'Pre-event risk assessment & security plan',
      'Crowd management & frisking personnel',
      'VIP escort & personal security officers',
      'Entry/exit flow management',
      'Rapid response team on standby',
      'Emergency medical coordination'
    ],
    benefits: [
      'Safe event environment',
      'Professional crowd control',
      'Emergency readiness',
      'Attendee confidence'
    ],
    industries: ['Corporate conferences & award nights', 'Weddings & large social gatherings', 'Political & government events', 'Concerts, exhibitions & trade fairs', 'VIP visits & celebrity management']
  },
  'facility-manpower': {
    title: 'Facility Manpower Services',
    description: 'Trained manpower for facility management, housekeeping, and support operations.',
    longDescription: 'Beyond security, we supply disciplined, trained manpower for facility management, housekeeping, and support operations. Every personnel is vetted, documented, and placed with a clear scope of work — reducing your HR burden while maintaining operational quality.',
    icon: Users,
    features: [
      'Housekeeping & sanitation staff',
      'Pantry & support service personnel',
      'Parking & traffic management staff',
      'Verified documentation for all workers',
      'Replacement guaranteed within 24 hours',
      'GST-compliant billing & payroll management'
    ],
    benefits: [
      'Reduced HR burden',
      'Trained professional staff',
      'Quick replacement guarantee',
      'Transparent billing'
    ],
    industries: ['Corporate offices & business parks', 'Hospitals & healthcare facilities', 'Educational institutions', 'Malls & retail establishments', 'Hotels & hospitality properties']
  },
  armed: {
    title: 'Armed Security',
    description: 'Licensed armed guards for high-risk environments, banks, and VIP protection.',
    longDescription: 'For high-risk environments requiring maximum protection, our armed security services provide licensed, trained personnel equipped to handle critical situations with precision and professionalism.',
    icon: Shield,
    features: [
      'Licensed firearm handling',
      'Tactical training & risk assessment',
      'Bank & cash transit security',
      'High-value asset protection',
      'VIP close protection',
      '24/7 emergency response'
    ],
    benefits: [
      'Maximum protection',
      'Crime deterrence',
      'Rapid threat response',
      'Professional armed guards'
    ],
    industries: ['Banks & financial institutions', 'Jewelry stores', 'Government buildings', 'VIP residences', 'Cash transit vehicles']
  },
  cctv: {
    title: 'CCTV Surveillance',
    description: 'Advanced surveillance solutions with trained monitoring personnel for 24/7 oversight.',
    longDescription: 'State-of-the-art CCTV systems combined with professional monitoring for complete security coverage. Our trained personnel ensure real-time threat detection and rapid response.',
    icon: Camera,
    features: [
      'Real-time monitoring & recording',
      'Motion detection & alerts',
      'Remote access via mobile',
      'Night vision capability',
      'Facial recognition',
      'Cloud backup storage'
    ],
    benefits: [
      '24/7 surveillance coverage',
      'Evidence collection',
      'Remote access',
      'Deter criminal activity'
    ],
    industries: ['Retail stores', 'Banks & ATMs', 'Airports & transport hubs', 'Parking lots', 'Educational institutions']
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = params.id
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (serviceId && servicesData[serviceId]) {
      setService(servicesData[serviceId])
    }
    setLoading(false)
  }, [serviceId])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-amber-500 border-t-transparent"></div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-2 rounded-lg inline-flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 mb-6">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Services</span>
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-amber-500/20 p-4 rounded-2xl">
              <Icon className="h-12 w-12 text-amber-500" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{service.title}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">{service.longDescription}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-amber-500" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Industries We Serve</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {service.industries.map((industry, index) => (
                  <span key={index} className="px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm">
                    {industry}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
                    <Shield className="h-5 w-5 text-amber-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500/10 to-amber-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized security solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-3 rounded-lg transition-all">
              Request a Free Security Assessment
            </Link>
            {/* <a href="tel:+919876543210" className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 font-semibold px-8 py-3 rounded-lg transition-all">
              Call Now: +91 98765 43210
            </a> */}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* <div>
              <Phone className="h-8 w-8 text-amber-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Call Us 24/7</h3>
              <p className="text-gray-400">+91 98765 43210</p>
              <p className="text-gray-400 text-sm">Emergency Support Available</p>
            </div> */}
            <div>
              <Mail className="h-8 w-8 text-amber-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400">prabhaindira247@gmail.com</p>
              <p className="text-gray-400 text-sm">We respond within 2 hours</p>
            </div>
            <div>
              <MapPin className="h-8 w-8 text-amber-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400">123, Security House, MG Road</p>
              <p className="text-gray-400 text-sm">New Delhi - 110001, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}