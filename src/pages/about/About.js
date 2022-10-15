import React from 'react';
import { Row, Col, Button, Image, Container } from "react-bootstrap";
import "./about.css";
import Kirbok from "../../assets/kirbok.jpg";

const About = () => {
    return(
        <div className='about'>
            <h1 className="pt-3 text-center pb-2">ABOUT ME</h1>
            <Container>
                <Row className=" pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="kirbok" src={Kirbok}/>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 rounded tex align-text-left about-text" >
                            <br />
                            Web Developer with expertise of React.js, Next, Javascript, HTML and CSS. Currently working with React Native for a Web Application.
                            <br />
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <br /> 
                            <br />
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="mailto:ferrier.sammy@gmail.com">
                                    <Button className="m-2" variant="outline-info">
                                        Contact me
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-info">
                                        My Resume
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/Erzenkell" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-info">
                                        GitHub
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/sammy-ferrier-1278231b9/" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-info">
                                        LinkedIn
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-info">
                                        Good shit
                                    </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;