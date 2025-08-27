import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, ArrowRight } from "lucide-react";

interface ContactProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
}

const Contact: React.FC<ContactProps> = ({ colors }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] rounded-full blur-3xl animate-pulse opacity-20"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <div
          className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full blur-3xl animate-pulse opacity-15"
          style={{ backgroundColor: colors.secondary }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            className="px-8 py-3 rounded-full text-sm font-semibold border-2 tracking-wide uppercase"
            style={{
              backgroundColor: `${colors.secondary}12`,
              borderColor: colors.secondary,
              color: colors.secondary,
            }}
          >
            Let’s Connect
          </Badge>
          <h2
            className="text-5xl md:text-6xl font-extrabold mt-6 mb-6 leading-tight"
            style={{ color: colors.primary }}
          >
            Get in <span style={{ color: colors.secondary }}>Touch</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.secondary }}
          >
            Whether you have a project in mind or a collaboration idea, I’d love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="mailto:Kanwardiya1@gmail.com"
            className="group block w-full p-10 mb-12 rounded-3xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            style={{
              backgroundColor: `${colors.primary}08`,
              borderColor: `${colors.primary}30`,
            }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold transition-colors duration-300 group-hover:text-primary"
              style={{ color: colors.secondary }}
            >
              Kanwardiya1@gmail.com
            </h3>
            <div
              className="flex items-center justify-center mt-3 text-lg font-medium transition-all duration-300 group-hover:text-primary"
              style={{ color: colors.primary }}
            >
              <span>Send me an email</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </a>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border-2 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: `${colors.secondary}12`,
                borderColor: colors.secondary,
                color: colors.secondary,
              }}
            >
              <Linkedin className="w-7 h-7 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="https://github.com/DiyaKanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border-2 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: `${colors.primary}12`,
                borderColor: colors.primary,
                color: colors.primary,
              }}
            >
              <Github className="w-7 h-7 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          className="text-center mt-24 pt-10 border-t"
          style={{ borderColor: `${colors.primary}25` }}
        >
          <p
            className="text-base md:text-lg mb-3"
            style={{ color: colors.secondary }}
          >
            Built with <span className="font-semibold">React</span> &{" "}
            <span className="font-semibold">Tailwind CSS</span>
          </p>
          <p
            className="text-sm opacity-75"
            style={{ color: colors.secondary }}
          >
            © {currentYear} Diya Kanwar — Designed & Developed with ❤
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
