'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Services from '@/components/services'
import Footer from '@/components/footer'

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage="services"
      />
      
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-balance mb-4">Our Services</h1>
          <p className="text-lg text-foreground/80 mb-12">Comprehensive maritime supply and logistics solutions for your vessel needs</p>
        </div>
        <Services />
      </main>
      
      <Footer />
    </div>
  )
}
