'use client'

import { useState, useEffect } from 'react'

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
    id: 'future-generations',
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

export default function EnhancedCaseStudiesSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  // Check for campaign parameter in URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const campaign = params.get('campaign')
    if (campaign && caseStudies.find(study => study.id === campaign)) {
      setActiveModal(campaign)
    }
  }, [])

  const openModal = (campaignId: string) => {
    setActiveModal(campaignId)
    // Update URL without page reload
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
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${study.gradientFrom} ${study.gradientTo} transition-all duration-300 group-hover:h-3`}></div>
              
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {study.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                {study.title}
              </h3>
              <p className="text-lg text-gray-300 mb-4 font-medium">
                {study.subtitle}
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {study.description}
              </p>
              
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
              
              <div className="grid grid-cols-3 gap-4">
                {study.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-xl font-bold text-white mb-1">{metric.number}</div>
                    <div className="text-xs text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <span className="text-green-400 font-semibold">View Details</span>
                <span className="text-green-400 text-xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
        >
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
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
            
            {/* Enhanced Modal Content with Videos and Full Case Studies */}
            {activeModal === 'sun-exchange' && (
              <div className="p-10">
                <div className="text-center mb-10 p-10 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl">
                  <h1 className="text-4xl font-bold mb-4">⚡ Sun Exchange B2B Campaign</h1>
                  <p className="text-xl opacity-90">Empowering South African Business Leaders to Solve the Energy Crisis</p>
                </div>

                {/* YouTube Video */}
                <div className="mb-10 flex justify-center">
                  <div className="w-full max-w-4xl">
                    <iframe
                      className="w-full h-64 md:h-96 rounded-2xl shadow-2xl"
                      src="https://www.youtube.com/embed/0lYXPGnWu1E"
                      title="Sun Exchange Campaign Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
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
            )}

            {activeModal === 'future-generations' && (
              <div className="p-10">
                <div className="text-center mb-10 p-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl">
                  <h1 className="text-4xl font-bold mb-4">🌍 Future Generations Film Campaign</h1>
                  <p className="text-xl opacity-90">International Impact Investment Drive</p>
                </div>

                {/* YouTube Video */}
                <div className="mb-10 flex justify-center">
                  <div className="w-full max-w-4xl">
                    <iframe
                      className="w-full h-64 md:h-96 rounded-2xl shadow-2xl"
                      src="https://www.youtube.com/embed/UpTnMv8DYwM?start=2"
                      title="Future Generations Film Campaign Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-4 border-orange-600 pb-2">Campaign Overview</h2>
                  <p className="text-lg leading-relaxed mb-5">Developed and executed an international expansion campaign targeting UK investors through documentary storytelling, leveraging founder heritage and purchase price parity to drive cross-border solar investment in South Africa.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h3 className="text-red-600 font-bold text-lg mb-4">Challenge</h3>
                      <ul className="text-gray-700 leading-relaxed space-y-2">
                        <li>• Need to expand beyond South African market limitations</li>
                        <li>• Complex cross-border investment regulatory environment</li>
                        <li>• Building trust with international investors unfamiliar with SA solar market</li>
                        <li>• Communicating impact investment opportunity effectively</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-green-600 font-bold text-lg mb-4">Solution</h3>
                      <ul className="text-gray-700 leading-relaxed space-y-2">
                        <li>• Created documentary film featuring founder's personal journey</li>
                        <li>• Emphasised currency arbitrage opportunities (PPP advantage)</li>
                        <li>• Developed trust-building narrative around heritage and authenticity</li>
                        <li>• Targeted impact-conscious investors through strategic content distribution</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-4 border-orange-600 pb-2">Results & Impact</h2>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl text-center mb-5">
                    <p className="text-xl italic">Successfully opened UK market for Sun Exchange, establishing international investor base and proving the viability of cross-border impact investment in renewable energy.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="bg-orange-50 p-5 rounded-xl text-center border-l-4 border-orange-500">
                      <div className="text-2xl font-bold text-orange-600 mb-2">£2.8M</div>
                      <div className="text-gray-600 text-sm">Investment Raised</div>
                    </div>
                    <div className="bg-orange-50 p-5 rounded-xl text-center border-l-4 border-orange-500">
                      <div className="text-2xl font-bold text-orange-600 mb-2">450K+</div>
                      <div className="text-gray-600 text-sm">Film Views</div>
                    </div>
                    <div className="bg-orange-50 p-5 rounded-xl text-center border-l-4 border-orange-500">
                      <div className="text-2xl font-bold text-orange-600 mb-2">340%</div>
                      <div className="text-gray-600 text-sm">Registration Growth</div>
                    </div>
                    <div className="bg-orange-50 p-5 rounded-xl text-center border-l-4 border-orange-500">
                      <div className="text-2xl font-bold text-orange-600 mb-2">12</div>
                      <div className="text-gray-600 text-sm">New Markets Opened</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'ciwm' && (
              <div className="p-10">
                <div className="text-center mb-10 p-10 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-2xl">
                  <h1 className="text-4xl font-bold mb-4">♻️ CIWM Sector Programmes Repositioning</h1>
                  <p className="text-xl opacity-90">Professional Development Transformation</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-teal-600 mb-4 border-b-4 border-teal-600 pb-2">Campaign Overview</h2>
                  <p className="text-lg leading-relaxed mb-5">Comprehensive repositioning of CIWM's complex training programmes into clear, market-focused professional development pathways for the £10B UK waste management sector, dramatically improving messaging clarity and conversion rates.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h3 className="text-red-600 font-bold text-lg mb-4">Challenge</h3>
                      <ul className="text-gray-700 leading-relaxed space-y-2">
                        <li>• Overly complex programme structure confusing potential members</li>
                        <li>• Industry terminology alienating newcomers to the sector</li>
                        <li>• Long sales cycles due to unclear value propositions</li>
                        <li>• Competition from newer, more agile training providers</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h3 className="text-green-600 font-bold text-lg mb-4">Solution</h3>
                      <ul className="text-gray-700 leading-relaxed space-y-2">
                        <li>• Conducted extensive market research across waste management professionals</li>
                        <li>• Simplified messaging architecture around career progression pathways</li>
                        <li>• Developed industry-specific value propositions for different sectors</li>
                        <li>• Created clear ROI frameworks for training investment decisions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-teal-600 mb-4 border-b-4 border-teal-600 pb-2">Strategic Implementation</h2>
                  <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500 mb-6">
                    <h3 className="text-teal-600 font-bold text-lg mb-4">Development Pathways Framework</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">Enhanced the CIWM Sector programmes according to different career stages and sector needs:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-teal-600 mb-2">🎯 CIWM Development pathway</h4>
                        <p className="text-sm text-gray-600">New Entrants → Practitioner → Associate → Associate membership</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-teal-600 mb-2">📈 Advanced pathway</h4>
                        <p className="text-sm text-gray-600">Supervisor → Manager → Senior Manager → Technical membership</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-teal-600 font-bold text-lg mb-4">🎯 Multi-Channel Campaign Execution</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                      <h4 className="text-blue-600 font-bold mb-3">💼 LinkedIn Direct Outreach</h4>
                      <ul className="text-gray-700 leading-relaxed space-y-1 text-sm">
                        <li>• Targeted 2,500 waste management professionals</li>
                        <li>• Personalised messaging based on career stage</li>
                        <li>• 13% connection acceptance rate</li>
                        <li>• 20 qualified conversations generated</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                      <h4 className="text-purple-600 font-bold mb-3">📧 Cold Email Campaigns</h4>
                      <ul className="text-gray-700 leading-relaxed space-y-1 text-sm">
                        <li>• 12-sequence nurture campaign</li>
                        <li>• Segmented by Company size</li>
                        <li>• 22% open rates, 8.5% click-through rates</li>
                        <li>• Generated 340+ sales leads</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h4 className="text-green-600 font-bold mb-3">🎯 Sales Enablement Materials</h4>
                      <ul className="text-gray-700 leading-relaxed space-y-1 text-sm">
                        <li>• ROI calculators for employee retention</li>
                        <li>• Industry-specific case studies</li>
                        <li>• Competitive comparison frameworks</li>
                        <li>• Shortened sales cycle by 8%</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                      <h4 className="text-orange-600 font-bold mb-3">📰 Publication Solus Emails</h4>
                      <ul className="text-gray-700 leading-relaxed space-y-1 text-sm">
                        <li>• Partnership with 2 industry publications</li>
                        <li>• Monthly sponsored newsletter content</li>
                        <li>• 25,000 total reach per campaign</li>
                        <li>• 15% average engagement rate</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-teal-600 mb-4 border-b-4 border-teal-600 pb-2">Results & Impact</h2>
                  <div className="bg-gradient-to-r from-teal-500 to-green-600 text-white p-8 rounded-2xl text-center mb-5">
                    <p className="text-xl italic">Transformed CIWM's market position from confusing academic institution to clear professional development organisation, enabling growth in competitive training market.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
                      <div className="text-2xl font-bold text-green-600 mb-2">13%</div>
                      <div className="text-gray-600 text-sm">Increase in Enquiries</div>
                    </div>
                    <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
                      <div className="text-2xl font-bold text-green-600 mb-2">5%</div>
                      <div className="text-gray-600 text-sm">Higher Conversion Rate</div>
                    </div>
                    <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
                      <div className="text-2xl font-bold text-green-600 mb-2">42%</div>
                      <div className="text-gray-600 text-sm">Shorter Sales Cycle</div>
                    </div>
                    <div className="bg-green-50 p-5 rounded-xl text-center border-l-4 border-green-500">
                      <div className="text-2xl font-bold text-green-600 mb-2">£50K</div>
                      <div className="text-gray-600 text-sm">Revenue Pipeline</div>
                    </div>
                  </div>

                  <div className="mt-8 bg-gray-100 p-6 rounded-xl">
                    <h3 className="text-gray-800 font-bold text-lg mb-4">📊 Channel Performance Breakdown</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-blue-600 font-bold text-lg">LinkedIn Direct</div>
                        <div className="text-gray-600 text-sm">35% of total leads</div>
                        <div className="text-blue-500 text-sm">Highest quality score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-purple-600 font-bold text-lg">Cold Email</div>
                        <div className="text-gray-600 text-sm">28% of total leads</div>
                        <div className="text-purple-500 text-sm">Best volume generator</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-600 font-bold text-lg">Sales Materials</div>
                        <div className="text-gray-600 text-sm">Fastest close rates</div>
                      </div>
                      <div className="text-center">
                        <div className="text-orange-600 font-bold text-lg">Publications</div>
                        <div className="text-gray-600 text-sm">15% of total leads</div>
                        <div className="text-orange-500 text-sm">Best brand awareness</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}