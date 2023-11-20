import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import ImpulseAndVelocity from '../../components/Experiments/threeExperiment/impulseAndVelocity/ImpulseAndVelocity';
import MovingObject from '../../components/Experiments/threeExperiment/movingObject/MovingObject';
import CanvasExperiment from '../../components/Experiments/canvasExperiment/canvasExperiment';
import "./Experiments.css";

const Experiments = () => {
    return(
        <div className='experiments'>
            <h1 className="pt-3 text-center pb-2 experiments-title">EXPERIMENTS</h1>
            <br/>
            <Container>
                <Col className=" pb-5 align-items-center">
                    {/* <Row xs>
                        <CanvasExperiment/>
                    </Row> */}
                    <Row xs>
                        <Row className="justify-content-center mb-2 mr-2 experiments-text">
                            <br />
                            Here we have some small experiments I made with Three.js 
                            <br/>
                            <br/>
                        </Row>
                        <Row>
                            <ImpulseAndVelocity/>
                        </Row>
                        <Row>
                            <MovingObject/>
                        </Row>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default Experiments