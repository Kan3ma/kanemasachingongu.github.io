import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Wrench, 
  Calculator, 
  Cpu, 
  GraduationCap,
  Target
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C++", "MATLAB", "LabVIEW", "HTML", "Scratch", "LTSpice"],
      description: "Proficient in multiple programming languages for engineering applications"
    },
    {
      title: "Engineering Tools",
      icon: Wrench,
      skills: ["AutoCAD", "SolidWorks", "Arduino IDE", "VS Code", "DIALux", "LabVIEW", "MATLAB"],
      description: "Expert use of industry-standard engineering design tools"
    },
    {
      title: "Mathematical & Analysis",
      icon: Calculator,
      skills: ["Calculus", "Linear Algebra", "Transforms", "Probability Statistics", "Discrete Mathermatics"],
      description: "Strong foundation in mathematical principles and analytical methods"
    },
    {
      title: "Hardware & Systems",
      icon: Cpu,
      skills: ["Arduino", "Raspberry Pi", "PCB Design", "Signal Processing", "Soldering", "3D Printing"],
      description: "Hands-on experience with hardware development and systems"
    }
  ];

  const coursework = [
    "Engineering Mathematics",
    "Electromagnetic Field Theory",
    "Engineering Design",
    "High Voltage Engineering",
    "Power Electronics & Dynamics",
    "Analogue Electronics",
    "Digital Electronics",
    "Control Engineering",
    "Industrial Automation",
    "Generation, Transmission and Distribution of Electrical Power",
    "Analysis of Circuits"
  ];

  const ploAttainment = [
    { plo: "PLO1", score: 0.50 },
    { plo: "PLO2", score: 0.71 },
    { plo: "PLO3", score: 0.89 },
    { plo: "PLO4", score: 0.50 },
    { plo: "PLO5", score: 0.80 },
    { plo: "PLO6", score: 1.00 },
    { plo: "PLO7", score: 1.00 },
    { plo: "PLO8", score: 1.00 },
    { plo: "PLO9", score: 0.83 },
    { plo: "PLO10", score: 1.00 },
    { plo: "PLO11", score: 1.00 },
    { plo: "PLO12", score: 1.00 }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Technical Skills</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering Toolkit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of skills developed through coursework and hands-on projects
          </p>
        </div>

        {/* Top 4 Skill Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {skillCategories.map((category) => (
            <Card 
              key={category.title} 
              className="hover:shadow-glow-subtle transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full-Width Coursework Box */}
        <Card className="w-full hover:shadow-glow-subtle transition-all duration-300 ease-in-out hover:-translate-y-1 mt-8">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Core Engineering Coursework</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Key electrical and electronics engineering courses completed during my degree program
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <Badge 
                  key={course} 
                  variant="secondary" 
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* PLO Section */}
        <Card className="w-full hover:shadow-glow-subtle transition-all duration-300 ease-in-out hover:-translate-y-1 mt-8">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">PLO Attainment & Evaluation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Performance assessment across 12 Programme Learning Outcomes (PLOs) based on coursework and project evaluations.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
              {ploAttainment.map(({ plo, score }) => (
                <Badge 
                  key={plo} 
                  variant="secondary" 
                  className="text-xs"
                >
                  {plo}: {score}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Scores represent self-assessed and mentor-evaluated attainment levels. Continuous improvement is guided by targeted workshops, collaborative projects, and feedback-driven development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
