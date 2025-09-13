const Technologies = () => {
  const technologies = [
    {
      name: "React",
      category: "Frontend",
      level: "Expert",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Next.js", 
      category: "Framework",
      level: "Expert",
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "Node.js",
      category: "Backend", 
      level: "Expert",
      color: "from-green-400 to-green-600"
    },
    {
      name: "MongoDB",
      category: "Database",
      level: "Advanced",
      color: "from-green-500 to-green-700"
    },
    {
      name: "PostgreSQL",
      category: "Database",
      level: "Advanced", 
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Express.js",
      category: "Backend",
      level: "Expert",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Python",
      category: "Language",
      level: "Advanced",
      color: "from-yellow-400 to-blue-500"
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      level: "Expert", 
      color: "from-cyan-400 to-cyan-600"
    },
    {
      name: "JavaScript",
      category: "Language",
      level: "Expert",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Redis",
      category: "Cache",
      level: "Intermediate",
      color: "from-red-400 to-red-600"
    },
    {
      name: "Blockchain",
      category: "Technology",
      level: "Intermediate",
      color: "from-purple-400 to-purple-600"
    }
  ]

  const categories = [...new Set(technologies.map(tech => tech.category))]

  return (
    <section id="technologies" className="py-20 px-6 bg-gradient-to-br from-background via-[hsl(var(--background))] to-[hsl(var(--card-glass))]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Technologies & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build amazing digital experiences
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="glass-card-hover p-6 group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${tech.color} opacity-80`} />
                  <span className="text-xs text-muted-foreground bg-[hsl(var(--muted))] px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {tech.level}
                  </p>
                </div>

                {/* Skill Level Bar */}
                <div className="w-full bg-[hsl(var(--muted))] rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                    style={{ 
                      width: tech.level === 'Expert' ? '90%' : 
                             tech.level === 'Advanced' ? '75%' : '60%' 
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text-secondary">
            Expertise Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gradient-primary rounded-full text-white font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies