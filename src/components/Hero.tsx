import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import profileImage from "@/assets/profile-picture.png"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold gradient-text leading-tight">
                Chaitanya Sonar
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold text-accent">
                  Elevate Your Vision
                </h2>
                <p className="text-xl lg:text-2xl gradient-text-secondary font-medium">
                  Full Stack Developer 🚀
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Crafting seamless digital experiences through clean code, innovative design, 
              and a passion for problem-solving. Let's transform ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card hover:bg-[hsl(var(--card-glass)/0.7)] border-[hsl(var(--primary)/0.3)] text-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button size="icon" variant="ghost" className="glass-card-hover w-12 h-12 rounded-xl">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="glass-card-hover w-12 h-12 rounded-xl">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="glass-card-hover w-12 h-12 rounded-xl">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow" />
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card p-2">
                <img 
                  src={profileImage} 
                  alt="Chaitanya Sonar - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero