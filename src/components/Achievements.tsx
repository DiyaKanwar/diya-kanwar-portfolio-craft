import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Award, Star, GraduationCap, Wrench } from "lucide-react";

interface AchievementsProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ colors, darkMode }) => {
  const achievements = [
    {
      title: "Elite Silver - NPTEL Cloud Computing",
      organization: "Swayam",
      date: "April 2024",
      icon: Award,
      description: "Advanced certification in cloud computing fundamentals"
    },
     {
      title: "Multi-Core Computer Architecture",
      organization: "Swayam",
      date: "October 2023",
      icon: Star,
      description: "Course on multi-core computer systems and parallel processing"
    },
    {
      title: "Introduction to Databases",
      organization: "Meta via Coursera",
      date: "March 2024",
      icon: GraduationCap,
      description: "Professional certification in database management"
    },
    {
      title: "Flutter Workshop Completion",
      organization: "CSE Department",
      date: "February 2024",
      icon: Wrench,
      description: "Hands-on mobile development training"
    }
  ];

  return (
    <section 
      id="achievements" 
      className="py-24 sm:py-32 md:py-40 relative overflow-hidden"
      aria-labelledby="achievements-heading"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"
             style={{ backgroundColor: colors.secondary }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"
             style={{ backgroundColor: colors.accent }}></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"
             style={{ backgroundColor: colors.primary }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
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
            Milestones
          </Badge>
          <h2 
            id="achievements-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 sm:mb-6" 
            style={{ color: colors.primary }}
          >
            Achievements & <span style={{ color: colors.secondary }}>Certifications</span>
          </h2>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto mt-4"
            style={{ color: colors.secondary }}
          >
            Continuous learning and professional development journey
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="border-l-2" 
            style={{borderColor: `${colors.primary}25`}}
            role="list"
            aria-label="Timeline of achievements"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index} 
                  className="relative pl-10 sm:pl-12 pb-10 sm:pb-12 last:pb-0"
                  role="listitem"
                >
                  {/* Timeline Dot - Enhanced */}
                  <div 
                    className="absolute left-0 top-2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 shadow-md"
                    style={{ backgroundColor: colors.bg }}
                    aria-hidden="true"
                  >
                    <div 
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full" 
                      style={{backgroundColor: colors.primary}}
                    ></div>
                  </div>

                  {/* Achievement Card - Improved accessibility and design */}
                  <div 
                    className="p-5 sm:p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-4 focus-within:ring-offset-2 group"
                    style={{
                      backgroundColor: `${colors.primary}05`,
                      borderColor: `${colors.primary}25`,
                      '--tw-ring-color': colors.primary
                    } as React.CSSProperties}
                    tabIndex={0}
                    role="article"
                    aria-label={`${achievement.title}, ${achievement.organization}, ${achievement.date}`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div 
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-sm"
                          style={{ backgroundColor: colors.secondary }}
                          aria-hidden="true"
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.bg }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 
                            className="text-base sm:text-lg font-bold leading-tight mb-1" 
                            style={{ color: colors.primary }}
                          >
                            {achievement.title}
                          </h3>
                          <p 
                            className="text-xs sm:text-sm font-medium opacity-90"
                            style={{ color: colors.secondary }}
                          >
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      <Badge
                        className="text-xs font-semibold px-3 py-1 flex-shrink-0 shadow-sm"
                        style={{ 
                          backgroundColor: `${colors.secondary}15`,
                          borderColor: colors.secondary,
                          color: colors.secondary 
                        }}
                      >
                        {achievement.date}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t"
                         style={{ borderColor: `${colors.primary}15` }}>
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: colors.secondary }}
                        aria-hidden="true"
                      ></div>
                      <p 
                        className="text-sm font-semibold" 
                        style={{ color: colors.secondary }}
                      >
                        {achievement.organization}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 sm:mt-20 text-center">
          <div 
            className="inline-block px-6 py-4 rounded-2xl border-2"
            style={{
              backgroundColor: `${colors.secondary}08`,
              borderColor: `${colors.secondary}20`
            }}
          >
            <p 
              className="text-sm sm:text-base font-medium"
              style={{ color: colors.secondary }}
            >
              Committed to continuous learning and professional growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;