
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing a Bachelor of Engineering in Computer Science at Chandigarh University 
                with a CGPA of 7.53. My passion lies in front-end development and creating intuitive user 
                interfaces that solve real-world problems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                What Drives Me
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of technology to transform ideas into reality. My approach combines 
                technical expertise with creative problem-solving, always keeping the user experience at 
                the center of every project.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Looking Forward
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking internship opportunities where I can contribute to innovative projects, 
                collaborate with experienced teams, and continue growing as a developer.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">Bachelor of Engineering - CSE</h4>
                    <p className="text-sm text-muted-foreground">Chandigarh University (Expected July 2026)</p>
                    <p className="text-sm text-primary">CGPA: 7.53</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">12th Grade</h4>
                    <p className="text-sm text-muted-foreground">Euro International School, CBSE</p>
                    <p className="text-sm text-primary">81.67% (2021-2022)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">10th Grade</h4>
                    <p className="text-sm text-muted-foreground">Euro International School, CBSE</p>
                    <p className="text-sm text-primary">87.83% (2019-2020)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-foreground mb-4">Location & Contact</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📍 Gurgaon, Haryana, India</p>
                  <p>📞 +91 9643885989</p>
                  <p>✉️ Kanwardiya1@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
