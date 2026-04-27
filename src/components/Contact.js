import React from 'react';

export default function Contact() {
  return (
    <section id="four">
      <div className="container">
        <header className="major">
          <h2>Contact Me</h2>
          <p>Feel free to reach out — I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.</p>
        </header>

        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <input type="text" name="subject" id="subject" placeholder="Subject" />
            </div>
            <div className="col-12">
              <textarea name="message" id="message" placeholder="Message" rows={6} defaultValue="" />
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
      </div>
    </section>
  );
}
