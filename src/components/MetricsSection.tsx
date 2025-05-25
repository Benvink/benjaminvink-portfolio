'use client'

import { useState, useEffect, useRef } from 'react'

const MetricCard = ({ 
  metric, 
  description, 
  company, 
  category,
  delay 
}: {
  metric: string
  description: string
  company: string
  category: string
  delay: number
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'growth': return 'from-green-500 to-emerald-600'
      case 'revenue': return 'from-teal-500 to-cyan-600'
      case 'efficiency': return 'from-lime-500 to-green-600'
      case 'engagement': return 'from-emerald-500 to-teal-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div 
      ref={cardRef}
      className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden flex-shrink-0 w-80 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-100'
      }`}
    >
      <div className="absolute top-4 right-4 text-2xl opacity-30">
        {category === 'growth' && '📈'}
        {category === 'revenue' && '💰'}
        {category === 'efficiency' && '⚡'}
        {category === 'engagement' && '🎯'}
      </div>

      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(category)} mb-4`}>
        {category.toUpperCase()}
      </div>
      
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {metric}
      </div>
      
      <p className="text-gray-300 mb-3 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="text-xs text-gray-400 font-medium">
        {company}
      </div>
    </div>
  )
}

export default function MetricsSection() {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-green-900 to-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 text-6xl text-green-400">🌳</div>
        <div className="absolute bottom-20 left-10 text-4xl text-emerald-400">🌱</div>
        <div className="absolute top-1/2 left-1/4 text-3xl text-teal-400">💚</div>
        <div className="absolute top-1/3 right-1/4 text-5xl text-green-300">🍃</div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results That 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Drive Growth
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            15+ years of transforming marketing strategies into measurable business outcomes across SaaS, FinTech, and B2B
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative z-10 overflow-hidden">
          <div className="flex animate-scroll gap-6 w-max">
            {/* First set of cards */}
            <MetricCard
              metric="823%"
              description="Platform growth achieved through comprehensive paid media, social media, and email strategies"
              company="Sun Exchange"
              category="growth"
              delay={0}
            />
            <MetricCard
              metric="413%"
              description="User base increase through optimized landing pages designed to activate customers"
              company="Sun Exchange"
              category="growth"
              delay={0}
            />
            <MetricCard
              metric="$103K"
              description="Revenue increase in first year through customer engagement strategies and 28% repeat buyer growth"
              company="Sun Exchange"
              category="revenue"
              delay={0}
            />
            <MetricCard
              metric="83%"
              description="User satisfaction rating for Blackbullion budgeting app go-to-market strategy"
              company="Blackbullion"
              category="engagement"
              delay={0}
            />
            <MetricCard
              metric="75%"
              description="Sales cycle reduction from 6 months to 2 months through enhanced sales materials"
              company="CIWM"
              category="efficiency"
              delay={0}
            />
            <MetricCard
              metric="£60K"
              description="Revenue contribution through executed Circular Economy marketing strategies"
              company="CIWM"
              category="revenue"
              delay={0}
            />
            <MetricCard
              metric="28%"
              description="Increase in Sales Qualified Leads through digital acquisition and content strategies"
              company="Impraise"
              category="growth"
              delay={0}
            />
            <MetricCard
              metric="20%"
              description="Daily active user increase through data-driven acquisition strategies"
              company="Blackbullion"
              category="engagement"
              delay={0}
            />
            <MetricCard
              metric="$18K"
              description="ARR growth through content collaboration resulting in 18% increase in new buyer activity"
              company="Sun Exchange"
              category="revenue"
              delay={0}
            />
            
            {/* Duplicate set for seamless loop */}
            <MetricCard
              metric="823%"
              description="Platform growth achieved through comprehensive paid media, social media, and email strategies"
              company="Sun Exchange"
              category="growth"
              delay={0}
            />
            <MetricCard
              metric="413%"
              description="User base increase through optimized landing pages designed to activate customers"
              company="Sun Exchange"
              category="growth"
              delay={0}
            />
            <MetricCard
              metric="$103K"
              description="Revenue increase in first year through customer engagement strategies and 28% repeat buyer growth"
              company="Sun Exchange"
              category="revenue"
              delay={0}
            />
            <MetricCard
              metric="83%"
              description="User satisfaction rating for Blackbullion budgeting app go-to-market strategy"
              company="Blackbullion"
              category="engagement"
              delay={0}
            />
            <MetricCard
              metric="75%"
              description="Sales cycle reduction from 6 months to 2 months through enhanced sales materials"
              company="CIWM"
              category="efficiency"
              delay={0}
            />
            <MetricCard
              metric="£60K"
              description="Revenue contribution through executed Circular Economy marketing strategies"
              company="CIWM"
              category="revenue"
              delay={0}
            />
            <MetricCard
              metric="28%"
              description="Increase in Sales Qualified Leads through digital acquisition and content strategies"
              company="Impraise"
              category="growth"
              delay={0}
            />
            <MetricCard
              metric="20%"
              description="Daily active user increase through data-driven acquisition strategies"
              company="Blackbullion"
              category="engagement"
              delay={0}
            />
            <MetricCard
              metric="$18K"
              description="ARR growth through content collaboration resulting in 18% increase in new buyer activity"
              company="Sun Exchange"
              category="revenue"
              delay={0}
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-gray-300">Years Experience</div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-gray-300">Industries</div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-2xl font-bold text-white">100+</div>
            <div className="text-gray-300">Campaigns</div>
          </div>
        </div>
      </div>
    </section>
  )
}