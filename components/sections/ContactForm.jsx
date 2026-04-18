'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock, Shield } from 'lucide-react'
import { toast } from 'sonner'

// WhatsApp icon is not in lucide-react, so we'll use a custom SVG or remove it
// Option 1: Use a simple button without WhatsApp icon
// Option 2: Use a custom WhatsApp icon

// Custom WhatsApp Icon component
const WhatsAppIcon = () => (
  <svg 
    className="h-5 w-5" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
)

const serviceOptions = [
  { value: '', label: 'Select Service Required *' },
  { value: 'commercial', label: 'Commercial & Industrial Security' },
  { value: 'residential', label: 'Residential Security' },
  { value: 'event', label: 'Event & VIP Security' },
  { value: 'manpower', label: 'Facility Manpower Services' },
  { value: 'armed', label: 'Armed Security' },
  { value: 'cctv', label: 'CCTV Surveillance' },
  { value: 'multiple', label: 'Multiple Services' },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    organisation: '',
    city: '',
    serviceType: '',
    guardsRequired: '',
    startDate: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success('Security Consultation Request Submitted!', {
      description: 'Our expert will contact you within 2 business hours.',
    })
    
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      organisation: '',
      city: '',
      serviceType: '',
      guardsRequired: '',
      startDate: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  const handleWhatsApp = () => {
    const message = `Hello Prabha Indira Special Security Agency Private Limited ,%0A%0AI'm interested in getting a free security consultation for:%0A- Service Type: [Select Service]%0A- Location: [City Name]%0A- Number of Guards Required: [Number]%0A%0APlease contact me back.`
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-px w-12 bg-amber-500 mx-auto"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Free Security Consultation
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Tell us about your requirements. Our security advisor will get back to you within <span className="text-amber-500 font-semibold">2 business hours</span> with a tailored plan and transparent pricing — no obligations, no sales pressure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                        placeholder="e.g. Rajesh Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                        placeholder="rajesh@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">Organisation / Company</label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                        placeholder="ABCprivate limited. / Suncity RWA"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">City / Location *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                        placeholder="Bhopal, Indore, Mumbai..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">Service Required *</label>
                      <select
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">Number of Guards Required</label>
                      <input
                        type="number"
                        name="guardsRequired"
                        value={formData.guardsRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                        placeholder="e.g. 4"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Briefly describe your requirement</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none resize-none"
                      placeholder="E.g. We need 4 guards for a gated society in Bhopal, starting next month..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-950 border-t-transparent"></div>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Submit — Get My Free Security Plan →</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-xs mt-4">
                    🔒 Your information is 100% confidential. We never share client data with third parties.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20 text-center">
                <Phone className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Call Us 24/7</h3>
                <p className="text-amber-500 font-bold text-xl">+91 98765 43210</p>
                <p className="text-gray-400 text-sm mt-1">Emergency Support Available</p>
              </div> */}

              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center space-x-2 transition-all"
              >
                <WhatsAppIcon />
                <span>Connect on WhatsApp</span>
              </button>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-500/20">
                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="text-gray-300 text-sm">info@prabhaindirasecurity.com</p>
                    <p className="text-gray-400 text-xs">support@prabhaindirasecurity.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                  <p className="text-gray-300 text-sm">123, Security House, MG Road, New Delhi - 110001</p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 border border-amber-500/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-amber-500 font-semibold">Within 2 Hours</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-400">Service Areas:</span>
                  <span className="text-white">PAN India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}