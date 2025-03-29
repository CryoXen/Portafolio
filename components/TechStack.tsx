"use client"

import type React from "react"
import { Code, Figma, Github, Database, Server } from "lucide-react"

// Custom tech icons
const TechIcon = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center mx-3">
    <div className="w-8 h-8 flex items-center justify-center">{children}</div>
    <span className="text-xs mt-1 text-muted-foreground">{name}</span>
  </div>
)

// HTML Icon
const HtmlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M5 3l14 0l-1.5 16.5l-5.5 1.5l-5.5 -1.5l-1.5 -16.5z" />
    <path d="M16 6.5l-8 0l.5 5.5l7 0l-.5 5.5l-3 .75l-3 -.75l-.25 -2.5" />
  </svg>
)

// CSS Icon
const CssIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M5 3l14 0l-1.5 16.5l-5.5 1.5l-5.5 -1.5l-1.5 -16.5z" />
    <path d="M16 6.5l-8 0l.5 5.5l7 0l-.5 5.5l-3 .75l-3 -.75l-.25 -2.5" />
    <path d="M8 12l8 0" />
  </svg>
)

// React Icon
const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="2" />
    <path d="M12 6.5a9 3.5 0 0 1 9 3.5a9 3.5 0 0 1 -9 3.5a9 3.5 0 0 1 -9 -3.5a9 3.5 0 0 1 9 -3.5z" />
    <path d="M6.5 12a9 3.5 0 0 1 3.5 -9a9 3.5 0 0 1 3.5 9a9 3.5 0 0 1 -3.5 9a9 3.5 0 0 1 -3.5 -9z" />
  </svg>
)

// Next.js Icon
const NextjsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
    <path d="M8 14.5l8-5-8-5v10z" />
  </svg>
)

// TypeScript Icon
const TypeScriptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M13 9h4.5a1.5 1.5 0 0 1 0 3h-4.5v-3z" />
    <path d="M13 12h4.5a1.5 1.5 0 0 1 0 3h-4.5v-3z" />
    <path d="M9 9v10" />
    <path d="M6 14h6" />
  </svg>
)

export default function TechStack() {
  const iconSet = (
    <>
      <div className="inline-flex items-center">
        <TechIcon name="HTML">
          <HtmlIcon />
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="CSS">
          <CssIcon />
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="JavaScript">
          <Code />
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="TypeScript">
          <TypeScriptIcon />
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="AnimeJS">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M9 8v8l7-4-7-4z" />
          </svg>
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="GSAP">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
            <path d="M12 7v5l3 3" />
          </svg>
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="Redux">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M16.54 7c-.77-2.6-1.16-3-3.54-3-2.38 0-5 2-5 6s2.62 6 5 6c.27 0 .54 0 .81-.05" />
            <path d="M18.96 11.8c.14 2.1-.14 3.2-2.16 3.2-2.38 0-5-2-5-6s2.62-6 5-6c.27 0 .54 0 .81.05" />
            <path d="M9 16c1.3 0 2.4-.84 2.82-2" />
            <path d="M9 8c1.3 0 2.4.84 2.82 2" />
          </svg>
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="Zustand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M4 6h16v12H4z" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="Node.js">
          <Server />
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="SQL">
          <Database />
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="Git">
          <Github />
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="Photoshop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M7 15V9h2a2 2 0 1 1 0 4H7" />
            <path d="M14 9v6" />
            <path d="M17 9v6" />
          </svg>
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="Illustrator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 15V9" />
            <path d="M15 15V9" />
            <path d="M9 12h6" />
          </svg>
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="Figma">
          <Figma />
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="React">
          <ReactIcon />
        </TechIcon>
      </div>
      <div className="inline-flex items-center">
        <TechIcon name="Next.js">
          <NextjsIcon />
        </TechIcon>
      </div>
    </>
  )

  return (
    <div className="overflow-hidden py-2 relative">
      <div
        className="inline-flex whitespace-nowrap"
        style={{
          animation: "scroll-right 25s linear infinite",
          display: "flex",
          width: "max-content",
        }}
      >
        {iconSet}
        {iconSet}
      </div>
    </div>
  )
}

