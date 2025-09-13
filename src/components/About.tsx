import { Heart, Lightbulb, Rocket, Search } from "lucide-react"

const About = () => {
  const features = [
    {
      icon: Rocket,
      title: "My Expertise & Achievements",
      description: "Skilled in React, Next.js, Node.js, MongoDB, PostgreSQL, Redis, Blockchain, and Tailwind CSS. Currently interning at TwiLearn, gaining hands-on experience in modern development."
    },
    {
      icon: Heart,
      title: "Why I Love What I Do",
      description: "Technology is more than just code for me—it's about problem-solving, innovation, and making an impact. I love building efficient web applications and exploring blockchain solutions."
    },
    {
      icon: Search,
      title: "How I Work",
      description: "I believe in writing clean, scalable, and maintainable code. My workflow involves understanding problems, planning architecture & UX, building with creativity & best practices, then testing and optimizing."
    }
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="flex justify-center mb-8">
            <span className="text-4xl">👋</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hey there! I'm Chaitanya Sonar, a passionate Full-Stack Developer skilled in React, 
            Next.js, Node.js, MongoDB, PostgreSQL, and more. I love turning ideas into 
            real-world applications and exploring new technologies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card-hover p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Workflow Steps */}
        <div className="mt-16 glass-card p-8">
          <div className="flex justify-center mb-8">
            <Lightbulb className="w-12 h-12 gradient-text" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text-secondary">
            My Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Understanding the problem",
              "Planning architecture & UX", 
              "Building with creativity & best practices",
              "Testing, optimizing, and refining for performance"
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About