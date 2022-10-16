import React from "react";
import Carousel from 'react-bootstrap/Carousel'

import "./carousel.css";

import  Slide2  from "../../assets/carousel/bg1.png";
import  Slide1  from "../../assets/carousel/bg2.jpeg";

const CustomCarousel = () => {
    return (
        <div id="home">
            <Carousel fade controls={false} indicators={false} interval={5000} pause={false}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img " src={Slide1} alt="slide 1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide2}
                        alt="slide 2"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CustomCarousel