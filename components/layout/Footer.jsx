import Link from 'next/link'
import { Shield, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Reviews', href: '/reviews' },   // ← added
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Commercial & Industrial Security', href: '/services/commercial-industrial' },
  { name: 'Residential Security', href: '/services/residential' },
  { name: 'Event & VIP Security', href: '/services/event-vip' },
  { name: 'Facility Manpower Services', href: '/services/facility-manpower' },
  { name: 'Armed Security', href: '/services/armed' },
  { name: 'CCTV Surveillance', href: '/services/cctv' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-amber-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <Shield className="h-8 w-8 text-amber-500 group-hover:scale-110 transition-transform" />
              <div>
                <div className="hidden sm:block font-bold text-lg">
                  <span className="text-white">Prabha Indira Special Security Agency</span>
                  <span className="text-amber-500"> Pvt. Ltd.</span>
                </div>
                <div className="sm:hidden font-bold text-sm">
                  <span className="text-white">Prabha Indira Special</span>
                  <br />
                  <span className="text-amber-500 text-xs">Security Agency Pvt. Ltd.</span>
                </div>
                <div className="text-xs text-gray-400">Since 2009</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              India's most trusted security services provider, delivering excellence in protection and manpower solutions since 2009. PSARA licensed and ISO certified.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-amber-500 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-amber-500 transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">
                Jain Tower, Nehru Nagar Main Road,<br />
                Nehru Nagar, Bhopal,<br />
                Madhya Pradesh, India
              </span>
            </li>
              {/* <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-amber-500 transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li> */}
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:prabhaindira247@gmail.com" className="text-gray-300 hover:text-amber-500 transition-colors text-sm">
                  prabhaindira247@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* PSARA License Info */}
        <div className="mt-8 pt-6 border-t border-amber-500/10 text-center">
          <p className="text-gray-400 text-xs">
            <span className="text-amber-500">PSARA License No.:</span> [Insert License Number] | 
            <span className="text-amber-500 ml-2">ISO 9001:2015 Certified</span> | 
            <span className="text-amber-500 ml-2">NSDC Partner</span>
          </p>
          <p className="text-gray-500 text-xs mt-1">Registered under Companies Act 2013, Madhya Pradesh</p>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-amber-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Prabha Indira Special Security Agency Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}