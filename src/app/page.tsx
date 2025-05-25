import Hero from '@/components/Hero'
import MetricsSection from '@/components/MetricsSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}