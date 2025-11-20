'use client'

import { useState } from 'react'
import Header from '@/components/header'
import About from '@/components/about'
import Footer from '@/components/footer'

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-foreground/5" />
        <div className="absolute top-1/4 -right-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage="about"
      />
      
      <main className="pt-16 lg:pt-24">
        {/* Enhanced Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Learn more about Express and our commitment to excellence
            </p>
          </div>
        </div>

        {/* Enhanced About Container */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-foreground/5 rounded-3xl border border-foreground/10 p-8 lg:p-12 backdrop-blur-sm">
              <About />
            </div>
          </div>
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-24 h-1 bg-gradient-to-r from-transparent via-foreground/20 to-transparent rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-24 h-1 bg-gradient-to-r from-transparent via-foreground/20 to-transparent rounded-full" />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}