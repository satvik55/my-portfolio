import React from 'react';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  return (
    <>
      <div className="nav-fade" />
      <header className="header">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-title" href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          SATVIK BODKE
        </a>

        <a className="navbar-connect" href="mailto:satvikbodke@gmail.com">
          satvikbodke@gmail.com
        </a>

        <ul>
          <li onClick={() => scrollTo('about')}>About</li>
          <li onClick={() => scrollTo('work')}>Work</li>
          <li onClick={() => scrollTo('contact')}>Contact</li>
        </ul>
      </header>
    </>
  );
}
