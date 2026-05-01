import React, { useState } from 'react';
import Lightbox from './Lightbox';

const BASE = process.env.PUBLIC_URL + '/images/';

const CERTS = [
  { title: 'AWS Certified Solutions Architect',        image: BASE + 'aws.png'            },
  { title: 'Linux Foundation – Introduction to Linux', image: BASE + 'linux.png'          },
  { title: 'OCI Foundations Associate',                image: BASE + 'oci-foundations.jpg' },
  { title: 'OCI Architect Associate',                  image: BASE + 'oci-architect.jpg'   },
  { title: 'OCI Architect Professional',               image: BASE + 'oci-pro.jpg'         },
  { title: 'OCI DevOps Professional',                  image: BASE + 'oci-devops.jpg'      },
];

export default function Certifications() {
  const [lbIndex, setLbIndex] = useState(null);
  const images = CERTS.map(c => c.image);

  return (
    <section id="certs" className="section section--alt">
      <div className="section__inner">
        <div className="section__header">
          <span className="section__tag">03 · Certifications</span>
          <h2 className="section__title">Credentials</h2>
          <p className="section__sub">Industry-recognised cloud and DevOps certifications</p>
        </div>

        <div className="cert-grid">
          {CERTS.map((c, i) => (
            <div key={i} className="cert-card" onClick={() => setLbIndex(i)}>
              <div className="cert-card__img-wrap">
                <img src={c.image} alt={c.title} />
                <div className="cert-card__overlay">
                  <i className="fas fa-expand-alt" />
                </div>
              </div>
              <p className="cert-card__title">{c.title}</p>
            </div>
          ))}
        </div>
      </div>

      {lbIndex !== null && (
        <Lightbox
          images={images}
          index={lbIndex}
          alt="Certification"
          onClose={() => setLbIndex(null)}
        />
      )}
    </section>
  );
}
