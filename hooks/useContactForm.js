'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { contactSchema } from '@/schemas/contactSchema'
import { servicesAPI } from '@/lib/api'

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm({
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
    
    try {
      const response = await servicesAPI.submitContact(data)
      
      toast.success('Quote Request Submitted Successfully!', {
        description: 'Our team will contact you within 30 minutes.',
        duration: 5000,
      })
      
      form.reset()
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-CONVERSION_ID',
          'value': 1.0,
          'currency': 'INR',
        })
      }
      
      return response
    } catch (error) {
      console.error('Form submission error:', error)
      
      toast.error('Submission Failed', {
        description: error.message || 'Please try again or call us directly.',
        duration: 6000,
      })
      
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  }
}