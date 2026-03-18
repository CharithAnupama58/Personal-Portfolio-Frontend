import { useEffect, useRef } from 'react'

/**
 * Attaches a reveal-on-scroll observer to a container ref.
 * All children with class "reveal" become visible when they enter the viewport.
 */
export default function useReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    const container = ref.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => elements.forEach((el) => observer.unobserve(el))
  }, [threshold])

  return ref
}