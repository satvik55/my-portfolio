# Satvik Sunil Bodke — DevOps Portfolio

A modern, interactive portfolio showcasing DevOps and Cloud Engineering projects. Built with React, deployed on GitHub Pages.

🔗 **Live:** [https://satvik55.github.io/my-portfolio](https://satvik55.github.io/my-portfolio)

---

## Features

- **7 DevOps / Cloud projects** — each with a 4-image carousel, tech tags, and an expandable detail panel (Problem Statement · Architecture · Key Features · Tech Stack · Challenges · Outcome)
- **Full-screen lightbox** — click any project image or certification to view it enlarged, with keyboard and arrow navigation
- **Scroll-aware sidebar** — active nav link updates automatically as you scroll through sections
- **6 industry certifications** with hover zoom and lightbox viewer
- **Contact form** — Name, Email, Subject, Message
- Responsive layout, Inter typography, smooth transitions

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (Create React App) |
| UI Template | HTML5 UP — Strata |
| Fonts | Inter — Google Fonts |
| Icons | Font Awesome 5 |
| Deployment | GitHub Pages (`gh-pages`) |

---

## Projects

| # | Project | Stack |
|---|---|---|
| 1 | **Argus** — Kubernetes Observability Platform | Kubernetes · Prometheus · Grafana · ArgoCD · AWS |
| 2 | **AutoDeploy** — CI/CD Automation Pipeline | Jenkins · Docker · Terraform · Ansible · AWS |
| 3 | **CloudOps Tracker** — Incident Management System | Docker · PHP · MySQL · AWS |
| 4 | **Serverless Student Management** | AWS Lambda · API Gateway · DynamoDB |
| 5 | **AWS TalentPool HR Platform** | EC2 · ALB · Auto Scaling · RDS |
| 6 | **FinOps Fault Tolerant System** | Lambda · CloudWatch · Cost Optimisation |
| 7 | **Cyber Canvas** — Virtual Art Gallery | HTML · CSS · JavaScript · Firebase |

---

## Certifications

- AWS Certified Solutions Architect
- Linux Foundation — Introduction to Linux
- OCI Foundations Associate
- OCI Architect Associate
- OCI Architect Professional
- OCI DevOps Professional

---

## Getting Started

### Prerequisites
- Node.js 16+
- npm 8+

### Install & Run

```bash
git clone https://github.com/satvik55/my-portfolio.git
cd my-portfolio
npm install
npm start
```

Opens at [http://localhost:3000/my-portfolio](http://localhost:3000/my-portfolio)

### Build & Deploy to GitHub Pages

```bash
npm run build     # production build
npm run deploy    # push to gh-pages branch
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Sidebar with scroll-aware active nav
│   ├── About.js           # Hero banner + intro text
│   ├── Skills.js          # Skills section
│   ├── Certifications.js  # Cert grid with lightbox
│   ├── Projects.js        # Project cards — slider + expandable detail
│   ├── Contact.js         # Contact form
│   └── Lightbox.js        # Full-screen image viewer (keyboard + arrow nav)
├── App.js
└── App.css                # Design tokens + all custom styles
public/
├── assets/                # Strata template CSS / fonts / icons
└── images/                # Project screenshots + cert images
```

---

## Author

**Satvik Sunil Bodke** — DevOps Engineer | AWS Certified

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/satvik-bodke-b9a229194)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/satvik55)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:satvikbodke@gmail.com)

---

## License

Portfolio content © Satvik Sunil Bodke.  
UI template: [Strata by HTML5 UP](https://html5up.net/strata) — [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
