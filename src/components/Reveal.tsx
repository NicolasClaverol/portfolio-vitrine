'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Si déjà visible au montage (ex. sections en haut de page), déclenche immédiatement
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      console.log('[Reveal] déjà visible au montage, delay=', delay)
      setTimeout(() => el.classList.add('in-view'), delay)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('[Reveal] in-view déclenché, delay=', delay, el)
          setTimeout(() => el.classList.add('in-view'), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
