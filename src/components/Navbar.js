import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      {/* Left — name/logo */}
      <a href="#hero" className="nav__logo">SATVIK BODKE</a>

      {/* Centre — email (hidden on mobile) */}
      <a href="mailto:satvikbodke@gmail.com" className="nav__email">
        satvikbodke@gmail.com
      </a>

      {/* Right — links */}
      <ul className="nav__links">
        <li><button onClick={() => scrollTo('about')}>About</button></li>
        <li><button onClick={() => scrollTo('projects')}>Work</button></li>
        <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
      </ul>
    </header>
  );
}
