import React from 'react';

export default function SocialIcons() {
  return (
    <div className="icons-section">
      <div className="social-icons">
        <div className="social-icon-item">
          <a href="https://github.com/satvik55" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
        </div>
        <div className="social-icon-item">
          <a href="https://www.linkedin.com/in/satvik-bodke-b9a229194" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <div className="social-icon-item">
          <a href="https://twitter.com/BodkeSatvik" target="_blank" rel="noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
        </div>
        <div className="social-icon-item">
          <a href="mailto:satvikbodke@gmail.com" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>

      <a
        href={process.env.PUBLIC_URL + '/resume.pdf'}
        target="_blank"
        rel="noreferrer"
        className="resume-button"
      >
        Resume
      </a>
    </div>
  );
}
