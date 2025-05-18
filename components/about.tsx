"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

// Habilidades de ejemplo
const skills = [
  "Diseño UX/UI",
  "Desarrollo Frontend",
  "Diseño Responsivo",
  "Prototipado",
  "HTML/CSS/JavaScript",
  "React/Next.js",
  "Figma/Adobe XD",
  "Tailwind CSS",
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[450px] rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=900&width=600" alt="Foto de perfil" fill className="object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-medium mb-2">Sobre Mí</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">Diseñador UX/UI & Desarrollador Web</h3>

            <p className="text-foreground/80 mb-6">
              Soy un diseñador UX/UI y desarrollador web apasionado por crear experiencias digitales atractivas y
              funcionales. Con más de 5 años de experiencia en la industria, me especializo en transformar ideas
              complejas en interfaces intuitivas y visualmente atractivas.
            </p>

            <p className="text-foreground/80 mb-8">
              Mi enfoque combina principios de diseño centrado en el usuario con habilidades técnicas sólidas, lo que me
              permite no solo diseñar sino también implementar soluciones completas. Me encanta colaborar en equipos
              multidisciplinarios y enfrentar nuevos desafíos creativos.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span className="text-foreground/90">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
