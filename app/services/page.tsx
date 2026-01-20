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
          <div className="text-center pb-6 md:pb-8 mb-12 md:mb-16 border-b border-border/40">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
            <p className="text-base md:text-lg text-foreground/70 mt-4">We offer different services</p>
            <p className="text-foreground/70 mt-4 leading-relaxed max-w-4xl mx-auto">As a general ship supplier we invest in supplying best-in-class quality of products, and superior services for the best prices to the shipping and offshore industry, we strive to create solutions that deliver value to our clients. Over the years, we are proud of our heritage of serving cargo fleets, cruise and ferry fleets, fishing vessels, military and navy vessels and offshore facilities around the world.</p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
          </div>
          <Services />
        </div>
        {/* Subtle Decorative Elements */}
      </main>
      
      <Footer />
    </div>
  )
}
