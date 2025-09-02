import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink, Play, Palette, ChevronRight,
  Star, Smartphone, X, ChevronLeft
} from "lucide-react";

interface ProjectsProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  darkMode: boolean;
}

const Projects = ({ colors, darkMode }: ProjectsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>([]);

  const openModal = (images: string[], index: number) => {
    setCurrentProjectImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
    setCurrentProjectImages([]);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentProjectImages.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + currentProjectImages.length) % currentProjectImages.length
    );
  };
  
  // Handle window resize for responsive design with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      if (isModalOpen) {
        // Clear previous timeout
        clearTimeout(timeoutId);
        
        // Set new timeout for performance optimization
        timeoutId = setTimeout(() => {
          // Update modal dimensions based on viewport
          const vh = window.innerHeight * 0.9;
          const vw = window.innerWidth * 0.9;
          // Any additional resize logic can be added here
        }, 150); // 150ms debounce delay
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [isModalOpen]);

  // Add keyboard navigation with a useEffect hook
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (event.key === 'ArrowRight') {
        showNextImage();
      } else if (event.key === 'ArrowLeft') {
        showPrevImage();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, showNextImage, showPrevImage]);


  const projects = [
    {
      title: "Creative Portfolio Website – Personal Branding",
      subtitle: "Web Development Project",
      date: "May 2024",
      category: "Web Development",
      description: "Developed a fully responsive portfolio website tailored for a client’s professional branding. The site was designed with a strong emphasis on UX/UI best practices, ensuring a clean layout, smooth navigation, and optimized performance across devices. The design balances creativity with functionality to highlight the client’s personal/professional identity.",
      impact: "Strengthened client’s digital presence by creating an engaging portfolio website that elevated their professional visibility.",
      features: [
        "Fully responsive design",
        "Interactive project showcase",
        "Optimized loading and SEO-friendly structure",
        "Smooth animations and transitions"
      ],
      technologies: ["ReactJS", "JavaScript", "CSS3", "HTML5"],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/client_portfolio_1/1.jpg",
      additionalImages: [
        "/UX UI PROJECTS/client_portfolio_1/2.jpg",
        "/UX UI PROJECTS/client_portfolio_1/3.jpg",
        "/UX UI PROJECTS/client_portfolio_1/4.jpg",
      ],
      liveDemo: true,
      liveDemoLink: "https://azad-portfolio-website.vercel.app/",
    },
    {
      title: "Professional Portfolio Website – Client Project",
      subtitle: "Web Development Project",
      date: "July 2024",
      category: "Web Development",
      description: "Designed and developed a modern portfolio website for another client, focusing on storytelling through visuals and minimal design. Integrated custom components for project showcases and streamlined navigation to provide a user-centric experience.",
      impact: "Enhanced the client’s ability to showcase their work and connect with their audience, resulting in a stronger professional brand identity.",
      features: [
        "Tailored UI components",
        "Dark/light mode toggle",
        "Interactive animations",
        "Structured navigation flow"
      ],
      technologies: ["ReactJS", "JavaScript", "CSS3", "HTML5"],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/client_portfolio_2/1.jpg",
      additionalImages: [
        "/UX UI PROJECTS/client_portfolio_2/2.jpg",
        "/UX UI PROJECTS/client_portfolio_2/3.jpg",
        "/UX UI PROJECTS/client_portfolio_2/4.jpg",
      ],
      liveDemo: true,
      liveDemoLink: "https://faraiha-rehman-portfolio.vercel.app/",
    },
    {
      title: "Manodasha - Mental Health Tracking App",
      subtitle: "UX/UI Application Design",
      date: "September 2024",
      category: "UX/UI Design",
      description: "Created wireframes and high-fidelity app designs for Manodasha, a mental health tracking application. The app empowers users to log moods, track emotional trends, and engage with wellness resources. The design emphasized calm, intuitive interfaces to reduce cognitive load while engaging with sensitive topics.",
      impact: "Encouraged mental well-being and mindfulness, providing users with a supportive tool to manage and understand their mental health.",
      features: [
        "Mood and activity tracking",
        "Interactive dashboards with progress insights",
        "Personalized wellness reminders",
        "Minimal, soothing design elements"
      ],
      technologies: [],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/Manodasha/1.jpg",
      additionalImages: [
        "/UX UI PROJECTS/Manodasha/2.jpg",
        "/UX UI PROJECTS/Manodasha/3.jpg",
        "/UX UI PROJECTS/Manodasha/4.jpg",
      ],
      liveDemo: true,
      liveDemoLink: "https://www.figma.com/design/TgbL1dwOMgzpE2OVlDR95x/Mental-health-application?node-id=0-1&t=HVhISGBqvRKjcJPT-1",
    },
    {
      title: "Divinepedia – Mythology Exploration App",
      subtitle: "UX/UI Application Design",
      date: "October 2024",
      category: "UX/UI Design",
      description: "Designed Divinepedia, a mythology-focused application that presents stories, origins, and traditions from various cultures. The app design supported both dark and light themes, ensuring accessibility and visual comfort. User journey flows were crafted to encourage exploration while maintaining readability.",
      impact: "Promoted cultural learning and storytelling by delivering a modern and accessible platform for exploring mythologies.",
      features: [
        "Light/Dark mode design system",
        "Story exploration pages",
        "Categorized mythological content",
        "Modern, immersive typography choices"
      ],
      technologies: [],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/Divinepedia/1.jpg",
      additionalImages: [
        "/UX UI PROJECTS/Divinepedia/2.jpg",
        "/UX UI PROJECTS/Divinepedia/3.jpg",
        "/UX UI PROJECTS/Divinepedia/4.jpg",
      ],
      liveDemo: true,
      liveDemoLink: "https://www.figma.com/design/7zqW2BTutQGZX90xhK8Vir/MYTHOLOGY-APP?node-id=0-1&t=HVhISGBqvRKjcJPT-1",
    },
    {
      title: "Vana Snacks – Digital Store App",
      subtitle: "UX/UI Application Design",
      date: "November 2024",
      category: "UX/UI Design",
      description: "Created app design prototypes for Vana Snacks, a physical snack store’s digital application. The design enabled customers to browse snacks, explore offers, and place orders seamlessly. The UI focused on a playful yet professional aesthetic, aligning with the brand’s identity.",
      impact: "Improved the client’s ability to engage with customers digitally, boosting customer retention and sales opportunities.",
      features: [
        "Product browsing with categories",
        "Interactive cart and checkout flows",
        "Offers & loyalty section",
        "Consistent branding with engaging visuals"
      ],
      technologies: [],
      designTools: ["Figma"],
      imagePath: "/UX UI PROJECTS/Vana_Snacks/1.jpg",
      additionalImages: [
        "/UX UI PROJECTS/Vana_Snacks/2.jpg",
        "/UX UI PROJECTS/Vana_Snacks/3.jpg",
        "/UX UI PROJECTS/Vana_Snacks/4.jpg",
      ],
      liveDemo: true,
      liveDemoLink: "https://www.figma.com/design/RhUH8eGoUGSmJt9luNGPhu/Vana-Snacks?node-id=0-1&t=HVhISGBqvRKjcJPT-1",
    },
  ];

  const allImagesInProject = (project: typeof projects[0]) => [project.imagePath, ...project.additionalImages];

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background blobs for a dynamic feel - Responsive sizes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl animate-pulse opacity-10"
          style={{ backgroundColor: colors.primary }}></div>
        <div className="absolute bottom-0 right-0 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 rounded-full blur-3xl animate-pulse opacity-10"
          style={{ backgroundColor: colors.secondary }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Header section - Responsive typography and spacing */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Badge 
              className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-medium border mb-3 sm:mb-4 inline-block"
              style={{
                backgroundColor: `${colors.secondary}15`,
                borderColor: colors.secondary,
                color: colors.secondary
              }}>
              Designs and Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 md:mb-6" style={{ color: colors.primary }}>
              My <span style={{ color: colors.secondary }}>Projects</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-[80vw] sm:max-w-xl md:max-w-2xl mx-auto" style={{ color: colors.secondary }}>
              Showcasing innovative solutions with comprehensive design process and technical implementation
            </p>
          </div>        {/* Individual Project Showcase - More compact spacing for better density */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Project Visual - Enhanced responsive handling */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                <div className="relative">
                  {/* Main Project Image with responsive border and shadow */}
                  <div className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border-2 sm:border-4 group-hover:scale-105 transition-all duration-700 cursor-pointer"
                    style={{ borderColor: colors.primary }}
                    onClick={() => openModal(allImagesInProject(project), 0)}
                  >
                    <img
                      src={project.imagePath}
                      alt={`${project.title} - Main View`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Floating Design Elements - Responsive sizes */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl animate-bounce"
                    style={{ backgroundColor: colors.secondary }}>
                    <Palette className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: colors.bg }} />
                  </div>
                </div>

                {/* Additional Design Screens - More compact grid */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mt-3 sm:mt-6">
                  {project.additionalImages.map((image, i) => (
                    <div key={i}
                      className="aspect-square rounded-lg sm:rounded-xl border overflow-hidden flex items-center justify-center opacity-75 hover:opacity-100 transition-all group-hover:scale-105 cursor-pointer"
                      style={{ backgroundColor: `${colors.primary}5`, borderColor: `${colors.primary}30` }}
                      onClick={() => openModal(allImagesInProject(project), i + 1)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Screenshot ${i + 2}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details - Enhanced responsive layout */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6 sm:space-y-8`}>
                {/* Project Meta - More compact spacing */}
                <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap">
                  <Badge 
                    className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium"
                    style={{
                      backgroundColor: colors.secondary,
                      color: colors.bg
                    }}>
                    {project.category}
                  </Badge>
                  <span 
                    className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border"
                    style={{ borderColor: colors.primary, color: colors.primary }}>
                    {project.date}
                  </span>
                </div>

                {/* Project Title and CTA Button - Responsive typography */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black" style={{ color: colors.primary }}>
                    {project.title}
                  </h3>
                  {project.liveDemo && (
                    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="px-6 py-3 rounded-xl font-bold group"
                        style={{
                          backgroundColor: colors.primary,
                          color: colors.bg
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                        View Live Project
                      </Button>
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed" style={{ color: colors.secondary }}>
                  {project.description}
                </p>

                {/* Impact Statement */}
                <div className="p-6 rounded-2xl border-l-4"
                  style={{
                    backgroundColor: `${colors.primary}10`,
                    borderLeftColor: colors.primary
                  }}>
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5" style={{ color: colors.primary }} />
                    <span className="font-bold" style={{ color: colors.primary }}>Impact</span>
                  </div>
                  <p style={{ color: colors.secondary }}>{project.impact}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-105"
                        style={{ backgroundColor: `${colors.secondary}10` }}>
                        <ChevronRight className="w-4 h-4" style={{ color: colors.secondary }} />
                        <span className="text-sm font-medium" style={{ color: colors.secondary }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-bold mb-4" style={{ color: colors.primary }}>
                    Technologies & Design Tools
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[...project.technologies, ...project.designTools].map((tech, i) => (
                      <Badge key={i}
                        className="px-4 py-2 text-sm font-medium border hover:scale-105 transition-all"
                        style={{
                          backgroundColor: `${colors.primary}15`,
                          borderColor: colors.primary,
                          color: colors.primary
                        }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal - Enhanced responsive design */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm sm:backdrop-blur-md animate-fade-in p-4 sm:p-6 md:p-8"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-5xl max-h-[85vh] sm:max-h-[90vh]" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Adjusted positioning for mobile */}
            <Button
              onClick={closeModal}
              className="absolute -top-10 right-0 sm:-top-12 md:-right-12 text-white bg-black/20 hover:bg-black/40 p-1.5 sm:p-2 rounded-full transition-colors"
              variant="ghost"
              size="icon"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </Button>

            {/* Previous Image Button - Responsive positioning */}
            {currentProjectImages.length > 1 && (
              <Button
                onClick={showPrevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 p-1.5 sm:p-2 rounded-full transition-colors"
                variant="ghost"
                size="icon"
              >
                <ChevronLeft className="w-10 h-10" />
              </Button>
            )}

            {/* Image Container - Enhanced responsive sizing and loading */}
            <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden bg-black/10">
              <img
                src={currentProjectImages[currentImageIndex]}
                alt="Project detail view"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            {/* Next Image Button - Responsive positioning and touch-friendly */}
            {currentProjectImages.length > 1 && (
              <Button
                onClick={showNextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 p-1.5 sm:p-2 rounded-full transition-colors"
                variant="ghost"
                size="icon"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </Button>
            )}

            {/* Image Counter - Improved visibility and positioning */}
            {currentProjectImages.length > 1 && (
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                {currentImageIndex + 1} / {currentProjectImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;