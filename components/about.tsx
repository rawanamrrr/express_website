'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Award, Shield, Clock, Zap, Handshake } from 'lucide-react'

export default function About() {
  const values = [
    { 
      icon: Award, 
      title: 'Quality', 
      description: 'Reliable products and services that keep your vessel running smoothly.' 
    },
    { 
      icon: Shield, 
      title: 'Safety', 
      description: 'We follow clear maritime safety standards in every delivery.' 
    },
    { 
      icon: CheckCircle, 
      title: 'Commitment', 
      description: 'We honor our agreements and work to meet every deadline.' 
    },
    { 
      icon: Zap, 
      title: 'Flexibility and Innovation', 
      description: 'We adapt quickly to your needs and use modern tools to improve service.' 
    },
    { 
      icon: Handshake, 
      title: 'Transparency and Integrity', 
      description: 'We communicate clearly and act honestly to build long-term partnerships.' 
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Main About */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            
            <div className="space-y-8 text-lg text-foreground/70 leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold mb-2">WHO WE ARE</h3>
                <p>
                  We are a marine and maritime supply company providing reliable, practical support for daily vessel operations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">EXPERIENCE &amp; EXPERTISE</h3>
                <p>
                  Our team has solid experience in marine supply across ports, handling complex requests quickly and consistently.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">LOGISTICS &amp; TIME MANAGEMENT</h3>
                <p>
                  We plan and deliver supplies efficiently to protect your schedule and cut waiting time.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">SUSTAINABILITY &amp; ENVIRONMENT</h3>
                <p>
                  Efficient service and shorter port stays help reduce fuel use, emissions, and impact on the sea.
                </p>
              </div>
            </div>
          </div>
          <div className="h-96 flex items-center justify-center">
            <img
              src="/ship-image.jpeg"
              alt="Port operations"
              className="w-full h-full object-cover rounded-lg"
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
                <div
                  key={index}
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
                </div>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="bg-muted/30 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Team</h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Our team brings practical maritime experience and up-to-date training, focused on reliable service.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded p-6">
              <p className="font-bold text-2xl mb-2">20+</p>
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
