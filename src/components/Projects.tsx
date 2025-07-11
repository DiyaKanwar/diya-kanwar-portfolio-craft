import React from 'react';
import { CardTitle } from "@/components/ui/card";
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
      // liveLink: ""
    },
    {
      title: "Azad's Visual Portfolio",
      date: "April 2025",
      description: "Designed and developed a high-end portfolio website for a visual artist to professionally showcase their creative work.",
      features: [
        "Animated hero",
        "Gallery with filters",
        "Dark theme",
        "Contact form"
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
      description: "Built a modern and responsive personal portfolio for a creative professional.",
      features: [
        "Animated transitions",
        "Clean design",
        "Scroll-based interactions",
        "Mobile optimized"
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
      description: "Developed a graphical user interface using Java and Swing.",
      features: ["GUI", "Gameplay", "Design"],
      technologies: ["Java", "Swing"],
      category: "Game Development",
      icon: Brush,
      // liveLink: ""
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#FFECD1]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001524]">
            My <span className="text-[#FF7D00]">Projects</span>
          </h2>
          <p className="text-lg text-[#15616D] mt-2">
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;

            const card = (
              <div
                className="relative w-full h-64 md:h-56 lg:h-60 rounded-xl overflow-hidden group transition-transform transform hover:scale-[1.01] shadow-xl"
                style={{
                  backgroundImage: project.image
                    ? `url('/${project.image}')`
                    : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#15616D'
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FF7D00] rounded-md flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <span className="text-sm opacity-80">{project.date}</span>
                  </div>

                  <p className="text-sm mt-2 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-[#78290F] text-white text-xs py-1 px-2 rounded"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
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
