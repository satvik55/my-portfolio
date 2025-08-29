import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <section id="header">
        <header>
          <span className="image avatar">
            <img src="images/avatar.jpg" alt="Satvik Sunil Bodke" />
          </span>
          <h1 id="logo">
            <a href="#">Satvik Sunil Bodke</a>
          </h1>
          <p>
            M.Sc. graduate passionate about building beautiful and functional web experiences.
          </p>
        </header>
        <nav id="nav">
          <ul>
            <li><a href="#one" className="active">About</a></li>
            <li><a href="#two">Skills</a></li>
            <li><a href="#three">Projects</a></li>
            <li><a href="#four">Contact</a></li>
          </ul>
        </nav>
        <footer>
          <ul className="icons">
            <li><a href="https://twitter.com/BodkeSatvik" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            {/* Your updated LinkedIn link is below */}
            <li><a href="https://www.linkedin.com/in/satvik-bodke-b9a229194" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.instagram.com/_satvik5/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/satvik55" className="icon brands fa-github"><span className="label">Github</span></a></li>
            <li><a href="mailto:satvikbodke@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
          </ul>
        </footer>
      </section>
    )
  }
}