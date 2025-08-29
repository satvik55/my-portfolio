import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <section id="four">
        <div className="container">
          <h3>Contact Me</h3>
          <p>
            Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      className="primary"
                      defaultValue="Send Message"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset Form" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}