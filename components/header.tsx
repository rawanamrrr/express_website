'use client'

import { useState } from 'react'
import { Menu, X, Clock, Phone, Twitter, Facebook, Youtube, Instagram, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  currentPage?: string
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen, currentPage = 'home' }: HeaderProps) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="relative z-50">
      <div className="sticky top-0 z-50 bg-[#0f2f46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center h-12">
                <img src="/logo.png" alt="Express INC. Logo" className="h-full w-auto object-contain" />
              </Link>
              <div className="hidden md:flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-[#18b6c8]" />
                <span className="text-[#18b6c8]">We are Available</span>
                <span className="text-white">24/7 for You</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-3 pr-6 border-r border-white/20">
                <Phone className="w-4 h-4 text-[#18b6c8]" />
                <a href="tel:+201227497373" className="text-sm font-semibold hover:text-[#f8b21a]">+201227497373</a>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <Link href="#" aria-label="Twitter" className="hover:text-[#f8b21a]"><Twitter className="w-4 h-4" /></Link>
                <Link href="#" aria-label="Facebook" className="hover:text-[#f8b21a]"><Facebook className="w-4 h-4" /></Link>
                <Link href="#" aria-label="YouTube" className="hover:text-[#f8b21a]"><Youtube className="w-4 h-4" /></Link>
                <Link href="#" aria-label="Instagram" className="hover:text-[#f8b21a]"><Instagram className="w-4 h-4" /></Link>
                <Link href="#" aria-label="LinkedIn" className="hover:text-[#f8b21a]"><Linkedin className="w-4 h-4" /></Link>
                <Link href="mailto:info@example.com" aria-label="Email" className="hover:text-[#f8b21a]"><Mail className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-14">
            {/* Logo */}
            <div className="md:hidden">
              <Link href="/" className="flex items-center h-10">
                <img src="/logo.png" alt="Express INC. Logo" className="h-full w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm md:text-base font-semibold uppercase tracking-wide text-slate-900 transition-all duration-300 hover:text-[#0f2f46] group pr-6 mr-6 border-r border-black/10 last:pr-0 last:mr-0 last:border-r-0"
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0f2f46] to-[#18b6c8] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 ml-auto">
              {/* CTA Button - Desktop */}
              <Link href="/contact">
                <Button variant="outline" size="default" className="hidden md:inline-flex uppercase font-extrabold tracking-wide bg-[#f8b21a] hover:bg-[#e5a20c] text-black border-0 shadow-md">
                  LIVE CHAT
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-slate-900/5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-900" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-900" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-3 border-t border-gray-200">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-semibold rounded-lg text-slate-800 hover:text-[#0f2f46] hover:bg-slate-900/5 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" size="lg" className="w-full mt-6 uppercase font-extrabold tracking-wide bg-[#f8b21a] hover:bg-[#e5a20c] text-black border-0 shadow-md">
                  LIVE CHAT
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
