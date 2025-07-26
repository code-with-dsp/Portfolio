import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern (Generative AI)",
      company: "Samsung Research (SRIB)",
      program: "PRISM Program",
      location: "Remote",
      duration: "Feb 2024 - Jul 2024",
      achievements: [
        "LLM Fine-Tuning: Fine-tuned LLaMA 2 on 1.4K+ QA pairs using LoRA and PEFT, improving chatbot relevance for Samsung S5 by 25%",
        "Synthetic Data Generation: Scraped and reformatted Google Play reviews into multi-turn conversations using ChatGPT, Bert, and Perplexity API",
        "Policy Compliance Classifier: Built BERT-based classifier to flag policy-violating responses; improved moderation accuracy by 17%",
        "Sentiment-Masked Filtering: Integrated sentiment detection for filtering responses in financial and sensitive contexts"
      ],
      skills: ["LLaMA", "LoRA", "PEFT", "BERT", "ChatGPT", "Sentiment Analysis"]
    },
    {
      title: "AI/ML Developer Intern",
      company: "WictronX",
      location: "Chandigarh, India",
      duration: "Jun 2023 - Feb 2024",
      achievements: [
        "YOLOv8 Fine-Tuning: Adapted YOLOv8 for regional Indian traffic using custom drone footage; achieving 92% mAP",
        "Real-time Tracking: Deployed ByteTrack for real-time vehicle tracking and behavior analysis on surveillance data",
        "Annotation Pipeline: Automated data annotation pipeline using CVAT and OpenCV; reduced manual labeling by 40%"
      ],
      skills: ["YOLOv8", "ByteTrack", "CVAT", "OpenCV", "Drone Technology", "Computer Vision"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey in AI/ML development and research
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="portfolio-card p-8 project-hover">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left Column - Title and Company */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-2">
                          <span className="font-medium text-primary">{exp.company}</span>
                          {exp.program && (
                            <>
                              <span>•</span>
                              <span className="text-sm">{exp.program}</span>
                            </>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline"
                            className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-foreground hover:from-primary/10 hover:to-accent/10 transition-smooth"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;