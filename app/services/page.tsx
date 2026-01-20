'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Services from '@/components/services'
import Footer from '@/components/footer'

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Background */}

      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage="services"
      />
      
      <main className="pt-24 md:pt-28 pb-16">
        {/* Enhanced Hero Section */}
        {/* Enhanced Services Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Services />
        </div>
        {/* Subtle Decorative Elements */}
      </main>
      
      <Footer />
    </div>
  )
}
