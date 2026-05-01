import React from 'react';

const GROUPS = [
  {
    icon: 'fas fa-cloud',
    title: 'Cloud · AWS',
    color: '#FF9900',
    items: ['EC2', 'VPC', 'S3', 'IAM', 'Lambda', 'ALB', 'RDS', 'CloudWatch', 'Route 53'],
  },
  {
    icon: 'fas fa-dharmachakra',
    title: 'Containers & Orchestration',
    color: '#326CE5',
    items: ['Docker', 'Kubernetes', 'Helm', 'k3s', 'Docker Compose'],
  },
  {
    icon: 'fas fa-code-branch',
    title: 'CI/CD & GitOps',
    color: '#2bbbad',
    items: ['Jenkins', 'GitHub Actions', 'ArgoCD', 'GitLab CI', 'Webhooks'],
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Infrastructure as Code',
    color: '#7B42F6',
    items: ['Terraform', 'Ansible', 'Bash Scripting', 'CloudFormation'],
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Monitoring & Observability',
    color: '#F46800',
    items: ['Prometheus', 'Grafana', 'CloudWatch', 'Datadog', 'ELK Stack'],
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Security & OS',
    color: '#2bbbad',
    items: ['Trivy', 'IAM Policies', 'RBAC', 'Linux', 'Nginx', 'Git'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="section__inner">
        <div className="section__header">
          <span className="section__tag">02 · Skills</span>
          <h2 className="section__title">Tech Stack</h2>
          <p className="section__sub">Core technologies I use to build production-ready systems</p>
        </div>

        <div className="skills__grid">
          {GROUPS.map(g => (
            <div key={g.title} className="skill-card">
              <div className="skill-card__icon" style={{ '--sk-color': g.color }}>
                <i className={g.icon} />
              </div>
              <h3 className="skill-card__title">{g.title}</h3>
              <div className="skill-card__tags">
                {g.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
