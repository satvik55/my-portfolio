import React, { useState } from 'react';
import Lightbox from './Lightbox';

const BASE = process.env.PUBLIC_URL + '/images/';

const PROJECTS = [
  {
    num: '01',
    title: 'Argus',
    category: 'Kubernetes Observability',
    tools: 'Kubernetes · Prometheus · Grafana · ArgoCD · AWS',
    desc: 'Observability platform with anomaly detection and GitOps-based deployment. Reduced MTTD by 60%.',
    image: BASE + 'argus1.png',
    images: ['argus1.png','argus2.png','argus3.png','argus4.png'].map(n => BASE + n),
  },
  {
    num: '02',
    title: 'AutoDeploy',
    category: 'CI/CD Pipeline',
    tools: 'Jenkins · Docker · Terraform · Ansible · AWS EC2',
    desc: 'End-to-end CI/CD pipeline automating build, test, and multi-environment deployment.',
    image: BASE + 'autodeploy1.png',
    images: ['autodeploy1.png','autodeploy2.png','autodeploy3.png','autodeploy4.png'].map(n => BASE + n),
  },
  {
    num: '03',
    title: 'CloudOps Tracker',
    category: 'AWS Infrastructure',
    tools: 'AWS · Terraform · CloudWatch · Python · Lambda',
    desc: 'Real-time AWS resource monitoring and cost optimisation dashboard with auto-remediation.',
    image: BASE + 'cloudops1.png',
    images: ['cloudops1.png','cloudops2.png','cloudops3.png','cloudops4.png'].map(n => BASE + n),
  },
  {
    num: '04',
    title: 'Serverless Student Mgmt',
    category: 'Serverless Architecture',
    tools: 'AWS Lambda · API Gateway · DynamoDB · S3',
    desc: 'Fully serverless student management system with zero-infrastructure overhead.',
    image: BASE + 'serverless1.png',
    images: ['serverless1.png','serverless2.png','serverless3.png','serverless4.png'].map(n => BASE + n),
  },
  {
    num: '05',
    title: 'AWS TalentPool',
    category: 'HR Platform',
    tools: 'AWS EC2 · RDS · S3 · IAM · ALB · CloudFront',
    desc: 'Scalable HR platform on AWS with multi-tier architecture and automated scaling policies.',
    image: BASE + 'talentpool1.png',
    images: ['talentpool1.png','talentpool2.png','talentpool3.png','talentpool4.png'].map(n => BASE + n),
  },
  {
    num: '06',
    title: 'FinOps Fault Tolerant',
    category: 'Resilient Systems',
    tools: 'AWS · Multi-AZ · RDS · Route 53 · CloudWatch',
    desc: 'Fault-tolerant financial operations system with multi-AZ deployment and automated failover.',
    image: BASE + 'finops1.png',
    images: ['finops1.png','finops2.png','finops3.png','finops4.png'].map(n => BASE + n),
  },
  {
    num: '07',
    title: 'Cyber Canvas',
    category: 'Security & DevSecOps',
    tools: 'Trivy · SonarQube · OWASP · Jenkins · Docker',
    desc: 'DevSecOps pipeline integrating container scanning, SAST, and compliance checks into CI/CD.',
    image: BASE + 'cybercanvas1.png',
    images: ['cybercanvas1.png','cybercanvas2.png','cybercanvas3.png','cybercanvas4.png'].map(n => BASE + n),
  },
];

function WorkBox({ project, index }) {
  const [open, setOpen]   = useState(false);
  const [lbIdx, setLbIdx] = useState(null);

  return (
    <>
      <div className="work-box">
        <div className="work-title">
          <h3>{project.num}</h3>
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>{project.title}</h4>
            <p style={{ margin: 0, marginTop: 4, color: '#adacac', fontSize: 13, fontWeight: 200 }}>{project.category}</p>
          </div>
        </div>

        <div className="work-image">
          <div className="work-image-in">
            <img
              src={project.image}
              alt={project.title}
              onClick={() => setLbIdx(0)}
              style={{ cursor: 'zoom-in' }}
            />
            <div className="work-link" onClick={() => setLbIdx(0)}>
              <i className="fas fa-expand-alt" style={{ fontSize: 18 }} />
            </div>
          </div>
        </div>

        <div className="work-info">
          <h4>Tech Stack</h4>
          <p>{project.tools}</p>
          <div className="work-tags" style={{ marginTop: 8 }}>
            {project.tools.split(' · ').map(t => (
              <span key={t} className="work-tag">{t}</span>
            ))}
          </div>
        </div>

        <div>
          <button className="work-more-btn" onClick={() => setOpen(o => !o)}>
            {open ? 'Less Info ↑' : 'More Info ↓'}
          </button>
          {open && <p className="work-detail" style={{ marginTop: 10 }}>{project.desc}</p>}
        </div>
      </div>

      {lbIdx !== null && (
        <Lightbox
          images={project.images}
          index={lbIdx}
          alt={project.title}
          onClose={() => setLbIdx(null)}
        />
      )}
    </>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="work-section">
      <h2><span>My</span> Work</h2>
      <div className="work-container">
        <div className="work-flex">
          {PROJECTS.map((p, i) => (
            <WorkBox key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
