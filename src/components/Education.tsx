import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy, Star } from "lucide-react";

const Education = () => {
  const certifications = [
    { name: "Azure Data Scientist Associate", issuer: "Microsoft", date: "May 2025" },
    { name: "Azure AI Engineer Associate", issuer: "Microsoft", date: "May 2025" },
    { name: "Azure AI Fundamentals", issuer: "Microsoft", date: "Apr 2025" },
    { name: "Oracle Cloud Infrastructure Gen AI Professional", issuer: "Oracle", date: "Jul 2024" },
    { name: "Certified Data Scientist Associate", issuer: "DataCamp", date: "Aug 2023" }
  ];

  const achievements = [
    { title: "Academic Excellence Award", organization: "Chandigarh University", date: "Apr 2025, May 2023" },
    { title: "Runner-up Cisco thinQbator Hackathon'3", organization: "Cisco", date: "Sep 2023" },
    { title: "19th Rank Amazon ML Challenge", organization: "Amazon", date: "Apr 2023" },
    { title: "Winner Cisco thinQbator Hackathon'2", organization: "Cisco", date: "Feb 2022" }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic excellence and professional certifications in AI/ML
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-8">
            <Card className="portfolio-card p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Bachelor of Engineering
                    </h3>
                    <p className="text-lg text-primary font-medium mb-1">
                      Computer Science Engineering (AI & ML)
                    </p>
                    <p className="text-muted-foreground mb-2">Chandigarh University</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Sep 2021 - Jan 2025</span>
                      <span>•</span>
                      <span>Punjab, India</span>
                    </div>
                    <div className="mt-4">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                        CGPA: 8.57/10
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="portfolio-card p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                      <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{cert.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <Card className="portfolio-card p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">Honors & Awards</h3>
                </div>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="p-6 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 hover:from-primary/10 hover:to-accent/10 transition-smooth">
                      <h4 className="font-semibold text-foreground text-lg mb-2">
                        {achievement.title}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span>{achievement.organization}</span>
                        <span>•</span>
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card className="portfolio-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Core Competencies</h3>
                <div className="space-y-4">
                  {[
                    { skill: "Machine Learning", level: 90 },
                    { skill: "Deep Learning", level: 85 },
                    { skill: "Computer Vision", level: 88 },
                    { skill: "Natural Language Processing", level: 82 },
                    { skill: "Data Analysis", level: 92 },
                    { skill: "Python Programming", level: 95 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="skill-bar h-2 rounded-full"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;