import Link from 'next/link'
import { Shield, Home, Info, Briefcase, Users, Mail, LayoutDashboard, FileText, Scale } from 'lucide-react'

export const metadata = {
  title: 'Sitemap | Prabha Indira Special Security Agency Private Limited Agency',
  description: 'Navigate through all pages of Prabha Indira Special Security Agency Private Limited Agency website.',
}

export default function SitemapPage() {
  const mainPages = [
    { name: 'Home', href: '/', icon: Home, description: 'Homepage with company overview' },
    { name: 'About Us', href: '/about', icon: Info, description: 'Learn about our company' },
    { name: 'Services', href: '/services', icon: Briefcase, description: 'All security services' },
    { name: 'Why Choose Us', href: '/why-choose-us', icon: Users, description: 'Our unique advantages' },
    { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch with us' },
  ]

  const servicePages = [
    { name: 'Commercial & Industrial Security', href: '/services/commercial-industrial' },
    { name: 'Residential Security', href: '/services/residential' },
    { name: 'Event & VIP Security', href: '/services/event-vip' },
    { name: 'Facility Manpower Services', href: '/services/facility-manpower' },
    { name: 'Armed Security', href: '/services/armed' },
    { name: 'CCTV Surveillance', href: '/services/cctv' },
  ]

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy-policy', icon: FileText },
    { name: 'Terms of Service', href: '/terms-of-service', icon: Scale },
    { name: 'Sitemap', href: '/sitemap', icon: LayoutDashboard },
  ]

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Shield className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Site<span className="text-amber-500">map</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Navigate through all pages of Prabha Indira Special Security Agency Private Limited Agency website.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Main Pages */}
            <div className="bg-slate-800 rounded-xl p-6 border border-amber-500/10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-amber-500/20">Main Pages</h2>
              <ul className="space-y-3">
                {mainPages.map((page) => {
                  const Icon = page.icon
                  return (
                    <li key={page.href}>
                      <Link href={page.href} className="flex items-center gap-3 text-gray-300 hover:text-amber-500 transition-colors group">
                        <Icon className="h-5 w-5 text-amber-500" />
                        <span>{page.name}</span>
                      </Link>
                      <p className="text-gray-500 text-xs ml-8 mt-1">{page.description}</p>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Services Pages */}
            <div className="bg-slate-800 rounded-xl p-6 border border-amber-500/10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-amber-500/20">Our Services</h2>
              <ul className="space-y-3">
                {servicePages.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="text-gray-300 hover:text-amber-500 transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div className="bg-slate-800 rounded-xl p-6 border border-amber-500/10">
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-amber-500/20">Legal</h2>
              <ul className="space-y-3">
                {legalPages.map((page) => {
                  const Icon = page.icon
                  return (
                    <li key={page.href}>
                      <Link href={page.href} className="flex items-center gap-3 text-gray-300 hover:text-amber-500 transition-colors">
                        <Icon className="h-5 w-5 text-amber-500" />
                        <span>{page.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link href="/" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}