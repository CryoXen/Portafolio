/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorImg, setCursorImg] = useState("/cursor.png")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar si el dispositivo es móvil
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches)
    }

    checkMobile() // Ejecutar al montar
    window.addEventListener("resize", checkMobile) // Verificar en redimensionamiento

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return // Si es móvil, no hacer nada

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          duration: 0.1,
          x: e.clientX,
          y: e.clientY,
          ease: "power3.out",
        })
      }
    }

    const interactiveSelectors = "a, button, input, textarea, [role='button']"

    const handleMouseOver = (e: MouseEvent) => {
      let target = e.target as HTMLElement
    
      // Si el elemento no es interactivo, verificar su padre (para el caso de imágenes dentro de <a>)
      if (!target.matches(interactiveSelectors) && target.parentElement) {
        target = target.parentElement
      }
    
      if (target && target.matches(interactiveSelectors)) {
        setCursorImg("/seleccion.png")
      }
    }
    
    const handleMouseOut = (e: MouseEvent) => {
      let target = e.target as HTMLElement
    
      if (!target.matches(interactiveSelectors) && target.parentElement) {
        target = target.parentElement
      }
    
      if (target && target.matches(interactiveSelectors)) {
        setCursorImg("/cursor.png")
      }
    }
    

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, [isMobile])

  if (isMobile) return null // No renderizar el cursor en móviles

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
    >
      <div
        ref={cursorRef}
        style={{
          position: "absolute",
          width: "32px",
          height: "32px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={cursorImg}
          alt="Custom Cursor"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  )
}

export default CustomCursor
