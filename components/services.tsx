'use client'

import { Card } from '@/components/ui/card'
import { Ship, Package, Wrench, Anchor, Fuel, Users } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Ship,
      title: 'Vessel Provisioning',
      description: 'Complete food, beverage, and consumables supply for all vessel types and crew sizes.',
      features: ['Fresh & frozen provisions', 'Beverage supply', 'Crew comfort items', 'Customized menus']
    },
    {
      icon: Package,
      title: 'Cargo Handling',
      description: 'Efficient loading, unloading, and storage solutions with modern equipment.',
      features: ['Heavy lift operations', 'Container handling', 'Warehousing', 'Cargo tracking']
    },
    {
      icon: Wrench,
      title: 'Marine Maintenance',
      description: 'Professional maintenance and repair services for vessel equipment and systems.',
      features: ['Engine maintenance', 'Hull repairs', 'Electrical systems', 'Emergency repairs']
    },
    {
      icon: Anchor,
      title: 'Port Operations',
      description: 'Complete port coordination including documentation, permits, and clearances.',
      features: ['Port clearance', 'Documentation', 'Customs brokerage', 'Agency services']
    },
    {
      icon: Fuel,
      title: 'Bunker Supply',
      description: 'High-quality fuel supply with competitive pricing and reliable delivery.'
    },
    {
      icon: Users,
      title: 'Crew Support',
      description: 'Crew transfer, accommodation, and welfare services during port stays.'
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
              Premium Maritime Services
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Comprehensive maritime solutions tailored to meet the unique needs of your vessel operations in Damietta Port. Experience excellence in every service we provide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:scale-[1.02]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-luxury">
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
                  <ul className="space-y-2">
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
          ))}
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Something Specific?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We customize solutions for unique maritime requirements. Contact our team to discuss your specific needs.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-accent/90 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
