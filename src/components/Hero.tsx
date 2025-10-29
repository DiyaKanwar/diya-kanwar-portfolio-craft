import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase, Coffee
} from "lucide-react";

interface HeroProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  scrollToSection: (sectionId: string) => void;
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ colors = {primary: '#000', secondary: '#000', accent: '#000', bg: '#fff'}, scrollToSection, darkMode }) => {
  const pfImageSrc = darkMode ? "/dark_pf.png" : "/light_pf.png";

  return (
    <section 
      className="min-h-[90svh] sm:min-h-[100svh] flex items-center justify-center relative overflow-hidden pt-14 sm:pt-16 md:pt-20"
      aria-label="Hero section"
    >
      {/* Dynamic Background - Optimized */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 md:w-96 sm:h-72 md:h-96 rounded-full blur-3xl animate-pulse opacity-10 sm:opacity-15"
          style={{ backgroundColor: colors.primary }}></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 md:w-80 sm:h-64 md:h-80 rounded-full blur-3xl animate-pulse opacity-5 sm:opacity-10"
          style={{ backgroundColor: colors.secondary, animationDelay: '1000ms' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Profile Section */}
        <div className="mb-6 sm:mb-8">
          <div className="relative inline-block group">
            {/* Floating Elements - Decorative */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-bounce"
              style={{ backgroundColor: colors.secondary, animationDelay: '0s' }} aria-hidden="true"></div>
            <div className="absolute top-0 -right-4 sm:-right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-bounce"
              style={{ backgroundColor: colors.primary, animationDelay: '1s' }} aria-hidden="true"></div>
            <div className="absolute -bottom-2 -left-4 sm:-bottom-3 sm:-left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-bounce"
              style={{ backgroundColor: colors.secondary, animationDelay: '2s' }} aria-hidden="true"></div>

            {/* Main Profile Image - Improved accessibility */}
            <div className="w-24 h-24 sm:w-28 md:w-32 sm:h-28 md:h-32 rounded-2xl relative flex items-center justify-center border-2 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-xl overflow-hidden focus-within:ring-4 focus-within:ring-offset-2"
              style={{
                borderColor: `${colors.primary}50`,
                '--tw-ring-color': colors.primary
              } as React.CSSProperties}>
              <img
                src={pfImageSrc}
                alt="Diya Kanwar - UX/UI Designer and Developer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Text Content - Improved hierarchy */}
        <div className="max-w-[90vw] sm:max-w-2xl lg:max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="mb-4 sm:mb-5">
            <Badge
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border shadow-sm"
              style={{
                backgroundColor: `${colors.primary}15`,
                borderColor: colors.primary,
                color: colors.primary
              }}
              aria-label="Seeking UX/UI Internship Opportunities"
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" aria-hidden="true" />
              Seeking UX/UI Internship Opportunities
            </Badge>
          </div>

          {/* Main Heading - Better typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 tracking-tight leading-tight" 
            style={{ color: colors.primary }}>
            Designer Who Codes.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl max-w-lg sm:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8" 
            style={{ color: colors.secondary }}>
            I'm <span className="font-bold">Diya Kanwar</span>, a passionate designer focused on creating
            <span className="font-bold px-2 py-1 mx-2 rounded-md inline-block"
              style={{ backgroundColor: `${colors.secondary}20`, color: colors.secondary }}>
              intuitive and beautiful
            </span>
            digital experiences that solve real-world problems.
          </p>

          {/* CTA Buttons - Enhanced accessibility */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl group focus:ring-4 focus:ring-offset-2"
              style={{
                backgroundColor: colors.primary,
                color: colors.bg,
                '--tw-ring-color': colors.primary
              } as React.CSSProperties}
              aria-label="View my portfolio projects"
            >
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:-rotate-6 transition-transform" aria-hidden="true" />
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-2 group shadow-lg hover:shadow-xl focus:ring-4 focus:ring-offset-2"
              style={{
                backgroundColor: darkMode ? "#0D1117" : "#FBEACB",
                color: darkMode ? "#D9E0E5" : "#731E0D",
                borderColor: darkMode ? "#D9E0E5" : "#731E0D",
                '--tw-ring-color': darkMode ? "#D9E0E5" : "#731E0D"
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = darkMode ? "#8B949E" : "#731E0D";
                (e.currentTarget as HTMLButtonElement).style.color = darkMode ? "#0D1117" : "#FFF0D1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = darkMode ? "#0D1117" : "#FBEACB";
                (e.currentTarget as HTMLButtonElement).style.color = darkMode ? "#D9E0E5" : "#731E0D";
              }}
              aria-label="Get in touch with me"
            >
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6 mr-2 transition-transform group-hover:rotate-12" aria-hidden="true" />
              Let's Talk
            </Button>
          </div>

          {/* Social Links - Improved touch targets and accessibility */}
          <div className="flex items-center justify-center gap-4 sm:gap-6" role="list" aria-label="Social media links">
            <a
              href="https://github.com/DiyaKanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 border-2 group shadow-lg hover:shadow-xl focus:ring-4 focus:ring-offset-2"
              style={{
                backgroundColor: `${colors.primary}10`,
                borderColor: colors.primary,
                color: colors.primary,
                '--tw-ring-color': colors.primary,
                minWidth: '48px',
                minHeight: '48px'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = colors.primary;
                (e.currentTarget as HTMLAnchorElement).style.color = colors.bg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${colors.primary}10`;
                (e.currentTarget as HTMLAnchorElement).style.color = colors.primary;
              }}
              aria-label="Visit my GitHub profile"
              role="listitem"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.435.37.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.27 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 border-2 group shadow-lg hover:shadow-xl focus:ring-4 focus:ring-offset-2"
              style={{
                backgroundColor: darkMode ? "#0D1117" : "#FBEACB",
                color: darkMode ? "#D9E0E5" : "#731E0D",
                borderColor: darkMode ? "#D9E0E5" : "#731E0D",
                '--tw-ring-color': darkMode ? "#D9E0E5" : "#731E0D",
                minWidth: '48px',
                minHeight: '48px'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = darkMode ? "#8B949E" : "#731E0D";
                (e.currentTarget as HTMLAnchorElement).style.color = darkMode ? "#0D1117" : "#FFF0D1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = darkMode ? "#0D1117" : "#FBEACB";
                (e.currentTarget as HTMLAnchorElement).style.color = darkMode ? "#D9E0E5" : "#731E0D";
              }}
              aria-label="Visit my LinkedIn profile"
              role="listitem"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554V14.86c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.941v5.687H9.347V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.602 0 4.268 2.37 4.268 5.458v6.285zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.068 0-1.144.924-2.068 2.068-2.068 1.143 0 2.068.924 2.068 2.068 0 1.142-.925 2.068-2.068 2.068zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.724v20.551C0 23.229.792 24 1.771 24h20.451C23.205 24 24 23.229 24 22.275V1.724C24 .771 23.205 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;