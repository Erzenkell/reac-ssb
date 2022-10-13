import './App.css';
import { Parallax } from "react-parallax";
import CustomCarousel from './components/carousel/CustomCarousel';
import CarouselTitle from './components/carousel/carouselTitle/CarouselTitle';

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
        </Parallax>
      </div>
    </div>
  );
}

export default App;
