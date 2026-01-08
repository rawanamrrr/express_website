'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Award, Shield, Clock, Zap, Handshake } from 'lucide-react'

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
            
            <div className="space-y-8 text-lg text-foreground/70 leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold mb-2">WHO WE ARE</h3>
                <p>
                  We are a professional marine and maritime supply company with extensive experience in supporting vessel operations through integrated supply and logistics services.
                </p>
                <p>
                  Our expertise has been built through years of continuous involvement in the maritime sector, allowing us to deliver reliable solutions that meet the operational demands of modern vessels.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">EXPERIENCE &amp; EXPERTISE</h3>
                <p>
                  With accumulated experience in marine supply operations, we provide practical and effective logistical solutions tailored to each vessels operational requirements.
                </p>
                <p>
                  Our operational knowledge enables us to respond quickly, manage complex supply needs, and maintain consistent service quality across multiple ports.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">LOGISTICS &amp; TIME MANAGEMENT</h3>
                <p>
                  Our primary objective is to minimize service and supply lead times in order to protect vessel schedules and operational timelines.
                </p>
                <p>
                  By optimizing logistics coordination and reducing unnecessary delays, we help vessels maintain planned port stays, reduce downtime, and avoid schedule disruptions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">SUSTAINABILITY &amp; ENVIRONMENT</h3>
                <p>
                  We are committed to supporting sustainable maritime operations and protecting marine life.
                </p>
                <p>
                  Reducing service time at port directly contributes to lower fuel consumption, decreased emissions, and reduced marine pollution. Through efficient supply execution, we actively support environmentally responsible maritime practices.
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
            Our dedicated team of maritime professionals brings decades of combined experience. We're trained in the latest industry standards and committed to providing exceptional service.
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
