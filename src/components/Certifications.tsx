import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce AI Associate",
      issuer: "Salesforce",
      year: "2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      link: "https://trailblazer.me/id/your-certificate-link",
      verified: true
    },
    {
      title: "Microsoft Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      year: "2024", 
      logo: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=455&cvid=f+w1qZ9L9RXMgTWJGy6PGw==",
      verified: true
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft", 
      year: "2024",
      logo: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=414&cvid=yvFhsgKJsDi9+q1X5GZG6w==",
      verified: true
    }
  ]

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card-hover p-8 group text-center">
              {/* Certificate Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-xl p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.issuer} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                  {cert.title}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-lg gradient-text-secondary font-semibold">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground">
                    Issued in {cert.year}
                  </p>
                </div>

                {/* Verified Badge */}
                {cert.verified && (
                  <div className="flex items-center justify-center gap-2 text-sm text-accent">
                    <Award className="w-4 h-4" />
                    <span>Verified Certificate</span>
                  </div>
                )}

                {/* View Certificate Button */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full glass-card hover:bg-[hsl(var(--card-glass)/0.7)] group-hover:border-[hsl(var(--primary)/0.5)]"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Award className="w-12 h-12 gradient-text mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 gradient-text-secondary">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in staying up-to-date with the latest technologies and best practices. 
              These certifications represent my commitment to professional growth and excellence in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications