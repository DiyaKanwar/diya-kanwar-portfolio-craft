import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, ArrowRight, Mail } from "lucide-react";

interface ContactProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ colors, darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 md:py-40 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Animated Background - Optimized */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-80px] left-[-80px] sm:top-[-100px] sm:left-[-100px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full blur-3xl animate-pulse opacity-15 sm:opacity-20"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <div
          className="absolute bottom-[-100px] right-[-100px] sm:bottom-[-120px] sm:right-[-120px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full blur-3xl animate-pulse opacity-10 sm:opacity-15"
          style={{ backgroundColor: colors.secondary }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        {/* Header - Enhanced hierarchy */}
        <div className="text-center mb-16 sm:mb-20">
          <Badge
            className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border tracking-wide uppercase shadow-sm"
            style={{
              backgroundColor: `${colors.secondary}12`,
              borderColor: colors.secondary,
              color: colors.secondary,
            }}
          >
            Let's Connect
          </Badge>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black mt-5 sm:mt-6 mb-5 sm:mb-6 leading-tight"
            style={{ color: colors.primary }}
          >
            Get in <span style={{ color: colors.secondary }}>Touch</span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.secondary }}
          >
            Whether you have a project in mind or a collaboration idea, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Card - Improved accessibility */}
        <div className="max-w-3xl mx-auto">
          <a
            href="mailto:Kanwardiya1@gmail.com"
            className="group block w-full p-8 sm:p-10 mb-10 sm:mb-12 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-offset-2"
            style={{
              backgroundColor: `${colors.primary}08`,
              borderColor: `${colors.primary}30`,
              '--tw-ring-color': colors.primary
            } as React.CSSProperties}
            aria-label="Send email to Kanwardiya1@gmail.com"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-md"
                style={{ backgroundColor: colors.primary }}
                aria-hidden="true"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: colors.bg }} />
              </div>
            </div>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-black text-center transition-colors duration-300 mb-3"
              style={{ color: colors.secondary }}
            >
              Kanwardiya1@gmail.com
            </h3>
            <div
              className="flex items-center justify-center gap-2 text-base sm:text-lg font-semibold transition-all duration-300"
              style={{ color: colors.primary }}
            >
              <span>Send me an email</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
            </div>
          </a>

          {/* Social Icons - Enhanced touch targets */}
          <div 
            className="flex items-center justify-center gap-5 sm:gap-6"
            role="list"
            aria-label="Social media links"
          >
            <a
              href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-full border-2 group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2"
              style={{
                backgroundColor: `${colors.secondary}12`,
                borderColor: colors.secondary,
                color: colors.secondary,
                '--tw-ring-color': colors.secondary,
                minWidth: '56px',
                minHeight: '56px'
              } as React.CSSProperties}
              aria-label="Visit my LinkedIn profile"
              role="listitem"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/DiyaKanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-full border-2 group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2"
              style={{
                backgroundColor: `${colors.primary}12`,
                borderColor: colors.primary,
                color: colors.primary,
                '--tw-ring-color': colors.primary,
                minWidth: '56px',
                minHeight: '56px'
              } as React.CSSProperties}
              aria-label="Visit my GitHub profile"
              role="listitem"
            >
              <Github className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Footer - Improved styling */}
        <footer
          className="text-center mt-20 sm:mt-24 pt-10 border-t"
          style={{ borderColor: `${colors.primary}20` }}
          role="contentinfo"
        >
          <p
            className="text-sm sm:text-base mb-3 font-medium"
            style={{ color: colors.secondary }}
          >
            Built with <span className="font-bold">React</span> &{" "}
            <span className="font-bold">Tailwind CSS</span>
          </p>
          <p
            className="text-xs sm:text-sm opacity-75"
            style={{ color: colors.secondary }}
          >
            © {currentYear} Diya Kanwar. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;