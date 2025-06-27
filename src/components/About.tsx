
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Phone, Mail, User, Target, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  My Journey
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-14">
                I'm currently pursuing a <span className="text-primary font-semibold">Bachelor of Engineering in Computer Science</span> at Chandigarh University 
                with a CGPA of <span className="text-secondary font-semibold">7.53</span>. My passion lies in front-end development and creating intuitive user 
                interfaces that solve real-world problems.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-purple-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                  What Drives Me
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-14">
                I believe in the power of <span className="text-primary font-semibold">technology to transform ideas into reality</span>. My approach combines 
                technical expertise with creative problem-solving, always keeping the <span className="text-secondary font-semibold">user experience</span> at 
                the center of every project.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-green-500 transition-colors duration-300">
                  Looking Forward
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-14">
                I'm actively seeking <span className="text-primary font-semibold">internship opportunities</span> where I can contribute to innovative projects, 
                collaborate with experienced teams, and continue growing as a developer.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 tech-shadow bg-card/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors duration-300">
                    <h4 className="font-semibold text-foreground">Bachelor of Engineering - CSE</h4>
                    <p className="text-sm text-muted-foreground">Chandigarh University (Expected July 2026)</p>
                    <p className="text-sm font-semibold gradient-text">CGPA: 7.53</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 hover:bg-secondary/5 transition-colors duration-300">
                    <h4 className="font-semibold text-foreground">12th Grade</h4>
                    <p className="text-sm text-muted-foreground">Euro International School, CBSE</p>
                    <p className="text-sm font-semibold gradient-text">81.67% (2021-2022)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors duration-300">
                    <h4 className="font-semibold text-foreground">10th Grade</h4>
                    <p className="text-sm text-muted-foreground">Euro International School, CBSE</p>
                    <p className="text-sm font-semibold gradient-text">87.83% (2019-2020)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 tech-shadow bg-card/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-purple-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Location & Contact</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    <span>Gurgaon, Haryana, India</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Phone className="w-4 h-4 mr-3 text-primary" />
                    <span>+91 9643885989</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    <span>Kanwardiya1@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
