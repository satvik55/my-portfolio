import React, { Component } from 'react';

// Import all the components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        
        <div id="main">
          <About />
          <Skills />
          <Accomplishments />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;