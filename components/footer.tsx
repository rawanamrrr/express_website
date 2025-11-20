'use client'

import { Anchor, Mail, Phone, MapPin, Instagram, MessageCircle, Facebook, Twitter, Linkedin, Youtube, Music2 } from 'lucide-react'
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
              Your trusted partner for maritime logistics and vessel supply services at Damietta Port, Egypt. Delivering excellence with 24/7 availability.
            </p>
            
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
                  Logistical Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Spare Parts & Technical Items
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Maritime Emergency Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Food & Fresh Water
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Contact Info</h3>
            <div className="space-y-6">
              <ul className="space-y-4 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <a href="https://maps.app.goo.gl/pFRY1wxe52LzyPgE8" target="_blank" rel="noopener noreferrer" className="hover:underline">DAMIETTA PORT, EGYPT</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <a href="tel:01016218082" className="hover:underline">01016218082</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <MessageCircle className="w-4 h-4 text-accent" />
                  </div>
                  <a href="https://wa.me/2001097178002" target="_blank" rel="noopener noreferrer" className="hover:underline">(+20) 01097178002</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <a href="mailto:INFO@EXPRESSSERVICESS.COM" className="hover:underline">INFO@EXPRESSSERVICESS.COM</a>
                </li>
              </ul>
              
              <div className="pt-2">
                <h3 className="font-bold text-lg mb-6 text-accent">Connect With Us</h3>
                <div className="flex flex-wrap gap-2">
                  <a href="https://web.facebook.com/profile.php?id=61575205654731" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Facebook">
                    <Facebook className="w-4 h-4 text-accent" />
                  </a>
                  <a href="https://x.com/exp08011" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="X (Twitter)">
                    <Twitter className="w-4 h-4 text-accent" />
                  </a>
                  <a href="https://www.instagram.com/express__inc/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Instagram">
                    <Instagram className="w-4 h-4 text-accent" />
                  </a>
                  <a href="https://www.youtube.com/@expressinc-q7g" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="YouTube">
                    <Youtube className="w-4 h-4 text-accent" />
                  </a>
                  <a href="https://www.tiktok.com/@express_inc" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="TikTok">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.83-.02 8.74-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="mailto:INFO@EXPRESSSERVICESS.COM" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Email">
                    <Mail className="w-4 h-4 text-accent" />
                  </a>
                  <a href="tel:01016218082" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Call">
                    <Phone className="w-4 h-4 text-accent" />
                  </a>
                  <a href="https://wa.me/2001097178002" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="WhatsApp">
                    <MessageCircle className="w-4 h-4 text-accent" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} EXPRESS INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
