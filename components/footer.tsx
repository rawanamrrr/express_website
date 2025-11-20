'use client'

import { Anchor, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

type View = 'home' | 'services' | 'about' | 'contact'

interface FooterProps {
  onNavigate?: (view: View) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (view: View) => {
    if (onNavigate) {
      onNavigate(view)
    } else {
      // Default navigation: scroll to section
      const element = document.getElementById(view)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.88_0.15_65/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.18_0.08_240/0.2),transparent_50%)]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/white-logo.png" 
                alt="Express INC. Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for maritime logistics and vessel supply services at Damietta Port. Delivering excellence since 1995.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Vessel Provisioning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Cargo Handling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Marine Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Contact Info</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Damietta Port, Egypt</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@express-inc.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} EXPRESS INC. All rights reserved. | Maritime Excellence Since 1995</p>
        </div>
      </div>
    </footer>
  )
}
