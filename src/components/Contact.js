import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="four">
      <div className="container">
        <header className="major">
          <h2>Contact Me</h2>
          <p>Feel free to reach out — I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.</p>
        </header>

        {sent ? (
          <div className="contact-success">
            <span className="icon solid fa-check-circle" />
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
            <button className="contact-btn contact-btn--primary" onClick={() => setSent(false)}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" required />
              </div>
              <div className="col-6 col-12-xsmall">
                <input type="email" name="email" id="email" placeholder="Email" required />
              </div>
              <div className="col-12">
                <input type="text" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="col-12">
                <textarea name="message" id="message" placeholder="Message" rows={6} defaultValue="" required />
              </div>
              <div className="col-12">
                <div className="contact-actions">
                  <button type="submit" className="contact-btn contact-btn--primary">
                    Send Message
                  </button>
                  <button type="reset" className="contact-btn contact-btn--secondary">
                    Reset Form
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
