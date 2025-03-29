/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useRef, useState } from "react"

interface ScrambleTextProps {
  phrases: string[]
  speed?: number
  scrambleSpeed?: number
  pauseDuration?: number
}

export function ScrambleText({ phrases, speed = 50, scrambleSpeed = 20, pauseDuration = 5000 }: ScrambleTextProps) {
  const [currentText, setCurrentText] = useState("")
  const [isScrambling, setIsScrambling] = useState(false)
  const currentPhraseIndex = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Caracteres para el efecto scramble
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/"

  // Función para generar texto aleatorio de la misma longitud que el texto objetivo
  const generateRandomText = (length: number) => {
    return Array(length)
      .fill("")
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("")
  }

  // Función para mezclar gradualmente el texto actual con el texto objetivo
  const scrambleToText = (targetText: string) => {
    setIsScrambling(true)
    let iteration = 0
    const maxIterations = 20 // Número de iteraciones para completar la transición

    const doScramble = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      if (iteration >= maxIterations) {
        setCurrentText(targetText)
        setIsScrambling(false)

        // Configurar el temporizador para la próxima palabra
        pauseTimeoutRef.current = setTimeout(() => {
          currentPhraseIndex.current = (currentPhraseIndex.current + 1) % phrases.length
          scrambleToText(phrases[currentPhraseIndex.current])
        }, pauseDuration)

        return
      }

      // Calcular cuántos caracteres deben ser correctos en esta iteración
      const progress = iteration / maxIterations
      const targetLength = targetText.length
      const correctCharCount = Math.floor(progress * targetLength)

      // Construir el texto mezclado
      let scrambledText = ""
      for (let i = 0; i < targetLength; i++) {
        if (i < correctCharCount) {
          scrambledText += targetText[i]
        } else {
          scrambledText += chars[Math.floor(Math.random() * chars.length)]
        }
      }

      setCurrentText(scrambledText)
      iteration++

      timeoutRef.current = setTimeout(doScramble, scrambleSpeed)
    }

    doScramble()
  }

  // Iniciar la animación al montar el componente
  useEffect(() => {
    scrambleToText(phrases[0])

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current)
    }
  }, [])

  return <span>{currentText}</span>
}

