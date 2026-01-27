'use client'

import { Button } from '@/components/ui/button'
import { Ship, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const StatsCounter = ({ value, label }: { value: number; label: string }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 }
      })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.p
        animate={controls}
        className="text-3xl font-bold text-white drop-shadow-lg"
      >
        {inView ? value : '0'}{value > 9 ? '+' : ''}
      </motion.p>
      <p className="text-sm text-white">{label}</p>
    </motion.div>
  )
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    if (id === 'contact') {
      window.location.href = '/contact';
    } else if (id === 'services') {
      window.location.href = '/services';
    }
  }

  const slides = [
    '/hero 1.jpeg',
    '/hero 2.mp4',
    '/hero 3.jpeg',
    '/hero 4.jpeg',
    '/hero 5.jpeg',
  ]
  const [current, setCurrent] = useState(0)
  const nextSlide = () => setCurrent((i) => (i + 1) % slides.length)
  const prevSlide = () => setCurrent((i) => (i - 1 + slides.length) % slides.length)
  

  const currentSlide = slides[current]
  const isVideo = currentSlide.endsWith('.mp4') || currentSlide.endsWith('.webm') || currentSlide.endsWith('.ogg')
  
  // Advance based on media type: 5s for images, 8s for videos
  useEffect(() => {
    const duration = isVideo ? 8000 : 5000
    const id = setTimeout(() => setCurrent((i) => (i + 1) % slides.length), duration)
    return () => clearTimeout(id)
  }, [currentSlide, isVideo, slides.length])

  return (
    <AnimatedSection
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
      id="home"
      direction="up"
    >
      {/* Dark overlay for text readability */}
      {/* Background layer with animated crossfade/zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {isVideo ? (
            <>
              <video
                className="absolute inset-0 w-full h-full object-cover object-[center_30%] sm:hidden"
                src={currentSlide}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              />
              <video
                className="absolute inset-0 w-full h-full object-cover hidden sm:block"
                src={currentSlide}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-[center_30%] sm:hidden"
                style={{ backgroundImage: `url("${encodeURI(currentSlide)}")` }}
              />
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-[center_30%] sm:bg-center hidden sm:block"
                style={{ backgroundImage: `url("${encodeURI(currentSlide)}")` }}
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 pointer-events-none"
        initial={{ opacity: 0.9 }}
        animate={{
          opacity: 0.8,
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }
        }}
      />

      <div className="max-w-7xl w-full mx-auto relative z-10 overflow-hidden">
        <button onClick={prevSlide} aria-label="Previous slide" className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 border border-white/30 text-white hover:bg-white/30 backdrop-blur-sm z-20"><ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" /></button>
        <button onClick={nextSlide} aria-label="Next slide" className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 border border-white/30 text-white hover:bg-white/30 backdrop-blur-sm z-20"><ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" /></button>
        <div className="flex flex-col items-center justify-center">
          {/* Centered Content */}
          <div className="space-y-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              >
                <Ship className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-sm font-semibold text-white">Maritime Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance text-white drop-shadow-lg"
            >
              Professional Marine & Maritime Supply Services Across Egypt
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-white leading-relaxed drop-shadow-md"
            >
              Delivering efficient marine supply and logistics solutions through years of accumulated experience, ensuring vessels remain on schedule while supporting sustainable maritime operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 pt-12 justify-center w-full"
            >
              <motion.button
                onClick={() => {
                  console.log('Button clicked!')
                  scrollToSection('services')
                }}
                className="px-8 py-3 text-base font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer pointer-events-auto relative z-10"
                style={{ backgroundColor: '#f58d13' }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#e67e00',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 pointer-events-auto relative z-10 w-full"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/20 w-full max-w-2xl mx-auto"
        >
          <StatsCounter value={50} label="Vessels Served" />
          <StatsCounter value={5} label="Years Experience" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white drop-shadow-lg">24/7</p>
            <p className="text-sm text-white">Support Available</p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
