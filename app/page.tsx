'use client'

import { useState } from 'react'
import { Ship, Anchor, Compass, ShieldCheck, Clock, Users, Globe, Quote, Star } from 'lucide-react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const features = [
  {
    icon: <Compass className="w-8 h-8 text-accent" />,
    title: 'Global Network',
    description: 'Extensive network of suppliers and partners worldwide ensuring reliable service anywhere your vessel sails.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'Quality Assurance',
    description: 'Strict quality control measures to ensure all supplies meet international maritime standards.'
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: '24/7 Operations',
    description: 'Round-the-clock service to meet your vessel\'s needs, no matter the time or day.'
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: 'Experienced Team',
    description: 'Dedicated professionals with extensive maritime industry expertise at your service.'
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: 'Global Coverage',
    description: 'Comprehensive port agency services across major maritime routes and ports.'
  },
  {
    icon: <Anchor className="w-8 h-8 text-accent" />,
    title: 'Port Expertise',
    description: 'In-depth knowledge of port operations and regulations in the region.'
  }
]

const testimonials = [
  {
    name: 'Captain Ahmed Hassan',
    company: 'Mediterranean Shipping',
    role: 'Vessel Captain',
    content: 'Express has been our trusted partner for vessel supplies in Damietta Port. Their 24/7 support and attention to detail make them stand out from the competition.',
    rating: 5
  },
  {
    name: 'Maria Rodriguez',
    company: 'Global Cargo Lines',
    role: 'Operations Manager',
    content: 'The team at Express understands the urgency of maritime operations. Their quick response time and reliable service have been invaluable to our operations in the region.',
    rating: 4
  },
  {
    name: 'John Smith',
    company: 'Blue Horizon Fleet',
    role: 'Logistics Coordinator',
    content: 'Professional, efficient, and always willing to go the extra mile. Express has consistently provided top-notch service for all our vessel needs in Damietta.',
    rating: 5
  }
]

const services = [
  {
    title: 'Vessel Provisioning',
    description: 'Complete provisioning services including fresh water, food supplies, and vessel stores.',
    icon: <Ship className="w-6 h-6" />
  },
  {
    title: 'Bunker Supply',
    description: 'Reliable and timely delivery of marine fuels and lubricants to your vessel.',
    icon: <Ship className="w-6 h-6" />
  },
  {
    title: 'Crew Support',
    description: 'Comprehensive crew services including crew changes, visas, and shore leave assistance.',
    icon: <Ship className="w-6 h-6" />
  },
  {
    title: 'Port Agency',
    description: 'Full range of port agency services to ensure smooth port calls.',
    icon: <Ship className="w-6 h-6" />
  },
  {
    title: 'Technical Support',
    description: 'Expert technical assistance and spare parts delivery for your vessel\'s needs.',
    icon: <Ship className="w-6 h-6" />
  },
  {
    title: 'Customs Clearance',
    description: 'Efficient customs and immigration clearance services for vessels and crew.',
    icon: <Ship className="w-6 h-6" />
  }
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Who We Are</h2>
              <div className="w-20 h-1 bg-accent"></div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Express has been a trusted partner in maritime logistics since 2009. Operating from the strategic location of Damietta Port, we serve major international shipping lines and vessel operators with comprehensive maritime solutions.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our experienced team and modern infrastructure enable us to deliver reliable, efficient services while maintaining the highest standards of professionalism and customer care.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="w-full h-[500px] relative">
              <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-xl">
                <img
                  src="/cargo-ship-in-damietta-port.jpg"
                  alt="Cargo ship at Damietta Port"
                  className="h-full w-auto max-w-full object-contain p-4"
                  onError={(e) => {
                    console.error('Failed to load image:', e);
                    const target = e.target as HTMLImageElement;
                    target.alt = 'Image failed to load';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Express?</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-accent/10 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Comprehensive maritime solutions tailored to your vessel's needs</p>
            <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
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
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="px-8" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Anchor className="w-4 h-4" />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading the Way in Maritime Excellence</h2>
              <p className="text-lg text-foreground/80 mb-6">
                At Express, we don't just provide maritime services - we build lasting partnerships. Our journey began with a simple mission: to deliver exceptional service that keeps the world's vessels moving efficiently.
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                Today, we stand as a trusted name in Damietta's maritime sector, known for our reliability, expertise, and commitment to excellence. Our team of seasoned professionals brings together decades of combined experience in maritime logistics and vessel support services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">15+</h3>
                  <p className="text-foreground/70">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">500+</h3>
                  <p className="text-foreground/70">Vessels Served</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-xl aspect-[4/5] w-full">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl flex items-center justify-center">
                  <Ship className="w-24 h-24 text-accent/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-lg border border-border w-3/4">
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-medium mb-2">Trusted by leading shipping companies worldwide</p>
                <p className="text-sm text-foreground/60">Rated 4.9/5 by our clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Hear from shipping professionals who trust Express for their maritime needs</p>
            <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 h-full">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}, {testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/90 to-primary">
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
              <Link href="tel:+201234567890">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
