import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink, Play, Palette, ChevronRight,
  Star, Smartphone
} from "lucide-react";

interface ProjectsProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
}

const Projects: React.FC<ProjectsProps> = ({ colors }) => {
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
      additionalImages: [ // Added additional images
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
      additionalImages: [ // Added additional images
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
      additionalImages: [ // Added additional images
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
      additionalImages: [ // Added additional images
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
      additionalImages: [ // Added additional images
        "/UX UI PROJECTS/Vana_Snacks/2.jpg",
        "/UX UI PROJECTS/Vana_Snacks/3.jpg",
        "/UX UI PROJECTS/Vana_Snacks/4.jpg",
      ],
      liveDemo: true,
      liveDemoLink: "https://www.figma.com/design/RhUH8eGoUGSmJt9luNGPhu/Vana-Snacks?node-id=0-1&t=HVhISGBqvRKjcJPT-1",
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background blobs for a dynamic feel */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-10"
          style={{ backgroundColor: colors.primary }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-10"
          style={{ backgroundColor: colors.secondary }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header section */}
        <div className="text-center mb-20">
          <Badge className="px-8 py-4 rounded-full text-sm font-bold border-2 mb-6"
            style={{
              backgroundColor: `${colors.secondary}15`,
              borderColor: colors.secondary,
              color: colors.secondary
            }}>
             Designs and Projects
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: colors.primary }}>
            My <span style={{ color: colors.secondary }}>Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.secondary }}>
            Showcasing innovative solutions with comprehensive design process and technical implementation
          </p>
        </div>

        {/* Individual Project Showcase */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Project Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                <div className="relative">
                  {/* Main Project Image (1.jpg) */}
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 group-hover:scale-105 transition-all duration-700"
                    style={{ borderColor: colors.primary }}>
                    <img
                      src={project.imagePath}
                      alt={`${project.title} - Main View`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Design Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl animate-bounce"
                    style={{ backgroundColor: colors.secondary }}>
                    <Palette className="w-6 h-6" style={{ color: colors.accent }} />
                  </div>

                  {/* Live Demo Badge */}
                  {project.liveDemo && (
                    <div className="absolute top-6 left-6">
                      <Badge className="px-4 py-2 font-bold animate-pulse"
                        style={{ backgroundColor: colors.primary, color: colors.bg }}>
                        <Play className="w-4 h-4 mr-2" />
                        Live Demo
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Additional Design Screens (2.jpg, 3.jpg, 4.jpg) */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {project.additionalImages.map((image, i) => (
                    <div key={i}
                      className="aspect-square rounded-2xl border-2 overflow-hidden flex items-center justify-center opacity-75 hover:opacity-100 transition-all group-hover:scale-105"
                      style={{ backgroundColor: `${colors.primary}5`, borderColor: `${colors.primary}30` }}>
                      <img
                        src={image}
                        alt={`${project.title} - Screenshot ${i + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-8`}>
                {/* Project Meta */}
                <div className="flex items-center gap-4 flex-wrap">
                  <Badge className="px-4 py-2 font-bold"
                    style={{ backgroundColor: colors.secondary, color: colors.accent }}>
                    {project.category}
                  </Badge>
                  <span className="px-4 py-2 rounded-full text-sm font-medium border"
                    style={{ borderColor: colors.primary, color: colors.primary }}>
                    {project.date}
                  </span>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="text-4xl font-black mb-2" style={{ color: colors.primary }}>
                    {project.title}
                  </h3>
                  <p className="text-xl font-semibold opacity-75" style={{ color: colors.secondary }}>
                    {project.subtitle}
                  </p>
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

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {project.liveDemo && (
                    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                      <Button className="px-6 py-3 rounded-xl font-bold group"
                        style={{ backgroundColor: colors.primary, color: colors.bg }}>
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                        View Live Project
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;