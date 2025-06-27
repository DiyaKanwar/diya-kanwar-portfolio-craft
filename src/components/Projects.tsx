
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, DollarSign, Gamepad2 } from "lucide-react";

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
      icon: Mic
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
      icon: DollarSign
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
      icon: Gamepad2
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FFF0D1' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3B3030' }}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#795757' }}>
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm border-0 tech-shadow overflow-hidden" style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}>
                <div className="h-2 gradient-primary group-hover:h-3 transition-all duration-300"></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#795757' }}>{project.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300" style={{ color: '#3B3030' }}>
                    {project.title}
                  </CardTitle>
                  <Badge className="w-fit gradient-primary border-0 font-semibold" style={{ color: '#FFF0D1' }}>
                    {project.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="leading-relaxed" style={{ color: '#795757' }}>
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center" style={{ color: '#3B3030' }}>
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#3B3030' }}></span>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm flex items-center" style={{ color: '#795757' }}>
                          <span className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: '#795757' }}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center" style={{ color: '#3B3030' }}>
                      <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#795757' }}></span>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs transition-all duration-300 hover:scale-105"
                          style={{ 
                            borderColor: 'rgba(59, 48, 48, 0.3)', 
                            color: '#3B3030',
                            backgroundColor: 'transparent'
                          }}
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
