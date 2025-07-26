import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Devi Sri Prasad
            <span className="block text-3xl md:text-4xl font-normal text-primary-glow mt-2">
              Puvvala
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-delay">
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Data Scientist Associate • AI/ML Developer
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights with expertise in 
            Generative AI, Computer Vision, and Machine Learning at Samsung Research
          </p>
        </div>
        
        <div className="animate-fade-in-delay flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-smooth backdrop-blur-sm"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent text-white border border-white/30 hover:bg-white/10 transition-smooth backdrop-blur-sm"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
        
        <div className="animate-fade-in-delay flex justify-center space-x-6">
          <a 
            href="https://linkedin.com/in/devisriprasad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-smooth hover:scale-110 transform"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-smooth hover:scale-110 transform"
          >
            <Github size={28} />
          </a>
          <a 
            href="mailto:devisriprasad9652@gmail.com"
            className="text-white/70 hover:text-white transition-smooth hover:scale-110 transform"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;