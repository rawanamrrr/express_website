'use client'

import { useState } from 'react'
import Header from '@/components/header'
import About from '@/components/about'
import Footer from '@/components/footer'

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage="about"
      />
      
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-balance mb-4">About Us</h1>
          <p className="text-lg text-foreground/80 mb-12">Learn more about Express and our commitment to excellence</p>
        </div>
        <About />
      </main>
      
      <Footer />
    </div>
  )
}
