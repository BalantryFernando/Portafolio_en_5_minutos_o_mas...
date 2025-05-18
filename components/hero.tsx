'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const rect = containerRef.current.getBoundingClientRect()

      const x = clientX - rect.left
      const y = clientY - rect.top

      containerRef.current.style.setProperty('--mouse-x', `${x}px`)
      containerRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      id='home'
      ref={containerRef}
      className='relative min-h-screen flex items-center justify-center py-20 overflow-hidden'
      style={{
        background:
          'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(123, 97, 255, 0.15), transparent 800px), #050505'
      }}
    >
      <div className='container mx-auto px-4 z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-accent font-medium mb-4'>¡Hola! Soy</h2>
            <h1 className='text-4xl md:text-6xl font-bold font-heading mb-6'>
              Fernando
            </h1>
            <p className='text-xl md:text-2xl text-foreground/80 mb-8'>
              SysAdmin Junior
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-wrap justify-center gap-4 mb-12'
          >
            <Button
              size='lg'
              className='bg-accent hover:bg-accent/80 text-white'
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Ver Proyectos
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-accent text-accent hover:bg-accent/10'
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Contactar
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex justify-center space-x-4'
          >
            <a
              href='https://www.linkedin.com/in/balantrym'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-background/30 backdrop-blur-sm p-3 rounded-full hover:bg-accent/20 transition-colors duration-300'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-6 w-6 text-accent' />
            </a>
            <a
              href='https://github.com/BalantryFernando'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-background/30 backdrop-blur-sm p-3 rounded-full hover:bg-accent/20 transition-colors duration-300'
              aria-label='GitHub'
            >
              <Github className='h-6 w-6 text-accent' />
            </a>
          </motion.div>
        </div>
      </div>

      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <button
          onClick={() =>
            document
              .getElementById('projects')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label='Scroll down'
          className='text-foreground/60 hover:text-accent transition-colors duration-300'
        >
          <ArrowDown className='h-6 w-6' />
        </button>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl'></div>
      <div className='absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl'></div>
    </section>
  )
}
