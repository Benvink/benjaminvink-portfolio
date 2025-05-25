'use client'

import { useState, useEffect } from 'react'

interface CaseStudy {
  id: string
  title: string
  company: string
  industry: string
  challenge: string
  solution: string[]
  results: {
    metric: string
    description: string
  }[]
  timeline: string
  technologies: string[]
  bgGradient: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'sun-exchange',
    title: 'Scaling a FinTech Platform 823%',
    company: 'Sun Exchange',
    industry: 'FinTech • Sustainability',
    challenge: 'Sun Exchange needed to rapidly scale their renewable energy investment platform while building market awareness in a complex financial sector.',
    solution: [
      'Developed comprehensive full-funnel growth strategy',
      'Built and managed cross-functional team (designers, PPC specialists, content writers)',
      'Implemented multi-channel paid media campaigns across Google, Meta, and LinkedIn',
      'Created customer-centric landing pages with conversion optimization',
      'Executed targeted email marketing and social media strategies'
    ],
    results: [
      { metric: '823%', description: 'Platform growth through integrated marketing approach' },
      { metric: '413%', description: 'User base increase via optimized landing pages' },
      { metric: '$103K', description: 'Revenue increase in first year' },
      { metric: '28%', description: 'Improvement in repeat buyer behavior' }
    ],
    timeline: 'April 2020 - March 2023',
    technologies: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Email Automation', 'Landing Page Optimization'],
    bgGradient: 'from-green-500 via-emerald-600 to-teal-600'
  },
  {
    id: 'blackbullion',
    title: 'EdTech App Launch & Growth',
    company: 'Blackbullion',
    industry: 'EdTech • Financial Education',
    challenge: 'Launch a new budgeting app in the competitive EdTech space while transitioning from B2B to D2C model.',
    solution: [
      'Created comprehensive go-to-market strategy for budgeting app',
      'Collaborated with cross-functional teams (engineers, designers)',
      'Implemented data-driven user acquisition strategies',
      'Developed customer engagement strategies aligned with D2C commercialization',
      'Created automated CRM workflows to guide users through buyer journey'
    ],
    results: [
      { metric: '83%', description: 'User satisfaction rating for the budgeting app' },
      { metric: '20%', description: 'Increase in daily active users' },
      { metric: '15%', description: 'Growth in overall user base' },
      { metric: '$18K', description: 'ARR growth from content marketing initiatives' }
    ],
    timeline: 'April 2023 - January 2024',
    technologies: ['Mixpanel', 'CRM Automation', 'Content Marketing', 'User Analytics', 'A/B Testing'],
    bgGradient: 'from-teal-500 via-cyan-600 to-blue-500'
  },
  {
    id: 'ciwm',
    title: 'Sales Cycle Transformation',
    company: 'CIWM',
    industry: 'Professional Training • Sustainability',
    challenge: 'Lengthy 6-month sales cycles were hindering growth, and the training product needed stronger market presence.',
    solution: [
      'Developed comprehensive go-to-market strategies for training portfolio',
      'Created enhanced sales materials and collateral',
      'Executed targeted marketing tactics for brand presence',
      'Led end-to-end website migration project under budget',
      'Implemented Circular Economy marketing strategies'
    ],
    results: [
      { metric: '75%', description: 'Sales cycle reduction (6 months to 2 months)' },
      { metric: '£60K', description: 'Revenue from Circular Economy strategies' },
      { metric: '£10K', description: 'Website migration delivered under budget' },
      { metric: '2 weeks', description: 'Project delivered ahead of schedule' }
    ],
    timeline: 'April 2024 - Present',
    technologies: ['Salesforce', 'Content Strategy', 'Website Migration', 'Sales Enablement'],
    bgGradient: 'from-emerald-500 via-green-600 to-lime-600'
  }
]

const CaseStudyCard = ({ study, isActive, onClick }: { 
  study: CaseStudy
  isActive: boolean
  onClick: () => void 
}) => {
  return (
    <div 
      className={`cursor-pointer transition-all duration-500 ${
        isActive 
          ? 'transform scale-105' 
          : 'hover:scale-102 opacity-80 hover:opacity-100'
      }`}
      onClick={onClick}
    >
      <div className={`bg-gradient-to-r ${study.bgGradient} p-6 rounded-2xl text-white shadow-2xl relative overflow-hidden`}>
      {/* Industry icons */}
      <div className="absolute top-2 right-2 text-2xl opacity-40">
        {study.industry.includes('FinTech') && '💰'}
        {study.industry.includes('EdTech') && '📚'}
        {study.industry.includes('Training') && '🎓'}
      </div>
        <div className="text-xs font-semibold mb-2 opacity-90">{study.industry}</div>
        <h3 className="text-xl font-bold mb-2">{study.title}</h3>
        <p className="text-sm opacity-90 mb-4">{study.company}</p>
        <div className="flex flex-wrap gap-2">
          {study.results.slice(0, 2).map((result, idx) => (
            <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
              {result.metric}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const CaseStudyDetail = ({ study }: { study: CaseStudy }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [study.id])

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
        <div className="mb-6 relative">
          <div className="absolute -top-2 -left-2 text-3xl opacity-20">🎯</div>
          <div className="text-sm text-gray-400 mb-2">{study.timeline}</div>
          <h2 className="text-3xl font-bold text-white mb-2">{study.title}</h2>
          <p className="text-lg text-gray-300">{study.company} • {study.industry}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <div className="absolute -top-3 -left-3 text-2xl opacity-30">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
            <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
          </div>
          
          <div className="relative">
            <div className="absolute -top-3 -left-3 text-2xl opacity-30">📈</div>
            <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
            <div className="grid grid-cols-2 gap-4">
              {study.results.map((result, idx) => (
                <div key={idx} className="text-center relative">
                  <div className="text-2xl font-bold text-white mb-1">{result.metric}</div>
                  <div className="text-xs text-gray-400 leading-tight">{result.description}</div>
                  {idx === 0 && <div className="absolute -top-2 -right-2 text-lg opacity-40">🚀</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 relative">
          <div className="absolute -top-3 -left-3 text-2xl opacity-30">💡</div>
          <h3 className="text-xl font-semibold text-white mb-4">Solution & Strategy</h3>
          <div className="space-y-3">
            {study.solution.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1 flex-shrink-0 flex items-center justify-center text-xs">
                  {idx === 0 && '🎯'}
                  {idx === 1 && '👥'}
                  {idx === 2 && '📊'}
                  {idx === 3 && '🚀'}
                  {idx === 4 && '⚡'}
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-3 -left-3 text-2xl opacity-30">🛠️</div>
          <h3 className="text-xl font-semibold text-white mb-4">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-600 relative"
              >
                {tech}
                {idx === 0 && <span className="absolute -top-1 -right-1 text-xs opacity-60">⚡</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0])

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-emerald-950 to-green-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 text-8xl text-green-400">🌿</div>
        <div className="absolute bottom-20 right-20 text-6xl text-emerald-400">📊</div>
        <div className="absolute top-1/2 right-10 text-4xl text-teal-400">🚀</div>
        <div className="absolute top-1/4 left-1/3 text-5xl text-green-300">💡</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Deep Dive Results
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Detailed breakdowns of my most impactful marketing campaigns and growth strategies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              isActive={activeStudy.id === study.id}
              onClick={() => setActiveStudy(study)}
            />
          ))}
        </div>

        <CaseStudyDetail study={activeStudy} />
      </div>
    </section>
  )
}