import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "TwiLearn",
      period: "December 2024 - Present",
      current: true,
      description: "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines."
    },
    {
      title: "Full Stack Developer", 
      company: "Freelance",
      period: "2024 - Present",
      current: true,
      description: "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines."
    },
    {
      title: "Backend Developer",
      company: "Contract Work", 
      period: "2024",
      current: false,
      description: "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule."
    },
    {
      title: "Frontend Developer",
      company: "Project Based",
      period: "2024", 
      current: false,
      description: "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance."
    }
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline Node */}
                <div className="hidden md:flex w-16 h-16 bg-gradient-primary rounded-full items-center justify-center flex-shrink-0 relative z-10">
                  <Briefcase className="w-7 h-7 text-white" />
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-gradient-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Card */}
                <div className="glass-card-hover p-8 flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-lg gradient-text-secondary font-semibold">
                      {exp.company}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience