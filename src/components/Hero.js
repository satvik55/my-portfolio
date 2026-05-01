import React, { useEffect, useState } from 'react';

const ROLES = ['Cloud Engineer', 'DevOps Fresher', 'AWS Certified'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="landing">
      {/* Glow orbs */}
      <div className="landing__orb landing__orb--1" />
      <div className="landing__orb landing__orb--2" />

      <div className="landing__body">
        <p className="landing__hello">Hello, I'm</p>

        <h1 className="landing__name">
          <span className="landing__name-line">SATVIK</span>
          <span className="landing__name-line landing__name-line--accent">BODKE</span>
        </h1>

        <div className="landing__role">
          {ROLES.map((r, i) => (
            <span
              key={r}
              className={`landing__role-item${i === roleIdx ? ' landing__role-item--active' : ''}`}
            >
              {r}
            </span>
          ))}
        </div>

        <div className="landing__cta">
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="landing__btn landing__btn--primary">
            View My Work
          </button>
          <a href="mailto:satvikbodke@gmail.com" className="landing__btn landing__btn--ghost">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="landing__scroll">
        <div className="landing__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
