'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface CaseStudy {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  metrics: Array<{
    number: string
    label: string
  }>
  tags: string[]
  color: string
  gradientFrom: string
  gradientTo: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'sun-exchange',
    title: 'Sun Exchange B2B Campaign',
    subtitle: 'South African Energy Crisis Solution',
    description: 'Strategic campaign leveraging Section 12B tax incentives to position solar investments as profitable solutions to South Africa\'s energy crisis, targeting insurance companies, banks, and major retailers.',
    icon: '⚡',
    metrics: [
      { number: 'R6bn', label: 'Daily Crisis Cost' },
      { number: '250K+', label: 'Article Reach' },
      { number: '40%', label: 'Interest Increase' }
    ],
    tags: ['B2B Strategy', 'Tax Incentives', 'Energy Sector', 'Thought Leadership'],
    color: 'emerald',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-green-600'
  },
  {
    id: 'future-gen',
    title: 'Future Generations Film Campaign',
    subtitle: 'International Impact Investment Drive',
    description: 'Documentary-led campaign targeting UK investors to fund South African solar projects, leveraging purchase price parity, founder heritage, and emotional storytelling to drive cross-border investment.',
    icon: '🌍',
    metrics: [
      { number: '£2.8M', label: 'Investment Raised' },
      { number: '450K+', label: 'Film Views' },
      { number: '340%', label: 'Registration Growth' }
    ],
    tags: ['International Expansion', 'Video Content', 'Impact Investment', 'Cultural Positioning'],
    color: 'orange',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-500'
  },
  {
    id: 'ciwm',
    title: 'CIWM Sector Programmes Repositioning',
    subtitle: 'Professional Development Transformation',
    description: 'Comprehensive repositioning of complex training programmes into clear, market-focused professional development pathways for the £10B UK waste management sector.',
    icon: '♻️',
    metrics: [
      { number: '275%', label: 'Enquiry Increase' },
      { number: '65%', label: 'Higher Conversion' },
      { number: '£450K', label: 'Pipeline Value' }
    ],
    tags: ['Brand Repositioning', 'Market Research', 'B2B Training', 'Messaging Strategy'],
    color: 'teal',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-green-600'
  }
]

const campaignContent = {
  'sun-exchange': `
    <div className="p-10">
      <div className="text-center mb-10 p-10 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">⚡ Sun Exchange B2B Campaign</h1>
        <p className="text-xl opacity-90">Empowering South African Business Leaders to Solve the Energy Crisis</p>
        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold">R6bn</div>
            <div className="text-sm opacity-80">Daily Load Shedding Cost</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">12B</div>
            <div className="text-sm opacity-80">Tax Code Leveraged</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm opacity-80">Key Industries Targeted</div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 border-b-4 border-emerald-600 pb-2">Campaign Overview</h2>
        <p className="text-lg leading-relaxed mb-5">Led a strategic B2B campaign at Sun Exchange to drive renewable energy investment amongst South Africa's corporate leaders, leveraging the new Section 12B tax incentive to position solar investments as both profitable and patriotic solutions to the energy crisis.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
            <h3 className="text-red-600 font-bold text-lg mb-4">Challenge</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• South Africa facing severe energy crisis with daily load shedding costs of R1.5-6 billion</li>
              <li>• Government solutions projected to take a decade to implement</li>
              <li>• Limited awareness of Section 12B tax benefits for renewable energy investments</li>
              <li>• Corporate reluctance to move beyond traditional CSR approaches</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-green-600 font-bold text-lg mb-4">Solution</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Developed targeted campaign focusing on profit-driven sustainability</li>
              <li>• Leveraged Section 12B tax incentives as key value proposition</li>
              <li>• Created thought leadership content positioning business leaders as solution enablers</li>
              <li>• Demonstrated ROI through real case studies and financial projections</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4 border-b-4 border-emerald-600 pb-2">Results & Impact</h2>
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-8 rounded-2xl text-center mb-5">
          <p className="text-xl italic">Successfully positioned Sun Exchange as the go-to platform for corporate renewable energy investment, demonstrating how strategic marketing can drive both business growth and societal impact.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">250K+</div>
            <div className="text-gray-600 text-sm">Article Readership</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600 text-sm">C-Suite Inquiries</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">40%</div>
            <div className="text-gray-600 text-sm">Increase in Corporate Interest</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">R2.5M</div>
            <div className="text-gray-600 text-sm">Pipeline Generated</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-2xl">
        <h3 className="text-yellow-400 font-bold text-xl mb-4">📰 Daily Maverick Feature Article</h3>
        <p className="mb-4"><strong>"South Africa's Business Leaders Can Solve the Energy Crisis"</strong></p>
        <p className="mb-5">Authored compelling thought leadership piece that became the centrepiece of our campaign, reaching decision-makers across target industries with data-driven arguments for renewable energy investment.</p>
        <p className="mb-4"><strong>Key Message Points:</strong></p>
        <ul className="ml-5 leading-relaxed space-y-1">
          <li>• If top 10 SA companies invested just 1% of profits in solar, every school could be solar-powered by 2025</li>
          <li>• Companies prioritising sustainability see up to 60% improvement in operating profits</li>
          <li>• Demonstrated real ROI through Cars.co.za case study - 90,000L diesel replacement annually</li>
        </ul>
      </div>
    </div>
  `,
  'future-gen': `
    <div className="p-10">
      <div className="text-center mb-10 p-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">🌍 Future Generations Film Campaign</h1>
        <p className="text-xl opacity-90">Connecting International Investors with South African Solar Impact</p>
        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold">🇬🇧</div>
            <div className="text-sm opacity-80">Primary Target Market</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">3:1</div>
            <div className="text-sm opacity-80">PPP Advantage Ratio</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">ESG</div>
            <div className="text-sm opacity-80">Investment Focus</div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-4 border-orange-600 pb-2">Campaign Overview</h2>
        <p className="text-lg leading-relaxed mb-5">Developed and executed an international market expansion campaign targeting UK investors through emotionally compelling storytelling, leveraging purchase price parity advantages and the founder's British heritage to drive cross-border solar investment in South African communities.</p>
        
        <div className="bg-green-600 text-white p-8 rounded-2xl mb-5">
          <h3 className="font-bold text-xl mb-4">💰 Currency Advantage Positioning</h3>
          <p className="mb-5">Leveraged the significant purchasing power advantage of the British Pound against the South African Rand to make solar investments extraordinarily accessible to UK investors.</p>
          <div className="flex justify-around items-center my-5 flex-wrap gap-5">
            <div className="bg-white bg-opacity-20 p-4 rounded-xl text-center">
              <div className="text-xl font-bold">£100</div>
              <div className="text-sm opacity-90">UK Investment</div>
            </div>
            <div className="text-2xl">≈</div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl text-center">
              <div className="text-xl font-bold">R1,800</div>
              <div className="text-sm opacity-90">SA Solar Purchase Power</div>
            </div>
            <div className="text-2xl">=</div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl text-center">
              <div className="text-xl font-bold">3x</div>
              <div className="text-sm opacity-90">Value Multiplier</div>
            </div>
          </div>
          <p><strong>Key Message:</strong> "Your £50 can power a South African classroom for years - creating meaningful impact whilst generating returns in a stronger currency."</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-4 border-orange-600 pb-2">Results & Impact</h2>
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl text-center mb-5">
          <p className="text-xl italic">Successfully opened the UK market for Sun Exchange, demonstrating how strategic cultural positioning and compelling storytelling can drive international impact investment at scale.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">450K+</div>
            <div className="text-gray-600 text-sm">Film Views</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">£2.8M</div>
            <div className="text-gray-600 text-sm">Investment Attracted</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">340%</div>
            <div className="text-gray-600 text-sm">Registration Growth</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">15</div>
            <div className="text-gray-600 text-sm">Schools Powered</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">3,200</div>
            <div className="text-gray-600 text-sm">Students Impacted</div>
          </div>
        </div>
      </div>
    </div>
  `,
  'ciwm': `
    <div className="p-10">
      <div className="text-center mb-10 p-10 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">♻️ CIWM Sector Programmes Repositioning</h1>
        <p className="text-xl opacity-90">Transforming Complex Training into Market-Ready Professional Development</p>
        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold">£10B</div>
            <div className="text-sm opacity-80">UK Waste Market Size</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">5,329</div>
            <div className="text-sm opacity-80">UK Waste Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">18%</div>
            <div className="text-sm opacity-80">Untrained Workforce</div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-teal-600 mb-4 border-b-4 border-teal-600 pb-2">Strategic Repositioning Challenge</h2>
        <p className="text-lg leading-relaxed mb-5">Led the comprehensive repositioning of CIWM's Sector Programmes to transform them from complex, poorly understood training offerings into clear, market-focused professional development pathways that directly address industry pain points.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
            <h3 className="text-red-600 font-bold text-lg mb-4">🎯 Market Challenge</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Complex programme structure with unclear value proposition</li>
              <li>• Poor market comprehension of training benefits</li>
              <li>• 18% of workforce lacking qualifications creating skills gap</li>
              <li>• Difficulty differentiating from generic training providers</li>
              <li>• No clear connection between training and business outcomes</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-green-600 font-bold text-lg mb-4">💡 Strategic Solution</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• Market research to identify ideal customer profiles</li>
              <li>• Repositioned programmes around business outcomes</li>
              <li>• Created clear segmentation for different company sizes</li>
              <li>• Developed compelling ROI-focused messaging</li>
              <li>• Built targeted go-to-market strategy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-teal-600 mb-4 border-b-4 border-teal-600 pb-2">Results & Market Response</h2>
        <div className="bg-gradient-to-r from-teal-500 to-green-600 text-white p-8 rounded-2xl text-center mb-5">
          <p className="text-xl italic">Successfully transformed CIWM's Sector Programmes from misunderstood training courses into clearly positioned professional development solutions that directly address market needs and drive business outcomes.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">275%</div>
            <div className="text-gray-600 text-sm">Increase in Enquiries</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">65%</div>
            <div className="text-gray-600 text-sm">Higher Conversion Rate</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">85%</div>
            <div className="text-gray-600 text-sm">Message Clarity Score</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">42%</div>
            <div className="text-gray-600 text-sm">Shorter Sales Cycle</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">£450K</div>
            <div className="text-gray-600 text-sm">Revenue Pipeline</div>
          </div>
          <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2">12</div>
            <div className="text-gray-600 text-sm">Local Authority Clients</div>
          </div>
        </div>
      </div>
    </div>
  `
}

export default function EnhancedCaseStudiesSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Check for campaign parameter in URL on load
  useEffect(() => {
    const campaign = searchParams.get('campaign')
    if (campaign && caseStudies.find(study => study.id === campaign)) {
      setActiveModal(campaign)
    }
  }, [searchParams])

  const openModal = (campaignId: string) => {
    setActiveModal(campaignId)
    // Update URL without navigation
    const url = new URL(window.location.href)
    url.searchParams.set('campaign', campaignId)
    window.history.pushState({}, '', url.toString())
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    // Remove campaign parameter from URL
    const url = new URL(window.location.href)
    url.searchParams.delete('campaign')
    window.history.pushState({}, '', url.toString())
    document.body.style.overflow = 'auto'
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    
    if (activeModal) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [activeModal])

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-emerald-950 to-green-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 text-6xl text-green-400">📊</div>
        <div className="absolute bottom-20 left-10 text-4xl text-emerald-400">📈</div>
        <div className="absolute top-1/2 left-1/4 text-3xl text-teal-400">💡</div>
        <div className="absolute top-1/3 right-1/4 text-5xl text-green-300">🎯</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Strategic Campaign
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep-dive analyses of transformational marketing campaigns that delivered measurable business impact across diverse industries and markets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              onClick={() => openModal(study.id)}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${study.gradientFrom} ${study.gradientTo} transition-all duration-300 group-hover:h-3`}></div>
              
              {/* Icon */}
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {study.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                {study.title}
              </h3>
              <p className="text-lg text-gray-300 mb-4 font-medium">
                {study.subtitle}
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {study.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${study.gradientFrom} ${study.gradientTo} transition-transform duration-200 hover:scale-105`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className={`text-xl font-bold text-${study.color}-400 mb-1`}>
                      {metric.number}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r ${study.gradientFrom} ${study.gradientTo} transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group-hover:gap-3`}>
                Explore Campaign
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 opacity-0 animate-fadeIn"
          style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
        >
          <div 
            className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl transform scale-95 animate-scaleIn"
            style={{ animation: 'scaleIn 0.3s ease-out forwards' }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-gray-900">
                {caseStudies.find(study => study.id === activeModal)?.title}
              </h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl text-gray-500">&times;</span>
              </button>
            </div>
            
            {/* Modal Content */}
            <div 
              dangerouslySetInnerHTML={{ 
                __html: campaignContent[activeModal as keyof typeof campaignContent] || '' 
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  )
}