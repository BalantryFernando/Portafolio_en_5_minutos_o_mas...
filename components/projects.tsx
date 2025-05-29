'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

// Datos de ejemplo para los proyectos
const projects = [
  {
    id: 1,
    title: 'Proyecto1',
    description: 'Información sobre Proyecto 1',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['tecnologia1', 'tecnologia2', 'tecnologia3'],
    demoUrl: '#',
    githubUrl: '#',
    fullDescription: 'Información relevante sobre Proyecto'
  },
  {
    id: 2,
    title: 'Proyecto2',
    description: 'Información sobre Proyecto 2',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['tecnologia1', 'tecnologia2', 'tecnologia3'],
    demoUrl: '#',
    githubUrl: '#',
    fullDescription: 'Información relevante sobre Proyecto'
  },
  {
    id: 3,
    title: 'Proyecto3',
    description: 'Información sobre Proyecto 3',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['tecnologia1', 'tecnologia2', 'tecnologia3'],
    demoUrl: '#',
    githubUrl: '#',
    fullDescription: 'Información relevante sobre Proyecto'
  },
  {
    id: 4,
    title: 'Proyecto4',
    description: 'Información sobre Proyecto 4',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['tecnologia1', 'tecnologia2', 'tecnologia3'],
    demoUrl: '#',
    githubUrl: '#',
    fullDescription: 'Información relevante sobre Proyecto'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id='projects' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-accent font-medium mb-2'>Mi Trabajo</h2>
            <h3 className='text-3xl md:text-4xl font-bold font-heading mb-4'>
              Proyectos Destacados
            </h3>
            <p className='text-foreground/70 max-w-2xl mx-auto'>
              La selección de mis proyectos mas recientes en el mundo de la
              informatica.
            </p>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className='bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-pointer group'
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <div className='relative h-60 overflow-hidden'>
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                    </div>
                    <div className='p-6'>
                      <h4 className='text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300'>
                        {project.title}
                      </h4>
                      <p className='text-foreground/70 mb-4'>
                        {project.description}
                      </p>
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className='text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className='flex items-center text-sm text-foreground/60'>
                        <span className='group-hover:text-accent transition-colors duration-300'>
                          Ver detalles
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className='sm:max-w-3xl bg-card'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='relative h-60 md:h-full rounded-lg overflow-hidden'>
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold mb-3'>
                        {project.title}
                      </h3>
                      <p className='text-foreground/70 mb-4'>
                        {project.fullDescription}
                      </p>
                      <div className='flex flex-wrap gap-2 mb-6'>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className='text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className='flex flex-wrap gap-3'>
                        <Button
                          className='bg-accent hover:bg-accent/80'
                          size='sm'
                          asChild
                        >
                          <a
                            href={project.demoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='h-4 w-4 mr-2' />
                            Ver Demo
                          </a>
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='border-accent text-accent hover:bg-accent/10'
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='h-4 w-4 mr-2' />
                            Ver Código
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
