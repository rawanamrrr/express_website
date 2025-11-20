'use client'

import { useState } from 'react'
import { Ship, Anchor, Compass, ShieldCheck, Clock, Users, Globe, Quote, Star, MapPin, Zap, Truck, Wrench, AlertTriangle, Droplets } from 'lucide-react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

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
    title: 'FOOD & FRESH WATER',
    description: 'WE DELIVER QUALITY FOOD SUPPLIES AND CLEAN DRINKING WATER TO KEEP YOUR CREW WELL-STOCKED AND READY.',
    icon: <Droplets className="w-6 h-6" />
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
                We are a company specialized in providing ship supply services, firmly believing that every safe maritime journey begins at a port equipped with expertise, commitment, and professionalism.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our dedicated team ensures that every vessel receives the highest quality supplies and services, maintaining the highest standards of safety and efficiency for your maritime operations.
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
            <p className="text-foreground/60 max-w-2xl mx-auto">WE PROVIDE ALL THE ESSENTIALS SHIPS NEED QUICKLY, RELIABLY, AND WHENEVER THEY NEED IT.</p>
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
              <div className="bg-muted rounded-xl aspect-[4/5] w-full">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl flex items-center justify-center">
                  <img
                    src="/maritime-port-operations-damietta.jpg"
                    alt="Maritime operations at Damietta Port"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-lg border border-border w-3/4">
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-medium mb-2">Dedicated to excellence in maritime services</p>
                <p className="text-sm text-foreground/60">Your trusted partner at sea</p>
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
              <Link href="tel:+201016218082">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
