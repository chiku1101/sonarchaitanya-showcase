import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Food Ordering System",
      description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "Python", "Django", "SQL"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "E-commerce Platform", 
      description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "Django", "PostgreSQL"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop", 
      technologies: ["Tailwind CSS", "React", "JavaScript"],
      github: "#",
      demo: "#",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-background via-[hsl(var(--background))] to-[hsl(var(--card-glass))]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glass-card-hover group overflow-hidden ${
                project.featured ? 'lg:col-span-1 xl:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 lg:h-56">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-[hsl(var(--muted))] text-muted-foreground text-xs rounded-full hover:bg-gradient-primary hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 glass-card hover:bg-[hsl(var(--card-glass)/0.7)]">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="glass-card-hover px-8 py-3 text-lg"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects