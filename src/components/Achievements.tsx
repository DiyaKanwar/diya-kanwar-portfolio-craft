
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Achievements = () => {
  const achievements = [
    {
      title: "Elite Silver - NPTEL Cloud Computing",
      organization: "Swayam",
      date: "April 2024",
      type: "Certification",
      description: "Successfully completed cloud computing course with Elite Silver grade"
    },
    {
      title: "Game of Code Participant",
      organization: "IEEE",
      date: "March 27-29, 2024",
      type: "Competition",
      description: "Participated in the competitive programming event organized by IEEE"
    },
    {
      title: "Introduction to Databases",
      organization: "Meta via Coursera",
      date: "March 2024",
      type: "Certification",
      description: "Meta certificate program focusing on database fundamentals and design"
    },
    {
      title: "Flutter Workshop",
      organization: "CSE Department",
      date: "February 2024",
      type: "Workshop",
      description: "Attended hands-on workshop on Flutter mobile app development"
    },
    {
      title: "Multi-Core Computer Architecture",
      organization: "Swayam",
      date: "July-October 2023",
      type: "Course",
      description: "Comprehensive course on computer architecture and multi-core systems"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Certification":
        return "bg-green-100 text-green-800 border-green-200";
      case "Competition":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Workshop":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Course":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and recognition in my field of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getTypeColor(achievement.type)}>
                    {achievement.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{achievement.date}</span>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">
                    {achievement.organization}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
