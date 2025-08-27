import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, Linkedin, Palette, Sparkles, 
  ChevronRight, Briefcase, Coffee, Monitor, Figma
} from "lucide-react";

interface HeroProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ colors, scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-15"
             style={{ backgroundColor: colors.primary }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-10"
             style={{ backgroundColor: colors.secondary, animationDelay: '1000ms' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Profile Section */}
        <div className="mb-8">
          <div className="relative inline-block group">
            {/* Floating Elements for a subtle, dynamic feel */}
            <div className="absolute -top-5 -left-5 w-4 h-4 rounded-full animate-bounce" 
                 style={{ backgroundColor: colors.secondary, animationDelay: '0s' }}></div>
            <div className="absolute top-0 -right-8 w-3 h-3 rounded-full animate-bounce" 
                 style={{ backgroundColor: colors.primary, animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 -left-8 w-3 h-3 rounded-full animate-bounce" 
                 style={{ backgroundColor: colors.secondary, animationDelay: '2s' }}></div>

            {/* Main Profile Icon - Changed to Palette for a design focus */}
            <div className="w-32 h-32 rounded-3xl relative flex items-center justify-center border-4 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl"
                 style={{ 
                   backgroundColor: colors.primary,
                   borderColor: `${colors.primary}50`
                 }}>
              <Palette className="w-16 h-16" style={{ color: colors.bg }} />
              <div className="absolute -top-2 -right-2 p-1 bg-white/80 rounded-full shadow-lg">
                <Sparkles className="w-6 h-6" style={{ color: colors.secondary }} />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="px-5 py-2 rounded-full text-xs font-bold border-2 inline-block"
                  style={{ 
                    backgroundColor: `${colors.primary}15`,
                    borderColor: colors.primary,
                    color: colors.primary
                  }}>
              ✨ Seeking UX/UI Internship Opportunities
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight" style={{ color: colors.primary }}>
            Designer Who Codes.
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-8" style={{ color: colors.secondary }}>
            I'm Diya Kanwar, a passionate designer focused on creating 
            <span className="font-bold px-2 py-1 mx-1.5 rounded-md" 
                           style={{ backgroundColor: `${colors.secondary}20`, color: colors.secondary }}>
              intuitive and beautiful
            </span> 
            digital experiences that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button onClick={() => scrollToSection('projects')}
                    size="lg"
                    className="px-8 py-4 rounded-xl font-bold text-base transition-all duration-500 hover:-translate-y-1 hover:scale-105 shadow-xl group"
                    style={{ 
                      backgroundColor: colors.primary,
                      color: colors.bg
                    }}>
              <Briefcase className="w-5 h-5 mr-2 group-hover:-rotate-6 transition-transform" />
              View My Work
            </Button>
            <Button onClick={() => scrollToSection('contact')}
                    variant="outline"
                    size="lg" 
                    className="px-8 py-4 rounded-xl font-bold text-base transition-all duration-500 hover:-translate-y-1 border-2 group"
                    style={{ 
                      borderColor: colors.secondary,
                      color: colors.secondary
                    }}>
              <Coffee className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Let's Talk
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5">
            <a href="https://github.com/DiyaKanwar" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 border-2 group shadow-lg"
               style={{ 
                 backgroundColor: `${colors.primary}10`,
                 borderColor: colors.primary,
                 color: colors.primary
               }}>
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/diya-kanwar-6a045024a" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 border-2 group shadow-lg"
               style={{ 
                 backgroundColor: `${colors.secondary}10`,
                 borderColor: colors.secondary,
                 color: colors.secondary
               }}>
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
