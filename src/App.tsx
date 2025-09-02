import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Theme colors
  const colors = {
    primary: darkMode ? '#D9E0E5' : '#175764',
    secondary: darkMode ? '#8B949E' : '#731E0D',
    accent: darkMode ? '#58A6FF' : '#D16C4D',
    bg: darkMode ? '#0D1117' : '#FFF0D1'
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen transition-all duration-500" style={{ backgroundColor: colors.bg }}>
      <Navigation colors={colors} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero colors={colors} scrollToSection={scrollToSection} darkMode={darkMode} />
      <Projects colors={colors} darkMode={darkMode} />
      <Skills colors={colors} darkMode={darkMode} />
      <About colors={colors} darkMode={darkMode} />
      <Achievements colors={colors} darkMode={darkMode} />
      <Contact colors={colors} darkMode={darkMode} />
    </div>
  );
}

export default App;