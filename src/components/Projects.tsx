import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink, Palette, ChevronRight,
  Star, X, ChevronLeft, Loader2
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
  const [imageLoading, setImageLoading] = useState(true);
  const [currentProjectTitle, setCurrentProjectTitle] = useState('');

  const openModal = (images: string[], index: number, title: string) => {
    setCurrentProjectImages(images);
    setCurrentImageIndex(index);
    setCurrentProjectTitle(title);
    setIsModalOpen(true);
    setImageLoading(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
    setCurrentProjectImages([]);
    setCurrentProjectTitle('');
    setImageLoading(true);
  };

  const showNextImage = () => {
    setImageLoading(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentProjectImages.length);
  };

  const showPrevImage = () => {
    setImageLoading(true);
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + currentProjectImages.length) % currentProjectImages.length
    );
  };

  // Keyboard navigation
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
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

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
      title: "Digital Store App",
      subtitle: "UX/UI Application Design",
      date: "November 2024",
      category: "UX/UI Design",
      description: "Created app design prototypes for Vana Snacks, a physical snack store's digital application. The design enabled customers to browse snacks, explore offers, and place orders seamlessly. The UI focused on a playful yet professional aesthetic.",
      impact: "Improved the client's ability to engage with customers digitally, boosting customer retention and sales opportunities.",
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
    <section 
      id="projects" 
      className="py-24 sm:py-32 md:py-40 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl animate-pulse opacity-10"
          style={{ backgroundColor: colors.primary }}></div>
        <div className="absolute bottom-0 right-0 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 rounded-full blur-3xl animate-pulse opacity-10"
          style={{ backgroundColor: colors.secondary }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Header section */}
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
            Showcasing innovative solutions with comprehensive design process and technical implementation
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start"
              aria-labelledby={`project-title-${index}`}
            >
              {/* LEFT SIDE: Project Visual + Technologies */}
              <div className="relative group space-y-6 sm:space-y-8">
                <div className="relative">
                  {/* Main Project Image */}
                  <button
                    onClick={() => openModal(allImagesInProject(project), 0, project.title)}
                    className="w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border-2 sm:border-4 group-hover:scale-[1.02] transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-offset-2"
                    style={{ 
                      borderColor: colors.primary,
                      '--tw-ring-color': colors.primary
                    } as React.CSSProperties}
                    aria-label={`View ${project.title} gallery`}
                  >
                    <img
                      src={project.imagePath}
                      alt={`${project.title} - Main preview showcasing the project design`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>

                  {/* Floating Design Element */}
                  <div 
                    className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-xl animate-bounce"
                    style={{ backgroundColor: colors.secondary }}
                    aria-hidden="true"
                  >
                    <Palette className="w-5 h-5 sm:w-7 sm:h-7" style={{ color: colors.bg }} />
                  </div>
                </div>

                {/* Additional Design Screens */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4" role="list" aria-label="Additional project screenshots">
                  {project.additionalImages.map((image, i) => (
                    <button
                      key={i}
                      onClick={() => openModal(allImagesInProject(project), i + 1, project.title)}
                      className="aspect-square rounded-lg sm:rounded-xl border-2 overflow-hidden flex items-center justify-center opacity-75 hover:opacity-100 transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2"
                      style={{ 
                        backgroundColor: `${colors.primary}5`, 
                        borderColor: `${colors.primary}30`,
                        '--tw-ring-color': colors.primary
                      } as React.CSSProperties}
                      aria-label={`View ${project.title} screenshot ${i + 2}`}
                      role="listitem"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Additional screenshot ${i + 2}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

                {/* Tech Stack - Now on left side below images */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-4" style={{ color: colors.primary }}>
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3" role="list">
                    {[...project.technologies, ...project.designTools].map((tech, i) => (
                      <Badge 
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border-2 hover:scale-105 transition-all shadow-sm"
                        style={{
                          backgroundColor: `${colors.primary}15`,
                          borderColor: colors.primary,
                          color: colors.primary
                        }}
                        role="listitem"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Project Details */}
              <div className="space-y-6 sm:space-y-8">
                {/* Project Meta */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <Badge 
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm"
                    style={{
                      backgroundColor: colors.secondary,
                      color: colors.bg
                    }}>
                    {project.category}
                  </Badge>
                  <Badge
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold border-2"
                    style={{ 
                      borderColor: colors.primary, 
                      color: colors.primary,
                      backgroundColor: `${colors.primary}10`
                    }}>
                    {project.date}
                  </Badge>
                </div>

                {/* Project Title and CTA */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6">
                  <h3 
                    id={`project-title-${index}`}
                    className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black leading-tight flex-1" 
                    style={{ color: colors.primary }}
                  >
                    {project.title}
                  </h3>
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button
                        className="px-6 py-3 sm:px-7 sm:py-4 rounded-xl font-bold group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-offset-2"
                        style={{
                          backgroundColor: colors.primary,
                          color: colors.bg,
                          '--tw-ring-color': colors.primary
                        } as React.CSSProperties}
                        aria-label={`Visit live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-45 transition-transform" aria-hidden="true" />
                        View Live
                      </Button>
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: colors.secondary }}>
                  {project.description}
                </p>

                {/* Impact Statement */}
                <div 
                  className="p-5 sm:p-6 md:p-7 rounded-2xl border-l-4 shadow-sm"
                  style={{
                    backgroundColor: `${colors.primary}10`,
                    borderLeftColor: colors.primary
                  }}
                  role="complementary"
                  aria-label="Project impact"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.primary }} aria-hidden="true" />
                    <span className="font-bold text-base sm:text-lg" style={{ color: colors.primary }}>Impact</span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: colors.secondary }}>
                    {project.impact}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-4" style={{ color: colors.primary }}>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="list">
                    {project.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-3 sm:p-4 rounded-xl transition-all hover:scale-[1.02]"
                        style={{ backgroundColor: `${colors.secondary}10` }}
                        role="listitem"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: colors.secondary }} aria-hidden="true" />
                        <span className="text-sm sm:text-base font-medium" style={{ color: colors.secondary }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Image Modal - Enhanced accessibility and UX */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in p-4 sm:p-6 md:p-8"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="relative w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-5xl max-h-[85vh] sm:max-h-[90vh]" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              onClick={closeModal}
              className="absolute -top-12 right-0 sm:-top-14 md:-right-14 text-white bg-black/30 hover:bg-black/50 p-2 sm:p-3 rounded-full transition-colors focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              variant="ghost"
              size="icon"
              aria-label="Close image gallery"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </Button>

            {/* Previous Button */}
            {currentProjectImages.length > 1 && (
              <Button
                onClick={showPrevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 sm:p-3 rounded-full transition-colors focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                variant="ghost"
                size="icon"
                aria-label="Previous image"
                style={{ minWidth: '48px', minHeight: '48px' }}
              >
                <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
              </Button>
            )}

            {/* Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden bg-black/20">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-12 h-12 animate-spin text-white" aria-label="Loading image" />
                </div>
              )}
              <img
                src={currentProjectImages[currentImageIndex]}
                alt={`${currentProjectTitle} - Detail view ${currentImageIndex + 1} of ${currentProjectImages.length}`}
                className="w-full h-full object-contain"
                loading="eager"
                onLoad={() => setImageLoading(false)}
                style={{ display: imageLoading ? 'none' : 'block' }}
              />
            </div>

            {/* Next Button */}
            {currentProjectImages.length > 1 && (
              <Button
                onClick={showNextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 sm:p-3 rounded-full transition-colors focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                variant="ghost"
                size="icon"
                aria-label="Next image"
                style={{ minWidth: '48px', minHeight: '48px' }}
              >
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
              </Button>
            )}

            {/* Image Counter */}
            {currentProjectImages.length > 1 && (
              <div 
                className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold shadow-lg"
                id="modal-title"
                role="status"
                aria-live="polite"
              >
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