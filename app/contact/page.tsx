'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage="contact"
      />
      
      <main className="pt-8">
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}
