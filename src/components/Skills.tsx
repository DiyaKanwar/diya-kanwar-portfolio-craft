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
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20"
           style={{ backgroundColor: colors.primary, transform: "translate(-50%, -20%)" }}></div>
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full blur-3xl opacity-20"
           style={{ backgroundColor: colors.secondary, transform: "translate(30%, 40%)" }}></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <Badge className="px-8 py-4 rounded-full text-sm font-bold border-2 mb-6"
                 style={{ 
                   backgroundColor: `${colors.secondary}15`,
                   borderColor: colors.secondary,
                   color: colors.secondary
                 }}>
            My Toolkit
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: colors.primary }}>
            My <span style={{ color: colors.secondary }}>Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} 
                  className="group transition-all duration-500 hover:-translate-y-2 border-2 overflow-hidden flex flex-col"
                  style={{ 
                    backgroundColor: `${colors.bg}`,
                    borderColor: index % 2 === 0 ? `${colors.primary}30` : `${colors.secondary}30`
                  }}>
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg"
                       style={{ backgroundColor: index % 2 === 0 ? colors.primary : colors.secondary }}>
                    {/* The color of the icon should be a high-contrast value, like your background color */}
                    <category.icon className="w-7 h-7" style={{ color: colors.bg }} />
                  </div>
                  <CardTitle className="text-xl font-bold" style={{ color: colors.primary }}>
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="flex-grow flex items-center">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} 
                          className="px-3 py-1.5 text-sm font-medium rounded-full border transition-all"
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