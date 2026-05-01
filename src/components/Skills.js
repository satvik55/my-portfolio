import React from 'react';

const SI = 'https://cdn.simpleicons.org/';

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

const D = [...TOOLS, ...TOOLS]; // double for seamless loop

export default function TechStack() {
  return (
    <section id="skills" className="techstack">
      <h2>My Techstack</h2>

      {/* Row 1 — forward */}
      <div className="marquee-outer">
        <div className="marquee-track marquee-track--fwd">
          {D.map((t, i) => (
            <div key={i} className="marquee-chip">
              <img
                src={`${SI}${t.id}`}
                alt={t.label}
                width={28} height={28}
                style={{ filter: 'brightness(0) invert(1)', opacity: .7 }}
              />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse, teal tinted */}
      <div className="marquee-outer">
        <div className="marquee-track marquee-track--rev">
          {D.map((t, i) => (
            <div key={i} className="marquee-chip">
              <img
                src={`${SI}${t.id}`}
                alt={t.label}
                width={28} height={28}
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(6) hue-rotate(140deg)', opacity: .7 }}
              />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
