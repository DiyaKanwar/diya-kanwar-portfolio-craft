import React from "react";

interface Project {
  title: string;
  date: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Azad's Visual Portfolio",
    date: "April 2025",
    description:
      "Designed and developed a high-end portfolio website for a visual artist to professionally showcase their creative work.",
    features: [
      "Interactive and animated hero section",
      "Virtualized image gallery with category filters and modal preview",
      "Responsive layout with smooth scroll and dark mode styling",
      "Contact form integration with real-time feedback",
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    image: "/Project4_img.jpg",
    liveLink: "https://azad-portfolio-website.vercel.app/",
  },
  {
    title: "Faraiha Rehman's Portfolio",
    date: "January 2025",
    description:
      "Built a modern, clean, and responsive personal portfolio for a professional in the arts and creative fields.",
    features: [
      "Animated section transitions and hover effects",
      "Optimized image handling and project showcase layout",
      "Scroll-based interactions with clean typography",
      "Fully mobile-responsive and fast-loading design",
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    image: "/Project5_img.jpg",
    liveLink: "https://faraiha-rehman-portfolio.vercel.app/",
  },
  {
    title: "Vocal AI Assistant",
    date: "December 2024",
    description:
      "Developed an interactive AI voice assistant using JavaScript, Speech Recognition API, and Tailwind CSS.",
    features: [
      "Voice Command Recognition",
      "Conversational AI Responses",
      "Real-time Subtitle Generation",
    ],
    technologies: ["JavaScript", "Speech Recognition API", "Tailwind CSS"],
    image: "", // optional future thumbnail
    // liveLink: "", // optional future link
  },
  {
    title: "Stone-Paper-Scissors Game",
    date: "March 2023",
    description:
      "Developed a GUI for a Stone-Paper-Scissors game using Java and Swing, improving user interaction.",
    features: ["Graphical User Interface", "Interactive Gameplay", "User-friendly Design"],
    technologies: ["Java", "Swing"],
    image: "", // optional future thumbnail
    // liveLink: "", // optional future link
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary">
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => {
            const card = (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group shadow-lg transition-all duration-500 hover:scale-[1.01]"
                style={{
                  height: "320px",
                  backgroundImage: project.image ? `url(${project.image})` : "",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-[#15616d]/80 backdrop-blur-sm text-left p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <span className="text-sm text-orange-200">{project.date}</span>
                    <p className="mt-3 text-sm text-white/90">{project.description}</p>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-[#FF7D00] mt-4">Key Features</h4>
                    <ul className="list-disc list-inside text-sm text-white/80 mt-1">
                      {project.features.slice(0, 3).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-[#001524] text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );

            return project.liveLink ? (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </section>
  );
};
