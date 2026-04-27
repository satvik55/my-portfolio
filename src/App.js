import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />

        <div id="main">
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;