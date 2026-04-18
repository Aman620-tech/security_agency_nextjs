'use client'

import { useState, useRef } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'

// Custom WhatsApp Icon
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

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    city: '',
    serviceType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        organisation: formData.organisation || 'Not provided',
        city: formData.city,
        service_type: formData.serviceType,
        message: formData.message,
        to_name: 'Prabha Indira Security Team',
        reply_to: formData.email,
      }

      // Send email
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      )

      if (response.status === 200) {
        toast.success('Message Sent Successfully!', {
          description: 'Our team will contact you within 2 hours.',
          duration: 5000,
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          organisation: '',
          city: '',
          serviceType: '',
          message: '',
        })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send message', {
        description: 'Please try again or email us at prabhaindira247@gmail.com',
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const message = `Hello Prabha Indira Security,%0A%0AI'm interested in a free security consultation.%0A%0AName: ${formData.name || 'Guest'}%0APlease contact me back.`
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
  }

  const serviceOptions = [
    { value: '', label: 'Select Service Type' },
    { value: 'commercial', label: 'Commercial & Industrial Security' },
    { value: 'residential', label: 'Residential Security' },
    { value: 'event', label: 'Event & VIP Security' },
    { value: 'manpower', label: 'Facility Manpower Services' },
    { value: 'armed', label: 'Armed Security' },
    { value: 'cctv', label: 'CCTV Surveillance' },
  ]

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-amber-500">Us</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Get in touch with our security experts for a free consultation. We respond within 2 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
             {/* <div className="bg-slate-800 p-6 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all">
                <Phone className="h-8 w-8 text-amber-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us 24/7</h3>
                <p className="text-gray-300">+91 98765 43210</p>
                <p className="text-gray-300">+91 98765 43211</p>
                <p className="text-amber-500 text-sm mt-2">Emergency Support Available</p>
              </div>
*/}
              <div className="bg-slate-800 p-6 rounded-xl border border-amber-500/10">
                <Mail className="h-8 w-8 text-amber-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">prabhaindira247@gmail.com</p>
                <p className="text-amber-500 text-sm mt-2">We respond within 2 hours</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-amber-500/10">
                <MapPin className="h-8 w-8 text-amber-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">123, Security House, MG Road</p>
                <p className="text-gray-300">New Delhi - 110001, India</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-amber-500/10">
                <Clock className="h-8 w-8 text-amber-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Working Hours</h3>
                <p className="text-gray-300">Monday - Sunday: 24/7</p>
                <p className="text-amber-500 text-sm mt-2">Always Open for Emergencies</p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center space-x-2 transition-all"
              >
                <WhatsAppIcon />
                <span>Connect on WhatsApp</span>
              </button>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800 p-8 rounded-xl border border-amber-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                        placeholder="Rajesh Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                        placeholder="rajesh@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                        placeholder="+91 98XXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Organisation</label>
                      <input 
                        type="text" 
                        name="organisation" 
                        value={formData.organisation} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                        placeholder="ABC Pvt. Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">City *</label>
                      <input 
                        type="text" 
                        name="city" 
                        required 
                        value={formData.city} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none" 
                        placeholder="New Delhi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Service Type *</label>
                      <select 
                        name="serviceType" 
                        required 
                        value={formData.serviceType} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none"
                      >
                        {serviceOptions.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Message *</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none resize-none" 
                      placeholder="Tell us about your security requirements..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-950 border-t-transparent"></div>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 p-4 rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.456789012345!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c8b3e8d4f7%3A0x8b7e5c9d6f8a3e2d!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5e2m1sen!2sin"
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '0.5rem' }} 
              allowFullScreen 
              loading="lazy"
              title="Prabha Indira Security Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}