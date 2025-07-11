import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, BookOpen, Wrench, GraduationCap } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "Elite Silver - NPTEL Cloud Computing",
      organization: "Swayam",
      date: "April 2024",
      type: "Certification",
      description: "Successfully completed cloud computing course with Elite Silver grade",
      icon: Award
    },
    {
      title: "Game of Code Participant",
      organization: "IEEE",
      date: "March 27-29, 2024",
      type: "Competition",
      description: "Participated in the competitive programming event organized by IEEE",
      icon: Trophy
    },
    {
      title: "Introduction to Databases",
      organization: "Meta via Coursera",
      date: "March 2024",
      type: "Certification",
      description: "Meta certificate program focusing on database fundamentals and design",
      icon: GraduationCap
    },
    {
      title: "Flutter Workshop",
      organization: "CSE Department",
      date: "February 2024",
      type: "Workshop",
      description: "Attended hands-on workshop on Flutter mobile app development",
      icon: Wrench
    },
    {
      title: "Multi-Core Computer Architecture",
      organization: "Swayam",
      date: "July-October 2023",
      type: "Course",
      description: "Comprehensive course on computer architecture and multi-core systems",
      icon: BookOpen
    }
  ];

  const getTypeClass = () => "gradient-primary text-background border-0";

  return (
    <section id="achievements" className="py-20 bg-muted/40 text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-2xl bg-[#0015240D]"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full blur-2xl bg-[#7957570D]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Continuous learning and recognition in my field of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 glass-effect overflow-hidden">
                <div className="h-2 gradient-primary group-hover:h-3 transition-all duration-300"></div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <Badge className={getTypeClass() + " font-semibold"}>
                        {achievement.type}
                      </Badge>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {achievement.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-3 bg-foreground"></span>
                      <p className="text-sm font-semibold gradient-text">
                        {achievement.organization}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed pl-5 text-muted-foreground">
                      {achievement.description}
                    </p>
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
