import './App.css';
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import { Fade } from 'react-reveal';

import CustomCarousel from './components/carousel/CustomCarousel';
import CarouselTitle from './components/carousel/carouselTitle/CarouselTitle';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="App">
      <CustomCarousel/>
      <CarouselTitle/>
      <div>
        <Parallax           
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/parallax/parallax-bg.jpeg")}
          bgImageAlt="parallax-bg"
          strength={-200}
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
