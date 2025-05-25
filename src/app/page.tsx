import Hero from '@/components/Hero'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import ContactSection from '@/components/ContactSection'
import MetricsSection from '@/components/MetricsSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsSection />
      <CaseStudiesSection />
      <ContactSection />
    
    </main>
  )
}