import { useEffect, useState } from 'react'

export const useScrollBackground = () => {
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const sections = [
      { id: 'hero', selector: '[data-scroll="hero"]' },
      { id: 'about', selector: '[data-scroll="about"]' },
      { id: 'technologies', selector: '[data-scroll="technologies"]' },
      { id: 'experience', selector: '[data-scroll="experience"]' },
      { id: 'projects', selector: '[data-scroll="projects"]' },
      { id: 'certifications', selector: '[data-scroll="certifications"]' },
      { id: 'contact', selector: '[data-scroll="contact"]' },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const section = sections.find(s => 
              entry.target.matches(s.selector)
            )
            if (section) {
              setCurrentSection(section.id)
            }
          }
        })
      },
      {
        threshold: [0.5],
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    sections.forEach(section => {
      const element = document.querySelector(section.selector)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return currentSection
}