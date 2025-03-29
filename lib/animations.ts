import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const fadeIn = (element: Element) => {
  gsap.fromTo(element, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
}

export const staggerFadeIn = (elements: Element[]) => {
  gsap.fromTo(elements, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" })
}

export const slideIn = (element: Element, direction: "left" | "right") => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
    },
  )
}

export const setupScrollAnimations = (sections: HTMLElement[]) => {
  sections.forEach((section) => {
    gsap.fromTo(
      section.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
        },
      },
    )
  })
}

export const smoothScroll = (target: string) => {
  gsap.to(window, { duration: 1, scrollTo: target, ease: "power3.in" })
}

