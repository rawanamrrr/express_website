'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Products from '@/components/products'
import Footer from '@/components/footer'

export default function ProductsPage() {
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
        currentPage="products"
      />

      <main className="pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <div className="h-1 w-20 bg-accent mb-8 mx-auto" />
            <p className="text-lg lg:text-xl text-foreground/80 mb-6 leading-relaxed">
              As a general ship supplier, we provide a wide range of high-quality stores and provisions
              to support vessels both in port and at sea.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 text-left inline-block">
              <li>All of our stores follow IMPA &amp; ISSA Catalog guidelines.</li>
              <li>Special Manufacturing requests are available on demand.</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Products />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
