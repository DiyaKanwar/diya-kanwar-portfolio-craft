
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Brain, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "React JS"],
      icon: Code,
      gradient: "from-primary to-blue-400"
    },
    {
      title: "Programming Languages", 
      skills: ["C++", "Java", "Python", "C#"],
      icon: Code,
      gradient: "from-secondary to-purple-400"
    },
    {
      title: "Design Tools",
      skills: ["Figma", "WordPress"],
      icon: Palette,
      gradient: "from-pink-500 to-rose-400"
    },
    {
      title: "Database",
      skills: ["MySQL"],
      icon: Database,
      gradient: "from-green-500 to-emerald-400"
    },
    {
      title: "Soft Skills",
      skills: ["Creativity", "Adaptability", "Critical Thinking", "Communication", "Analytical Thinking"],
      icon: Brain,
      gradient: "from-orange-500 to-amber-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse set of technical and soft skills that help me create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-0 tech-shadow">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-background/80 text-foreground text-sm rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
