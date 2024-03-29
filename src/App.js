import React from 'react';

import './App.css';
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import { Fade } from 'react-reveal';

import CustomCarousel from './components/carousel/CustomCarousel';
import CarouselTitle from './components/carousel/carouselTitle/CarouselTitle';
import ScrollProgression from './components/scrollProgression/ScrollProgression';
import CursorFollower from './components/cursorFollower/cursorFollower';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Experiments from './pages/experiments/Experiments';

function App() {
  return (
    <div className="App">
      <CursorFollower/>
      <ScrollProgression/>
      <CustomCarousel/>
      <CarouselTitle/>
      <div>
        <Parallax           
          bgImage={require("./assets/parallax/parallax-bg-4.png")}
          bgImageAlt="parallax-bg"
          strength={300}
        >
          <div className ="parallax-overlay">
            <div className="page-container">
              <div>
                <Container className="container-box rounded">
                  <Fade left duration={2000}>
                    <About />
                  </Fade>
                </Container>
              </div>
              <div>
                <Container className="container-box rounded">
                  <Fade right duration={2000}>
                    <Projects />
                  </Fade>
                </Container>
              </div>
              <div>
                <Container className="container-box rounded">
                  <Fade right duration={2000}>
                    <Experiments />
                  </Fade>
                </Container>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
