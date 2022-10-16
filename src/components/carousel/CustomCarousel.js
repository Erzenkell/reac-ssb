import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import ScrollDownIndicator from "../scrollDownIndicator/ScrollDownIndicator";

import "./carousel.css";

import  Slide2  from "../../assets/carousel/bg1.png";
import  Slide1  from "../../assets/carousel/bg2.jpeg";

const CustomCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators={false} interval={2500} pause={false}>
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
            <ScrollDownIndicator/>
        </div>
    )
}

export default CustomCarousel