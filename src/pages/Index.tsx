import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Technologies from "@/components/Technologies"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { useLenis } from "@/hooks/useLenis"
import { useScrollBackground } from "@/hooks/useScrollBackground"
import { useEffect } from "react"

const Index = () => {
  useLenis()
  const currentSection = useScrollBackground()

  useEffect(() => {
    const backgroundMap = {
      hero: 'hsl(var(--bg-hero))',
      about: 'hsl(var(--bg-about))',
      technologies: 'hsl(var(--bg-technologies))',
      experience: 'hsl(var(--bg-experience))',
      projects: 'hsl(var(--bg-projects))',
      certifications: 'hsl(var(--bg-certifications))',
      contact: 'hsl(var(--bg-contact))',
    }

    document.body.style.backgroundColor = backgroundMap[currentSection as keyof typeof backgroundMap] || backgroundMap.hero
    document.body.style.transition = 'var(--transition-bg)'
  }, [currentSection])

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section data-scroll="hero">
          <Hero />
        </section>
        <section data-scroll="about">
          <About />
        </section>
        <section data-scroll="technologies">
          <Technologies />
        </section>
        <section data-scroll="experience">
          <Experience />
        </section>
        <section data-scroll="projects">
          <Projects />
        </section>
        <section data-scroll="certifications">
          <Certifications />
        </section>
        <section data-scroll="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Index