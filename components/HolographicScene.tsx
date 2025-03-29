/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"


import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Html, PerspectiveCamera, Text3D, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { type Mesh, AmbientLight, Color, Object3D } from "three"

function HolographicSphere({ scrollProgress = 0 }) {
  const meshRef = useRef<Mesh>(null)
  const materialRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)

  // Definimos los colores para diferentes estados del scroll
  const colors = {
    start: new Color("#7209b7"),// Púrpura 
    middle: new Color("#4cc9f0"), // Azul claro
    end: new Color("#C8A2C8"), // Lila
  }

  useFrame((state) => {
    if (meshRef.current) {
      // Movimiento base suave
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
      meshRef.current.rotation.y = Math.cos(time * 0.2) * 0.1
    }
  })

  useEffect(() => {
    if (materialRef.current) {
      // Interpolar entre colores basado en el scroll
      const currentColor = new Color()
      if (scrollProgress < 0.5) {
        currentColor.lerpColors(colors.start, colors.middle, scrollProgress * 2)
      } else {
        currentColor.lerpColors(colors.middle, colors.end, (scrollProgress - 0.5) * 2)
      }
      materialRef.current.color = currentColor

      // Ajustar distorsión basada en el scroll
      materialRef.current.distort = 0.2 + scrollProgress * 0.8

      // Ajustar velocidad de animaciónhttps://www.linkedin.com/in/christian-rub%C3%AD-cirilo-300a1a350/
      materialRef.current.speed = 2 + scrollProgress * 5
    }

    if (meshRef.current) {
      // Ajustar escala basada en el scroll
      const scale = 1 + scrollProgress * 0.3
      meshRef.current.scale.set(scale, scale, scale)
    }
  }, [scrollProgress, colors.start, colors.middle, colors.end])

  return (
    <Sphere
      ref={meshRef}
      args={[1, 64, 64]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        ref={materialRef}
        envMapIntensity={0.5}
        clearcoat={1}
        clearcoatRoughness={1}
        metalness={0.8}
        transparent
        opacity={0.9}
        distort={0.2}
        speed={2}
      />
    </Sphere>
  )
}



function InfoCard({
  children,
}: {
  children: React.ReactNode

}) {
  return (
    <Html>
      <div
        className="bg-background/30 backdrop-blur-lg p-4 rounded-lg border border-accent w-64 text-center"  
        style={{ transform: "translateX(-50%)" }}
      >
        {children}
      </div>
    </Html>
  )
}

export function HolographicScene() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calcular el progreso del scroll
      let progress = 0

      // Si el elemento está completamente por encima de la ventana
      if (rect.bottom <= 0) {
        progress = 1
      }
      // Si el elemento está completamente por debajo de la ventana
      else if (rect.top >= windowHeight) {
        progress = 0
      }
      // Si el elemento está parcialmente visible
      else {
        progress = 1 - rect.bottom / (windowHeight + rect.height)
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Llamada inicial

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="w-full h-[600px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Environment preset="dawn" />
{/* 
        <AmbientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} /> */}

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <HolographicSphere scrollProgress={scrollProgress} />
        </Float>



        <InfoCard>
          <p className=" items-center justify-center text-foreground text-lg">Apasionado por el diseño y la tecnología</p>
        </InfoCard>
      </Canvas>
    </div>
  )
}

