'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

type View = 'home' | 'services' | 'about' | 'contact'

interface ContactProps {
  onNavigate?: (view: any) => void
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vesselName: '',
    serviceType: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ firstName: '', lastName: '', email: '', phone: '', vesselName: '', serviceType: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+20 64 3506 250', href: 'tel:+201643506250' },
    { icon: Mail, label: 'Email', value: 'info@express.com', href: 'mailto:info@express.com' },
    { 
      icon: MapPin, 
      label: 'Address', 
      value: 'Damietta Port, sector1, office2, Egypt', 
      href: 'https://maps.app.goo.gl/pFRY1wxe52LzyPgE8',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { icon: Clock, label: 'Operations', value: '24/7 Available' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Get in touch with our team for quotes, inquiries, or support. We're here to help 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="flex gap-4">
                    <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-foreground/70 hover:text-accent transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground/70">{info.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Service Types */}
            <div className="mt-12">
              <h4 className="text-lg font-bold mb-4">Quick Services</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Provisioning', 'Bunkers', 'Maintenance', 'Port Services', 'Crew Support', 'Cargo'].map((service, i) => (
                  <div key={i} className="bg-background rounded px-4 py-2 text-sm font-medium text-center hover:bg-accent/10 transition-colors">
                    {service}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quote Request Form */}
          <div>
            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✓</div>
                  <h4 className="text-xl font-bold text-accent mb-2">Quote Request Submitted!</h4>
                  <p className="text-foreground/70">Thank you! Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border border-border rounded bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border border-border rounded bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  />

                  <input
                    type="text"
                    name="vesselName"
                    placeholder="Vessel Name"
                    value={formData.vesselName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  />

                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select Service Type</option>
                    <option value="provisioning">Vessel Provisioning</option>
                    <option value="bunkers">Bunker Supply</option>
                    <option value="maintenance">Marine Maintenance</option>
                    <option value="cargo">Cargo Handling</option>
                    <option value="crew">Crew Support</option>
                    <option value="other">Other</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-semibold"
                  >
                    Request Quote
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
