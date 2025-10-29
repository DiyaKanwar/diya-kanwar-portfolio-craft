import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User, Target, Rocket, GraduationCap, Award
} from "lucide-react";

interface AboutProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ colors, darkMode }) => {
  return (
    <section id="about" className="py-24 sm:py-32 md:py-40 relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-15"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-10"
          style={{ backgroundColor: colors.secondary, animationDelay: "1000ms" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <Badge
            className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border mb-5 sm:mb-6 shadow-sm"
            style={{
              backgroundColor: `${colors.secondary}15`,
              borderColor: colors.secondary,
              color: colors.secondary,
            }}
          >
            Get to Know Me
          </Badge>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 sm:mb-6"
            style={{ color: colors.primary }}
          >
            About <span style={{ color: colors.secondary }}>Me</span>
          </h2>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto mt-4"
            style={{ color: colors.secondary }}
          >
            Passionate about crafting digital experiences that make a difference
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {[
              {
                icon: User,
                title: "My Journey",
                content:
                  "Computer Science student at Chandigarh University with 7.53 CGPA, passionate about creating user-centered digital experiences that solve real-world problems.",
              },
              {
                icon: Target,
                title: "What Drives Me",
                content:
                  "I believe in the power of technology to transform ideas into reality. My approach combines technical expertise with creative problem-solving.",
              },
              {
                icon: Rocket,
                title: "Looking Forward",
                content:
                  "Actively seeking UX/UI internship opportunities to contribute to innovative projects and grow with experienced teams.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-6 sm:p-8 border-2 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.03] group focus-within:ring-4 focus-within:ring-offset-2 flex-1"
                style={{
                  backgroundColor:
                    idx % 2 === 0 ? `${colors.primary}10` : `${colors.secondary}10`,
                  borderColor:
                    idx % 2 === 0 ? `${colors.primary}30` : `${colors.secondary}30`,
                  '--tw-ring-color': idx % 2 === 0 ? colors.primary : colors.secondary
                } as React.CSSProperties}
                tabIndex={0}
                role="article"
                aria-label={item.title}
              >
                <CardContent className="p-0 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-md"
                      style={{
                        backgroundColor: idx % 2 === 0 ? colors.primary : colors.secondary,
                      }}
                      aria-hidden="true"
                    >
                      <item.icon
                        className="w-6 h-6 sm:w-7 sm:h-7"
                        style={{ color: colors.bg }} 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-xl sm:text-2xl font-bold mb-3"
                        style={{ color: colors.primary }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="leading-relaxed text-sm sm:text-base"
                        style={{ color: colors.secondary }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Education only */}
          <div className="flex flex-col justify-center">
            <Card
              className="p-8 sm:p-10 border-2 shadow-lg hover:shadow-xl transition-all duration-300 focus-within:ring-4 focus-within:ring-offset-2 h-full"
              style={{
                backgroundColor: `${colors.secondary}10`,
                borderColor: `${colors.secondary}30`,
                '--tw-ring-color': colors.secondary
              } as React.CSSProperties}
              tabIndex={0}
              role="article"
              aria-label="Education information"
            >
              <CardContent className="p-0 h-full flex flex-col justify-center">
                <div className="flex items-center gap-5 sm:gap-6 mb-10">
                  <div
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ backgroundColor: colors.secondary }}
                    aria-hidden="true"
                  >
                    <GraduationCap
                      className="w-8 h-8 sm:w-9 sm:h-9"
                      style={{ color: colors.bg }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black" style={{ color: colors.primary }}>
                      Education
                    </h3>
                    <p className="text-sm sm:text-base mt-1" style={{ color: colors.secondary }}>Academics</p>
                  </div>
                </div>

                <div className="space-y-7 sm:space-y-8">
                  {[
                    {
                      title: "Bachelor of Engineering - CSE",
                      subtitle: "Chandigarh University (Expected July 2026)",
                      extra: "CGPA: 7.53",
                      current: true,
                    },
                    {
                      title: "12th Grade - CBSE",
                      subtitle: "Euro International School",
                      extra: "81.67% (2021-2022)",
                      current: false,
                    },
                  ].map((edu, idx) => (
                    <div
                      key={idx}
                      className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                        edu.current ? "border-2" : "border"
                      }`}
                      style={{
                        backgroundColor: edu.current
                          ? `${colors.primary}15`
                          : `${colors.secondary}10`,
                        borderColor: edu.current ? colors.primary : `${colors.primary}20`,
                      }}
                    >
                      {edu.current && (
                        <Badge
                          className="mb-3 font-bold text-xs"
                          style={{
                            backgroundColor: colors.secondary,
                            color: colors.bg,
                          }}
                        >
                          Current
                        </Badge>
                      )}
                      <h4
                        className="font-bold text-base sm:text-lg mb-2"
                        style={{ color: colors.primary }}
                      >
                        {edu.title}
                      </h4>
                      <p className="mb-3 text-sm sm:text-base" style={{ color: colors.secondary }}>
                        {edu.subtitle}
                      </p>
                      <div className="flex items-center gap-2">
                        <Award
                          className="w-4 h-4"
                          style={{ color: colors.secondary }}
                          aria-hidden="true"
                        />
                        <p className="font-bold text-sm sm:text-base" style={{ color: colors.secondary }}>
                          {edu.extra}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;