import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portafolio from './components/portfolio/portafolio';
// import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portafolio />
        {/* <Testimonials /> */}
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;

/* 
import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
    )
  }
}
 */