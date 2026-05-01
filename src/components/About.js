import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <span className="section-label">About me</span>

        <p className="about-text">
          I'm an <em>AWS-certified Cloud &amp; DevOps fresher</em> based in India,
          actively looking for my first professional role. I build scalable, automated
          infrastructure using Kubernetes, Terraform, and Jenkins — and I care deeply
          about observability, GitOps, and production-ready systems.
          Currently open to remote and on-site opportunities in cloud, DevOps, or SRE.
        </p>

        <div className="about-links">
          <a href="https://github.com/satvik55" target="_blank" rel="noreferrer" className="about-link">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/satvik-bodke-b9a229194" target="_blank" rel="noreferrer" className="about-link">
            LinkedIn ↗
          </a>
          <a href="mailto:satvikbodke@gmail.com" className="about-link">
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}
