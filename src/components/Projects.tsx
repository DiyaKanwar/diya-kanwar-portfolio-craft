
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Mic, DollarSign, Gamepad2 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Vocal AI Assistant",
      date: "December 2024",
      description: "Developed an interactive AI voice assistant using JavaScript, Speech Recognition API, and Tailwind CSS.",
      features: [
        "Voice Command Recognition",
        "Conversational AI Responses", 
        "Real-time Subtitle Generation"
      ],
      technologies: ["JavaScript", "Speech Recognition API", "Tailwind CSS"],
      category: "AI/Voice",
      icon: Mic,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Expense Tracking Website",
      date: "May 2024", 
      description: "Contributed to the front-end development using React JS, focusing on enhancing user experience and interface design.",
      features: [
        "User-friendly Interface",
        "Enhanced User Experience",
        "Responsive Design"
      ],
      technologies: ["React JS", "JavaScript", "CSS"],
      category: "Web Development",
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Stone-Paper-Scissors Game",
      date: "March 2023",
      description: "Developed a graphical user interface for a Stone-Paper-Scissors game using Java and Swing, improving user interaction.",
      features: [
        "Graphical User Interface",
        "Interactive Gameplay",
        "User-friendly Design"
      ],
      technologies: ["Java", "Swing"],
      category: "Game Development",
      icon: Gamepad2,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(66,153,225,0.05),transparent)] opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/80 backdrop-blur-sm border-0 tech-shadow overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:h-3 transition-all duration-300`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{project.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <Badge className={`w-fit bg-gradient-to-r ${project.gradient} text-white border-0 font-semibold`}>
                    {project.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
