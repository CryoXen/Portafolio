"use client"

import { Moon, Sun, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/theme-provider"
import { useEffect, useRef, useState } from "react"
import { slideIn } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { ScrambleText } from "./DynamicTitle"

interface SidebarProps {
  activeSection: string
}

export function Sidebar({ activeSection }: SidebarProps) {
  const { theme, setTheme } = useTheme()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const dynamicPhrases = ["Designer", "Creative", "Machine", "Prisms", "Developer"]

  useEffect(() => {
    if (sidebarRef.current) {
      slideIn(sidebarRef.current, "left")
    }
  }, [])

  const navItems = [
    { href: "#info", label: "Información" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
    
  ]

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="fixed top-4 right-4 z-50 p-2 md:hidden">
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full w-[80%] max-w-sm bg-background z-50 p-6 transition-transform duration-300 ease-in-out transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <h1 className="text-3xl font-light tracking-wide">Christian Rubi</h1>
            <div className="text-sm text-muted-foreground">
              Human & <ScrambleText phrases={dynamicPhrases} />
            </div>
          </div>

          <nav className="flex-1 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleMobileNavClick}
                className={cn(
                  "block text-lg text-muted-foreground hover:text-foreground transition-colors duration-200",
                  activeSection === item.href.slice(1) && "text-foreground font-medium",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full cursor-pointer w-10 mt-auto"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed left-0 top-0 h-full w-48 p-6 flex flex-col bg-background border-r z-40 hidden md:flex"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-wide">Christian Rubi</h1>
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <span>Human &</span> <ScrambleText phrases={dynamicPhrases} />
          </div>
        </div>

        <nav className="flex-1 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-200",
                activeSection === item.href.slice(1) && "text-foreground font-medium",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </>
  )
}

