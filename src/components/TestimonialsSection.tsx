'use client'

import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "Ben delivered exceptional results during his time with us. His data-driven approach to growth marketing helped us achieve 800%+ platform growth. A strategic thinker who gets things done.",
    name: "Abe Cambridge",
    title: "Founder & CEO",
    company: "Sun Exchange",
    bgGradient: "from-green-500 to-emerald-600"
  },
  {
    quote: "Working with Ben was transformative for our marketing efforts. He didn't just implement campaigns—he built a comprehensive growth strategy that increased our user base by over 400%. His passion for sustainable business practices aligned perfectly with our mission.",
    name: "Kath Sharfman",
    title: "CMO",
    company: "Sun Exchange",
    bgGradient: "from-teal-500 to-cyan-600"
  },
  {
    quote: "Ben has a rare combination of strategic thinking and hands-on execution. During our time together, he shortened our sales cycle from 6 months to 2 months while maintaining quality leads. His enthusiasm for green technology and sustainability made him a perfect cultural fit. I'd work with him again in a heartbeat.",
    name: "Stephan Maier",
    title: "Cofounder & CMO",
    company: "Impraise",
    bgGradient: "from-emerald-500 to-green-600"
  }
]

const TestimonialCard = ({ 
  testimonial, 
  delay 
}: { 
  testimonial: typeof testimonials[0]
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

  return (
    <div 
      ref={cardRef}
      className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-4xl opacity-20">💬</div>
      
      {/* Quote */}
      <div className="text-lg text-gray-200 leading-relaxed mb-6 relative z-10">
        &ldquo;{testimonial.quote}&rdquo;
      </div>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.bgGradient} flex items-center justify-center text-white font-bold text-lg`}>
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="text-white font-semibold text-lg">{testimonial.name}</div>
          <div className="text-gray-400 text-sm">{testimonial.title}</div>
          <div className="text-gray-500 text-sm">{testimonial.company}</div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.bgGradient}`}></div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-green-900 to-emerald-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl text-green-400">⭐</div>
        <div className="absolute bottom-20 right-10 text-5xl text-emerald-400">💬</div>
        <div className="absolute top-1/2 right-1/4 text-4xl text-teal-400">✨</div>
        <div className="absolute bottom-1/3 left-1/4 text-7xl text-green-300">🎯</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Colleagues
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Say About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Testimonials from leaders I&apos;ve worked with across different industries and companies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <span className="text-2xl">🌟</span>
            <span>Trusted by industry leaders</span>
            <span className="text-2xl">🌟</span>
          </div>
        </div>
      </div>
    </section>
  )
}