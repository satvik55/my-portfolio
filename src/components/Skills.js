import React from 'react';

export default function Skills() {
  return (
    <section id="two">
      <div className="container">
        <h3>Skills</h3>
        <p>
          Core DevOps and Cloud technologies focused on building scalable, automated, and production-ready systems.
        </p>
        <ul className="feature-icons">
          <li className="icon solid fa-sync">CI/CD & GitOps: Jenkins, GitHub Actions, ArgoCD</li>
          <li className="icon solid fa-box">Containers: Docker, Kubernetes (k3s), Helm</li>
          <li className="icon solid fa-cloud">Cloud (AWS): EC2, VPC, S3, IAM, Lambda, ALB</li>
          <li className="icon solid fa-cogs">Infrastructure as Code: Terraform, Ansible</li>
          <li className="icon solid fa-chart-line">Monitoring: Prometheus, Grafana, CloudWatch</li>
          <li className="icon solid fa-shield-alt">Security: Trivy, IAM, RBAC</li>
          <li className="icon solid fa-terminal">Tools: Linux, Bash, Git, AWS CLI, Nginx</li>
        </ul>
      </div>
    </section>
  );
}