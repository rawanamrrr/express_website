'use client'

import { useState } from 'react'
import { Menu, X, Anchor } from 'lucide-react'
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
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full cursor-pointer group transition-all duration-300 hover:scale-[1.02]">
            <div className="relative h-[110%] -mt-2">
              <img 
                src="/logo.png" 
                alt="Express INC. Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-base font-semibold text-foreground/80 transition-all duration-300 hover:text-primary group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            {/* CTA Button - Desktop */}
            <Link href="/contact">
              <Button variant="luxury" size="default" className="hidden md:inline-flex shadow-luxury hover:shadow-luxury-lg">
                Request Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-3 border-t border-border/50">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-lg font-semibold rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="luxury" size="lg" className="w-full mt-6 shadow-luxury">
                Request Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
