import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import "./projects.css";
import ProjectCardCarousel from '../../components/projectCardCarousel/ProjectCardCarousel';

const Projects = () => {
    return(
        <div className='projects'>
            <h1 className="pt-3 text-center pb-2 projects-title">PROJECTS</h1>
            <br/>
            <Container>
                <Col className=" pb-5 align-items-center">
                    <Row xs>
                        <Row className="justify-content-center mb-2 mr-2 projects-text">
                            <br />
                            Here are my differents projects made along my journey as a developer.
                            <br />                                
                            <br/>
                            Most of them are school projects but I also made some personal projects like this portfolio. I mainly use React.js for my projects but have connaisance of other frameworks and back-end development. 
                            <br/>
                            <br/>
                        </Row>
                    </Row>
                    <Row lg={7}>
                        <ProjectCardCarousel/>
                    </Row>
                </Col>
            </Container>
        </div>   
    );
}

export default Projects;