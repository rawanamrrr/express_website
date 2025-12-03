'use client'

import { Button } from '@/components/ui/button'
import { Ship } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
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

  return (
    <AnimatedSection
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
      id="home"
      direction="up"
    >
      {/* Dark overlay for text readability */}
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/cargo-ship-in-damietta-port.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial={{ scale: 1.1 }}
        animate={{ 
          scale: 1,
          transition: { 
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse'
          }
        }}
      />
      
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
              className="text-4xl md:text-5xl font-bold leading-tight text-balance text-white drop-shadow-lg"
            >
              Trusted Vessel Supply Solutions for Damietta Port
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-white leading-relaxed drop-shadow-md"
            >
              EXPRESS. provides comprehensive maritime logistics and vessel supply services. With years of industry expertise, we ensure your vessels are fully provisioned and ready for every voyage.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full"
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
          <StatsCounter value={500} label="Vessels Served" />
          <StatsCounter value={15} label="Years Experience" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white drop-shadow-lg">24/7</p>
            <p className="text-sm text-white">Support Available</p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
