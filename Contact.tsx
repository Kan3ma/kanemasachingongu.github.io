import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Download,
  MessageCircle,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sachik97@yahoo.com",
      href: "mailto:your.email@university.edu",
      description: "Best for detailed discussions and project inquiries"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Kanema Sachingongu",
      href: "https://www.linkedin.com/in/kanema-sachingongu-240508209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      description: "Professional networking and career opportunities"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+60163350975",
      href: "tel:+15551234567",
      description: "Available for urgent matters and interviews"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss engineering projects, research opportunities, 
            internships, or any innovative ideas you'd like to explore together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {contactMethods.map((method) => (
                <Card 
                  key={method.title}
                  className="hover:shadow-glow-subtle transition-smooth hover:-translate-y-1 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <a 
                          href={method.href}
                          className="text-sm text-primary hover:underline break-all"
                        >
                          {method.value}
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-tech-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button className="w-full shadow-glow-primary hover:shadow-glow-primary/70 transition-all duration-300">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-accent transition-smooth">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-accent transition-smooth">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Card */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Current Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Asia Pacific University<br />
                  Bukit Jalil, Kuala Lumpur<br />
                  Available for remote opportunities
                </p>
                <Badge variant="secondary" className="text-xs">
                  Open to Relocation
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Internships</span>
                    <Badge variant="default" className="text-xs">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Part-time Projects</span>
                    <Badge variant="default" className="text-xs">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Research Opportunities</span>
                    <Badge variant="default" className="text-xs">Interested</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Full-time (Post-graduation)</span>
                    <Badge variant="outline" className="text-xs">25 August 2025</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email</span>
                    <span className="text-xs text-muted-foreground">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">LinkedIn</span>
                    <span className="text-xs text-muted-foreground">Within 48 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Phone</span>
                    <span className="text-xs text-muted-foreground">Same day</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;