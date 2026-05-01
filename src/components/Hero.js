import React from 'react';

export default function Landing() {
  return (
    <section className="landing-section" id="landingDiv">
      <div className="landing-container">

        {/* Glow circles */}
        <div className="landing-circle1" />
        <div className="landing-circle2" />

        {/* Avatar image in center */}
        <div className="landing-avatar">
          <img
            src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
            alt="Satvik Bodke"
          />
        </div>

        {/* Left — name intro */}
        <div className="landing-intro">
          <h2>Hello, I'm</h2>
          <h1>
            SATVIK<br />
            <span>BODKE</span>
          </h1>
        </div>

        {/* Right — role */}
        <div className="landing-info">
          <h3>An</h3>
          <h2 className="landing-info-h2">
            <div className="landing-role-wrap">
              <span className="landing-role-item">AWS Certified</span>
              <span className="landing-role-item">DevOps Fresher</span>
              <span className="landing-role-item">Cloud Engineer</span>
            </div>
          </h2>
          <h2>
            <div className="landing-h2-info">Open to Work</div>
          </h2>
        </div>

        {/* Scroll cue */}
        <div className="landing-scroll">
          <div className="landing-scroll-line" />
          <span>scroll</span>
        </div>

      </div>
    </section>
  );
}
