import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Always excited to discuss new opportunities, collaborate on projects, or just have a chat about AI/ML
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="portfolio-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:devisriprasad9652@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        devisriprasad9652@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href="tel:+919652484174" 
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        +91-9652484174
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Punjab, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <h4 className="text-lg font-medium text-foreground mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com/in/devisriprasad" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg hover:bg-muted transition-smooth text-muted-foreground hover:text-foreground"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg hover:bg-muted transition-smooth text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="portfolio-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="bg-muted/30 border-border/50 focus:border-primary transition-smooth"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-muted/30 border-border/50 focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-muted/30 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input 
                      placeholder="Let's discuss a project" 
                      className="bg-muted/30 border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project or opportunity..." 
                      rows={5}
                      className="bg-muted/30 border-border/50 focus:border-primary transition-smooth resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white transition-smooth"
                    size="lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;