import React from 'react';

export default function About() {
  return (
    <section id="one">
      <div className="image main" data-position="center">
        <img src="images/banner.png" alt="" />
      </div>
      <div className="container">
        <header className="major">
          <h2>My Portfolio</h2>
          <p>
            A showcase of my journey into the world of web development.
          </p>
        </header>
        <p>
          As a recent M.Sc. graduate, I've channeled my analytical background into a passion for creating clean, efficient, and engaging web applications. When I'm not coding, you can find me traveling to new places, enjoying a game of pool, or getting lost in a good book. I believe this blend of analytical thinking and creative interests gives me a unique perspective on building user-centric digital experiences.
        </p>
      </div>
    </section>
  );
}