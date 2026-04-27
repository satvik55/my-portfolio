import React from 'react';

export default function About() {
  return (
    <section id="one">
      <div className="image main" data-position="center">
        <img src={process.env.PUBLIC_URL + '/images/banner.png'} alt="" />
      </div>
      <div className="container">
        <header className="major">
          <h2>My Portfolio</h2>
          <p>
              A showcase of my DevOps and Cloud Engineering projects focused on scalable, fault-tolerant, and production-ready systems.
          </p>
        </header>
        <p>
          AWS-certified DevOps Engineer with hands-on experience in CI/CD, Kubernetes, Infrastructure as Code, and cloud automation. I build scalable, fault-tolerant systems using modern DevOps practices including GitOps, container orchestration, and observability.
        </p>
      </div>
    </section>
  );
}