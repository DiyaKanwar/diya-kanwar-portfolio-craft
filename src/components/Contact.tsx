
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Let's Work Together
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  I'm currently seeking internship opportunities in front-end development where I can 
                  contribute to innovative projects and grow as a developer.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:Kanwardiya1@gmail.com"
                        className="text-primary hover:underline"
                      >
                        Kanwardiya1@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href="tel:+919643885989"
                        className="text-primary hover:underline"
                      >
                        +91 9643885989
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Gurgaon, Haryana, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Follow my journey and connect with me on social media platforms.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://github.com/DiyaKanwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6 text-foreground" />
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <p className="text-sm text-muted-foreground">Check out my repositories</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6 text-foreground" />
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Let's connect professionally</p>
                    </div>
                  </a>
                </div>

                <div className="pt-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open('mailto:Kanwardiya1@gmail.com', '_blank')}
                  >
                    Send me an Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-muted-foreground">
            © 2024 Diya Kanwar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
