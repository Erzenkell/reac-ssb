import React from 'react'
import { Card, Carousel, Button } from "react-bootstrap";

const ProjectCardCarousel = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <Card className="bg-dark text-white">
                    <Card.Img src={require("../../assets/kirbok.jpg")} alt="test1" />
                    <Card.ImgOverlay>
                        <Card.Title>Test 1</Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Card Title 1</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card className="bg-dark text-white">
                    <Card.Img src={require("../../assets/kirbok.jpg")}alt="test2" />
                    <Card.ImgOverlay>
                        <Card.Title>Test 2</Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Card Title 2</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card className="bg-dark text-white">
                    <Card.Img src={require("../../assets/kirbok.jpg")} alt="test3" />
                    <Card.ImgOverlay>
                        <Card.Title>Test 3</Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>Card Title 3</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProjectCardCarousel;