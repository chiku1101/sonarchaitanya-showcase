import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-background via-[hsl(var(--background))] to-[hsl(var(--card-glass))]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Let's Connect!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm open to new opportunities, collaborations, and tech discussions. 
            Feel free to reach out via email, LinkedIn, or GitHub!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
                <p className="text-muted-foreground">Let's discuss your project</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="glass-card border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="glass-card border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input 
                  placeholder="Project discussion, collaboration, etc."
                  className="glass-card border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  rows={5}
                  className="glass-card border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] bg-background/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">chaitanya@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Available for Remote Work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="glass-card-hover h-auto p-4 flex-col gap-3"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  <Github className="w-8 h-8 text-foreground" />
                  <span className="text-sm font-medium">GitHub</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="glass-card-hover h-auto p-4 flex-col gap-3"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="w-8 h-8 text-foreground" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </Button>
              </div>
            </div>

            {/* Availability Status */}
            <Card className="glass-card p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Open to full-time opportunities and exciting projects
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact