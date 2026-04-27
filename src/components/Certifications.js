import React, { useState } from 'react';
import Lightbox from './Lightbox';

const BASE = process.env.PUBLIC_URL + '/images/';

const certs = [
  { title: 'AWS Certified Solutions Architect',        image: BASE + 'aws.png'            },
  { title: 'Linux Foundation – Introduction to Linux', image: BASE + 'linux.png'          },
  { title: 'OCI Foundations Associate',                image: BASE + 'oci-foundations.jpg' },
  { title: 'OCI Architect Associate',                  image: BASE + 'oci-architect.jpg'   },
  { title: 'OCI Architect Professional',               image: BASE + 'oci-pro.jpg'         },
  { title: 'OCI DevOps Professional',                  image: BASE + 'oci-devops.jpg'      },
];

export default function Certifications() {
  const [lbIndex, setLbIndex] = useState(null);

  const certImages = certs.map(c => c.image);

  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        <header className="major">
          <h2>Certifications</h2>
          <p>Industry-recognised cloud and DevOps certifications.</p>
        </header>

        <div className="cert-grid">
          {certs.map((c, i) => (
            <div
              key={i}
              className="cert-card"
              onClick={() => setLbIndex(i)}
              title="Click to enlarge"
            >
              <div className="cert-img-wrap">
                <img src={c.image} alt={c.title} />
                <div className="cert-zoom-hint">
                  <span className="icon solid fa-search-plus" />
                </div>
              </div>
              <p className="cert-title">{c.title}</p>
            </div>
          ))}
        </div>
      </div>

      {lbIndex !== null && (
        <Lightbox
          images={certImages}
          index={lbIndex}
          alt="Certification"
          onClose={() => setLbIndex(null)}
        />
      )}
    </section>
  );
}
