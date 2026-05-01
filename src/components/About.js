import React from 'react';

const HIGHLIGHTS = [
  { icon: 'fas fa-certificate', label: 'AWS Certified',        sub: 'Solutions Architect'           },
  { icon: 'fas fa-dharmachakra', label: 'Kubernetes',          sub: 'Container Orchestration'       },
  { icon: 'fas fa-code-branch',  label: 'CI/CD Pipelines',     sub: 'Jenkins · GitHub Actions'      },
  { icon: 'fas fa-layer-group',  label: 'Infrastructure as Code', sub: 'Terraform · Ansible'        },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <div className="section__header">
          <span className="section__tag">01 · About</span>
          <h2 className="section__title">Who I Am</h2>
        </div>

        <div className="about__grid">
          {/* Photo */}
          <div className="about__photo-col">
            <div className="about__photo-wrap">
              <img
                src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
                alt="Satvik Bodke"
                className="about__photo"
              />
              <div className="about__photo-ring" />
            </div>
            <div className="about__location">
              <i className="fas fa-map-marker-alt" /> India &nbsp;·&nbsp; Remote Ready
            </div>
          </div>

          {/* Content */}
          <div className="about__content">
            <p className="about__intro">
              I'm a <strong>AWS-Certified Cloud &amp; DevOps fresher</strong> actively looking
              for my first professional role in cloud infrastructure, DevOps, or site reliability engineering.
            </p>
            <p className="about__bio">
              During my academic journey I built end-to-end DevOps pipelines, deployed Kubernetes
              clusters on AWS, automated infrastructure with Terraform, and integrated full observability
              stacks using Prometheus &amp; Grafana. I love building systems that are scalable, automated,
              and production-ready from day one.
            </p>

            <div className="about__highlights">
              {HIGHLIGHTS.map(h => (
                <div key={h.label} className="about__highlight-card">
                  <div className="about__highlight-icon">
                    <i className={h.icon} />
                  </div>
                  <div className="about__highlight-text">
                    <strong>{h.label}</strong>
                    <span>{h.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
