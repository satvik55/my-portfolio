import React from 'react';

const TOOLS = [
  { id: 'docker',     label: 'Docker'      },
  { id: 'kubernetes', label: 'Kubernetes'  },
  { id: 'terraform',  label: 'Terraform'   },
  { id: 'ansible',    label: 'Ansible'     },
  { id: 'jenkins',    label: 'Jenkins'     },
  { id: 'prometheus', label: 'Prometheus'  },
  { id: 'grafana',    label: 'Grafana'     },
  { id: 'github',     label: 'GitHub'      },
  { id: 'linux',      label: 'Linux'       },
  { id: 'nginx',      label: 'Nginx'       },
  { id: 'python',     label: 'Python'      },
  { id: 'helm',       label: 'Helm'        },
  { id: 'argo',       label: 'ArgoCD'      },
  { id: 'vault',      label: 'Vault'       },
  { id: 'datadog',    label: 'Datadog'     },
];

const SI = 'https://cdn.simpleicons.org/';

/* Duplicate for seamless loop */
const DOUBLED = [...TOOLS, ...TOOLS];

export default function Skills() {
  return (
    <section id="skills" className="techstack-section">
      <div className="techstack-inner">
        <span className="section-label">Tech Stack</span>
        <h2 className="techstack-heading">What I Work With</h2>
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="marquee-wrap">
        <div className="marquee marquee--fwd">
          {DOUBLED.map((t, i) => (
            <div key={i} className="marquee-item">
              <img
                src={`${SI}${t.id}`}
                alt={t.label}
                width={32}
                height={32}
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.75 }}
              />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right to left */}
      <div className="marquee-wrap">
        <div className="marquee marquee--rev">
          {DOUBLED.map((t, i) => (
            <div key={i} className="marquee-item">
              <img
                src={`${SI}${t.id}`}
                alt={t.label}
                width={32}
                height={32}
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(6) hue-rotate(140deg)', opacity: 0.75 }}
              />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
