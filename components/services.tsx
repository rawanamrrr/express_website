'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      number: '1',
      title: 'GENERAL SHIP SUPPLIER',
      image: '/services-2.jpeg',
      alt: 'General ship supplier'
    },
    {
      number: '2',
      title: 'INSPECTION OF ALL LIFE-SAVING EQUIPMENT AND SERVICING LIFE RAFTS',
      image: '/services-4.jpeg',
      alt: 'Life saving equipment inspection'
    },
    {
      number: '3',
      title: 'ELECTRONICS; INSTALLING AND MAINTAINING OF DIFFERENT NAVIGATIONAL DEVICES',
      image: '/cabin.jpeg',
      alt: 'Electronics and navigational devices'
    },
    {
      number: '4',
      title: 'MAINTENANCE, REPAIR AND RE-WINDING DIFFERENT ELECTRIC MOTORS',
      image: '/Electric Motor.jpg',
      alt: 'Electric motor maintenance'
    },
    {
      number: '5',
      title: 'GARBAGE & SLUDGE DISPOSAL',
      image: '/Garbage & sludge disposal.jpg',
      alt: 'Garbage and sludge disposal'
    },
    {
      number: '6',
      title: 'PARCEL CUSTOMS CLEARANCE & SAFEKEEPING OF SHIP SPARE PARTS, TO BE DELIVERED TO THE VESSELS AT THE REQUIRED TIME AND LOCATION.',
      image: '/Explained.jpg',
      alt: 'Parcel customs clearance and safekeeping'
    }
  ]

  return (
    <section className="py-12 sm:py-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.05 }}
            >
              <div className="space-y-3">
                <div className="relative w-full h-48 sm:h-56 lg:h-60 overflow-hidden border-4 border-white shadow">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transform group-hover:scale-105 group-active:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-center font-semibold uppercase tracking-wide text-foreground text-sm sm:text-base leading-snug">
                  {service.number}- {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
