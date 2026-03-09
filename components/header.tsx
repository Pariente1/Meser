'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { label: 'Galería', href: '#gallery' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Meser Ingeniería"
            width={120}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-secondary transition-colors duration-300 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:text-secondary hover:bg-secondary/10 rounded-lg transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
