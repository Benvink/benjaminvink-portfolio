import Hero from '@/components/Hero'
import MetricsSection from '@/components/MetricsSection'
import EnhancedCaseStudiesSection from '@/components/EnhancedCaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsSection />
      <EnhancedCaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}