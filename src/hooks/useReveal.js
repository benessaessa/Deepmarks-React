import { useEffect } from 'react'

export const useReveal = (pathname) => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    if (!reveals.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    reveals.forEach((reveal) => observer.observe(reveal))

    return () => observer.disconnect()
  }, [pathname])
}

