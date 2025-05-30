'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:from-emerald-500 hover:to-teal-500 hover:scale-105 hover:shadow-2xl shadow-emerald-500/25 relative group"
  >
    🎮 Play Growth Game
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
  </Link>
  
  <button
    onClick={() => scrollToSection('contact')}
    className="px-8 py-4 border-2 border-green-300 text-green-100 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-400 hover:text-green-900 hover:scale-105 hover:border-green-400"
  >
    Let&apos;s Collaborate
  </button>
</div>
function scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Section with id "${sectionId}" not found.`);
    }
}
