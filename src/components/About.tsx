import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = {
    "Programming Languages": ["Python", "C", "C++", "Java", "SQL", "R"],
    "AI/ML Libraries": ["Scikit-Learn", "TensorFlow", "Keras", "OpenCV", "NLTK", "SpaCy", "Transformers", "VLLM"],
    "Tools & Platforms": ["PowerBI", "Tableau", "Excel", "AWS", "Jupyter", "Anaconda", "Orange"],
    "Soft Skills": ["Leadership", "Public Speaking", "Time Management"]
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Data Scientist with expertise in Generative AI and Machine Learning, 
            currently pursuing B.E. in Computer Science (AI & ML) at Chandigarh University with a CGPA of 8.57.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="portfolio-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Currently working as a Research Intern in the PRISM Program at Samsung Research, 
                    where I focus on Generative AI and LLM fine-tuning. My work involves improving 
                    chatbot relevance and developing policy compliance classifiers.
                  </p>
                  <p>
                    Previously, I worked as an AI/ML Developer Intern at WictronX, where I specialized 
                    in computer vision applications, including YOLOv8 fine-tuning for traffic monitoring 
                    and real-time object tracking systems.
                  </p>
                  <p>
                    I'm passionate about leveraging cutting-edge AI technologies to solve real-world 
                    problems and have been recognized through various hackathons and competitions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>
            
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="portfolio-card p-6">
                <CardContent className="p-0">
                  <h4 className="text-lg font-medium text-foreground mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground hover:from-primary/20 hover:to-accent/20 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;