import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and powered by innovation, I'm on a mission to solve 
            complex problems through engineering excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-glow-subtle transition-smooth hover:-translate-y-1">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">EDUCATION</h3>
              <p className="text-muted-foreground">
                Currently pursuing a bachelor's degree in Electrical and Electronics Engineering with honours at Asia Pacific University
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-glow-subtle transition-smooth hover:-translate-y-1">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">MISSION</h3>
              <p className="text-muted-foreground">
                To leverage engineering principles and emerging technologies to create 
                sustainable solutions to face the challenges of tomorrow
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-glow-subtle transition-smooth hover:-translate-y-1">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">INNOVATION</h3>
              <p className="text-muted-foreground">
                Passionate about pushing boundaries and exploring new possibilities 
                in engineering design and implementation.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-tech-gradient border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">My Engineering Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From the moment I built my first circuit, I knew engineering was my calling. 
                  My academic journey has been filled with challenging projects, innovative 
                  solutions, and collaborative teamwork.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of engineering to transform ideas into reality, 
                  and I'm committed to making a positive impact through thoughtful design 
                  and sustainable innovation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Problem Solving</span>
                  <span className="text-sm text-muted-foreground">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[95%]"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Project Management</span>
                  <span className="text-sm text-muted-foreground">87%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                 <div className="bg-primary h-2 rounded-full w-[87%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Renewable Energy Systems</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                  <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[80%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Technical Design</span>
                  <span className="text-sm text-muted-foreground">88%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[88%]"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Team Collaboration</span>
                  <span className="text-sm text-muted-foreground">92%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[92%]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;