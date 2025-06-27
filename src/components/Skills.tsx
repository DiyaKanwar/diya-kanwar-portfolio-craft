
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "React JS"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Programming Languages", 
      skills: ["C++", "Java", "Python", "C#"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Design Tools",
      skills: ["Figma", "WordPress"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Database",
      skills: ["MySQL"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Soft Skills",
      skills: ["Creativity", "Adaptability", "Critical Thinking", "Communication", "Analytical Thinking"],
      color: "bg-pink-50 border-pink-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse set of technical and soft skills that help me create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`${category.color} hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-background text-foreground text-sm rounded-full border"
                    >
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
