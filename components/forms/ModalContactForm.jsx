'use client'

import { useState, useEffect } from 'react'
import { X, Phone, Mail } from 'lucide-react'
import ContactFormHandler from './ContactFormHandler'

export default function ModalContactForm({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  
  useEffect(() => {
    setIsModalOpen(isOpen)
    
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  if (!isModalOpen) return null
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl max-w-2xl w-full shadow-2xl border border-gold-500/20 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-charcoal-400 hover:text-gold-500 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Header */}
          <div className="p-6 border-b border-gold-500/20">
            <h2 className="text-2xl font-bold text-white">Request a Quote</h2>
            <p className="text-charcoal-300 mt-1">
              Fill out the form and our team will contact you within 30 minutes
            </p>
          </div>
          
          {/* Body */}
          <div className="p-6">
            <ContactFormHandler />
          </div>
          
          {/* Footer with Contact Info */}
          <div className="p-6 bg-navy-950/50 rounded-b-2xl border-t border-gold-500/10">
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              {/* <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 text-charcoal-300 hover:text-gold-500 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a> */}
              <a
                href="mailto:prabhaindira247@gmail.com"
                className="flex items-center justify-center space-x-2 text-charcoal-300 hover:text-gold-500 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>prabhaindira247@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}