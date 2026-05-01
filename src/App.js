import React from 'react';
import './App.css';

import Background    from './components/Background';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import CertTimeline  from './components/CertTimeline';
import WorkSection   from './components/WorkSection';
import Skills        from './components/Skills';
import Contact       from './components/Contact';
import SocialIcons   from './components/SocialIcons';

export default function App() {
  return (
    <>
      {/* Fixed floating DevOps logos behind everything */}
      <Background />

      {/* Fixed social icons + resume button */}
      <SocialIcons />

      {/* Page content */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <WorkSection />
        <Skills />
        <CertTimeline />
        <Contact />
      </main>

      <footer className="site-footer">
        © 2025 Satvik Sunil Bodke
      </footer>
    </>
  );
}
