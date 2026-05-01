import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'about',    label: 'About'          },
  { id: 'skills',   label: 'Skills'         },
  { id: 'certs',    label: 'Certifications' },
  { id: 'projects', label: 'Projects'       },
  { id: 'contact',  label: 'Contact'        },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState('hero');
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const trigger = window.scrollY + 140;
      let cur = 'hero';
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      {/* Brand */}
      <a href="#hero" className="navbar__brand">
        <span className="navbar__brand-bracket">{'<'}</span>
        SB
        <span className="navbar__brand-bracket">{'/>'}</span>
      </a>

      {/* Links */}
      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {NAV_LINKS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? 'navbar__link navbar__link--active' : 'navbar__link'}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
        <span className="navbar__cta-dot" />
        Hire Me
      </a>

      {/* Hamburger */}
      <button
        className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
