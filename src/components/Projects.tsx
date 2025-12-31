import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink, ChevronRight, ChevronLeft
} from "lucide-react";

interface ProjectsProps {
  colors: {
    primary: string;
    secondary: string;
    bg: string;
  };
  darkMode: boolean;
}

const Projects = ({ colors, darkMode }: ProjectsProps) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      title: "Creative Portfolio Website – Personal Branding",
      subtitle: "Web Development Project",
      date: "May 2024",
      category: "Web Development",
      description: "Developed a fully responsive portfolio website tailored for a client's professional branding. The site was designed with a strong emphasis on UX/UI best practices, ensuring a clean layout, smooth navigation, and optimized performance across devices.",
      impact: "Strengthened client's digital presence by creating an engaging portfolio website that elevated their professional visibility.",
      features: [
        "Fully responsive design",
        "Interactive project showcase",
        "Optimized loading and SEO-friendly structure",
        "Smooth animations and transitions"
      ],
      technologies: ["ReactJS", "JavaScript", "CSS3", "HTML5"],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/client_portfolio_1/1.jpg",
      liveDemo: true,
      liveDemoLink: "https://azad-portfolio-website.vercel.app/",
    },
    {
      title: "Professional Portfolio Website – Client Project",
      subtitle: "Web Development Project",
      date: "July 2024",
      category: "Web Development",
      description: "Designed and developed a modern portfolio website for another client, focusing on storytelling through visuals and minimal design. Integrated custom components for project showcases and streamlined navigation to provide a user-centric experience.",
      impact: "Enhanced the client's ability to showcase their work and connect with their audience, resulting in a stronger professional brand identity.",
      features: [
        "Tailored UI components",
        "Dark/light mode toggle",
        "Interactive animations",
        "Structured navigation flow"
      ],
      technologies: ["ReactJS", "JavaScript", "CSS3", "HTML5"],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/client_portfolio_2/1.jpg",
      liveDemo: true,
      liveDemoLink: "https://faraiha-rehman-portfolio.vercel.app/",
    },
    {
      title: "Manodasha - Mental Health Tracking App",
      subtitle: "UX/UI Application Design",
      date: "September 2024",
      category: "UX/UI Design",
      description: "Created wireframes and high-fidelity app designs for Manodasha, a mental health tracking application. The app empowers users to log moods, track emotional trends, and engage with wellness resources. The design emphasized calm, intuitive interfaces to reduce cognitive load.",
      impact: "Encouraged mental well-being and mindfulness, providing users with a supportive tool to manage and understand their mental health.",
      features: [
        "Mood and activity tracking",
        "Interactive dashboards with progress insights",
        "Personalized wellness reminders",
        "Minimal, soothing design elements"
      ],
      technologies: [],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/Manodasha/1.jpeg",
      liveDemo: true,
      liveDemoLink: "https://www.figma.com/design/TgbL1dwOMgzpE2OVlDR95x/Mental-health-application?node-id=0-1&t=HVhISGBqvRKjcJPT-1",
    },
    {
      title: "Divinepedia – Mythology Exploration App",
      subtitle: "UX/UI Application Design",
      date: "October 2024",
      category: "UX/UI Design",
      description: "Designed Divinepedia, a mythology-focused application that presents stories, origins, and traditions from various cultures. The app design supported both dark and light themes, ensuring accessibility and visual comfort.",
      impact: "Promoted cultural learning and storytelling by delivering a modern and accessible platform for exploring mythologies.",
      features: [
        "Light/Dark mode design system",
        "Story exploration pages",
        "Categorized mythological content",
        "Modern, immersive typography choices"
      ],
      technologies: [],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/Divinepedia/1.jpeg",
      liveDemo: true,
      liveDemoLink: "https://www.figma.com/design/7zqW2BTutQGZX90xhK8Vir/MYTHOLOGY-APP?node-id=0-1&t=HVhISGBqvRKjcJPT-1",
    },
    {
      title: "Kreuz Vinyl – Underground Record Shop App",
      subtitle: "UX/UI Mobile Application Design",
      date: "2024",
      category: "UX/UI Design",
      description: "Designed Kreuz Vinyl, a concept mobile application for an underground electronic music record store. The app focuses on vinyl discovery, artist storytelling, and event promotion, inspired by Berlin's techno culture. A dark, immersive interface was crafted to reflect the raw, minimal, and atmospheric identity of underground music scenes.",
      impact: "Created a visually immersive digital experience that elevates music discovery, strengthens artist presence, and connects users to records and live events through a cohesive brand-driven interface.",
      features: [
        "Dark-mode-first design system tailored for underground music culture",
        "Vinyl discovery and featured record highlights",
        "Detailed record pages with artist narratives and pricing",
        "Event promotion and live DJ set listings",
        "Wishlist and call-to-action driven purchase flow",
        "Minimal bottom navigation for seamless browsing"
      ],
      technologies: [],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/Kreuz Vinyl/1.jpeg",
      liveDemo: true,
      liveDemoLink: "https://www.figma.com/proto/1swPbFRvp6HVCel6PgpwQc/Record-Shop-App--Kreuz-Vinyl-?node-id=23-155&t=UUFlcOrVFC9NcgbB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2"
    },
  ];

  const currentProject = projects[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleImageClick = () => {
    if (currentProject.liveDemo && currentProject.liveDemoLink) {
      window.open(currentProject.liveDemoLink, '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextProject();
      } else if (event.key === 'ArrowLeft') {
        prevProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentProjectIndex]);

  return (
    <section 
      id="projects" 
      className="py-24 sm:py-32 md:py-40 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl animate-pulse opacity-[0.05]"
          style={{ backgroundColor: colors.primary }}></div>
        <div className="absolute bottom-0 right-0 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 rounded-full blur-3xl animate-pulse opacity-[0.05]"
          style={{ backgroundColor: colors.secondary }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16 sm:mb-20">
          <Badge 
            className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border mb-5 sm:mb-6 shadow-sm"
            style={{
              backgroundColor: `${colors.secondary}15`,
              borderColor: colors.secondary,
              color: colors.secondary
            }}>
            Designs and Projects
          </Badge>
          <h2 
            id="projects-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 sm:mb-6" 
            style={{ color: colors.primary }}
          >
            My <span style={{ color: colors.secondary }}>Projects</span>
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4" 
            style={{ color: colors.secondary }}
          >
            Use arrow keys or buttons to navigate through projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative group mb-12">
            <div
              className="relative rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-500"
              style={{
                background: darkMode 
                  ? 'linear-gradient(135deg, rgba(100, 120, 150, 0.12) 0%, rgba(120, 100, 130, 0.12) 100%)'
                 : 'linear-gradient(135deg, rgba(180, 190, 210, 0.15) 0%, rgba(200, 180, 200, 0.12) 100%)',

               border: `6px solid ${darkMode ? 'rgba(120, 140, 170, 0.35)' : 'rgba(160, 170, 190, 0.35)'}`,

                borderRadius: '32px',
                boxShadow: darkMode
                  ? '0 25px 70px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                  : '0 20px 60px rgba(100, 110, 140, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              }}
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{
                  backgroundColor: darkMode ? 'rgba(30, 35, 50, 0.95)' : 'rgba(224, 228, 232, 0.92)',

                border: `8px solid ${darkMode ? 'rgba(100, 120, 145, 0.4)' : 'rgba(180, 190, 205, 0.45)'}`,

                  padding: '24px',
                  boxShadow: darkMode 
                    ? '0 30px 80px rgba(0, 0, 0, 0.5), inset 0 2px 10px rgba(80, 100, 130, 0.15)'
                    : '0 25px 70px rgba(100, 110, 140, 0.25), inset 0 2px 10px rgba(150, 160, 180, 0.2)',
                }}
              >
                <button
                  onClick={handleImageClick}
                  className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer focus:outline-none transition-all duration-500 hover:scale-[1.02]"
                  style={{
                   backgroundColor: darkMode ? 'rgba(20, 25, 40, 0.9)' : 'rgba(210, 215, 220, 0.45)',

                    border: `4px solid ${darkMode ? 'rgba(90, 110, 140, 0.35)' : 'rgba(150, 160, 180, 0.5)'}`,
                    boxShadow: darkMode
                      ? '0 8px 32px rgba(60, 80, 110, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.08)'
                      : '0 8px 32px rgba(120, 130, 155, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.4)',
                  }}
                  aria-label={`Visit ${currentProject.title} live demo`}
                >
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: darkMode
                        ? 'linear-gradient(180deg, rgba(80, 100, 130, 0.08) 0%, transparent 30%, transparent 70%, rgba(20, 25, 40, 0.3) 100%)'
                       : 'linear-gradient(180deg, rgba(200, 210, 225, 0.25) 0%, transparent 40%, transparent 70%, rgba(180, 190, 210, 0.18) 100%)',

                      borderRadius: '12px',
                    }}
                  />

                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      backgroundImage: darkMode
                        ? 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(80, 100, 130, 0.04) 3px, rgba(80, 100, 130, 0.04) 6px)'
                        : 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(150, 160, 180, 0.08) 3px, rgba(150, 160, 180, 0.08) 6px)',
                      opacity: 0.5,
                    }}
                  />

                  {!darkMode && (
                    <div
                      className="absolute inset-0 pointer-events-none z-10"
                      style={{
                        boxShadow: 'inset 0 0 60px rgba(170, 180, 200, 0.15)',
                        borderRadius: '12px',
                        opacity: 0.4,
                      }}
                    />
                  )}

                  <div
                    className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      backgroundColor: darkMode ? 'rgba(80, 110, 145, 0.12)' : 'rgba(170, 180, 200, 0.15)',
                    }}
                  />

                  <img
                    src={currentProject.imagePath}
                    alt={`${currentProject.title} - Main preview`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                    style={{
                      filter: darkMode 
                        ? 'brightness(1.15) contrast(1.08) saturate(1.1)' 
                        : 'brightness(1.05) contrast(1.02) saturate(1.15)',
                    }}
                  />

                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: darkMode
                        ? 'radial-gradient(ellipse at center, transparent 50%, rgba(20, 25, 40, 0.4) 100%)'
                       : 'radial-gradient(ellipse at center, transparent 60%, rgba(170, 175, 180, 0.22) 100%)',

                      borderRadius: '12px',
                    }}
                  />

                  <div
                    className="absolute top-3 left-3 right-3 h-16 pointer-events-none z-10"
                    style={{
                      background: darkMode
                        ? 'linear-gradient(180deg, rgba(20, 25, 40, 0.6) 0%, transparent 100%)'
                        : 'linear-gradient(180deg, rgba(210, 215, 220, 0.35) 0%, transparent 100%)',

                      borderRadius: '12px 12px 0 0',
                      opacity: 0.4,
                    }}
                  />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevProject();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 sm:p-5 rounded-full transition-all duration-300 focus:outline-none opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
                  style={{
                    backgroundColor: darkMode ? 'rgba(200, 210, 225, 0.95)' : 'rgba(230, 235, 245, 0.98)',
                    backdropFilter: 'blur(12px)',
                    color: darkMode ? 'rgba(60, 80, 110, 1)' : 'rgba(80, 100, 130, 1)',
                    boxShadow: darkMode
                      ? '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 4px rgba(100, 130, 165, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                      : '0 6px 20px rgba(120, 135, 160, 0.35), 0 0 0 4px rgba(170, 185, 205, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                  }}
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextProject();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 sm:p-5 rounded-full transition-all duration-300 focus:outline-none opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
                  style={{
                    backgroundColor: darkMode ? 'rgba(200, 210, 225, 0.95)' : 'rgba(230, 235, 245, 0.98)',
                    backdropFilter: 'blur(12px)',
                    color: darkMode ? 'rgba(60, 80, 110, 1)' : 'rgba(80, 100, 130, 1)',
                    boxShadow: darkMode
                      ? '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 4px rgba(100, 130, 165, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                      : '0 6px 20px rgba(120, 135, 160, 0.35), 0 0 0 4px rgba(170, 185, 205, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                  }}
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>

              <div
                className="mt-8 mx-auto w-2/3 h-6 rounded-b-3xl transition-all duration-500"
                style={{
                 backgroundColor: darkMode ? 'rgba(150, 180, 220, 0.5)' : 'rgba(200, 220, 255, 0.35)',

                  boxShadow: darkMode
                    ? '0 10px 20px rgba(0, 0, 0, 0.5), 0 5px 10px rgba(100, 150, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    : '0 8px 16px rgba(150, 180, 230, 0.22), 0 4px 8px rgba(180, 200, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                  opacity: 0.9,
                }}
              />
            </div>

            <div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-500"
              style={{
              backgroundColor: darkMode ? 'rgba(240, 245, 255, 0.95)' : 'rgba(236, 238, 240, 0.95)',

                color: darkMode ? 'rgba(80, 120, 200, 1)' : 'rgba(100, 140, 220, 1)',
                backdropFilter: 'blur(16px)',
                border: darkMode 
                  ? '3px solid rgba(150, 200, 255, 0.4)'
                : '3px solid rgba(190, 195, 200, 0.45)',

                boxShadow: darkMode
                  ? '0 8px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                 : '0 6px 20px rgba(140, 150, 170, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.6)',

              }}
              role="status"
              aria-live="polite"
            >
              {currentProjectIndex + 1} / {projects.length}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge 
                  className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold shadow-sm"
                  style={{
                    backgroundColor: colors.secondary,
                    color: colors.bg
                  }}>
                  {currentProject.category}
                </Badge>
                <Badge
                  className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold border-2"
                  style={{ 
                    borderColor: colors.primary, 
                    color: colors.primary,
                    backgroundColor: `${colors.primary}15`
                  }}>
                  {currentProject.date}
                </Badge>
              </div>

              {currentProject.liveDemo && (
                <a 
                  href={currentProject.liveDemoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.bg,
                    }}
                    aria-label={`Visit live demo of ${currentProject.title}`}
                  >
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                    View Live
                  </Button>
                </a>
              )}
            </div>

            <h3 
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight" 
              style={{ color: colors.primary }}
            >
              {currentProject.title}
            </h3>

            <p className="text-lg sm:text-xl leading-relaxed" style={{ color: colors.secondary }}>
              {currentProject.description}
            </p>

            <div 
              className="p-6 sm:p-8 rounded-2xl border-l-4 shadow-sm"
              style={{
                backgroundColor: `${colors.primary}12`,
                borderLeftColor: colors.primary
              }}
            >
              <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: colors.secondary }}>
                <span className="font-bold" style={{ color: colors.primary }}>Impact:</span> {currentProject.impact}
              </p>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentProject.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-3 p-4 rounded-xl transition-all hover:scale-[1.02]"
                    style={{ backgroundColor: `${colors.secondary}12` }}
                  >
                    <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.secondary }} />
                    <span className="text-base font-medium" style={{ color: colors.secondary }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {[...currentProject.technologies, ...currentProject.designTools].map((tech, i) => (
                  <Badge 
                    key={i}
                    className="px-4 sm:px-5 py-2 text-sm sm:text-base font-medium border-2 hover:scale-105 transition-all shadow-sm"
                    style={{
                      backgroundColor: `${colors.primary}15`,
                      borderColor: colors.primary,
                      color: colors.primary
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;