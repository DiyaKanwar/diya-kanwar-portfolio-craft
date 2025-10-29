import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Brain, Cpu } from "lucide-react";

interface SkillsProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ colors, darkMode }) => {
  const skillCategories = [
    { 
      title: "UX/UI Design", 
      skills: ["Figma", "Prototyping", "Wireframing", "User Research", "Design Systems"], 
      icon: Palette,
      description: "Creating beautiful, user-centered interfaces"
    },
    { 
      title: "Frontend Development", 
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Responsive Design"], 
      icon: Code,
      description: "Building interactive web experiences"
    },
    { 
      title: "Core Programming", 
      skills: ["C++", "Java", "Python", "Data Structures", "Algorithms"], 
      icon: Cpu,
      description: "Strong foundation in computer science"
    },
    { 
      title: "Backend & Database", 
      skills: ["MySQL", "REST APIs", "API Integration"], 
      icon: Database,
      description: "Working with data and server-side logic"
    },
    { 
      title: "Professional Skills", 
      skills: ["Design Thinking", "Problem Solving", "Team Collaboration", "Agile Methodology"], 
      icon: Brain,
      description: "Soft skills that drive project success"
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-24 sm:py-32 md:py-40 relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[24rem] sm:w-[32rem] md:w-[42rem] h-[24rem] sm:h-[32rem] md:h-[42rem] rounded-full blur-3xl opacity-15"
             style={{ backgroundColor: colors.primary, transform: "translate(-50%, -30%)" }}></div>
        <div className="absolute bottom-0 right-0 w-[20rem] sm:w-[28rem] md:w-[38rem] h-[20rem] sm:h-[28rem] md:h-[38rem] rounded-full blur-3xl opacity-15"
             style={{ backgroundColor: colors.secondary, transform: "translate(40%, 50%)" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-16 sm:mb-20">
          <Badge 
            className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border mb-5 sm:mb-6 shadow-sm"
            style={{ 
              backgroundColor: `${colors.secondary}15`,
              borderColor: colors.secondary,
              color: colors.secondary
            }}
          >
            My Toolkit
          </Badge>
          <h2 
            id="skills-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 sm:mb-6" 
            style={{ color: colors.primary }}
          >
            My <span style={{ color: colors.secondary }}>Skills</span>
          </h2>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto mt-4"
            style={{ color: colors.secondary }}
          >
            A versatile skill set spanning design, development, and collaboration
          </p>
        </div>

        {/* Skills Grid - Improved layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-2 overflow-hidden flex flex-col focus-within:ring-4 focus-within:ring-offset-2"
              style={{ 
                backgroundColor: colors.bg,
                borderColor: index % 2 === 0 ? `${colors.primary}30` : `${colors.secondary}30`,
                '--tw-ring-color': index % 2 === 0 ? colors.primary : colors.secondary
              } as React.CSSProperties}
              tabIndex={0}
              role="article"
              aria-label={`${category.title} skills`}
            >
              <CardHeader className="flex-shrink-0 p-5 sm:p-6 pb-4">
                <div className="flex items-start gap-4 mb-3">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-md"
                    style={{ backgroundColor: index % 2 === 0 ? colors.primary : colors.secondary }}
                    aria-hidden="true"
                  >
                    <category.icon 
                      className="w-6 h-6 sm:w-7 sm:h-7" 
                      style={{ color: colors.bg }} 
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle 
                      className="text-lg sm:text-xl font-black mb-2" 
                      style={{ color: colors.primary }}
                    >
                      {category.title}
                    </CardTitle>
                    <p 
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: colors.secondary }}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-grow flex items-start p-5 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i} 
                      className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                      style={{ 
                        backgroundColor: `${colors.primary}10`,
                        borderColor: `${colors.primary}30`,
                        color: colors.primary
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div 
            className="inline-block px-6 py-4 rounded-2xl border-2"
            style={{
              backgroundColor: `${colors.primary}08`,
              borderColor: `${colors.primary}20`
            }}
          >
            <p 
              className="text-sm sm:text-base font-medium"
              style={{ color: colors.secondary }}
            >
              Always learning and expanding my toolkit with new technologies and design methodologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;