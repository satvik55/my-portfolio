import React, { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('one');

  useEffect(() => {
    const sectionIds = ['one', 'two', 'three', 'four'];

    const update = () => {
      // Pick whichever section's top edge has passed 40% down the viewport
      const trigger = window.scrollY + window.innerHeight * 0.4;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', update, { passive: true });
    update(); // set correct state on mount
    return () => window.removeEventListener('scroll', update);
  }, []);

  const navLinks = [
    { id: 'one',   label: 'About'    },
    { id: 'two',   label: 'Skills'   },
    { id: 'three', label: 'Projects' },
    { id: 'four',  label: 'Contact'  },
  ];

  return (
    <section id="header">
      <header>
        <span className="image avatar">
          <img
            src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
            alt="Satvik Sunil Bodke"
          />
        </span>
        <h1 id="logo"><a href="#!">Satvik Sunil Bodke</a></h1>
        <p>DevOps Engineer | AWS Certified</p>
      </header>

      <nav id="nav">
        <ul>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeSection === id ? 'active' : ''}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <footer>
        <ul className="icons">
          <li><a href="https://twitter.com/BodkeSatvik"                  className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="https://www.linkedin.com/in/satvik-bodke-b9a229194" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a href="https://www.instagram.com/_satvik5/"               className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="https://github.com/satvik55"                       className="icon brands fa-github"><span className="label">Github</span></a></li>
          <li><a href="mailto:satvikbodke@gmail.com"                      className="icon solid fa-envelope"><span className="label">Email</span></a></li>
        </ul>
      </footer>
    </section>
  );
}
