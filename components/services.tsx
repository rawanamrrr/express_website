'use client'

import { Card } from '@/components/ui/card'
import { Truck, Wrench, AlertTriangle, Droplets, Package } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'LOGISTICAL SUPPORT SERVICES',
      description: 'WE HANDLE ALL THE LOGISTICS YOUR SHIP NEEDS AT THE PORT OR OUT AT SEA.',
      features: ['Port logistics', 'Cargo handling', 'Documentation', 'Customs clearance'],
      image: '/maritime-port-operations-damietta.jpg',
      alt: 'Port operations and logistics services'
    },
    {
      icon: Wrench,
      title: 'SPARE PARTS & TECHNICAL ITEMS',
      description: 'WE\'VE GOT WHAT YOUR VESSEL NEEDS TO STAY RUNNING SMOOTHLY.',
      features: ['Engine parts', 'Technical equipment', 'Maintenance supplies', 'Emergency spares'],
      image: '/cargo-ship-in-damietta-port.jpg',
      alt: 'Ship maintenance and technical parts'
    },
    {
      icon: AlertTriangle,
      title: 'MARITIME EMERGENCY SERVICES',
      description: 'WHEN SOMETHING UNEXPECTED HAPPENS, WE\'RE READY TO STEP IN FAST.',
      features: ['24/7 response', 'Emergency repairs', 'Technical assistance', 'Rapid deployment'],
      image: '/placeholder.jpg',
      alt: 'Emergency response services at sea'
    },
    {
      icon: Droplets,
      title: 'FRESH PROVISION',
      description: 'WE DELIVER QUALITY FOOD SUPPLIES AND CLEAN DRINKING WATER TO KEEP YOUR CREW WELL-STOCKED AND READY.',
      features: ['Fresh provisions', 'Beverages', 'Dry stores', 'Potable water'],
      image: '/placeholder.jpg',
      alt: 'Fresh provision supply for vessels'
    },
    {
      icon: Package,
      title: 'CABIN STORES',
      description: 'ESSENTIAL SUPPLIES AND AMENITIES TO ENSURE COMFORT AND FUNCTIONALITY IN SHIP CABINS.',
      features: ['Bedding & linens', 'Cabin supplies', 'Cleaning products', 'Toiletries'],
      image: '/placeholder.jpg',
      alt: 'Cabin stores and amenities for vessels'
    }
  ]

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            WE PROVIDE ALL THE ESSENTIALS SHIPS NEED QUICKLY, RELIABLY, AND WHENEVER THEY NEED IT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              className="group"
            >
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:scale-[1.02] flex flex-col">
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="relative p-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-luxury -mt-10 z-10 border-4 border-background">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  {service.features && (
                    <ul className="space-y-2 mt-auto">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Something Specific?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We customize solutions for unique maritime requirements. Contact our team to discuss your specific needs.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
