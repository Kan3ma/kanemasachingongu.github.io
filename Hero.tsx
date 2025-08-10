import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/engineering-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-in fade-in-0 duration-1000">
          {/* Status Badge */}
          <Badge variant="secondary" className="text-sm px-4 py-2 shadow-glow-subtle">
            🎓 Engineering Student
          </Badge>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              KANEMA SACHINGONGU
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Aspiring Engineer | Problem Solver | Innovation Enthusiast
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a passionate engineering student who is dedicated to creating innovative solutions 
            and building the future through technology. Explore my journey and projects below.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="shadow-glow-primary hover:shadow-glow-primary/70 transition-all duration-300 hover:scale-105"
            >
              View My Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-accent transition-smooth">
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-bounce">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-bounce">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;