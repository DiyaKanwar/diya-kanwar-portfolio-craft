
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      category: "AI/Voice"
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
      category: "Web Development"
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
      category: "Game Development"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/Voice":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Web Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Game Development":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
