import React, { useEffect, useState } from 'react';

const ROLES = [
  'AWS Certified Cloud Engineer',
  'DevOps Pipeline Builder',
  'Kubernetes & Docker Enthusiast',
  'Infrastructure as Code Engineer',
  'CI/CD Automation Specialist',
];

export default function Hero() {
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let t;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 32);
    } else {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">

        {/* Open-to-work pill */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Open to Opportunities · Fresher
        </div>

        {/* Name */}
        <h1 className="hero__name">
          Hi, I'm{' '}
          <span className="hero__name-highlight">Satvik Bodke</span>
        </h1>

        {/* Typing role */}
        <div className="hero__typing">
          <span className="hero__typing-prompt">$ </span>
          <span className="hero__typing-text">{displayed}</span>
          <span className="hero__typing-cursor" aria-hidden="true">▌</span>
        </div>

        {/* Sub tagline */}
        <p className="hero__tagline">
          AWS Certified · Kubernetes · Terraform · CI/CD · GitOps
        </p>

        {/* Action buttons */}
        <div className="hero__actions">
          <a href="#projects" className="hero-btn hero-btn--primary">
            <i className="fas fa-rocket" /> View Projects
          </a>
          <a href="#contact" className="hero-btn hero-btn--outline">
            <i className="fas fa-paper-plane" /> Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="hero__socials">
          <a href="https://github.com/satvik55"                        target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/satvik-bodke-b9a229194" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://twitter.com/BodkeSatvik"                   target="_blank" rel="noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
          <a href="mailto:satvikbodke@gmail.com" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>

        {/* Scroll cue */}
        <div className="hero__scroll-cue" aria-hidden="true">
          <span>scroll</span>
          <div className="hero__scroll-bar" />
        </div>
      </div>
    </section>
  );
}
