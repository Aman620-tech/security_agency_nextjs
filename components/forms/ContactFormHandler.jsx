'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { contactSchema } from '@/schemas/contactSchema'
import { servicesAPI } from '@/lib/api'

const serviceOptions = [
  { value: '', label: 'Select Service Type' },
  { value: 'armed', label: 'Armed Security' },
  { value: 'corporate', label: 'Corporate Security' },
  { value: 'industrial', label: 'Industrial Security' },
  { value: 'residential', label: 'Residential Security' },
  { value: 'event', label: 'Event Security' },
  { value: 'cctv', label: 'CCTV Surveillance' },
  { value: 'manpower', label: 'Manpower Services' },
  { value: 'other', label: 'Other Security Services' },
]

export default function ContactFormHandler() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      serviceType: '',
      phone: '',
      email: '',
      message: '',
    },
  })
  
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await servicesAPI.submitContact(data)
      
      setSubmitStatus('success')
      toast.success('Quote Request Submitted Successfully!', {
        description: 'Our team will contact you within 30 minutes.',
        duration: 5000,
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      })
      
      // Reset form after successful submission
      reset()
      
      // Optional: Track conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-CONVERSION_ID',
          'value': 1.0,
          'currency': 'INR',
        })
      }
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
      
      return response
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      toast.error('Submission Failed', {
        description: error.message || 'Please try again or email us directly at xxxx',
        duration: 6000,
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
      })
      
      setTimeout(() => setSubmitStatus(null), 5000)
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-green-400 font-medium">Quote Request Submitted!</p>
              <p className="text-green-300 text-sm">We'll get back to you within 30 minutes.</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-red-400 font-medium">Submission Failed</p>
              <p className="text-red-300 text-sm">Please try again or call us directly.</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-charcoal-200 mb-2">
          Full Name <span className="text-gold-500">*</span>
        </label>
        <input
          type="text"
          {...register('name')}
          className={`w-full px-4 py-3 bg-navy-900 border rounded-lg transition-colors text-white placeholder-charcoal-500 focus:outline-none focus:ring-2 ${
            errors.name
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-charcoal-700 focus:border-gold-500 focus:ring-gold-500/20'
          }`}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>
      
      {/* Company Field */}
      <div>
        <label className="block text-sm font-medium text-charcoal-200 mb-2">
          Company Name <span className="text-gold-500">*</span>
        </label>
        <input
          type="text"
          {...register('company')}
          className={`w-full px-4 py-3 bg-navy-900 border rounded-lg transition-colors text-white placeholder-charcoal-500 focus:outline-none focus:ring-2 ${
            errors.company
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-charcoal-700 focus:border-gold-500 focus:ring-gold-500/20'
          }`}
          placeholder="Your company name"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>
        )}
      </div>
      
      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-charcoal-200 mb-2">
          Email Address <span className="text-gold-500">*</span>
        </label>
        <input
          type="email"
          {...register('email')}
          className={`w-full px-4 py-3 bg-navy-900 border rounded-lg transition-colors text-white placeholder-charcoal-500 focus:outline-none focus:ring-2 ${
            errors.email
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-charcoal-700 focus:border-gold-500 focus:ring-gold-500/20'
          }`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>
      
      {/* Phone Field */}
      <div>
        <label className="block text-sm font-medium text-charcoal-200 mb-2">
          Phone Number <span className="text-gold-500">*</span>
        </label>
        <input
          type="tel"
          {...register('phone')}
          className={`w-full px-4 py-3 bg-navy-900 border rounded-lg transition-colors text-white placeholder-charcoal-500 focus:outline-none focus:ring-2 ${
            errors.phone
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-charcoal-700 focus:border-gold-500 focus:ring-gold-500/20'
          }`}
          placeholder="10-digit mobile number"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
        )}
      </div>
      
      {/* Service Type Dropdown */}
      <div>
        <label className="block text-sm font-medium text-charcoal-200 mb-2">
          Service Type <span className="text-gold-500">*</span>
        </label>
        <select
          {...register('serviceType')}
          className={`w-full px-4 py-3 bg-navy-900 border rounded-lg transition-colors text-white focus:outline-none focus:ring-2 ${
            errors.serviceType
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-charcoal-700 focus:border-gold-500 focus:ring-gold-500/20'
          }`}
        >
          {serviceOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-400">{errors.serviceType.message}</p>
        )}
      </div>
      
      {/* Message Field */}
      <div>
        <label className="block text-sm font-medium text-charcoal-200 mb-2">
          Message <span className="text-charcoal-400 text-xs">(Optional)</span>
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className={`w-full px-4 py-3 bg-navy-900 border rounded-lg transition-colors text-white placeholder-charcoal-500 focus:outline-none focus:ring-2 resize-none ${
            errors.message
              ? 'border-red-500 focus:ring-red-500/20'
              : 'border-charcoal-700 focus:border-gold-500 focus:ring-gold-500/20'
          }`}
          placeholder="Tell us about your security requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 inline-flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Request Free Quote</span>
            <span>→</span>
          </>
        )}
      </button>
      
      {/* Trust Indicators */}
      <div className="text-center space-y-2">
        <p className="text-charcoal-400 text-xs flex items-center justify-center space-x-2">
          <span>🔒</span>
          <span>Your information is secure with 256-bit encryption</span>
        </p>
        <p className="text-charcoal-500 text-xs">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </form>
  )
}