import React, { useState } from 'react';
import Lightbox from './Lightbox';

const BASE = process.env.PUBLIC_URL + '/images/';

const projects = [
  {
    id: 'argus',
    title: 'Argus',
    shortDesc: 'Kubernetes observability platform with anomaly detection and GitOps-based deployment.',
    tech: ['Kubernetes', 'Prometheus', 'Grafana', 'ArgoCD', 'AWS'],
    images: ['argus1.png', 'argus2.png', 'argus3.png', 'argus4.png'].map(n => BASE + n),
    detail: {
      problem: 'Modern Kubernetes environments lack centralised visibility and proactive anomaly detection, leading to delayed incident response and prolonged downtime.',
      architecture: 'Deployed microservices on Kubernetes (k3s) with Prometheus for metrics scraping and Grafana for visualisation. ArgoCD manages GitOps-based continuous deployment, ensuring declarative and auditable infrastructure state.',
      features: [
        'Real-time monitoring dashboards with custom Grafana panels',
        'Automated anomaly detection using Prometheus alerting rules',
        'GitOps deployment pipeline via ArgoCD with drift detection',
        'Multi-cluster metrics aggregation and centralised alerting',
      ],
      techDetail: 'Kubernetes (k3s), Prometheus, Grafana, ArgoCD, AWS EC2, Helm',
      challenges: 'Handled high-cardinality metric volume by optimising Prometheus scrape intervals and rewriting PromQL queries for efficiency, reducing storage overhead by 40%.',
      outcome: 'Reduced mean time to detect (MTTD) by 60% and enabled proactive alerting, significantly improving cluster reliability.',
    },
  },
  {
    id: 'autodeploy',
    title: 'AutoDeploy',
    shortDesc: 'End-to-end CI/CD pipeline automating build, test, and multi-environment deployment.',
    tech: ['Jenkins', 'Docker', 'Terraform', 'Ansible', 'AWS'],
    images: ['autodeploy1.png', 'autodeploy2.png', 'autodeploy3.png', 'autodeploy4.png'].map(n => BASE + n),
    detail: {
      problem: 'Manual deployment processes were error-prone, inconsistent across environments, and bottlenecked engineering velocity causing release delays.',
      architecture: 'Jenkins orchestrates a multi-stage pipeline — Docker containerises the application, Terraform provisions AWS infrastructure as code, and Ansible handles idempotent configuration management across EC2 instances.',
      features: [
        'Automated build, test, and deployment across dev/staging/prod',
        'Infrastructure as Code with Terraform state management',
        'Ansible playbooks for zero-drift configuration',
        'Rollback strategy triggered by automated health-check failures',
      ],
      techDetail: 'Jenkins, Docker, Terraform, Ansible, AWS EC2, S3',
      challenges: 'Resolved intermittent pipeline failures by implementing stage-level validation gates and automated rollback strategies, eliminating environment drift between deployments.',
      outcome: 'Improved deployment frequency by 70% and reduced deployment-related production incidents by 85%.',
    },
  },
  {
    id: 'cloudops',
    title: 'CloudOps Tracker',
    shortDesc: 'Docker-based incident management platform for centralised DevOps team coordination.',
    tech: ['Docker', 'PHP', 'MySQL', 'AWS'],
    images: ['cloudops1.png', 'cloudops2.png', 'cloudops3.png', 'cloudops4.png'].map(n => BASE + n),
    detail: {
      problem: 'DevOps teams lacked a centralised, lightweight system to log, track, and resolve infrastructure incidents efficiently in real time.',
      architecture: 'Containerised LAMP stack deployed on AWS EC2. Docker Compose orchestrates service dependencies with a persistent MySQL volume for reliable incident data storage.',
      features: [
        'Incident logging with severity classification and priority queues',
        'Status tracking and resolution workflow with audit trail',
        'Dockerised deployment for portability across environments',
        'Role-based dashboard access for team and admin users',
      ],
      techDetail: 'Docker, Docker Compose, PHP, MySQL, AWS EC2',
      challenges: 'Resolved container networking issues by configuring Docker bridge networks and tuning persistent volume mounts to ensure database integrity across restarts.',
      outcome: 'Improved incident visibility and team coordination, reducing average incident resolution time by 35%.',
    },
  },
  {
    id: 'serverless',
    title: 'Serverless Student Management',
    shortDesc: 'Fully serverless student data management system built on AWS managed services.',
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
    images: ['serverless1.png', 'serverless2.png', 'serverless3.png', 'serverless4.png'].map(n => BASE + n),
    detail: {
      problem: 'Traditional server-based applications require constant maintenance, manual scaling, and incur high operational costs regardless of actual usage.',
      architecture: 'RESTful API built with AWS API Gateway routing requests to Python Lambda functions. DynamoDB provides scalable, low-latency NoSQL storage with on-demand capacity.',
      features: [
        'Zero server management with fully serverless architecture',
        'Auto-scaling to handle variable load without pre-provisioning',
        'RESTful CRUD API endpoints secured via IAM policies',
        'Pay-per-execution cost model with CloudWatch observability',
      ],
      techDetail: 'AWS Lambda (Python), API Gateway, DynamoDB, IAM, CloudWatch Logs',
      challenges: 'Managed cold start latency by implementing Lambda provisioned concurrency and reducing function bundle size through dependency optimisation.',
      outcome: 'Achieved 99.9% availability with near-zero operational overhead and reduced infrastructure cost by 60%.',
    },
  },
  {
    id: 'talentpool',
    title: 'AWS TalentPool HR Platform',
    shortDesc: 'Highly available, multi-AZ HR platform with auto-scaling and intelligent load balancing.',
    tech: ['AWS EC2', 'ALB', 'Auto Scaling', 'RDS'],
    images: ['talentpool1.png', 'talentpool2.png', 'talentpool3.png', 'talentpool4.png'].map(n => BASE + n),
    detail: {
      problem: 'HR platforms experience unpredictable traffic spikes and require high availability to prevent service disruption during peak hiring periods.',
      architecture: 'Multi-AZ deployment with EC2 instances distributed across availability zones behind an ALB. Auto Scaling Group adjusts capacity dynamically. RDS Multi-AZ provides database redundancy with automatic failover.',
      features: [
        'Multi-AZ fault-tolerant architecture spanning 3 availability zones',
        'ALB with sticky sessions and health-check-based routing',
        'Auto Scaling based on CPU utilisation and request-count metrics',
        'RDS with automated backups and Multi-AZ failover',
      ],
      techDetail: 'AWS EC2, ALB, Auto Scaling Groups, RDS (MySQL), VPC, IAM, CloudWatch',
      challenges: 'Configured precise scaling policies and ALB health checks to prevent traffic routing to unhealthy instances during rolling deployments.',
      outcome: 'Achieved 99.9% uptime SLA and handled 3× traffic spikes without manual intervention.',
    },
  },
  {
    id: 'finops',
    title: 'FinOps Fault Tolerant System',
    shortDesc: 'Cost-optimised, fault-tolerant AWS architecture with automated monitoring and remediation.',
    tech: ['AWS Lambda', 'CloudWatch', 'EC2', 'Cost Optimisation'],
    images: ['finops1.png', 'finops2.png', 'finops3.png', 'finops4.png'].map(n => BASE + n),
    detail: {
      problem: 'Unmonitored cloud resources lead to cost overruns and gradual performance degradation without early warning systems or automated remediation.',
      architecture: 'CloudWatch monitors resource utilisation and triggers Lambda functions for automated remediation. Cost allocation tags and Cost Explorer provide granular spending visibility.',
      features: [
        'Real-time cost monitoring with budget breach alerting via SNS',
        'Automated resource right-sizing based on utilisation trends',
        'Fault-tolerant failover mechanisms with health-check automation',
        'CloudWatch dashboards correlating cost and performance metrics',
      ],
      techDetail: 'AWS Lambda, CloudWatch, EC2, Cost Explorer, SNS, IAM',
      challenges: 'Built automation scripts to identify and terminate idle resources on schedule, reducing unnecessary spend without impacting production workloads.',
      outcome: 'Reduced monthly cloud spend by 30% while maintaining performance SLAs with full auditability.',
    },
  },
  {
    id: 'canvas',
    title: 'Cyber Canvas',
    shortDesc: 'Interactive virtual art gallery with dynamic filtering, lightbox viewer, and Firebase backend.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    images: ['canvas1.png', 'canvas2.png', 'canvas3.png', 'canvas4.png'].map(n => BASE + n),
    detail: {
      problem: 'Artists needed a digital-first platform to showcase, categorise, and share their work with an engaging interactive browsing experience.',
      architecture: 'Frontend-heavy SPA hosted on Firebase Hosting with Firestore for artwork metadata and Firebase Storage for optimised CDN-delivered image assets.',
      features: [
        'Dynamic artwork filtering by category with instant results',
        'Full-screen lightbox viewer with keyboard navigation',
        'Light/dark theme switcher with persistent preference',
        'Fully responsive layout across mobile, tablet, and desktop',
      ],
      techDetail: 'HTML5, CSS3, Vanilla JavaScript, Firebase Hosting, Firestore, Firebase Storage',
      challenges: 'Optimised image loading using lazy loading and progressive rendering, reducing initial load time from 4 s to under 1.5 s.',
      outcome: 'Delivered an engaging digital exhibition with sub-2 s load times and smooth cross-device interaction.',
    },
  },
];

function ProjectCard({ project }) {
  const [imgIdx, setImgIdx]     = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [lbIndex, setLbIndex]   = useState(null);   // null = closed, number = open at that index

  const prev = (e) => { e.stopPropagation(); setImgIdx(i => (i - 1 + project.images.length) % project.images.length); };
  const next = (e) => { e.stopPropagation(); setImgIdx(i => (i + 1) % project.images.length); };

  return (
    <>
      <div className={`proj-card${expanded ? ' proj-card--open' : ''}`}>

        {/* ── Image slider ── */}
        <div className="proj-slider">
          <img
            src={project.images[imgIdx]}
            alt={`${project.title} screenshot ${imgIdx + 1}`}
            className="proj-slider__img"
            onClick={() => setLbIndex(imgIdx)}
            title="Click to enlarge"
          />
          <button className="proj-slider__btn proj-slider__btn--prev" onClick={prev} aria-label="Previous">&#8249;</button>
          <button className="proj-slider__btn proj-slider__btn--next" onClick={next} aria-label="Next">&#8250;</button>
          <div className="proj-slider__dots">
            {project.images.map((_, i) => (
              <span key={i} className={`proj-dot${i === imgIdx ? ' proj-dot--on' : ''}`} onClick={() => setImgIdx(i)} />
            ))}
          </div>
          <div className="proj-slider__zoom-hint">
            <span className="icon solid fa-search-plus" /> Click to zoom
          </div>
        </div>

        {/* ── Info ── */}
        <div className="proj-body">
          <h3 className="proj-title">{project.title}</h3>
          <p className="proj-desc">{project.shortDesc}</p>

          <div className="proj-tags">
            {project.tech.map((t, i) => <span key={i} className="proj-tag">{t}</span>)}
          </div>

          <button className="proj-more-btn" onClick={() => setExpanded(e => !e)}>
            {expanded ? 'Show Less ↑' : 'View More ↓'}
          </button>

          {expanded && (
            <div className="proj-detail">
              {[
                { label: 'Problem Statement',     text: project.detail.problem      },
                { label: 'Architecture Overview', text: project.detail.architecture },
                { label: 'Tech Stack',            text: project.detail.techDetail   },
                { label: 'Challenges & Solutions',text: project.detail.challenges   },
                { label: 'Outcome / Impact',      text: project.detail.outcome      },
              ].map(({ label, text }) => (
                <div key={label} className="proj-detail__block">
                  <h4>{label}</h4>
                  <p>{text}</p>
                </div>
              ))}
              <div className="proj-detail__block">
                <h4>Key Features</h4>
                <ul>{project.detail.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox — scoped to this project's 4 images only */}
      {lbIndex !== null && (
        <Lightbox
          images={project.images}
          index={lbIndex}
          alt={project.title}
          onClose={() => setLbIndex(null)}
        />
      )}
    </>
  );
}

export default function Projects() {
  return (
    <section id="three" className="projects-section">
      <div className="container">
        <header className="major">
          <h2>My Projects</h2>
          <p>DevOps and Cloud Engineering projects — scalable, fault-tolerant, and production-ready.</p>
        </header>
        <div className="proj-grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
