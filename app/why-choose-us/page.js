import { Shield, Clock, Users, Award, TrendingUp, Headphones, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Why Choose Us | Prabha Indira Special Security Agency Private Limited Agency',
  description: 'Discover why 200+ businesses trust us for their security needs. PSARA licensed, 24/7 support, trained guards, and transparent pricing.',
}

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: Shield,
      title: 'PSARA Compliant Agency',
      description: 'We operate in full compliance with the Private Security Agencies Regulation Act - protecting you legally and operationally.'
    },
    {
      icon: Clock,
      title: '24/7 Rapid Response',
      description: 'Our control room operates round the clock. Incidents are escalated and addressed in real time - no delays.'
    },
    {
      icon: Users,
      title: '5000+ Strong Force',
      description: 'One of the largest private security forces in India with extensive coverage across 25+ cities.'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Over a decade of excellence in providing security solutions across India with proven track record.'
    },
    {
      icon: TrendingUp,
      title: '98% Satisfaction Rate',
      description: 'Industry-leading client satisfaction with proven track record and long-term client relationships.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Account Management',
      description: 'You always have a single point of contact who knows your site, your expectations, and your requirements.'
    }
  ]

  const features = [
    'ISO 9001:2015 Certified',
    'PSARA Licensed & Compliant',
    'Advanced CCTV & Surveillance',
    'Regular Training & Updates',
    'Insurance Coverage',
    'Background Verified Guards',
    'Transparent SLA-Backed Contracts',
    'On-Ground Supervision'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-amber-500">Us</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Discover what makes Prabha Indira Special Security Agency Private Limited the preferred choice for businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="bg-slate-800 p-6 rounded-xl hover:shadow-xl transition-all border border-amber-500/10 hover:border-amber-500/30">
                  <Icon className="h-12 w-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Sets Us Apart</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3 p-3 bg-slate-900 rounded-lg">
                <CheckCircle className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl text-center max-w-3xl mx-auto border border-amber-500/20">
            <div className="text-4xl text-amber-500 mb-4">"</div>
            <p className="text-white text-lg mb-4 leading-relaxed">
              Prabha Indira Special Security Agency Private Limited has been our trusted security partner for over 5 years. Their professionalism, quick response, and dedicated team have exceeded our expectations.
            </p>
            <p className="text-amber-500 font-semibold">- Rajesh Mehta, Operations Director</p>
            <p className="text-gray-400 text-sm">Tech Solutions Ltd</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/10 to-amber-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 200+ satisfied clients who trust us for their security needs.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-3 rounded-lg transition-all">
              Get Free Consultation
            </Link>
            <a href="tel:+919876543210" className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 font-semibold px-8 py-3 rounded-lg transition-all">
              Call Now: +91 98765 43210
            </a>
          </div> */}
        </div>
      </section>
    </>
  )
}