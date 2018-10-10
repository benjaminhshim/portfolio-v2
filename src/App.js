import React, { Component } from 'react';

import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './App.css';

import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import YouTube from './pages/YouTube';
import About from './pages/About';

import Footer from "./components/Footer";

import scrollToComponent from 'react-scroll-to-component';

class App extends Component {

  scrollToHome = () => {
    scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1000})
  }

  scrollToProjects = () => {
    scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1000})
  }

  scrollToYouTube = () => {
    scrollToComponent(this.YouTube, { offset: -70, align: 'top', duration: 1500})
  }

  scrollToAbout = () => {
    scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})
  }

  render() {
    return (
      <ThemeProvider theme={theme}>

        <div className="App">
          <LandingPage 
            scrollToProjects={this.scrollToProjects}
            scrollToYouTube={this.scrollToYouTube}
            scrollToAbout={this.scrollToAbout}
          />
          <Projects ref={(section) => { this.Projects = section; }}/>
          <YouTube ref={(section) => { this.YouTube = section; }}/>
          <About ref={(section) => { this.About = section; }}/>
          <Footer />
        </div>
        </ThemeProvider>
    );
  }
}

export default App;
