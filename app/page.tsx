'use client'

import { useState } from 'react'
import { Ship, Anchor, Compass, ShieldCheck, Clock, Users, Globe, Star, MapPin, Zap, Truck, Wrench, AlertTriangle, Droplets, Package, Flag } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { AnimatedSection } from '@/components/animated-section'
import PortsMap from '@/components/ports-map'

const features = [
  {
    icon: <Compass className="w-8 h-8 text-accent" />,
    title: 'CUSTOMIZED SOLUTIONS',
    description: 'WE ADAPT OUR SUPPLY SOLUTIONS TO MEET EACH VESSEL\'S SPECIFIC REQUIREMENTS'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'RELIABLE REPUTATION',
    description: 'KNOWN FOR DELIVERING QUALITY SERVICE TRUSTED BY VESSELS ACROSS THE REGION'
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: 'EXPERIENCED TEAM',
    description: 'OUR PROFESSIONALS UNDERSTAND PORT OPERATIONS AND MARITIME LOGISTICS INSIDE OUT'
  },
  {
    icon: <MapPin className="w-8 h-8 text-accent" />,
    title: 'STRATEGIC LOCATION',
    description: 'WE OPERATE DIRECTLY FROM INSIDE DAMIETTA PORT ENSURING FAST ACCESS TO VESSELS WITH NO DELAYS'
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'SPEED & PRECISION',
    description: 'WE GUARANTEE TIMELY DELIVERY WITH FULL ATTENTION TO DETAIL EVERY TIME'
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: 'ROUND-THE-CLOCK OPERATIONS',
    description: 'OUR TEAM WORKS AROUND THE CLOCK TO MEET URGENT AND TIME-SENSITIVE MARINE NEEDS'
  }
]

const services = [
  {
    title: 'LOGISTICAL SUPPORT SERVICES',
    description: 'WE HANDLE ALL THE LOGISTICS YOUR SHIP NEEDS AT THE PORT OR OUT AT SEA.',
    icon: <Truck className="w-6 h-6" />
  },
  {
    title: 'SPARE PARTS & TECHNICAL ITEMS',
    description: 'WE\'VE GOT WHAT YOUR VESSEL NEEDS TO STAY RUNNING SMOOTHLY.',
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: 'MARITIME EMERGENCY SERVICES',
    description: 'WHEN SOMETHING UNEXPECTED HAPPENS, WE\'RE READY TO STEP IN FAST.',
    icon: <AlertTriangle className="w-6 h-6" />
  },
  {
    title: 'FRESH PROVISION ',
    description: 'WE DELIVER QUALITY FOOD SUPPLIES AND CLEAN DRINKING WATER TO KEEP YOUR CREW WELL-STOCKED AND READY.',
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: 'CABIN STORES',
    description: 'ESSENTIAL SUPPLIES AND AMENITIES TO ENSURE COMFORT AND FUNCTIONALITY IN SHIP CABINS.',
    icon: <Package className="w-6 h-6" />
  },
  {
    title: 'MARINE PUBLICATIONS, CHARTS & FLAGS',
    description: 'WE SUPPLY UPDATED MARINE PUBLICATIONS, NAUTICAL CHARTS, AND INTERNATIONAL FLAGS TO SUPPORT SAFE AND COMPLIANT NAVIGATION.',
    icon: <Flag className="w-6 h-6" />
  },
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage="home"
      />
      
      <Hero />

      {/* Who We Are Section */}
      <AnimatedSection
        className="py-16 px-4 sm:px-6 lg:px-8 bg-background"
        direction="up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Who We Are</h2>
              <div className="w-20 h-1 bg-accent"></div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We are a specialized marine and maritime supply company providing reliable, time-critical services to vessels operating across Egypt's major ports.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Through continuous experience in delivering marine supplies and integrated logistical solutions, we understand the critical importance of efficiency, precision, and timing in modern maritime operations.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="w-full h-[300px] flex items-center justify-center">
              <img
                src="/ship-image.jpeg"
                alt="Ship at sea"
                className="h-full w-auto max-w-full object-contain rounded-xl"
                onError={(e) => {
                  console.error('Failed to load image:', e);
                  const target = e.target as HTMLImageElement;
                  target.alt = 'Image failed to load';
                }}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20"
        direction="up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Express?</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="p-3 bg-accent/10 rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
        direction="up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">WE PROVIDE ALL THE ESSENTIALS SHIPS NEED QUICKLY, RELIABLY, AND WHENEVER THEY NEED IT.</p>
            <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              >
                <div className="h-full p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <Button variant="link" className="px-0 text-accent hover:text-accent/80 transition-colors" asChild>
                    <Link href="/services">Learn more →</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="px-8" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
        direction="up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Anchor className="w-4 h-4" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/80 mb-6">
                To provide comprehensive and reliable ship supply services, rooted in efficiency, precision, and commitment, ensuring uninterrupted maritime operations.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                We strive to meet our clients' needs for provisions, technical supplies, and logistical support, adhering to the highest standards of quality and safety, through a professional team, an effective supply network, and innovative solutions that keep pace with advancements in the maritime sector.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                From supplying provisions and equipment to providing spare parts and technical requirements, we offer integrated and rapid solutions that meet the demands of the modern maritime industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">24/7</h3>
                  <p className="text-foreground/70">Support</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">100%</h3>
                  <p className="text-foreground/70">Commitment</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-xl aspect-[4/5] w-full md:w-4/5 lg:w-3/4 mx-auto md:ml-auto">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl flex items-center justify-center">
                  <img
                    src="/our-mission.jpeg"
                    alt="Our Mission at Damietta Port"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-20 -right-6 bg-background p-5 rounded-xl shadow-lg border border-border w-3/4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-medium mb-2">Dedicated to excellence in maritime services</p>
                <p className="text-sm text-foreground/60">Your trusted partner at sea</p>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Ports Map Section */}
      <AnimatedSection
        className="pt-4 pb-20 px-4 sm:px-6 lg:px-8 bg-background"
        direction="up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Port Coverage</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Explore the key ports where we operate. Hover or click on a pin to zoom to that location.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          <PortsMap />
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/90 to-primary"
        direction="up"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Excellence in Maritime Services?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the many maritime professionals who trust Express for their vessel supply and support needs in Damietta Port.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-foreground" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="tel:+201016218082">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  )
}
