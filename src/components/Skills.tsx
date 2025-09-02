import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Brain } from "lucide-react";

interface SkillsProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  darkMode: boolean; // Added this line
}

const Skills: React.FC<SkillsProps> = ({ colors, darkMode }) => {
  const skillCategories = [
    { 
      title: "UX/UI Design", 
      skills: ["Figma", "Prototyping", "Wireframing", "User Research", "Design Systems"], 
      icon: Palette,
    },
    { 
      title: "Frontend Development", 
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Responsive Design"], 
      icon: Code,
    },
    { 
      title: "Core Programming", 
      skills: ["C++", "Java", "Python", "Data Structures", "Algorithms"], 
      icon: Code,
    },
    { 
      title: "Backend & Database", 
      skills: ["MySQL", "REST APIs", "API Integration"], 
      icon: Database,
    },
    { 
      title: "Professional Skills", 
      skills: ["Design Thinking", "Problem Solving", "Team Collaboration", "Agile Methodology"], 
      icon: Brain,
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Blobs - Responsive sizes */}
      <div className="absolute top-0 left-0 w-[20rem] sm:w-[30rem] md:w-[40rem] h-[20rem] sm:h-[30rem] md:h-[40rem] rounded-full blur-3xl opacity-20"
           style={{ backgroundColor: colors.primary, transform: "translate(-50%, -20%)" }}></div>
      <div className="absolute bottom-0 right-0 w-[18rem] sm:w-[25rem] md:w-[35rem] h-[18rem] sm:h-[25rem] md:h-[35rem] rounded-full blur-3xl opacity-20"
           style={{ backgroundColor: colors.secondary, transform: "translate(30%, 40%)" }}></div>

      <div className="container mx-auto px-4 sm:px-5 relative z-10 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium border mb-4 sm:mb-5"
                 style={{ 
                   backgroundColor: `${colors.secondary}15`,
                   borderColor: colors.secondary,
                   color: colors.secondary
                 }}>
            My Toolkit
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6" style={{ color: colors.primary }}>
            My <span style={{ color: colors.secondary }}>Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} 
                  className="group transition-all duration-500 hover:-translate-y-1 border overflow-hidden flex flex-col"
                  style={{ 
                    backgroundColor: `${colors.bg}`,
                    borderColor: index % 2 === 0 ? `${colors.primary}30` : `${colors.secondary}30`
                  }}>
              <CardHeader className="flex-shrink-0 p-4 sm:p-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-500 shadow-md"
                       style={{ backgroundColor: index % 2 === 0 ? colors.primary : colors.secondary }}>
                    {/* The color of the icon should be a high-contrast value, like your background color */}
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.bg }} />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold" style={{ color: colors.primary }}>
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="flex-grow flex items-center p-4 sm:p-5">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} 
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full border transition-all"
                          style={{ 
                            backgroundColor: `${colors.primary}10`,
                            borderColor: `${colors.primary}30`,
                            color: colors.primary
                          }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;