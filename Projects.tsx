import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Zap, 
  AirVent, 
  Eye, 
  Navigation, 
  Radar,
  Headphones,
  Waves,
  FileText
} from "lucide-react";

const Projects = () => {
  const projectPairs = [
    [
      {
        title: "Smart Walking Stick",
        description: "Intelligent walking stick combining ultrasonic, infrared, and computer vision with GPS tracking for the visually impaired.",
        technologies: ["Arduino", "Raspberry Pi", "OpenCV", "GPS/GSM", "Sensor Fusion"],
        category: "Assistive Tech",
        date: "Spring 2025",
        status: "Prototype",
        highlights: [
          "Multi-sensor fusion (ultrasonic + IR + camera)",
          "90% accurate object recognition",
          "Caregiver tracking with geofencing",
          "Haptic + audio feedback system"
        ],
        icon: <Navigation className="h-5 w-5 text-primary" />,
        accentColor: "bg-blue-100/20"
      },
      {
        title: "MAVI Smart Glasses",
        description: "Smart glasses detecting micro-fractures in electrical insulation gloves using edge AI.",
        technologies: ["Python", "OpenCV", "ESP32", "TensorFlow Lite", "Safety Systems"],
        category: "Computer Vision",
        date: "Spring 2024",
        status: "Completed",
        highlights: [
          "90% defect detection accuracy",
          "Real-time HUD warnings",
          "40% reduction in electrical accidents"
        ],
        icon: <Eye className="h-5 w-5 text-primary" />,
        accentColor: "bg-red-100/20"
      }
    ],
    [
      {
        title: "Smart Auditorium System",
        description: "IoT-based system controlling lighting, security, and climate via sensor networks.",
        technologies: ["Arduino", "C++", "IoT", "BLE/WiFi", "Mobile App"],
        category: "Embedded Systems",
        date: "Fall 2024",
        status: "Completed",
        highlights: [
          "25% energy consumption reduction",
          "15+ integrated sensors",
          "Cross-platform control app"
        ],
        icon: <Radar className="h-5 w-5 text-primary" />,
        accentColor: "bg-yellow-100/20"
      },
      {
        title: "Pneumatic Luggage Transport",
        description: "Airport baggage handling system using pneumatic tubes for efficient routing.",
        technologies: ["Pneumatics", "SolidWorks", "Fluid Dynamics", "PLC", "Automation"],
        category: "Mechanical",
        date: "Winter 2023",
        status: "Prototype",
        highlights: [
          "30% faster baggage routing",
          "Modular expandable design",
          "Integrated weight sensors"
        ],
        icon: <AirVent className="h-5 w-5 text-primary" />,
        accentColor: "bg-green-100/20"
      }
    ],
    [
      {
        title: "Hydroelectric Gate Control",
        description: "Pneumatic actuator system for precise dam gate operation with predictive analytics.",
        technologies: ["Hydraulics", "PID Control", "SCADA", "Structural Analysis", "IoT"],
        category: "Civil Engineering",
        date: "Fall 2023",
        status: "Completed",
        highlights: [
          "15% faster response time",
          "50% reduction in seal wear",
          "Flood prediction integration"
        ],
        icon: <Waves className="h-5 w-5 text-primary" />,
        accentColor: "bg-cyan-100/20"
      },
      {
        title: "Audio Signal Processor",
        description: "MATLAB-based simulation for real-time noise reduction in transmitted audio signals using adaptive filtering techniques.",
        technologies: ["MATLAB", "DSP", "Noise Cancellation", "FFT", "Adaptive Filters"],
        category: "Signal Processing",
        date: "Winter 2024",
        status: "Completed",
        highlights: [
          "30dB noise reduction in simulated environments",
          "Real-time processing capability",
          "Customizable filter banks",
          "Preserves vocal clarity"
        ],
        icon: <Headphones className="h-5 w-5 text-primary" />,
        accentColor: "bg-purple-100/20"
      }
    ]
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-background/80 backdrop-blur-sm">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my engineering projects demonstrating problem-solving, technical skills and innovative thinking across various disciplines.
          </p>
        </div>

        <div className="space-y-8">
          {projectPairs.map((pair, pairIndex) => (
            <div key={pairIndex} className="grid md:grid-cols-2 gap-6">
              {pair.map((project) => (
                <Card 
                  key={project.title}
                  className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 border-0 ${project.accentColor}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs bg-background">
                            {project.category}
                          </Badge>
                          <Badge 
                            variant={project.status === "Completed" ? "default" : "outline"}
                            className="text-xs bg-background"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            {project.icon}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm mb-4">
                      {project.description}
                    </CardDescription>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Key Innovations
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Technical Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs bg-background/80 hover:bg-primary/10"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <Button variant="outline" size="sm" className="text-xs h-8 gap-1 bg-background">
                        <Github className="h-3 w-3" />
                        <span>Code</span>
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs h-8 gap-1 bg-background">
                        <ExternalLink className="h-3 w-3" />
                        <span>Demo</span>
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs h-8 gap-1 bg-background">
                        <FileText className="h-3 w-3" />
                        <span>Documentation</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-3">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how these technologies can be adapted for your specific engineering challenges.
            </p>
            <Button className="shadow-glow-primary hover:shadow-glow-primary/70">
              Contact for Project Details
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
