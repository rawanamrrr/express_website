'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Award, Shield, Clock, Zap, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const values = [
    { 
      icon: Award, 
      title: 'Quality', 
      description: 'We consistently strive to provide products and services of the highest quality, ensuring customer satisfaction and the efficiency of maritime operations.' 
    },
    { 
      icon: Shield, 
      title: 'Safety', 
      description: 'Safety is our top priority, whether in the supply of materials or the execution of operations, in accordance with global maritime standards.' 
    },
    { 
      icon: CheckCircle, 
      title: 'Commitment', 
      description: 'We are dedicated to meeting delivery deadlines and honoring all contractual obligations.' 
    },
    { 
      icon: Zap, 
      title: 'Flexibility and Innovation', 
      description: 'We respond quickly and flexibly to market changes and our clients\' needs, continuously adopting the latest technologies in the maritime sector to deliver smart service solutions.' 
    },
    { 
      icon: Handshake, 
      title: 'Transparency and Integrity', 
      description: 'We believe that trust is built on clarity, and we uphold transparency in our dealings to foster long-term relationships with our partners.' 
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Main About */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance uppercase">
              About Us
            </h2>
            <ul className="space-y-4 text-lg text-foreground/70 leading-relaxed list-disc pl-6">
              <li>Express Services Inc is a trusted ship supply company based in Damietta Port, Egypt.</li>
              <li>We specialize in providing vessels with everything they need from provisions and technical equipment to spare parts and safety supplies.</li>
              <li>With a dedicated team operating 24/7, we deliver fast, reliable and compliant solutions to meet the demands of maritime operations.</li>
              <li>At Express, we believe every smooth voyage begins with a well-prepared port and we're here to make that happen.</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-8 h-96 flex items-center justify-center">
            <img
              src="/maritime-port-operations-damietta.jpg"
              alt="Port operations"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
                >
                  <Card className="p-8 hover:shadow-lg transition-shadow text-left">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-accent">{value.title}</h4>
                        <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="bg-muted/30 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Team</h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Our dedicated team of maritime professionals brings decades of combined experience. We're trained in the latest industry standards and committed to providing exceptional service.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded p-6">
              <p className="font-bold text-2xl mb-2">50+</p>
              <p className="text-foreground/60">Professional Staff</p>
            </div>
            <div className="bg-background rounded p-6">
              <p className="font-bold text-2xl mb-2">ISO Certified</p>
              <p className="text-foreground/60">Quality Management</p>
            </div>
            <div className="bg-background rounded p-6">
              <p className="font-bold text-2xl mb-2">24/7</p>
              <p className="text-foreground/60">Operations Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
