import React, { useState } from 'react';
import Lightbox from './Lightbox';

const BASE = process.env.PUBLIC_URL + '/images/';

const CERTS = [
  {
    year: '2024',
    title: 'AWS Certified',
    sub: 'Solutions Architect – Associate',
    desc: 'Validated expertise in designing distributed systems and scalable cloud architecture on AWS.',
    image: BASE + 'aws.png',
  },
  {
    year: '2024',
    title: 'OCI DevOps',
    sub: 'OCI DevOps Professional',
    desc: 'Oracle Cloud Infrastructure certification covering DevOps pipelines, container services, and deployment automation.',
    image: BASE + 'oci-devops.jpg',
  },
  {
    year: '2023',
    title: 'OCI Architect',
    sub: 'OCI Architect Professional',
    desc: 'Advanced Oracle Cloud Infrastructure architectural design, high availability, and disaster recovery.',
    image: BASE + 'oci-pro.jpg',
  },
  {
    year: '2023',
    title: 'OCI Architect',
    sub: 'OCI Architect Associate',
    desc: 'Core Oracle Cloud Infrastructure services, networking, storage, and identity management.',
    image: BASE + 'oci-architect.jpg',
  },
  {
    year: '2023',
    title: 'OCI Foundations',
    sub: 'OCI Foundations Associate',
    desc: 'Foundational knowledge of Oracle Cloud Infrastructure services and core concepts.',
    image: BASE + 'oci-foundations.jpg',
  },
  {
    year: '2023',
    title: 'Linux Foundation',
    sub: 'Introduction to Linux',
    desc: 'Linux command line, system administration, shell scripting, and open-source ecosystem fundamentals.',
    image: BASE + 'linux.png',
  },
];

export default function CertTimeline() {
  const [lbIndex, setLbIndex] = useState(null);
  const images = CERTS.map(c => c.image);

  return (
    <section id="certs" className="career-section">
      <div className="career-container section-container">
        <h2>My Certifications <span>&amp; Credentials</span></h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot" />
          </div>

          {CERTS.map((c, i) => (
            <div key={i} className="career-info-box">
              <p>{c.desc}</p>
              <div className="career-info-in">
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => setLbIndex(i)}
                  title="Click to view certificate"
                >
                  <h4>{c.title}</h4>
                  <h5>{c.sub}</h5>
                </div>
                <h3>{c.year}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lbIndex !== null && (
        <Lightbox
          images={images}
          index={lbIndex}
          alt="Certificate"
          onClose={() => setLbIndex(null)}
        />
      )}
    </section>
  );
}
