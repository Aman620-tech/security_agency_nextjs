'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { servicesAPI } from '@/lib/api'

export default function SimpleContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await servicesAPI.submitContact(formData)
      
      toast.success('Quote Request Submitted!', {
        description: 'We will contact you within 30 minutes.',
      })
      
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      })
    } catch (error) {
      toast.error('Submission Failed', {
        description: 'Please try again or call us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name *"
        required
        className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white"
      />
      
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name *"
        required
        className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white"
      />
      
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address *"
        required
        className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white"
      />
      
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number *"
        required
        className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white"
      />
      
      <select
        name="serviceType"
        value={formData.serviceType}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white"
      >
        <option value="">Select Service Type</option>
        <option value="armed">Armed Security</option>
        <option value="corporate">Corporate Security</option>
        <option value="industrial">Industrial Security</option>
        <option value="residential">Residential Security</option>
        <option value="event">Event Security</option>
        <option value="cctv">CCTV Surveillance</option>
      </select>
      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows={3}
        className="w-full px-4 py-2 bg-navy-900 border border-charcoal-700 rounded-lg text-white resize-none"
      />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold py-2 rounded-lg transition-colors disabled:opacity-50"
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin mx-auto" />
        ) : (
          'Submit Request'
        )}
      </button>
    </form>
  )
}