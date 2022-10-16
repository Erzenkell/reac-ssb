import './App.css';
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import { Fade } from 'react-reveal';

import CustomCarousel from './components/carousel/CustomCarousel';
import CarouselTitle from './components/carousel/carouselTitle/CarouselTitle';
import ScrollProgression from './components/scrollProgression/ScrollProgression';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="App">
      <ScrollProgression/>
      <CustomCarousel/>
      <CarouselTitle/>
      <div>
        <Parallax           
          bgImage={require("./assets/parallax/parallax-bg.jpeg")}
          bgImageAlt="parallax-bg"
          strength={300}
        >
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
        </Parallax>
      </div>
    </div>
  );
}

export default App;
