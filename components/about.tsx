'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Award, Globe, Target } from 'lucide-react'

export default function About() {
  const values = [
    { icon: Award, title: 'Excellence', description: 'Highest standards in maritime services and customer satisfaction.' },
    { icon: Globe, title: 'Reliability', description: '15+ years of proven track record serving the maritime industry.' },
    { icon: Target, title: 'Efficiency', description: 'Streamlined operations ensuring timely and cost-effective solutions.' },
    { icon: CheckCircle, title: 'Safety', description: 'Strict compliance with international maritime safety regulations.' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Main About */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About Express
            </h2>
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
              Express has been a trusted partner in maritime logistics since 2009. Operating from the strategic location of Damietta Port, we serve major international shipping lines and vessel operators.
            </p>
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
              Our comprehensive service portfolio, combined with our experienced team and modern infrastructure, enables us to deliver reliable, efficient maritime solutions.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We're committed to maintaining the highest standards of professionalism and customer service in every interaction.
            </p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
                </Card>
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
