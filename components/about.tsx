'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

// Habilidades de ejemplo
const skills = [
  'Administración Segura de Sistemas Operativos',
  'Configuración y Hardening de Redes',
  'Gestión Segura de la Información en Servidores y Dominios',
  'Gestión Segura de Información XML y Sistemas Empresariales:',
  'HTML/CSS/JavaScript',
  'Conocimientos de Hardware para la Seguridad Física y Lógica',
  'Clonación de discos',
  'Manejo de Scripts Intermedio (Linux, Windows)'
]

export default function About() {
  return (
    <section id='about' className='py-20 bg-black/50'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='relative'
          >
            <div className='relative h-[450px] rounded-2xl overflow-hidden'>
              <Image
                src='https://github.com/BalantryFernando/Portafolio_en_5_minutos_o_mas.../blob/main/Imagenes/Imagen%20pegada.png?raw=true'
                alt='Foto de perfil'
                fill
                className='object-cover'
              />
            </div>
            {/* Decorative elements */}
            <div className='absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl -z-10'></div>
            <div className='absolute -top-6 -left-6 w-48 h-48 bg-accent/5 rounded-full filter blur-3xl -z-10'></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-accent font-medium mb-2'>Sobre Mí</h2>
            <h3 className='text-3xl md:text-4xl font-bold font-heading mb-6'>
              SysAdmin Junior
            </h3>

            <p className='text-foreground/80 mb-6'>
              Soy Fernando Carrasco, estudiante de 20 años en el primer curso de
              ASIR. Soy un amante del fútbol desde que tengo memoria y juego
              como defensa a nivel amateur desde hace 2 años. He liderado a mi
              equipo bajo presión, logrando victorias decisivas en momentos
              importantes. Lo que me ha enseñado a desarrollar habilidades
              valiosas como mantener la calma en situaciones exigentes y ser
              perseverante ante cualquier desafío...
            </p>

            <p className='text-foreground/80 mb-8'>
              He aprendido a ser realista con mi entorno para aprovechar al
              máximo las capacidades de mi equipo con los recursos disponibles.
              Ahora, aspiro a contribuir en este sector cada vez más conectado,
              aportando mi disciplina y mi capacidad de adaptación para abordar
              desafíos técnicos en la administración de redes, enfocándome en la
              búsqueda de soluciones eficaces.
            </p>

            <div className='grid grid-cols-2 gap-3 mb-8'>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className='flex items-center'
                >
                  <CheckCircle className='h-5 w-5 text-accent mr-2' />
                  <span className='text-foreground/90'>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
