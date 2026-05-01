import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container section-container">
        <h3>Let's Connect</h3>

        <div className="contact-flex">

          {/* Box 1 — Email & Location */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:satvikbodke@gmail.com">satvikbodke@gmail.com</a>
            </p>
            <h4>Location</h4>
            <p>India · Open to Remote</p>
            <h4>Status</h4>
            <p style={{ color: '#4cff8a' }}>● Available for hire</p>
          </div>

          {/* Box 2 — Social links */}
          <div className="contact-box">
            <h4>Socials</h4>
            <p></p>
            <a
              href="https://github.com/satvik55"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              GitHub &nbsp;↗
            </a>
            <a
              href="https://www.linkedin.com/in/satvik-bodke-b9a229194"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              LinkedIn &nbsp;↗
            </a>
            <a
              href="https://twitter.com/BodkeSatvik"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              Twitter &nbsp;↗
            </a>
            <a
              href="https://www.instagram.com/_satvik5/"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              Instagram &nbsp;↗
            </a>
          </div>

          {/* Box 3 — Attribution */}
          <div className="contact-box">
            <h2>
              Built by <span>Satvik Bodke</span>
            </h2>
            <h5>
              <span>©</span> 2025
            </h5>
            <p style={{ marginTop: 20, fontSize: 14 }}>
              AWS Certified · Cloud &amp; DevOps · Fresher
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
