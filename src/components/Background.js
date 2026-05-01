import React from 'react';

/* Simple Icons CDN — clean monochrome SVGs */
const SI = 'https://cdn.simpleicons.org/';

const LOGOS = [
  { id: 'docker',     label: 'Docker'      },
  { id: 'kubernetes', label: 'Kubernetes'  },
  { id: 'datadog',    label: 'Datadog'     },
  { id: 'jenkins',    label: 'Jenkins'     },
  { id: 'terraform',  label: 'Terraform'   },
  { id: 'ansible',    label: 'Ansible'     },
  { id: 'prometheus', label: 'Prometheus'  },
  { id: 'grafana',    label: 'Grafana'     },
  { id: 'linux',      label: 'Linux'       },
  { id: 'python',     label: 'Python'      },
  { id: 'git',        label: 'Git'         },
  { id: 'nginx',      label: 'Nginx'       },
  { id: 'github',     label: 'GitHub'      },
  { id: 'helm',       label: 'Helm'        },
  { id: 'argo',       label: 'ArgoCD'      },
  { id: 'vault',      label: 'Vault'       },
];

/* 27 hand-placed positions — spread from edge to edge */
const SPOTS = [
  /* row 1 */
  { top: '4%',  left: '3%',  sz: 52, dl: 0.0, dr: 9,  v: 'A' },
  { top: '7%',  left: '19%', sz: 40, dl: 1.5, dr: 11, v: 'B' },
  { top: '3%',  left: '36%', sz: 64, dl: 0.8, dr: 8,  v: 'A' },
  { top: '8%',  left: '54%', sz: 44, dl: 2.2, dr: 10, v: 'B' },
  { top: '5%',  left: '72%', sz: 56, dl: 0.4, dr: 9,  v: 'A' },
  { top: '9%',  left: '88%', sz: 38, dl: 3.0, dr: 11, v: 'B' },
  /* row 2 */
  { top: '26%', left: '1%',  sz: 46, dl: 1.8, dr: 10, v: 'B' },
  { top: '28%', left: '16%', sz: 62, dl: 0.6, dr: 8,  v: 'A' },
  { top: '24%', left: '34%', sz: 40, dl: 2.8, dr: 11, v: 'B' },
  { top: '30%', left: '52%', sz: 55, dl: 1.2, dr: 9,  v: 'A' },
  { top: '22%', left: '70%', sz: 48, dl: 0.2, dr: 10, v: 'B' },
  { top: '27%', left: '86%', sz: 38, dl: 3.4, dr: 8,  v: 'A' },
  /* row 3 */
  { top: '50%', left: '6%',  sz: 54, dl: 1.6, dr: 11, v: 'B' },
  { top: '47%', left: '24%', sz: 42, dl: 0.9, dr: 9,  v: 'A' },
  { top: '53%', left: '43%', sz: 66, dl: 2.4, dr: 8,  v: 'B' },
  { top: '48%', left: '62%', sz: 40, dl: 1.0, dr: 10, v: 'A' },
  { top: '45%', left: '80%', sz: 52, dl: 3.2, dr: 9,  v: 'B' },
  /* row 4 */
  { top: '70%', left: '2%',  sz: 48, dl: 0.5, dr: 10, v: 'A' },
  { top: '68%', left: '20%', sz: 58, dl: 2.0, dr: 8,  v: 'B' },
  { top: '74%', left: '39%', sz: 42, dl: 1.4, dr: 11, v: 'A' },
  { top: '70%', left: '58%', sz: 54, dl: 0.7, dr: 9,  v: 'B' },
  { top: '66%', left: '75%', sz: 46, dl: 2.6, dr: 10, v: 'A' },
  { top: '72%', left: '91%', sz: 36, dl: 1.1, dr: 8,  v: 'B' },
  /* row 5 */
  { top: '88%', left: '10%', sz: 50, dl: 2.3, dr: 9,  v: 'A' },
  { top: '92%', left: '30%', sz: 43, dl: 0.3, dr: 11, v: 'B' },
  { top: '85%', left: '51%', sz: 56, dl: 1.9, dr: 8,  v: 'A' },
  { top: '90%', left: '72%', sz: 40, dl: 3.1, dr: 10, v: 'B' },
];

export default function Background() {
  return (
    <div className="bg-scene" aria-hidden="true">
      {/* Dot-grid overlay */}
      <div className="bg-grid" />

      {/* Floating logos */}
      {SPOTS.map((s, i) => {
        const logo = LOGOS[i % LOGOS.length];
        return (
          <img
            key={i}
            className={`bg-logo bg-logo--${s.v}${i % 3 === 0 ? ' bg-logo--teal' : ''}`}
            src={`${SI}${logo.id}`}
            alt={logo.label}
            width={s.sz}
            height={s.sz}
            style={{
              top: s.top,
              left: s.left,
              width: s.sz,
              height: s.sz,
              animationDelay: `${s.dl}s`,
              animationDuration: `${s.dr}s`,
            }}
          />
        );
      })}

      {/* Radial glow spots */}
      <div className="bg-glow bg-glow--1" />
      <div className="bg-glow bg-glow--2" />
      <div className="bg-glow bg-glow--3" />
    </div>
  );
}
