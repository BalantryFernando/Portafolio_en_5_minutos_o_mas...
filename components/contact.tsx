'use client'

import type React from 'react'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: 'Mensaje enviado',
      description: 'Gracias por contactarme. Te responderé lo antes posible.'
    })

    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id='contact' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-accent font-medium mb-2'>Contacto</h2>
            <h3 className='text-3xl md:text-4xl font-bold font-heading mb-4'>
              ¿Soy lo que estas buscando?
            </h3>
            <p className='text-foreground/70 max-w-2xl mx-auto'>
              Estoy disponible para todo tipo de proyectos, colaborar o
              simplemente charlar sobre este mundo dinamico.
            </p>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-card rounded-xl p-8 shadow-lg h-full'>
              <h4 className='text-xl font-bold mb-6'>
                Información de Contacto
              </h4>

              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='bg-accent/10 p-3 rounded-full mr-4'>
                    <Mail className='h-5 w-5 text-accent' />
                  </div>
                  <div>
                    <h5 className='font-medium mb-1'>Email</h5>
                    <p className='text-foreground/70'>manggobetch@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-accent/10 p-3 rounded-full mr-4'>
                    <Phone className='h-5 w-5 text-accent' />
                  </div>
                  <div>
                    <h5 className='font-medium mb-1'>Teléfono</h5>
                    <p className='text-foreground/70'>+34 623 208 148</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-accent/10 p-3 rounded-full mr-4'>
                    <MapPin className='h-5 w-5 text-accent' />
                  </div>
                  <div>
                    <h5 className='font-medium mb-1'>Ubicación</h5>
                    <p className='text-foreground/70'>
                      Madrid, España, C. San Juan de Mata 11
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-10'>
                <h4 className='text-xl font-bold mb-4'>Sígueme</h4>
                <div className='flex space-x-4'>
                  <a
                    href='#'
                    className='bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors duration-300'
                    aria-label='LinkedIn'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='text-accent'
                    >
                      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                      <rect x='2' y='9' width='4' height='12'></rect>
                      <circle cx='4' cy='4' r='2'></circle>
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors duration-300'
                    aria-label='GitHub'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='text-accent'
                    >
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors duration-300'
                    aria-label='Twitter'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='text-accent'
                    >
                      <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='bg-card rounded-xl p-8 shadow-lg'>
              <h4 className='text-xl font-bold mb-6'>Envíame un mensaje</h4>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium mb-2'
                  >
                    Nombre
                  </label>
                  <Input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=''
                    required
                    className='bg-background/50 border-accent/20 focus-visible:ring-accent'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium mb-2'
                  >
                    Email
                  </label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='manggobetch@gmail.com'
                    required
                    className='bg-background/50 border-accent/20 focus-visible:ring-accent'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium mb-2'
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Dime que tienes pensaodo...'
                    rows={5}
                    required
                    className='bg-background/50 border-accent/20 focus-visible:ring-accent'
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full bg-accent hover:bg-accent/80'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className='flex items-center'>
                      <svg
                        className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className='flex items-center'>
                      <Send className='h-4 w-4 mr-2' />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
