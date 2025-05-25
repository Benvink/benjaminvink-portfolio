'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements - nature-inspired */}
      <div className="absolute inset-0">
        {/* Floating leaves/particles */}
        {mounted && [...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {/* Leaf shapes */}
            {i % 4 === 0 && <div className="text-green-300 opacity-60 text-lg">🍃</div>}
            {i % 4 === 1 && <div className="w-3 h-3 bg-green-300 opacity-50 rounded-full transform rotate-45"></div>}
            {i % 4 === 2 && <div className="text-emerald-300 opacity-40 text-sm">🌿</div>}
            {i % 4 === 3 && <div className="w-2 h-4 bg-gradient-to-t from-green-400 to-emerald-300 opacity-60 rounded-full"></div>}
          </div>
        ))}
        
        {/* Mountain silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path d="M0,120 L0,80 L200,20 L400,60 L600,10 L800,50 L1000,30 L1200,70 L1200,120 Z" fill="currentColor" className="text-green-800"/>
          </svg>
        </div>
        
        {/* Organic shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-r from-teal-400/10 to-green-600/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Sun/energy symbol */}
        <div className="absolute top-10 left-10 text-yellow-300 opacity-30 text-4xl animate-pulse">☀️</div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Benjamin
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Vink
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about sustainable growth • Driving marketing strategies that create positive impact for businesses and the planet 🌱
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('results')}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:from-green-400 hover:to-emerald-500 hover:scale-105 hover:shadow-2xl shadow-green-500/25"
            >
              🚀 Explore My Impact
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-green-300 text-green-100 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-400 hover:text-green-900 hover:scale-105 hover:border-green-400"
            >
              🌿 Let&apos;s Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}