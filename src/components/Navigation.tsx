import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card border-b border-[hsl(var(--border)/0.3)]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              CS
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium hover:gradient-text"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="glass-card-hover w-10 h-10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-card border-t border-[hsl(var(--border)/0.3)] mt-2 mb-4 p-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2 hover:gradient-text"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation