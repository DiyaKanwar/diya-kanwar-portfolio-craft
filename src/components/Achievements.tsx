
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Certification":
        return "gradient-primary text-white border-0";
      case "Competition":
        return "gradient-primary text-white border-0";
      case "Workshop":
        return "gradient-primary text-white border-0";
      case "Course":
        return "gradient-primary text-white border-0";
      default:
        return "gradient-primary text-white border-0";
    }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'rgba(255, 240, 209, 0.5)' }}>
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(59, 48, 48, 0.05)' }}></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(121, 87, 87, 0.05)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3B3030' }}>
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#795757' }}>
            Continuous learning and recognition in my field of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border-0 tech-shadow overflow-hidden" style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}>
                <div className="h-2 gradient-primary group-hover:h-3 transition-all duration-300"></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                      </div>
                      <Badge className={getTypeColor(achievement.type) + " font-semibold"} style={{ color: '#FFF0D1' }}>
                        {achievement.type}
                      </Badge>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ 
                      color: '#795757',
                      backgroundColor: 'rgba(121, 87, 87, 0.1)'
                    }}>
                      {achievement.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300" style={{ color: '#3B3030' }}>
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#3B3030' }}></span>
                      <p className="text-sm font-semibold gradient-text">
                        {achievement.organization}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed pl-5" style={{ color: '#795757' }}>
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
