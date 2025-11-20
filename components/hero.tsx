'use client'

import { Button } from '@/components/ui/button'
import { Ship } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center" 
      id="home"
      style={{
        backgroundImage: 'url(/cargo-ship-in-damietta-port.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Centered Content */}
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
              <Ship className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Maritime Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance text-white drop-shadow-lg">
              Trusted Vessel Supply Solutions for Damietta Port
            </h1>

            <p className="text-lg text-white leading-relaxed drop-shadow-md">
              EXPRESS. provides comprehensive maritime logistics and vessel supply services. With years of industry expertise, we ensure your vessels are fully provisioned and ready for every voyage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
              <button
                onClick={() => {
                  console.log('Button clicked!')
                  scrollToSection('services')
                }}
                className="px-8 py-3 text-base font-semibold text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer pointer-events-auto"
                style={{ backgroundColor: '#f58d13' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e67e00'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f58d13'}
              >
                Explore Services
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50"
              >
                Get a Quote
              </Button>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/20 w-full max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-white drop-shadow-lg">500+</p>
            <p className="text-sm text-white">Vessels Served</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white drop-shadow-lg">15+</p>
            <p className="text-sm text-white">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white drop-shadow-lg">24/7</p>
            <p className="text-sm text-white">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
