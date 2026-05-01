import React from 'react';
import './App.css';

import Background    from './components/Background';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Skills        from './components/Skills';
import Certifications from './components/Certifications';
import Projects      from './components/Projects';
import Contact       from './components/Contact';

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© 2025 Satvik Sunil Bodke · Built with React · Deployed on GitHub Pages</p>
      </footer>
    </>
  );
}
