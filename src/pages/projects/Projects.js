import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import "./projects.css";
import ProjectCardCarousel from '../../components/projectCardCarousel/ProjectCardCarousel';

const Projects = () => {
    return(
        <div className='projects'>
            <h1 className="pt-3 text-center pb-2">PROJECTS</h1>
            <Container>
                <Row className=" pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 projects-text">
                            <br />
                            Here are my differents projects made along my journey as a developer.
                            <br />                                <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <br /> 
                            <br />
                         </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <ProjectCardCarousel/>
                    </Col>
                </Row>
            </Container>
        </div>   
    );
}

export default Projects;