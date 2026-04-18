'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'Is Prabha Indira Special Security Agency Private Limited a PSARA-licensed agency?',
    a: 'Yes, we are fully PSARA-compliant and registered under the Companies Act 2013. Our license number is available on request.'
  },
  {
    q: 'What cities do you operate in?',
    a: 'We provide security services across Madhya Pradesh and PAN India, including Bhopal, Indore, Mumbai, Delhi, Bangalore, and 25+ other cities.'
  },
  {
    q: 'How do you verify your guards?',
    a: 'Every guard undergoes police verification, medical fitness check, previous employment reference validation, and mandatory training before deployment.'
  },
  {
    q: 'What is your response time for emergencies?',
    a: 'Our control room operates 24/7. On-ground response is initiated within 30 minutes of any escalation.'
  },
  {
    q: 'Can you deploy guards within 24 hours?',
    a: 'Yes, for urgent requirements, we can deploy verified guards within 24-48 hours.'
  },
  {
    q: 'Do you provide housekeeping and facility staff?',
    a: 'Yes, we supply trained manpower for housekeeping, pantry services, parking management, and other facility operations.'
  },
  {
    q: 'What is your billing cycle?',
    a: 'We offer flexible billing options - monthly, quarterly, or annual contracts with transparent, GST-compliant invoices.'
  },
  {
    q: 'Do you provide armed security guards?',
    a: 'Yes, we provide licensed armed security guards for high-risk environments, banks, and VIP protection after proper assessment.'
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="h-px w-12 bg-amber-500 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our security services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 bg-slate-900 rounded-lg hover:bg-slate-900/80 transition-colors text-left"
              >
                <span className="text-white font-medium">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-amber-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-slate-800/50 rounded-b-lg border-t border-amber-500/10">
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}