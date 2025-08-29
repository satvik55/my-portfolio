import React from 'react';

export default function Accomplishments() {
  return (
    <section id="three">
      <div className="container">
        <h3>My Projects</h3>
        <p>
          Here are a few projects I've built that demonstrate my skills in front-end development and Firebase integration.
        </p>
        <div className="features">
          <article>
            <a href="#!" className="image">
              <img src="images/virtual-gallery.png" alt="Virtual Art Gallery" />
            </a>
            <div className="inner">
              <h4>Interactive Virtual Art Gallery</h4>
              <p>
                A client-side web application that provides a dynamic and engaging art viewing experience. Features include a theme switcher, dynamic filtering, search functionality, and a full-screen lightbox viewer.
              </p>
            </div>
          </article>
          <article>
            <a href="#!" className="image">
              <img src="images/catering.png" alt="Catering Order System" />
            </a>
            <div className="inner">
              <h4>Catering Reservation and Ordering System</h4>
              <p>
                An e-commerce platform for a catering business with separate dashboards for Admin and Customers. Built with Firebase for backend services, it features product management, a persistent shopping cart, and order history.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}