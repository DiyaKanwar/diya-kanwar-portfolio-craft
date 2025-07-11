import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Globe, Brush, LucideIcon } from "lucide-react";

interface Project {
  title: string;
  date: string;
  description: string;
  features: string[];
  technologies: string[];
  category: string;
  icon: LucideIcon;
  image?: string;
  liveLink?: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
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
      // liveLink: "", // ← optional: add later
    },
    {
      title: "Azad's Visual Portfolio",
      date: "April 2025",
      description: "Designed and developed a high-end portfolio website for a visual artist to professionally showcase their creative work. The site features a dark, elegant theme with glowing amber highlights, smooth animations, and an immersive gallery experience.",
      features: [
        "Interactive and animated hero section",
        "Virtualized image gallery with category filters and modal preview",
        "Responsive layout with smooth scroll and dark mode styling",
        "Contact form integration with real-time feedback"
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      category: "🎨 Portfolio Website",
      icon: Brush,
      image: "Project4_img.jpg",
      liveLink: "https://azad-portfolio-website.vercel.app/"
    },
    {
      title: "Faraiha Rehman's Portfolio",
      date: "January 2025",
      description: "Built a modern, clean, and responsive personal portfolio for a professional in the arts and creative fields. Prioritized clarity and design aesthetics to ensure her profile and creative journey are well-highlighted across all devices.",
      features: [
        "Animated section transitions and hover effects",
        "Optimized image handling and project showcase layout",
        "Scroll-based interactions with clean typography",
        "Fully mobile-responsive and fast-loading design"
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      category: "🎭 Portfolio Website",
      icon: Globe,
      image: "Project5_img.jpg",
      liveLink: "https://faraiha-rehman-portfolio.vercel.app/"
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
      icon: Brush,
      // liveLink: "", // ← optional: add later
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

            const card = (
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm border-0 tech-shadow overflow-hidden" style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}>
                {project.image && (
                  <img
                    src={`/${project.image}`}
                    alt={`${project.title} Thumbnail`}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                )}

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
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-sm flex items-center" style={{ color: '#795757' }}>
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
                      {project.technologies.map((tech, tIndex) => (
                        <Badge
                          key={tIndex}
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

            return project.liveLink ? (
              <a
                key={index}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {card}
              </a>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
