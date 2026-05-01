import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <span className="section-label">Contact</span>
        <h2 className="contact-heading">Let's Work Together</h2>
        <p className="contact-sub">
          Open to full-time roles, internships, and freelance projects in cloud & DevOps.
        </p>

        <div className="contact-box">
          {sent ? (
            <div className="contact-success">
              <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem' }} />
              <h3>Message sent!</h3>
              <p>I'll get back to you soon.</p>
              <button className="cta-btn" onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Your name" required />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-field">
                <label>Message</label>
                <textarea name="message" rows={5} placeholder="Tell me about the opportunity..." required />
              </div>
              <div className="form-actions">
                <button type="submit" className="cta-btn">Send Message</button>
                <button type="reset" className="ghost-btn">Reset</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
