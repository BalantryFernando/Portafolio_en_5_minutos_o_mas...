'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Contacto', href: '#contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <Link
          href='#home'
          className='text-2xl font-bold font-heading text-primary'
        >
          Soy Fernando<span className='text-accent'>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-foreground/80 hover:text-accent transition-colors duration-300 font-medium'
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className='md:hidden text-foreground'
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col justify-center items-center md:hidden transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <nav className='flex flex-col space-y-8 items-center'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-xl font-medium text-foreground/80 hover:text-accent transition-colors duration-300'
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
