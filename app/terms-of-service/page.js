import Link from 'next/link'
import { Shield, Calendar, Mail, Phone, MapPin, FileText, Scale } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | Prabha Indira Special Security Agency Private Limited Agency',
  description: 'Read our terms of service to understand the terms and conditions for using our security services.',
}

export default function TermsOfServicePage() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <Scale className="h-16 w-16 text-amber-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of <span className="text-amber-500">Service</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Please read these terms carefully before using our services.
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20">
              <Calendar className="h-4 w-4 text-amber-500" />
              <span className="text-gray-300 text-sm">Effective Date: {currentDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-amber-500/10">
              
              <div className="space-y-8">
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing and using the services of Prabha Indira Special Security Agency Private Limited Agency Private Limited., you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We provide security guard services, manpower solutions, CCTV surveillance, and related security services. Specific terms for each service will be outlined in individual service agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Client Obligations</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Clients agree to:
                  </p>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>Provide accurate information about their security requirements</li>
                    <li>Ensure safe working conditions for our personnel</li>
                    <li>Make timely payments as per agreed terms</li>
                    <li>Notify us immediately of any security concerns</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Payment terms will be specified in individual service agreements. Late payments may incur additional charges as outlined in the agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Prabha Indira Special Security Agency Private Limited Agency shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, to the maximum extent permitted by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Service Modifications</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to modify or discontinue services at any time, with reasonable notice to clients.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
                  <p className="text-gray-300 leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi.
                  </p>
                </div>

                {/* Contact Section */}
                <div className="mt-10 p-6 bg-slate-900 rounded-xl border border-amber-500/20">
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-3">
                    {/* <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-amber-500" />
                      <a href="tel:+919876543210" className="text-gray-300 hover:text-amber-500">+91 98765 43210</a>
                    </div> */}
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-amber-500" />
                      <a href="mailto:prabhaindira247@gmail.com" className="text-gray-300 hover:text-amber-500">prabhaindira247@gmail.com</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span className="text-gray-300">123, Security House, MG Road, New Delhi - 110001, India</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-8">
              <Link href="/" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}