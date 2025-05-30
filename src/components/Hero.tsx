'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements - nature-inspired */}
      <div className="absolute inset-0">
        {/* Floating leaves/particles */}
        <div className="absolute top-20 left-10 text-4xl text-green-400 opacity-30 animate-float">🍃</div>
        <div className="absolute top-40 right-20 text-3xl text-emerald-300 opacity-40 animate-float" style={{animationDelay: '1s'}}>🌿</div>
        <div className="absolute bottom-40 left-20 text-5xl text-teal-400 opacity-25 animate-float" style={{animationDelay: '2s'}}>🌱</div>
        <div className="absolute top-60 left-1/3 text-2xl text-green-300 opacity-35 animate-float" style={{animationDelay: '3s'}}>🍃</div>
        <div className="absolute bottom-60 right-1/4 text-4xl text-emerald-400 opacity-30 animate-float" style={{animationDelay: '4s'}}>🌿</div>
        
        {/* Organic floating shapes */}
        <div className="absolute top-32 right-1/3 w-20 h-20 bg-green-400 opacity-10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-emerald-300 opacity-5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-teal-400 opacity-15 rounded-full blur-lg animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Mountain silhouettes at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 200" className="w-full h-auto text-green-900 opacity-60">
          <path d="M0,200 L0,100 L200,50 L400,80 L600,40 L800,70 L1000,30 L1200,60 L1200,200 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Sun symbol */}
      <div className="absolute top-20 right-20 text-6xl text-yellow-400 opacity-40">☀️</div>

      <div className={`relative z-10 text-center px-8 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Benjamin
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 animate-pulse">
            Vink
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
          Passionate about sustainable growth • Driving marketing strategies that create positive impact for businesses and the planet
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <button
            onClick={() => scrollToSection('results')}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:from-green-400 hover:to-emerald-500 hover:scale-105 hover:shadow-2xl shadow-green-500/25"
          >
            Explore My Impact
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
          
          <Link 
            href="/blog"
            className="px-8 py-4 border-2 border-green-300 text-green-100 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-400 hover:text-green-900 hover:scale-105 hover:border-green-400"
          >
            Read My Blog
          </Link>
          
          <Link 
            href="/growth-game"
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:from-emerald-500 hover:to-teal-500 hover:scale-105 hover:shadow-2xl shadow-emerald-500/25"
          >
            🎮 Play Growth Game
          </Link>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-green-300 text-green-100 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-400 hover:text-green-900 hover:scale-105 hover:border-green-400"
          >
            Let&apos;s Collaborate
          </button>
        </div>
      </div>
    </section>
  )
}