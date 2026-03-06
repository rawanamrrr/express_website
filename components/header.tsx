'use client'

import { useEffect, useRef, useState } from 'react'
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
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ]

  const [desktopPinned, setDesktopPinned] = useState(false)
  const [stickyStart, setStickyStart] = useState<number | null>(null)
  const whiteBarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const computeStickyStart = () => {
      if (typeof window === 'undefined') return
      if (window.innerWidth < 768) {
        setStickyStart(null)
        setDesktopPinned(false)
        return
      }

      const el = whiteBarRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const scrollY = window.scrollY || window.pageYOffset
      setStickyStart(scrollY + rect.top)
    }

    computeStickyStart()
    window.addEventListener('resize', computeStickyStart)

    return () => {
      window.removeEventListener('resize', computeStickyStart)
    }
  }, [])

  useEffect(() => {
    if (stickyStart === null) return

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setDesktopPinned(false)
        return
      }

      setDesktopPinned(window.scrollY >= stickyStart)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [stickyStart])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white text-[#003293] md:static">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center h-full">
                <img src="/logo.png" alt="Express INC. Logo" className="h-28 md:h-35 w-auto object-contain" />
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6 pr-6 border-r border-white/20">
                {/* Phone block */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-full bg-[#f58d13]/15 p-2">
                    <Phone className="w-4 h-4 text-[#f58d13]" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs uppercase tracking-wide text-[#003293]/70">Call us now</span>
                    <a
                      href="tel:+201027227142"
                      className="text-sm font-semibold text-[#f8b21a] hover:text-[#f8b21a]"
                    >
                      +201027227142
                    </a>
                  </div>
                </div>

                {/* Availability block */}
                <div className="flex items-center gap-2 text-right text-xs">
                  <Clock className="w-4 h-4 text-[#f58d13]" />
                  <div className="flex flex-col leading-tight">
                    <span className="uppercase tracking-wide text-[#f58d13]">We are Available</span>
                    <span className="text-[#003293]">24/7 for You</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <Link href="#" aria-label="Twitter" className="hover:text-[#f8b21a]"><Twitter className="w-4 h-4" /></Link>
                <Link href="#" aria-label="Facebook" className="hover:text-[#f8b21a]"><Facebook className="w-4 h-4" /></Link>
                <Link href="#" aria-label="YouTube" className="hover:text-[#f8b21a]"><Youtube className="w-4 h-4" /></Link>
                <Link href="#" aria-label="Instagram" className="hover:text-[#f8b21a]"><Instagram className="w-4 h-4" /></Link>
                <Link href="#" aria-label="LinkedIn" className="hover:text-[#f8b21a]"><Linkedin className="w-4 h-4" /></Link>
                <Link href="mailto:info@example.com" aria-label="Email" className="hover:text-[#f8b21a]"><Mail className="w-4 h-4" /></Link>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-slate-900/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#003293]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#003293]" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={whiteBarRef}
        className={`bg-gradient-to-b from-[#003293] to-[#011d54] border-b border-[#011d54] ${mobileMenuOpen ? 'fixed inset-x-0 top-0 z-40 pt-20 md:pt-0' : ''} ${desktopPinned ? 'md:fixed md:top-0 md:left-0 md:right-0 md:z-40' : 'md:static'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative hidden h-14 items-center justify-between md:flex">
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
                  className="relative text-sm md:text-white font-semibold uppercase tracking-wide text-slate-900 transition-all duration-300 hover:text-[#f58d13] group pr-6 mr-6 border-r border-black/10 last:pr-0 last:mr-0 last:border-r-0"
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f58d13] to-[#18b6c8] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 ml-auto">
              {/* CTA Button - Desktop */}
              <a
                href="https://wa.me/2001097178002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="default"
                  className="hidden md:inline-flex uppercase font-extrabold tracking-wide bg-[#f58d13] hover:bg-[#e67e00] text-white border-0 shadow-md"
                >
                  LIVE CHAT
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-3 border-t border-gray-200">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-semibold rounded-lg text-white hover:text-[#f58d13] hover:bg-slate-900/5 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/2001097178002"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full mt-6 uppercase font-extrabold tracking-wide bg-[#f58d13] hover:bg-[#e67e00] text-white border-0 shadow-md"
                >
                  LIVE CHAT
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
