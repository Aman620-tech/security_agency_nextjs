import HeroSection from '@/components/sections/HeroSection'
import ClientLogos from '@/components/sections/ClientLogos'
import AboutSection from '@/components/sections/AboutSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import TrustSignals from '@/components/sections/TrustSignals'
import Testimonials from '@/components/sections/Testimonials'
import FaqSection from '@/components/sections/FaqSection'
import ContactForm from '@/components/sections/ContactForm'

export const metadata = {
  title: 'Security Guard Services in India | Prabha Indira Special Security Agency Private Limited Agency',
  description: 'Prabha Indira Special Security Agency Private Limited Agency offers trusted security guard services, residential security, industrial security solutions & manpower services across India. PSARA licensed. 24/7 support.',
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <ServicesGrid />
      <TrustSignals />
      <Testimonials />
      <FaqSection />
      <ContactForm />
    </main>
    
  )
}