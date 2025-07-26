import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Crop, Shield, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Drone for Traffic Monitoring",
      description: "Designed a YOLOv8-powered aerial traffic monitor using drone feeds; reduced congestion prediction latency by 30%. Integrated with OpenCV for real-time object detection and heatmap visualization.",
      icon: <Eye className="h-6 w-6" />,
      technologies: ["YOLOv8", "OpenCV", "Drone Technology", "Computer Vision", "Heatmap Visualization"],
      highlights: ["30% latency reduction", "Real-time processing", "Aerial monitoring"]
    },
    {
      title: "FarmEasy - Crop Recommendation App",
      description: "Developed ML model using soil nutrients and rainfall data to recommend optimal crops. Deployed via Streamlit; improved prediction accuracy to 85%.",
      icon: <Crop className="h-6 w-6" />,
      technologies: ["Machine Learning", "Streamlit", "Data Analysis", "Agricultural Tech"],
      highlights: ["85% accuracy", "Streamlit deployment", "Agricultural optimization"]
    },
    {
      title: "Crop Disease Assistant",
      description: "Trained CNN-based classifier using PlantVillage dataset to identify tomato leaf diseases with 90% accuracy. Enabled early intervention for farmers.",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["CNN", "PlantVillage Dataset", "Deep Learning", "Agricultural AI"],
      highlights: ["90% accuracy", "Early disease detection", "Farmer assistance"]
    },
    {
      title: "Social Media Monitor for Crime Detection",
      description: "Processed 10K+ tweets using NLTK and Vader for crime-related sentiment tagging. Built dashboard to visualize geotagged incidents.",
      icon: <Shield className="h-6 w-6" />,
      technologies: ["NLTK", "Vader", "Sentiment Analysis", "Data Visualization", "Social Media Analytics"],
      highlights: ["10K+ tweets processed", "Crime detection", "Real-time monitoring"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative AI/ML solutions addressing real-world challenges across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card p-8 project-hover group">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg group-hover:animate-pulse-glow">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <Badge 
                        key={hIndex}
                        className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border-primary/20"
                        variant="outline"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-muted/50 text-muted-foreground hover:bg-muted transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 hover:bg-primary/5 transition-smooth"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-smooth"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;