/* eslint-disable react/no-unescaped-entities */
"use client"

import { ThemeProvider } from "@/lib/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { useEffect, useRef, useState } from "react"
import { fadeIn } from "@/lib/animations"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { HolographicScene } from "@/components/HolographicScene"
import CustomCursor from "@/components/CustomCursor"
import TechStack from "@/components/TechStack"

gsap.registerPlugin(ScrollTrigger)


const projects = [
  {
    title: "Zentry Remake",
    description:
      "A comprehensive design system built with React and Tailwind CSS. Features modern UI components and responsive layouts.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "LastWrapped",
    description: "An e-commerce platform with real-time inventory management and seamless payment integration.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Project 3",
    description: "A mobile-first web application for tracking personal fitness goals and nutrition.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Project 4",
    description: "An AI-powered content management system with advanced search capabilities.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("projects")
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const sections = sectionRefs.current.filter((el): el is HTMLElement => el !== null)

    sections.forEach((section) => {
      fadeIn(section)

      gsap.fromTo(
        section.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.5,
          ease: "power3.Out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveSection(section.id),
            onEnterBack: () => setActiveSection(section.id),
          },
        },
      )
    })

    // Smooth scroll
    const smoothScroll = (target: string) => {
      gsap.to(window, { duration: 1, scrollTo: target, ease: "power3.inOut" })
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
        if (target) smoothScroll(target)
      })
    })
  }, [])

  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="relative min-h-screen bg-background text-foreground"
       style={{ cursor: "none" }} >
        <style jsx global>{`
          * {
            cursor: none !important;
          }
          input, textarea, [contenteditable="true"] {
            caret-color: transparent !important;
          }
        `}</style>
        <Sidebar activeSection={activeSection} />
        <main className="md:ml-48 relative z-0">
          

          <section
            ref={(el) => { sectionRefs.current[0] = el; }}
            id="info"
            className="min-h-screen flex flex-col items-center justify-center p-6 gap-8 mb-20"
          >
            <div className="max-w-4xl w-full">
              <h2 className="text-4xl font-light text-center">Información</h2>

              {/* Escena holográfica */}
              <HolographicScene />

              <div className="mt-3 space-y-6">
                <div className="bg-accent/10 backdrop-blur-sm p-6 rounded-lg border border-accent/20">
                  <p className="mb-4 text-lg text-fuchsia-300  text-center">
                    Ingeniero en desarrollo y gestión de software con experiencia en UX/UI y desarrollo web.
                  </p>
                  <p className="mb-4 text-justify">
                  Tengo la certeza de que la web es una ventana a una segunda realidad. 
                  Por ese mismo motivo, me empeño en crear diseños para conectar con la gente y crear una experiencias únicas. 
                  Busco diversificar, expandir mi conocimiento y trabajo para ampliar las posibilidades del desarrollo web. 
                  Así como buscar nuevas expresiones y pensamientos, empujando el límite de lo que es posible en el entorno digital.
                  </p>
                  <p className="mb-4 justify-center">
                    Disponible a colaboración y participación activa en proyectos con integración de tecnologias.
                    
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-accent/10 backdrop-blur-sm p-4 rounded-lg border border-accent/20">
                    <h3 className="text-xl mb-2">Experiencia</h3>
                    <p className="text-muted-foreground">1 año de desarrollo FullStack: <br />
                    -Dashboard enfocado a servicios medicos y citas en linea. <br />
                    -Creacion de SPA para Ferreteria con chatbot de pedidos.</p>
                  </div>
                  <div className="bg-accent/10 backdrop-blur-sm p-4 rounded-lg border border-accent/20">
                    <h3 className="text-xl mb-2">Herramientas</h3>
                    <TechStack />
                  </div>
                  <div className="bg-accent/10 backdrop-blur-sm p-4 rounded-lg border border-accent/20">
                    <h3 className="text-xl mb-2">Enfoque</h3>
                    <p className="text-muted-foreground">Profundizar y especializarme en FrontEnd, planeacion, maquetación y desarrollo de proyectos web modernos.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={(el) => { sectionRefs.current[1] = el; }}
            id="projects"
            className="min-h-screen flex items-center justify-center p-6 mb-20"
          >
            <div className="max-w-4xl w-full">
              <h2 className="text-4xl font-light mb-12 text-center">Proyectos</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={index}>
                      <div className="flex flex-col items-center">
                        <div className="relative w-full aspect-[3/2] mb-6">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                        <p className="text-muted-foreground text-center max-w-lg">{project.description}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </section>

          <section
            ref={(el) => { sectionRefs.current[2] = el; }}
            id="contact"
            className="min-h-screen flex items-center justify-center p-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl font-light mb-6">Contact</h2>
              <p className="mb-4">Email: your.email@example.com</p>
              <p className="mb-4">Phone: +1 234 567 8900</p>
              <p>Social Media: @yourhandle</p>
            </div>
          </section>

        </main>
      </div>
    </ThemeProvider>
  )
}

