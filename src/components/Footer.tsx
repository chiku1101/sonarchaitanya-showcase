import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-[hsl(var(--border)/0.3)]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold gradient-text">
              Chaitanya Sonar
            </h3>
            <p className="text-muted-foreground max-w-md">
              Full Stack Developer crafting digital experiences with passion and precision
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button 
              size="icon" 
              variant="ghost" 
              className="glass-card-hover w-12 h-12 rounded-xl"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="glass-card-hover w-12 h-12 rounded-xl"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="glass-card-hover w-12 h-12 rounded-xl"
              onClick={() => window.location.href = 'mailto:chaitanya@example.com'}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          {/* Quote */}
          <div className="glass-card p-6 max-w-2xl">
            <blockquote className="text-lg text-muted-foreground italic">
              "Technology is more than just code for me—it's about problem-solving, 
              innovation, and making an impact."
            </blockquote>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-[hsl(var(--border)/0.3)] w-full">
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Chaitanya Sonar. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer