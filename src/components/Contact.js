import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="section__inner">
        <div className="section__header">
          <span className="section__tag">05 · Contact</span>
          <h2 className="section__title">Get In Touch</h2>
        </div>

        <div className="contact-box">
          {sent ? (
            <div className="contact-success">
              <div className="success-icon">
                <i className="fas fa-check-circle" />
              </div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out — I'll get back to you as soon as possible.</p>
              <button className="contact-btn contact-btn--primary" onClick={() => setSent(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p>Feel free to reach out for opportunities, collaborations, or just to say hi.</p>
              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>
              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message..." rows={5} required />
              </div>
              <div className="contact-actions">
                <button type="submit" className="contact-btn contact-btn--primary">
                  Send Message
                </button>
                <button type="reset" className="contact-btn contact-btn--secondary">
                  Reset
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
