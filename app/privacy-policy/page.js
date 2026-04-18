import Link from 'next/link'
import { Shield, Calendar, Mail, Phone, MapPin, Lock, Eye, FileText, Globe } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Prabha Indira Special Security Agency Private Limited Agency',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-amber-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-amber-500">Policy</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Prabha Indira Special Security Agency Private Limited Agency Private Limited. is committed to protecting the privacy and confidentiality of all clients, employees, and website users.
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
              
              <div className="prose prose-invert max-w-none">
                
                {/* Section 1 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <span className="text-amber-500 font-bold text-xl">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may collect the following information:
                  </p>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>Personal details such as name, phone number, email address, and company name</li>
                    <li>Service-related details including security requirements and service preferences</li>
                    <li>Technical data such as IP address, browser type, and usage data</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <span className="text-amber-500 font-bold text-xl">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Use of Information</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Your information is used for:
                  </p>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>Responding to inquiries and providing quotations</li>
                    <li>Delivering security and manpower services</li>
                    <li>Improving our services and website performance</li>
                    <li>Internal record-keeping and communication</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-amber-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Data Protection</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate security measures to protect your data, including restricted access, secure storage systems, and regular monitoring.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-amber-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Information Sharing</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell or rent your personal information. Information may only be shared:
                  </p>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>When required by law</li>
                    <li>With trusted partners for service delivery under confidentiality obligations</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-amber-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Cookies</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Our website may use cookies to enhance user experience and analyze website traffic. Users can manage cookie preferences through their browser settings.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-amber-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Your Rights</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You may:
                  </p>
                  <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                    <li>Request access to your personal data</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your data, subject to legal requirements</li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <span className="text-amber-500 font-bold text-xl">7</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Third-Party Links</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Our website may contain links to external websites. We are not responsible for their privacy practices.
                  </p>
                </div>

                {/* Section 8 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <span className="text-amber-500 font-bold text-xl">8</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Updates to This Policy</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    This Privacy Policy may be updated periodically. Changes will be reflected on this page with an updated effective date.
                  </p>
                </div>

                {/* Section 9 - Contact */}
                <div className="mt-10 p-6 bg-slate-900 rounded-xl border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-amber-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    For any privacy-related concerns, please contact:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-amber-500" />
                      <span className="text-white font-semibold">Prabha Indira Special Security Agency Private Limited Agency Private Limited.</span>
                    </div>
                    {/* <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-amber-500" />
                      <a href="tel:+919876543210" className="text-gray-300 hover:text-amber-500 transition-colors">
                        +91 98765 43210
                      </a>
                    </div> */}
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-amber-500" />
                      <a href="mailto:info@prabhaindirasecurity.com" className="text-gray-300 hover:text-amber-500 transition-colors">
                        info@prabhaindirasecurity.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span className="text-gray-300">
                        123, Security House, MG Road, New Delhi - 110001, India
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-8">
              <Link href="/" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}